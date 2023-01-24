import React from 'react';
import validateInfo from './Formvalidate';
import useForm from './useForm';

const Form = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validateInfo
  );
  return (
    <div className="content4">
      <div className="content-4">
        <h1>Personal Info</h1>
        <p>Please provide your name,email address, and phone number.</p>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label>
              <div className="info-text">
                Name
                {errors.fullname && <p>{errors.fullname}</p>}
              </div>
              <input
                type="text"
                name="fullname"
                placeholder="e.g Stephen King"
                value={values.fullname}
                onChange={handleChange}
              ></input>
            </label>

            <label>
              <div className="info-text">
                Email Address
                {errors.emailAddress && <p>{errors.emailAddress}</p>}
              </div>
              <input
                type="text"
                name="emailAddress"
                placeholder="e.g. stephenking@lorem.com"
                value={values.emailAddress}
                onChange={handleChange}
              ></input>
            </label>

            <label>
              <div className="info-text">
                Phone Number
                {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
              </div>
              <input
                type="number"
                name="phoneNumber"
                placeholder="e.g +1 234 567 890"
                value={values.phoneNumber}
                onChange={handleChange}
              ></input>
            </label>
            <div className="info-next">
              <input id="info-button" type="submit" value="Next Step"></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Form;
