import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext";

const SignIn = () => {
  const { signInUser } = use(AuthContext);

  const handleSigIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // send user in firebase
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);

        const signInInfo = {
          email,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        // update last sign in to the db
        fetch("https://coffee-store-app-50954.web.app/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(signInInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("after update patch", data);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h1 className="text-center text-5xl font-semibold my-5">Sign In</h1>
      <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSigIn} className="">
            <h1 className="text-4xl font-bold text-center">Sign In now!</h1>

            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral w-full mt-4">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
