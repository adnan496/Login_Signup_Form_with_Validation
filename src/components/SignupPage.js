import React from "react";
import Header from "./Header";

function SignupPage() {
  return (
    <div>
      <Header
        heading="SignUp to your account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/#"
      />

      <form className="mt-6">
        <div className="mb-2">
          <label
            for="email"
            className="block text-sm font-semibold text-gray-800"
          >
            Full Name
          </label>
          <input
            type="text"
            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            required
          />
        </div>

        <div className="mb-2">
          <label
            for="date"
            className="block text-sm font-semibold text-gray-800"
          >
            Date of Birth
          </label>
          <input
          type="date"
            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            required
          />
        </div>

        <div className="mb-2">
          <label
            for="email"
            className="block text-sm font-semibold text-gray-800"
          >
            Email
          </label>
          <input
            type="email"
            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            required
          />
        </div>
        <div className="mb-2">
          <label
            for="password"
            className="block text-sm font-semibold text-gray-800"
          >
            Password
          </label>
          <input
            type="password"
            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            required
          />
        </div>
       
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
