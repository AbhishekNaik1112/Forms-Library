import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function FormsHooks() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const FormSubmitHandler = (data) => {
    toast("Form Submitted");
    console.log("data:", data);
  };
  console.log(watch());
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <fieldset>
        <legend className="text-xl font-bold mb-4">
          Fill This Form(Hook Form)
        </legend>
        <form onSubmit={handleSubmit(FormSubmitHandler)}>
          <div>
            {isSubmitSuccessful && (
              <p className="text-green-500">Registration Successful</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              First Name:
            </label>
            <input
              type="text"
              name="firstName"
              {...register("firstName", {
                required: "Enter First Name",
                minLength: { value: 4, message: "Enter minimum 4 letters" },
              })}
              className={`mt-1 p-2 border ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } rounded-md w-full focus:outline-none focus:border-blue-500`}
            />
            <p className="text-red-500">{errors.firstName?.message}</p>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Last Name:
            </label>
            <input
              type="text"
              name="lastName"
              {...register("lastName", {
                required: "Enter last Name",
                minLength: { value: 4, message: "Enter minimum 4 letters" },
              })}
              className={`mt-1 p-2 border ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              } rounded-md w-full focus:outline-none focus:border-blue-500`}
            />
            <p className="text-red-500">{errors.lastName?.message}</p>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Email:
            </label>
            <input
              type="email"
              name="email"
              {...register("email", { required: "Enter email" })}
              className={`mt-1 p-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md w-full focus:outline-none focus:border-blue-500`}
            />
            <p className="text-red-500">{errors.email?.message}</p>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Password:
            </label>
            <input
              type="text"
              name="password"
              {...register("password", {
                required: "Enter Password",
                minLength: { value: 8, message: "Enter minimum 8 chars" },
                pattern: {
                  value:
                    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[\]:;<>,.?/~_+\-=|])/,
                  message: "Password Not Valid",
                },
              })}
              className={`mt-1 p-2 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-md w-full focus:outline-none focus:border-blue-500`}
            />
            <p className="text-red-500">{errors.password?.message}</p>
          </div>

          <div className="mb-4">
            <input
              type="submit"
              value="Register"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            />
            <button
              onClick={() => {
                reset();
              }}
              className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:shadow-outline-gray active:bg-gray-500"
            >
              Reset
            </button>
          </div>
        </form>
      </fieldset>
    </div>
  );
}
