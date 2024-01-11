import React, { useState } from "react";

export default function Forms() {
  const [formSubmit, setFormSubmit] = useState(false);
  const [formErr, setFormErr] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
  });

  const inputHandler = (e) => {
    let { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    let errors = validate(formData);
    setFormErr(errors);

    let errKeyArray = Object.keys(errors);
    if (errKeyArray.length === 0) {
      setFormSubmit(true);
    } else {
      setFormSubmit(false);
    }
  };

  const validate = (data) => {
    let error = {};

    if (data.firstName.trim() === "") {
      error.firstName = "Please enter your First Name";
    }
    if (data.lastName.trim() === "") {
      error.lastName = "Please enter your Last Name";
    }
    if (data.email.trim() === "") {
      error.email = "Please enter your Email";
    }
    if (data.phone.trim() === "") {
      error.phone = "Please enter your Phone Number";
    }
    if (data.phone.trim().length !== 10) {
      error.phone = "Please enter 10-digit Phone Number";
    }
    return error;
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <fieldset>
        <legend className="text-xl font-bold mb-4">Fill This Form(Normal Form)</legend>
        <form action="">
          <div>{formSubmit && <p className="text-green-500">Registration Successful</p>}</div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">First Name:</label>
            <input
              type="text"
              name="firstName"
              onChange={inputHandler}
              className={`mt-1 p-2 border ${
                formErr.firstName ? "border-red-500" : "border-gray-300"
              } rounded-md w-full focus:outline-none focus:border-blue-500`}
            />
            {formErr.firstName && <p className="text-red-500">{formErr.firstName}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Last Name:</label>
            <input
              type="text"
              name="lastName"
              onChange={inputHandler}
              className={`mt-1 p-2 border ${
                formErr.lastName ? "border-red-500" : "border-gray-300"
              } rounded-md w-full focus:outline-none focus:border-blue-500`}
            />
            {formErr.lastName && <p className="text-red-500">{formErr.lastName}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Email:</label>
            <input
              type="email"
              name="email"
              onChange={inputHandler}
              className={`mt-1 p-2 border ${
                formErr.email ? "border-red-500" : "border-gray-300"
              } rounded-md w-full focus:outline-none focus:border-blue-500`}
            />
            {formErr.email && <p className="text-red-500">{formErr.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Number:</label>
            <input
              type="number"
              name="phone"
              onChange={inputHandler}
              className={`mt-1 p-2 border ${
                formErr.phone ? "border-red-500" : "border-gray-300"
              } rounded-md w-full focus:outline-none focus:border-blue-500`}
            />
            {formErr.phone && <p className="text-red-500">{formErr.phone}</p>}
          </div>

          <button
            type="submit"
            onClick={formSubmitHandler}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Register
          </button>
        </form>
      </fieldset>
    </div>
  );
}
