import React, { useEffect } from "react";
import { useState } from "react";
import Header from "./Header";
import {
  AiFillFacebook,
  AiFillGoogleCircle,
  AiFillYahoo,
  AiFillTwitterCircle
} from "react-icons/ai";


function LoginPage() {
  const initialValues = {email:"", password:""};

  const [formValues, setFormValues] = useState(initialValues);

  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
     
      const {name, value} = e.target;
      setFormValues({...formValues, [name]:value})
      
  }

  const handleSubmit = (e)=> {
      e.preventDefault()
      setFormErrors(validate(formValues))
      setIsSubmit(true)
  }
  useEffect ( () => {
    console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues)
    }
  }, [formErrors])

    const validate = (values) => {
      const errors = {};
      const regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
   

    if(!values.email){
      errors.email = "email is required!" ;
    }

    if(!values.password){
      errors.password = "password is required!" ;
    }
    return errors;
  };

  return (
    <div>
      <Header
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
      />

      <form onSubmit={handleSubmit} className="mt-6">
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
        <a href="#" className="text-xs text-purple-600 hover:underline">
          Forget Password?
        </a>
        <div className="mt-6">
          <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
            Login
          </button>
        </div>
      </form>

      <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                    <div className="absolute px-5 bg-white">or</div>
                    </div>

                    <div className="flex flex-row justify-center gap-20 text-xl my-3    ">
              <a href ="#"><AiFillFacebook className="rounded-full text-blue-600 hover: "  /> </a>
              <a href ="#"><AiFillGoogleCircle className="rounded-full text-red-500"/> </a>
              <a href ="#"><AiFillYahoo className="rounded-full text-purple-900"/> </a>
              <a href ="#"> <AiFillTwitterCircle className="rounded-full text-cyan-600"/></a>
                
              </div>



      



    </div>
  );
}

export default LoginPage;
