import useInput from '../hooks/use-input';

const SimpleInput = props => {
    const {
        value: enteredName,
        isValid: nameIsValid,
        hasError: nameHasError,
        inputChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        inputClasses: nameInputClasses,
        resetInput: resetName
    } = useInput(val => val.trim() !== '');

    const {
        value: enteredEmail,
        isValid: emailIsValid,
        hasError: emailHasError,
        inputChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        inputClasses: emailInputClasses,
        resetInput: resetEmail
    } = useInput(val => val.trim().length > 2 && val.includes('@'));

    const formIsValid = nameIsValid && emailIsValid ? true : false;

    const formSubmissionHandler = e => {
        e.preventDefault();

        if (!formIsValid) return;

        resetName();
        resetEmail();
    };

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onBlur={nameBlurHandler}
                    onChange={nameChangeHandler}
                    value={enteredName}
                />
                {nameHasError && <p className="error-text">Invalid name.</p>}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="email">Your email</label>
                <input
                    type="email"
                    id="email"
                    onBlur={emailBlurHandler}
                    onChange={emailChangeHandler}
                    value={enteredEmail}
                />
                {emailHasError && (
                    <p className="error-text">Invalid Email address.</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
