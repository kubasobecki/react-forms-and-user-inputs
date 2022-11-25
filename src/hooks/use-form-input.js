import { useState } from 'react';

const useFormInput = validateField => {
    const [value, setValue] = useState('');
    const [touched, setTouched] = useState(false);

    const changeHandler = e => {
        setValue(e.target.value);
    };

    const blurHandler = e => {
        setTouched(true);
    };

    const reset = () => {
        setValue('');
        setTouched(false);
    };

    const isValid = validateField(value);
    const hasError = !isValid && touched;

    const classes = hasError ? 'form-control invalid' : 'form-control';

    return {
        value,
        isValid,
        hasError,
        changeHandler,
        blurHandler,
        classes,
        reset
    };
};

export default useFormInput;
