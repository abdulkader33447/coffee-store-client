import React from "react";
import bgImage from "../assets/images/more/11.png";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UploadCoffee = () => {
  const { _id, barista, details, name, photo, price, supplier, taste } =
    useLoaderData();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());
    console.log(updatedCoffee);

    // send updated coffee to db
    fetch(`https://coffee-store-app-50954.web.app/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Coffee update successfully!",
            showConfirmButton: false,
            timer: 2000,
          });

          console.log(data);
        }
      });
  };
  return (
    <div>
      <div
        className="bg-cover bg-center h-screen "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="lg:w-8/12 md:w-10/12 sm:py-28 py-15 mx-auto">
          <div className="sm:p-24 p-2 py-12 bg-[#F4F3F0] rounded-sm">
            <div className="sm:p-12 p-3 text-center space-y-4">
              <h1 className="sm:text-6xl text-3xl">Update Coffee</h1>
            </div>
            <form onSubmit={handleUpdateCoffee}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <fieldset className="fieldset  border-base-300 rounded-box border p-4">
                  <label className="label ">Name</label>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Enter coffee name"
                    name="name"
                    defaultValue={name}
                  />
                </fieldset>
                <fieldset className="fieldset  border-base-300 rounded-box border p-4">
                  <label className="label ">Barista</label>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Enter coffee Barista"
                    name="barista"
                    defaultValue={barista}
                  />
                </fieldset>
                <fieldset className="fieldset  border-base-300 rounded-box border p-4">
                  <label className="label ">Supplier</label>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Enter coffee supplier"
                    name="supplier"
                    defaultValue={supplier}
                  />
                </fieldset>
                <fieldset className="fieldset  border-base-300 rounded-box border p-4">
                  <label className="label ">Taste</label>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Enter coffee taste"
                    name="taste"
                    defaultValue={taste}
                  />
                </fieldset>
                <fieldset className="fieldset  border-base-300 rounded-box border p-4">
                  <label className="label ">Price</label>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Enter coffee Price"
                    name="price"
                    defaultValue={price}
                  />
                </fieldset>
                <fieldset className="fieldset  border-base-300 rounded-box border p-4">
                  <label className="label ">Details</label>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Enter coffee details"
                    name="details"
                    defaultValue={details}
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
                  defaultValue={photo}
                />
              </fieldset>
              <input
                type="submit"
                className="btn w-full bg-[#D2B48C] "
                value="Update Coffee"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadCoffee;
