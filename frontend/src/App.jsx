import FormHandle from "./components/FormHandle";
import UserCard from "./components/UserCard";

const App = () => {
  return (
    <div className="p-4 max-w-3xl m-auto min-h-screen flex flex-col ">
      <FormHandle/>
      <UserCard />
    </div>
  );
};

export default App;
