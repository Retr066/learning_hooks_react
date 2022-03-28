import { useState } from "react";

export default function useForm(initialState = {}) {
  const [values, setValues] = useState(initialState);

  const handleInputsChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };
  const resetState = () => {
    setValues(initialState);
  };

  return [values, handleInputsChange, resetState];
}
