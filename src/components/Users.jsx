import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Users = () => {
  const initUsers = useLoaderData();
  console.log(initUsers);

  const [users, setUsers] = useState(initUsers);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingUsers = users.filter((user) => user._id !== id);
              setUsers(remainingUsers);

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            console.log("after delete", data);
          });
      }
    });
  };
  return (
    <div>
      <h2 className="text-2xl">Users : {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <h2 className="" />
                  srl
                </label>
              </th>
              <th>Name</th>
              <th>Contact</th>
              <th>Address</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>
                  <label>
                    {/* users serial */}
                    <h2 className="" />
                    {index + 1}
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img className="rounded-full"
                          src={user.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {user.email}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {user.phone}
                  </span>
                </td>
                <td>{user.address}</td>
                <th className="grid">
                  <button className="btn bg-[#D2B48C] text-white rounded-md join-item w-fit">
                    <IoMdEye size={20} />
                  </button>
                  <button className="btn bg-[#3C393B] text-white rounded-md join-item w-fit">
                    <MdEdit size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn bg-[#EA4744] text-white rounded-md join-item w-fit"
                  >
                    <MdDelete size={20} />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
