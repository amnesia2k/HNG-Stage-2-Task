import { useFormContext } from "../contexts/FormContext";
import Title from "./Title";
import { ImageInput, TextInput } from "../components";
import { useDropzone } from "react-dropzone";
import * as React from "react";
import { toast } from "sonner";

export default function Attendee() {
  const { formData, updateForm, nextStep, prevStep } = useFormContext();
  const [dataURL, setDataURL] = React.useState(null);
  // const [uploadedURL, setUploadedURL] = React.useState(null);

  // const onDrop = React.useCallback((acceptedFiles) => {
  //   acceptedFiles.forEach((file) => {
  //     const reader = new FileReader();
  //     reader.onabort = () => console.log("file readin was aborted");
  //     reader.onerror = () => console.log("file reading error");
  //     reader.onload = async () => {
  //       const binaryStr = reader.result;
  //       setDataURL(binaryStr);

  //       if (file) {
  //         await uploadImage(file);
  //       }
  //     };
  //     reader.readAsDataURL(file);
  //   });
  // }, []);

  // const { acceptedFiles, getInputProps, getRootProps, isDragActive } =
  //   useDropzone({ onDrop });

  // const selectedFile = acceptedFiles[0];
  // // console.log(selectedFile);

  // const uploadImage = async (file) => {
  //   let formData = new FormData();
  //   formData.append("file", file);
  //   formData.append("upload_preset", "vhbqlm6s");
  //   formData.append("api_key", import.meta.env.VITE_CLOUDINARY_API_KEY);

  //   try {
  //     const response = await fetch(
  //       "https://api.cloudinary.com/v1_1/dszmrtmyk/image/upload",
  //       {
  //         method: "POST",
  //         body: formData,
  //       }
  //     );

  //     const data = await response.json();
  //     console.log(data);
  //     updateForm("avatarUrl", data.secure_url);
  //     toast.success("Image uploaded successfully!");
  //   } catch (error) {
  //     console.error("Upload failed:", error);
  //     toast.error("Image upload failed!");
  //   }
  // };

  // const onDrop = React.useCallback((acceptedFiles) => {
  //   acceptedFiles.forEach((file) => {
  //     uploadImage(file); // ✅ Directly upload the file
  //   });
  // }, []);

  const onDrop = React.useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        setDataURL(reader.result); // ✅ Update state to show preview
      };
      reader.readAsDataURL(file); // ✅ Convert file to data URL
      uploadImage(file); // ✅ Upload the file after reading
    });
  }, []);

  const { getInputProps, getRootProps, isDragActive } = useDropzone({ onDrop });

  const uploadImage = async (file) => {
    let formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "vhbqlm6s");
    {
      /*ml_default --- for prod*/
    }
    formData.append("api_key", import.meta.env.VITE_CLOUDINARY_API_KEY);

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dszmrtmyk/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (data.secure_url) {
        updateForm("avatarUrl", data.secure_url);
        toast.success("Image uploaded successfully!");
      } else {
        console.error("Upload error:", data);
        toast.error("Image upload failed!");
      }
    } catch (error) {
      console.error("Upload failed:", error);
      toast.error("Image upload failed!");
    }
  };

  return (
    <div className="space-y-5">
      <div>
        <Title title={"Attendee Details"} step={2} />
      </div>

      <div className="max-w-[700px] w-full mx-auto md:bg-[#08252B] md:border md:border-[#0E464F] md:rounded-3xl md:p-5 space-y-7">
        <div className="bg-[#052228] border border-[#07373F] w-full mx-auto rounded-3xl h-[350px] md:h-auto px-5 pt-5 pb-10 space-y-10 md:space-y-7">
          <h3>Upload Profile Picture</h3>

          <ImageInput
            getRootProps={getRootProps}
            getInputProps={getInputProps}
            isDragActive={isDragActive}
            dataURL={dataURL}
          />
        </div>

        <div>
          <div className="h-1 w-full bg-[#0E464F]" />
        </div>

        <TextInput formData={formData} updateForm={updateForm} />

        <div className="flex flex-col items-center justify-center gap-y-5 md:gap-x-5 font-merriweather md:flex-row">
          <button
            className="border border-[#24A0B5] text-[#24A0B5] py-3 rounded-xl w-full cursor-pointer"
            onClick={prevStep}
          >
            Back
          </button>
          <button
            className="bg-[#24A0B5] text-white py-3 rounded-xl w-full cursor-pointer"
            onClick={nextStep}
          >
            Get My Free Ticket
          </button>
        </div>
      </div>
    </div>
  );
}
