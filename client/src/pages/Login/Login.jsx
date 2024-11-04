import React, { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [disable, setDisable] = useState(true);
  const { signInUser } = useContext(AuthContext);
  const captchaRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const onSubmit = (data) => {
    const { email, password } = data;
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("User logged in:", user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log("Login error:", error));
  };

  const handleValidate = () => {
    const userCaptchaValue = captchaRef.current.value;
    if (validateCaptcha(userCaptchaValue)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro | Login</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-1/2 max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                  </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  ref={captchaRef}
                  type="text"
                  placeholder="Enter Captcha"
                  className="input input-bordered"
                  onBlur={handleValidate}
                  required
                />
                {!disable && (
                  <p className="text-green-500 text-xs mt-1">
                    Captcha validated successfully!
                  </p>
                )}
                {disable && (
                  <p className="text-red-500 text-xs mt-1">
                    Captcha does not match.
                  </p>
                )}
              </div>

              <input
                disabled={disable}
                className="btn btn-primary"
                type="submit"
                value="Login"
              />
              <p>
                <small>
                  New Here? <Link to="/signup">Create an Account</Link>
                </small>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
