import { useState } from "react";
import FormHandle from "./components/FormHandle";
import UserCard from "./components/UserCard";

const App = () => {
  const [users, setUsers] = useState([]);
  return (
    <div className="p-4 max-w-3xl m-auto min-h-screen flex flex-col ">
      < FormHandle setUsers={setUsers} />
      <UserCard users={users} setUsers={setUsers} />
    </div >
  );
};

export default App;
