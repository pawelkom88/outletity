import React from "react";

export default function Select(props) {
  const {name = "", options = [], defaultValue = "options", ...rest} = props;

  return (
    <select {...rest} name={name}>
      <option defaultValue={defaultValue}>{defaultValue}</option>
      {options.map(option => {
        return (
          <option value={option} key={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
}
