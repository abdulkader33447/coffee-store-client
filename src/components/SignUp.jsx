import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = use(AuthContext);
  // console.log(createUser);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries()
    );

    // const email = formData.get("email");
    // const password = formData.get("password");
    // console.log(email, password);

    // create user
    createUser(email, password)
      .then((result) => {
        const userProfile = {
          email,
          ...restFormData,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        console.log(result);

        // save profile in the db
        fetch("https://coffee-store-app-50954.web.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your is created",
                showConfirmButton: false,
                timer: 1500,
              });
            }
            console.log("after profile save", data);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSignUp} className="">
            <h1 className="text-4xl font-bold text-center">Sign Up now!</h1>
            {/* name */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="name"
            />
            {/* phone */}
            <label className="label">Phone</label>
            <input
              type="text"
              name="phone"
              className="input"
              placeholder="Phone number"
            />
            {/* address */}
            <label className="label">Address</label>
            <input
              type="text"
              name="address"
              className="input"
              placeholder="Address"
            />
            {/* photo url */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="photo url"
            />
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
            {/* <div>
              <a className="link link-hover">Forgot password?</a>
            </div> */}
            <button className="btn btn-neutral w-full mt-4">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
