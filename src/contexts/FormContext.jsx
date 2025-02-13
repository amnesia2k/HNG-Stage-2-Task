import * as React from "react";
import PropTypes from "prop-types";

const FormContext = React.createContext();

export const useFormContext = () => React.useContext(FormContext);

export const FormProvider = ({ children }) => {
  const generateUPCA = () => {
    let upc = "";
    for (let i = 0; i < 11; i++) {
      upc += Math.floor(Math.random() * 10); // Random digit between 0 and 9
    }
    // Calculate the check digit (12th digit)
    let sum = 0;
    for (let i = 0; i < 11; i++) {
      sum += parseInt(upc[i]) * (i % 2 === 0 ? 3 : 1); // Alternate between multiplying by 3 and 1
    }
    const checkDigit = (10 - (sum % 10)) % 10; // Calculate the check digit
    return upc + checkDigit; // Return the full 12-digit UPC
  };

  // Function to get saved form data from localStorage
  const getSavedFormData = () => {
    const savedData = localStorage.getItem("formData");
    return savedData
      ? JSON.parse(savedData)
      : {
          fullName: "",
          email: "",
          avatarUrl: "",
          requests: "",
          ticketType: null,
          ticketCount: 1,
          barcode: generateUPCA(),
        };
  };

  // State for form data, initialized from localStorage
  const [formData, setFormData] = React.useState(getSavedFormData());

  // State for step navigation
  const [step, setStep] = React.useState(1);

  // State for loading
  const [loading, setLoading] = React.useState(false);

  // Function to update form data and save it to localStorage
  const updateForm = (key, value) => {
    setFormData((prev) => {
      const updatedData = { ...prev, [key]: value };
      localStorage.setItem("formData", JSON.stringify(updatedData)); // Save to localStorage
      console.log(updatedData);
      return updatedData;
    });
  };

  // Function to clear form data when needed (e.g., on form submission or cancel)
  const clearForm = () => {
    localStorage.removeItem("formData");
    setFormData({
      fullName: "",
      email: "",
      avatarUrl: "",
      requests: "",
      ticketType: null,
      ticketCount: 1,
      barcode: generateUPCA(),
    });
    setStep(1); // Reset to step 1
  };

  // Load the last visited step from localStorage when the app starts
  React.useEffect(() => {
    const savedStep = localStorage.getItem("formStep");
    if (savedStep) setStep(Number(savedStep));
  }, []);

  // Save step number in localStorage whenever it changes
  React.useEffect(() => {
    localStorage.setItem("formStep", step.toString());
  }, [step]);

  const nextStep = () => {
    setLoading(true);
    setTimeout(() => {
      setStep((prev) => prev + 1);
      setLoading(false);
      window.scrollTo(0, 0);
    }, 1000);
  };
  const prevStep = () => {
    setLoading(true);
    setTimeout(() => {
      setStep((prev) => prev - 1);
      setLoading(false);
      window.scrollTo(0, 0);
    }, 1000);
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        updateForm,
        step,
        nextStep,
        prevStep,
        clearForm,
        loading,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
