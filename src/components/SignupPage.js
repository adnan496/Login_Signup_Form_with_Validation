import React, { useState, useEffect } from "react";
import Header from "./Header";

function SignupPage() {
  const signupValues = { fname: "", dob: "", email: "", password: "" };

  const [formValues, setFormValues] = useState(signupValues);

  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name,value);
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!values.fname) {
      errors.fname = "full name is required!";
    }

    if (!values.dob) {
      errors.dob = "d.o.b is required!";
    }

    if (!values.email) {
      errors.email = "email is required!";
    }
    if (!values.password) {
      errors.password = "password is required!";
    }
    return errors;
  };
  return (
    <div>
      <Header
        heading="SignUp to your account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/#"
      />

      <form onSubmit={handleSubmit} className="mt-6">
        <div className="mb-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-800"
          >
            Full Name
          </label>
          <input
            type="text"
            name="fname"
            value={formValues.fname}
            onChange={handleChange}
            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <p className="text-red-500">{formErrors.fname}</p>

        <div className="mb-2">
          <label
           htmlFor="date"
            className="block text-sm font-semibold text-gray-800"
          >
            Date of Birth
          </label>
          <input
            type="date"
            name="dob"
            value={formValues.dob}
            onChange={handleChange}
            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <p className="text-red-500">{formErrors.dob}</p>

        <div className="mb-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-800"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <p className="text-red-500">{formErrors.email}</p>

        <div className="mb-2">
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-gray-800"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <p className="text-red-500">{formErrors.password}</p>

        <div className="mt-6">
          <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupPage;
