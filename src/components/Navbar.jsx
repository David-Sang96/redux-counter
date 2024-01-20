import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../store/authSlice";

const Navbar = () => {
  const isLogin = useSelector((store) => store.authentication.isLogin);
  const dispatch = useDispatch();

  return (
    <nav className="flex justify-between items-center py-2 md:py-3">
      <h2 className="text-lg font-bold font-serif md:text-3xl">
        Redux Counter
      </h2>
      {!isLogin ? (
        <button
          className="text-sm md:text-lg border-2 border-red-600 px-2 md:px-4 py-1 rounded-lg"
          onClick={() => {
            dispatch(authAction.login());
          }}
        >
          Log In
        </button>
      ) : (
        <div className="flex space-x-5 items-center">
          <div className="text-sm md:text-lg">My Record</div>

          <button
            className="text-sm border-2 md:text-lg border-red-600 px-2 md:px-4 py-1 rounded-lg"
            onClick={() => {
              dispatch(authAction.logout());
            }}
          >
            Log Out
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
