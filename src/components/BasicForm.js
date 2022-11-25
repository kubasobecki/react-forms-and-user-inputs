import useFormInput from '../hooks/use-form-input';

const BasicForm = props => {
    const {
        value: firstValue,
        isValid: firstIsValid,
        hasError: firstHasError,
        changeHandler: firstChangeHandler,
        blurHandler: firstBlurHandler,
        classes: firstClasses,
        reset: firstReset
    } = useFormInput(val => val.trim().length > 0);

    const {
        value: lastValue,
        isValid: lastIsValid,
        hasError: lastHasError,
        changeHandler: lastChangeHandler,
        blurHandler: lastBlurHandler,
        classes: lastClasses,
        reset: lastReset
    } = useFormInput(val => val.trim().length > 0);

    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        changeHandler: emailChangeHandler,
        blurHandler: emailBlurHandler,
        classes: emailClasses,
        reset: emailReset
    } = useFormInput(val => val.trim().length > 2 && val.includes('@'));

    const formIsValid =
        firstIsValid && lastIsValid && emailIsValid ? true : false;

    console.log(formIsValid);

    const submitHandler = e => {
        e.preventDefault();
        if (!formIsValid) return;

        firstReset();
        lastReset();
        emailReset();
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="control-group">
                <div className={firstClasses}>
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        id="name"
                        onChange={firstChangeHandler}
                        onBlur={firstBlurHandler}
                        value={firstValue}
                    />
                    {firstHasError && (
                        <p className="error-text">Invalid first name.</p>
                    )}
                </div>
                <div className={lastClasses}>
                    <label htmlFor="name">Last Name</label>
                    <input
                        type="text"
                        id="name"
                        onChange={lastChangeHandler}
                        onBlur={lastBlurHandler}
                        value={lastValue}
                    />
                    {lastHasError && (
                        <p className="error-text">Invalid last name.</p>
                    )}
                </div>
            </div>
            <div className={emailClasses}>
                <label htmlFor="name">E-Mail Address</label>
                <input
                    type="text"
                    id="name"
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={emailValue}
                />
                {emailHasError && <p className="error-text">Invalid email.</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
