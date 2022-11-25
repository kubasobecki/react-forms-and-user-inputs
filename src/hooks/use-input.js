import { useState } from 'react';

const useInput = validateValue => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const inputChangeHandler = e => {
        setEnteredValue(e.target.value);
    };

    const inputBlurHandler = e => {
        setIsTouched(true);
    };

    const resetInput = () => {
        setEnteredValue('');
        setIsTouched(false);
    };

    const inputClasses = hasError ? 'form-control invalid' : 'form-control';

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        inputChangeHandler,
        inputBlurHandler,
        inputClasses,
        resetInput
    };
};

export default useInput;
