import React from "react";
import s from "./select.module.scss";
const MySelect = ({ defaultValue, options, value, onChange, setPaginate }) => {
  return (
    <div className={s.select}>
      <select
        className={s.select__options}
        value={value}
        onChange={(evt) => {
          onChange(evt.target.value);
          setPaginate(8)
        }}
      >
        <option disabled value="">
          {defaultValue}
        </option>
        {options.map((option) => (
          <option
            key={option.value}
            className={s.select__option}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MySelect;
