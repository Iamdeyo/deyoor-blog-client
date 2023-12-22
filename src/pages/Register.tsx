import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import AuthSideImg from "../components/AuthSideImg";

const schema = yup
  .object({
    email: yup.string().email().required(),
    username: yup.string().min(4).required(),
    password: yup
      .string()
      .min(8)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])/,
        "Password must contain at least one uppercase and one lowercase letter"
      )
      .required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <main className="lg:flex h-screen min-h-[600px]">
      <AuthSideImg />
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="/img/dt.png"
            alt="dt-blogs"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up for a new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  autoComplete="email"
                  {...register("email")}
                  autoFocus
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-400 focus:ring-2 outline-none sm:text-sm sm:leading-6 px-2 ${
                    errors.email
                      ? "focus:ring-red-500 ring-red-500"
                      : "focus:ring-pri ring-gray-300"
                  }`}
                />
              </div>
              <p className="text-red-500 italic text-xs md:text-sm">
                {errors.email?.message}.
              </p>
            </div>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  autoComplete="username"
                  {...register("username")}
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-400 focus:ring-2 outline-none sm:text-sm sm:leading-6 px-2 ${
                    errors.username
                      ? "focus:ring-red-500 ring-red-500"
                      : "focus:ring-pri ring-gray-300"
                  }`}
                />
              </div>
              <p className="text-red-500 italic text-xs md:text-sm">
                {errors.username?.message}.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-pri hover:text-pri-hover"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  {...register("password")}
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 outline-none sm:text-sm sm:leading-6 px-2 ${
                    errors.password
                      ? "focus:ring-red-500 ring-red-500"
                      : "focus:ring-pri ring-gray-300"
                  }`}
                />
              </div>
              <p className="text-red-500 italic text-xs md:text-sm">
                {errors.password?.message}.
              </p>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-pri px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pri-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?{" "}
            <Link
              to={"/login"}
              className="font-semibold leading-6 text-pri hover:text-pri-hover"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Register;
