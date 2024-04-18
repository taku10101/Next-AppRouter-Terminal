"use client";
import React, { useEffect } from "react";

const Form: React.FC = () => {
  const inputEl = React.useRef<HTMLInputElement | null>(null);

  const [temp, setTemp] = React.useState("");
  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.focus();
    }
  }, []);

  return (
    <>
      <input
        onBlur={(e) => {
          setTemp(e.target.value);
        }}
        ref={inputEl}
        type='password'
      />
      <button
        onClick={() => {
          console.log("Submit" + temp);
        }}
      >
        Focus the input
      </button>
    </>
  );
};

export default Form;
