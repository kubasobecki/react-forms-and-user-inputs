import { useEffect, useState } from 'react';

const SimpleInput = props => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim().length > 0;
    const enteredNameIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const nameInputChangeHandler = e => {
        setEnteredName(e.target.value);
    };

    const nameInputBlurHandler = e => {
        setEnteredNameTouched(true);
    };

    const formSubmissionHandler = e => {
        e.preventDefault();

        setEnteredNameTouched(true);

        if (!enteredNameIsValid) return;

        setEnteredName('');
        setEnteredNameTouched(false);
        console.log(enteredName);
    };

    const nameInputClasses = enteredNameIsInvalid
        ? 'form-control invalid'
        : 'form-control';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onBlur={nameInputBlurHandler}
                    onChange={nameInputChangeHandler}
                    value={enteredName}
                />
                {enteredNameIsInvalid && (
                    <p className="error-text">Name can not be empty.</p>
                )}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
