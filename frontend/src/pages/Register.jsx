import React, { useState } from "react";
import Logo from "../assets/Logo.png"
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup";

const Register = () => {
  const [inputs, setInputs] = useState({
      name: '',
      email: '',
      password:'',
      confirmPassword:'',
      role:'user',
  });

  const {loading, signup} = useSignup()

  const handleSubmit = async(e) => {
    e.preventDefault()
    await signup(inputs)
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-[10rem] lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-20 w-auto"
          src={Logo}
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
          Sign in
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-black"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                value={inputs.name}
                onChange={(e)=>setInputs({...inputs, name:e.target.value})}
                required
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-amber-300 focus:ring-2 focus:ring-inset focus:ring-black px-3.5 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-black"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={inputs.email}
                onChange={(e)=>setInputs({...inputs, email:e.target.value})}
                required
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-amber-300 focus:ring-2 focus:ring-inset focus:ring-black px-3.5 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-black"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={inputs.password}
                onChange={(e)=>setInputs({...inputs, password:e.target.value})}
                required
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-gray-700 px-3.5 shadow-sm ring-1 ring-inset ring-amber-300 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium leading-6 text-black"
              >
                Confirm Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={inputs.confirmPassword}
                onChange={(e)=>setInputs({...inputs, confirmPassword:e.target.value})}
                required
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-gray-700 px-3.5 shadow-sm ring-1 ring-inset ring-amber-300 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-amber-500 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-red-400  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
            >
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-700">
          You have a member?{" "}
          <Link to={'/login'} className="font-semibold leading-6 text-amber-700 hover:text-amber-400 ">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
