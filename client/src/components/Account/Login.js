import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { useForm } from "react-hook-form";
import './Account.css';

const Login = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
      <div className="register">
        
          <h2>Login</h2>
          <span>Login now and enjoy our tasty dishes</span>
          <form
            id="form"
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="email"
            />
            {errors.email && <p>Email ID is required.</p>}
            <input
              {...register("password", { required: true })}
              type="text"
              placeholder="password"
            />
            {errors.password && <p>Password is required.</p>}

            <button className="btn">
              Login <FiArrowRight />
            </button>
          </form>
          <div className="register-account">
            Don't have an account?
            <button
              className="register-btn"
              onClick={() => props.onformSwitch("Register")}
            >
              Register
            </button>
          </div>
        
      </div>
  );
};

export default Login;
