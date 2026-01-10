import React, { useState } from "react";

const FormHandle = ({ setUsers }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setUsers((prev) => [...prev, data]);
      console.log("User created:", data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="py-10">
      <form
        onSubmit={handleSubmit}
        className="space-y-3 flex flex-col items-center "
      >
        <input
          autoComplete="off"
          type="text"
          name="first_name"
          placeholder="First Name"
          value={formData.first_name}
          onChange={handleChange}
          className="bg-neutral-800 w-80 h-10 px-3 rounded-lg placeholder:text-neutral-400 active:border-none border border-neutral-600 focus:outline-none"
        />

        <input
          autoComplete="off"
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={formData.last_name}
          onChange={handleChange}
          className="bg-neutral-800 w-80 h-10 px-3 rounded-lg placeholder:text-neutral-400 active:border-none border border-neutral-600 focus:outline-none"
        />

        <input
          autoComplete="off"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="bg-neutral-800 w-80 h-10 px-3 rounded-lg placeholder:text-neutral-400 active:border-none border border-neutral-600 focus:outline-none"
        />

        <input
          autoComplete="off"
          type="gender"
          name="gender"
          placeholder="Gender"
          value={formData.gender}
          onChange={handleChange}
          className="bg-neutral-800 w-80 h-10 px-3 rounded-lg placeholder:text-neutral-400 active:border-none border border-neutral-600 focus:outline-none"
        />

        <div className=" flex gap-5">
          <button
            type="submit"
            className="bg-neutral-100 text-neutral-900 h-10 px-3 rounded-lg  border border-neutral-600 focus:outline-none cursor-pointer active:scale-95 text-sm"
          >
            Create User
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormHandle;
