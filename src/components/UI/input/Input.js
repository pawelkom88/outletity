import "./Input.scss";

export default function Input({
  inputName = "",
  id = "",
  children = "",
  labelFor = "",
  className = "",
  type = "",
  placeholder = "",
  ariaLabel = "",
  onChange,
}) {
  return (
    <>
      <label for={labelFor}>{children}</label>
      <input
        name={inputName}
        id={id}
        className={`${className}` || 'input'}
        type={type}
        placeholder={placeholder}
        aria-label={ariaLabel}
        onChange={onChange}
      />
    </>
  );
}
