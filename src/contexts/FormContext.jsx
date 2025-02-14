import * as React from "react";
import PropTypes from "prop-types";

const FormContext = React.createContext();

export const useFormContext = () => React.useContext(FormContext);

export const FormProvider = ({ children }) => {
  const generateUPCA = () => {
    let upc = "";
    for (let i = 0; i < 11; i++) {
      upc += Math.floor(Math.random() * 10);
    }
    let sum = 0;
    for (let i = 0; i < 11; i++) {
      sum += parseInt(upc[i]) * (i % 2 === 0 ? 3 : 1);
    }
    const checkDigit = (10 - (sum % 10)) % 10;
    return upc + checkDigit;
  };

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

  const [formData, setFormData] = React.useState(getSavedFormData());

  const [step, setStep] = React.useState(1);

  const [loading, setLoading] = React.useState(false);

  const updateForm = (key, value) => {
    setFormData((prev) => {
      const updatedData = { ...prev, [key]: value };
      localStorage.setItem("formData", JSON.stringify(updatedData));
      console.log("Updating Form:", updatedData);
      console.log(updatedData);
      return updatedData;
    });
  };

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
    setStep(1);
  };

  React.useEffect(() => {
    const savedStep = localStorage.getItem("formStep");
    if (savedStep) setStep(Number(savedStep));
  }, []);

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
        setStep,
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
