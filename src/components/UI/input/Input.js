import "./Input.scss";

export default function Input({
  inputName = "",
  id = "",
  children = "",
  labelFor = "",
  className = "input",
  type = "",
  placeholder = "",
  ariaLabel = "",
  onChange,
  value = "",
  size = "60",
}) {
  return (
    <>
      <label htmlFor={labelFor}>{children}</label>
      <input
        style={{width: `${size}%`}}
        value={value}
        name={inputName}
        id={id}
        className={`${className}`}
        type={type}
        placeholder={placeholder}
        aria-label={ariaLabel}
        onChange={onChange}
        required
      />
    </>
  );
}
