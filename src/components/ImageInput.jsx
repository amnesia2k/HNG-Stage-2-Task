import { CloudDownload } from "lucide-react";
import PropTypes from "prop-types";

export default function ImageInput({
  getRootProps,
  isDragActive,
  dataURL,
  getInputProps,
}) {
  return (
    <div>
      <div className="hidden md:block relative w-full mx-auto bg-[#000000]/20 h-[200px]">
        <div
          className="w-[240px] h-[240px] border-3 border-[#24A0B5] bg-[#0E464F] rounded-4xl absolute inset-0 m-auto flex items-center justify-center"
          {...getRootProps()}
        >
          {isDragActive ? (
            <div className="flex flex-col gap-y-5 items-center justify-center absolute inset-0">
              <CloudDownload className="w-[30px] h-[30px]" />
            </div>
          ) : dataURL ? (
            <img
              className="w-full h-full rounded-4xl object-cover"
              src={dataURL}
              alt="Profile Pic"
            />
          ) : (
            <div className="flex flex-col gap-y-5 items-center justify-center absolute inset-0 cursor-pointer">
              <CloudDownload className="w-[30px] h-[30px]" />
              <input
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer"
                {...getInputProps()}
              />
              <h3 className="text-white text-center">
                Drag & drop or click to <br /> upload
              </h3>
            </div>
          )}
        </div>
      </div>

      <div className="md:hidden flex justify-center items-center w-full mx-auto h-[200px]">
        <div
          className="w-[240px] h-[240px] border-3 border-[#24A0B5] bg-[#0E464F] rounded-4xl relative"
          {...getRootProps()}
        >
          {isDragActive ? (
            <div className="flex flex-col gap-y-5 items-center justify-center absolute inset-0">
              <CloudDownload className="w-[30px] h-[30px]" />
            </div>
          ) : dataURL ? (
            <img
              className="w-full h-full rounded-4xl object-cover"
              src={dataURL}
              alt="Profile Pic"
            />
          ) : (
            <div className="flex flex-col gap-y-5 items-center justify-center absolute inset-0 cursor-pointer">
              <CloudDownload className="w-[30px] h-[30px]" />
              <input
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer"
                {...getInputProps()}
              />
              <h3 className="text-white text-center">
                Drag & drop or click to <br /> upload
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

ImageInput.propTypes = {
  getRootProps: PropTypes.func.isRequired,
  isDragActive: PropTypes.bool.isRequired,
  dataURL: PropTypes.string,
  getInputProps: PropTypes.func.isRequired,
};
