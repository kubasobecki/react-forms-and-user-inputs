import useFormInput from '../hooks/use-form-input';

const isNotEmpty = val => val.trim().length > 0;
const isEmail = val =>
    val
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );

const BasicForm = props => {
    const {
        value: firstValue,
        isValid: firstIsValid,
        hasError: firstHasError,
        changeHandler: firstChangeHandler,
        blurHandler: firstBlurHandler,
        classes: firstClasses,
        reset: firstReset
    } = useFormInput(isNotEmpty);

    const {
        value: lastValue,
        isValid: lastIsValid,
        hasError: lastHasError,
        changeHandler: lastChangeHandler,
        blurHandler: lastBlurHandler,
        classes: lastClasses,
        reset: lastReset
    } = useFormInput(isNotEmpty);

    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        changeHandler: emailChangeHandler,
        blurHandler: emailBlurHandler,
        classes: emailClasses,
        reset: emailReset
    } = useFormInput(isEmail);

    const formIsValid =
        firstIsValid && lastIsValid && emailIsValid ? true : false;

    const submitHandler = e => {
        e.preventDefault();
        if (!formIsValid) return;

        console.log('Form submitted!');
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
