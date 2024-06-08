import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { useForm } from "react-hook-form";
import './Account.css'

const Register = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (

    <div className="register">
      <h2>Register</h2>
      <span>Register now and enjoy our tasty dishes</span>
      <form
        id="form"
        className="flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          {...register("userName", { required: true })}
          placeholder="Username"
        />
        {errors.userName && <p>Username is required.</p>}
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="email"
        />
        {errors.email && <p>Email ID is required.</p>}
        <input
          type="number"
          {...register("number", { required: true })}
          placeholder="mobile number"
        />
        {errors.number && <p>Mobile Number is required.</p>}
        <input
          {...register("password", { required: true })}
          type="text"
          placeholder="password"
        />
        {errors.password && <p>Password is required.</p>}

        <button className="btn">
          Register <FiArrowRight />
        </button>
      </form>
      <div className="register-account">
        Already have an account?{" "}
        <button
          className="register-btn"
          onClick={() => props.onformSwitch("Login")}
        >
          Login
        </button>
      </div>


    </div>
  );
};

export default Register;
