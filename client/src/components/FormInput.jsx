import styled from "styled-components";

const FormInput = ({ type, name, label }) => {
  return (
    <div>
      <label htmlFor={name} className="label form-label">
        <span className="label-text">{label}</span>
      </label>
      <input type={type} name={name} className="form-input" />
    </div>
  );
};
export default FormInput;
