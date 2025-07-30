const Input = ({ type, placeholder, value, onChange, required, minLength }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      minLength={minLength}
      className="form-control mb-2"
    />
  );
};

export default Input;
