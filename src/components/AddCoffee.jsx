import React from "react";
import bgImage from "../assets/images/more/11.png";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee);

    // send coffee data to the db
    fetch("https://coffee-store-app-50954.web.app/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee added successfully!",
            icon: "success",
            // draggable: true,
            timer: 2500,
          });
          console.log("after adding coffee to db", data);
          // form.reset()
        }
      });
  };
  return (
    <div
      className="bg-cover bg-center h-screen "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="lg:w-8/12 md:w-10/12 sm:py-28 py-15 mx-auto">
        <div className="sm:p-24 p-2 py-12 bg-[#F4F3F0] rounded-sm">
          <div className="sm:p-12 p-3 text-center space-y-4">
            <h1 className="sm:text-6xl text-3xl">Add Coffee</h1>
            <p>
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <form onSubmit={handleAddCoffee}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <fieldset className="fieldset  border-base-300 rounded-box border p-4">
                <label className="label ">Name</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Enter coffee name"
                  name="name"
                />
              </fieldset>
              <fieldset className="fieldset  border-base-300 rounded-box border p-4">
                <label className="label ">Barista</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Enter coffee Barista"
                  name="barista"
                />
              </fieldset>
              <fieldset className="fieldset  border-base-300 rounded-box border p-4">
                <label className="label ">Supplier</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Enter coffee supplier"
                  name="supplier"
                />
              </fieldset>
              <fieldset className="fieldset  border-base-300 rounded-box border p-4">
                <label className="label ">Taste</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Enter coffee taste"
                  name="taste"
                />
              </fieldset>
              <fieldset className="fieldset  border-base-300 rounded-box border p-4">
                <label className="label ">Price</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Enter coffee Price"
                  name="price"
                />
              </fieldset>
              <fieldset className="fieldset  border-base-300 rounded-box border p-4">
                <label className="label ">Details</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Enter coffee details"
                  name="details"
                />
              </fieldset>
            </div>
            <fieldset className="fieldset  border-base-300 rounded-box border p-4 my-2">
              <label className="label ">Photo</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter photo URL"
                name="photo"
              />
            </fieldset>
            <input
              type="submit"
              className="btn w-full bg-[#D2B48C] "
              value="Add Coffee"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
