import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/Logo.png"
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {loading, login} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({email,password});
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-gray-700 px-3.5 shadow-sm ring-1 ring-inset ring-amber-300 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-amber-500 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-red-400  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
              disabled={loading}
            >
              {loading ? "Loading..." : "Sign in"}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-700">
          Not a member?{" "}
          <Link to={'/register'} className="font-semibold leading-6 text-amber-700 hover:text-amber-400 ">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
