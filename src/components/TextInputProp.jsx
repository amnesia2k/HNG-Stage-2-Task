import PropTypes from "prop-types";

export default function TextInputProp({
  label,
  name,
  id,
  value,
  type,
  className,
  onChange,
  required,
  placeholder,
  component,
}) {
  return (
    <div>
      <div className={`${className} flex flex-col space-y-2`}>
        <label htmlFor={id}>{label}</label>
        {component === "textarea" ? (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            id={id}
            required={required}
            className={`border p-2 rounded-md border-[#07373F] focus:outline-none ${className}`}
          />
        ) : (
          <input
            name={name}
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            id={id}
            required={required}
            className={`border p-2 rounded-md border-[#07373F] focus:outline-none ${className}`}
          />
        )}
      </div>
    </div>
  );
}

TextInputProp.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  component: PropTypes.oneOf(["input", "textarea"]),
};

TextInputProp.defaultProps = {
  component: "input",
};
