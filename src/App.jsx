import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  const isLogin = useSelector((store) => store.authentication.isLogin);
  return (
    <div className=" px-3 md:w-1/2 md:mx-auto space-y-14 ">
      <Navbar />
      {!isLogin && <Login />}
      {isLogin && <Counter />}
    </div>
  );
}

export default App;
