import { useEffect } from "react";

const UserCard = ({ users, setUsers }) => {


  useEffect(() => {
    const userData = async () => {
      try {
        const res = await fetch("/api/users");

        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    userData();

  }, []);

  const handleClick = async (id) => {
    try {
      const res = fetch(`/api/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res) {
        const errorData = await res.json();
        throw new Error("Error", errorData);
      }
      console.log(users);

      setUsers((prev) => prev.filter((user) => user.id !== id))


      console.log(`Item with ID ${id} deleted successfully`);
    } catch (error) {
      console.error(error);
    }
    console.log(id);
  };

  return (
    <div className="grid grid-cols-2 gap-5">
      {users.map((items) => {
        return (
          <div
            key={items.id}
            className="min-h-60 bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden  "
          >
            <div className=" w-full h-full grid items-center place-items-baseline px-10 py-5 gap-3 ">
              <h1 className="bg-red-800/80 py-1.5 px-3 text-sm rounded-md border border-red-700 cursor-pointer">
                {items.id}
              </h1>
              <h1 className="bg-blue-800/80 py-1.5 px-6 text-sm rounded-md border border-blue-700 cursor-pointer">
                {items.last_name} {items.first_name}
              </h1>

              <h1 className="bg-neutral-800/80 py-1.5 px-6 text-sm rounded-md border border-neutral-700 cursor-pointer">
                {items.email}
              </h1>
              <h1 className="bg-neutral-800/80 py-1.5 px-6 text-sm rounded-md border border-neutral-700 cursor-pointer">
                {items.gender}
              </h1>
              <button
                onClick={() => handleClick(items.id)}
                type="submit"
                className="bg-neutral-100 text-neutral-900 h-10 px-3 rounded-lg  border border-neutral-600 focus:outline-none cursor-pointer active:scale-95 text-xs"
              >
                Delete User
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserCard;
