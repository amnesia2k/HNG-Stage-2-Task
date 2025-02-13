import PropTypes from "prop-types";
import { TextInputProp } from "../components";

export default function TextInput({ formData, updateForm }) {
  return (
    <div className="space-y-4">
      <TextInputProp
        label={"Enter your name"}
        name={"firstName"}
        type={"text"}
        id={"firstName"}
        placeholder={"Enter your name"}
        value={formData.fullName}
        required={true}
        onChange={(e) => updateForm("fullName", e.target.value)}
      />

      <TextInputProp
        label={"Enter your email"}
        name={"emailAddress"}
        type={"email"}
        id={"emailAddress"}
        placeholder={"Enter your email"}
        value={formData.email}
        required={true}
        onChange={(e) => updateForm("email", e.target.value)}
      />

      <TextInputProp
        label={"Special Requests"}
        name={"requests"}
        id={"requests"}
        placeholder={"Do you have any special requests? Let us know"}
        value={formData.requests}
        required={true}
        onChange={(e) => updateForm("requests", e.target.value)}
        component="textarea"
        className="resize-none placeholder:text-sm h-[150px] md:h-[200px]"
      />
    </div>
  );
}

TextInput.propTypes = {
  formData: PropTypes.object.isRequired,
  updateForm: PropTypes.func.isRequired,
};
