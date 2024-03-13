import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function LoginForm() {
  const schema = yup.object().shape({
    fullname: yup.string().required("Your name is required"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required(" email is required"),
    password: yup.string().min(4).max(16).required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password does not match"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="center">
        <div className="main">
          <div className="img">
            <img className="image" src="img1.jpg" alt="" />
          </div>
          <form className="reg-form" onSubmit={handleSubmit(onSubmit)}>
            <h1>REGISTRATION FORM </h1>

            <input
              type="text"
              placeholder="Full Name"
              {...register("fullname")}
            />
            <p>{errors.fullname?.message}</p>
            <input
              type="text"
              placeholder="Email Address"
              {...register("email")}
            />
            <p>{errors.email?.message}</p>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <p>{errors.password?.message}</p>
            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
            />
            <p>{errors.confirmPassword?.message}</p>
            <button className="button">Register</button>
          </form>
        </div>
      </div>
    </>
  );
}
