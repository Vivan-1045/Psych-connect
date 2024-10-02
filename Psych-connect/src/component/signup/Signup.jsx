import React from "react";
import {Link} from "react-router-dom"
import Login from "../login/login";

const Signup = () => {
  const data = {
    name: "",
    phone: "",
    email: "",
    password: "",
  };

  const handlechange = () => {};

  return (
    <div className="max-w-lg mx-auto bg-purple-300 p-8 rounded-lg shadow-lg mt-10 form">
      <form>
        <div>
          <div>
            <h1 className="text-2xl mb-12 underline">Signup Here</h1>
          </div>
          {/* <p className="mt-2 text-center text-base text-black/60">
            Already have any account?&nbsp;
            <Link
              to = '/Login'
              className="font-medium text-primary transition-all duration-200 hover:underline"
            >
              Sign In
            </Link>
          </p> */}
          <div className="">
            <label className="text-2xl">Enter Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handlechange}
              className=" mt-3 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
          <div className="mt-3">
            <label className="text-2xl">Create User Name</label>
            <input
              type="text"
              name="user"
              placeholder="User name"
              onChange={handlechange}
              className=" mt-3 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              unique={true}
            />
          </div>
          <div className="mt-3">
            <label className="text-2xl">Mobile no.</label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              maxLength={12}
              onChange={handlechange}
              className="mt-3 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div className="mt-3">
            <label className="text-2xl">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handlechange}
              className="mt-3 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
          <div className="mt-3">
            <label className="text-2xl">Create a strong password</label>
            <input
              type="password"
              name="password"
              placeholder="Craete password"
              onChange={handlechange}
              minLength={8}
              className="mt-3 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-purple-700 text-white px-6 py-2 mt-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
