import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handelGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
  return (
    <div>
      <button onClick={handelGoogleSignIn} className="btn w-full">
        <FaGoogle></FaGoogle>
        Google
      </button>
    </div>
  );
};

export default SocialLogin;