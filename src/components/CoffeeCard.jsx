import React from "react";
import { IoMdEye } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, photo, name, price, barista } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      // console.log(result.isConfirmed);
      if (result.isConfirmed) {
        // start deleting the coffee
        fetch(`https://coffee-store-app-50954.web.app/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("after delete", data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              // remove the coffee from the state
              const remainingCoffees = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };
  return (
    <div className="">
      <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img className="sm:size-30 size-25" src={photo} alt="Movie" />
        </figure>
        <div className="flex items-center w-full justify-around">
          <div>
            <h2 className="font-semibold">
              Name : <span className="text-gray-600 font-light">{name}</span>
            </h2>
            <h2 className="font-semibold">
              Barista :{" "}
              <span className="text-gray-600 font-light">{barista}</span>
            </h2>
            <h2 className="font-semibold">
              price : <span className="text-gray-600 font-light">{price}</span>
            </h2>
          </div>

          <div className="card-actions justify-end">
            <div className="join join-vertical gap-2">
              <Link to={`/coffee/${_id}`}>
                <button className="btn bg-[#D2B48C] text-white rounded-md join-item w-fit">
                  <IoMdEye size={20} />
                </button>
              </Link>
              <Link to={`/updateCoffee/${_id}`}>
                <button className="btn bg-[#3C393B] text-white rounded-md join-item w-fit">
                  <MdEdit size={20} />
                </button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn bg-[#EA4744] text-white rounded-md join-item w-fit"
              >
                <MdDelete size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
