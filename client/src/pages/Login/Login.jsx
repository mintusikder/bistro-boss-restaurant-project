import React, { useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
const Login = () => {
  const captchaRef = useRef(null);
  const [disable, setDisable] = useState(true);
  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(password, email);
  };
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handelValidate = (e) => {
    const user_captcha_value = captchaRef.current.value;
    console.log(user_captcha_value)
    if (validateCaptcha(user_captcha_value) == true) {
      setDisable(false);
    } else {
      alert("Captcha Does Not Match");
      setDisable(true)
    }
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-1/2 max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handelLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
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
                name="captcha"
                placeholder="Captcha"
                className="input input-bordered"
                required
              />

              <button
                onClick={handelValidate}
                className="btn btn-outline btn-xs mt-3"
              >
                Validate
              </button>
            </div>
            <input
              disabled={disable}
              className="btn btn-primary"
              type="submit"
              value="Login"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
