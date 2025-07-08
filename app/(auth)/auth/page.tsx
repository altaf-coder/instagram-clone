"use client";
import GoogleLoginButton from "@/components/ui/GoogleButton";
import { authValidation } from "@/validation/authValidation";
import { Formik } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Input from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Page = () => {
  const [variant, setVariant] = React.useState("login");
  const router = useRouter();

  const toogleVariant = () => {
    setVariant(variant === "login" ? "register" : "login");
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-black">
      <div className="flex flex-col md:flex-row items-center gap-8 p-6 bg-black">
        {/* Left Side - Photo */}
        <div className="w-100 h-150 overflow-hidden hidden lg:block">
          <img
            src="/images/login.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Box + Additional Box Below */}
        <div className="flex flex-col items-center">
          {/* First Box - Form */}
          <div className="bg-black text-white border border-gray-700 p-6 w-70 lg:w-95 text-center flex flex-col items-center">
            <img src="/images/logo.png" alt="logo" height={200} width={200} />
            <p className="text-gray-400 font-semibold w-70">
              Sign up to see photos and videos from your friends.
            </p>

            <GoogleLoginButton
              label="Login with Google"
              onClick={() => signIn("google", { callbackUrl: "/" })}
            />

            <div className="flex items-center gap-2 my-4">
              <hr className="h-[0.5px] w-25 border-0 bg-gray-700" />
              <span className="text-gray-400 font-semibold text-sm">OR</span>
              <hr className="h-[0.5px] w-25 border-0 bg-gray-700" />
            </div>

            <Formik
              initialValues={{
                name: "",
                userName: "",
                email: "",
                password: "",
              }}
              validationSchema={authValidation}
              onSubmit={async (values, { setSubmitting }) => {
                setSubmitting(true);
                try {
                  if (variant === "login") {
                    const res = await signIn("credentials", {
                      redirect: false,
                      email: values.email,
                      password: values.password,
                    });
                    if (res?.ok) {
                      toast.success("Login successfully");
                      router.push("/");
                    } else {
                      toast.error("Something went wrong");
                    }
                  } else {
                    await axios.post("/api/register", values);
                    const res = await signIn("credentials", {
                      ...values,
                      redirect: false,
                    });
                    if (res?.ok) {
                      toast.success("Registered successfully");
                      router.push("/");
                    }
                  }
                } catch (error) {
                  console.log(error);
                  toast.error("Something went wrong in Authentication");
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <>
                    <Input
                      name="email"
                      placeholder="Email"
                      type="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {variant === "register" && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                    <Input
                      name="password"
                      placeholder="Password"
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {variant === "register" && (
                      <p className="text-red-500 text-sm">{errors.password}</p>
                    )}

                    {variant === "register" && (
                      <>
                        <Input
                          name="name"
                          placeholder="Name"
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                        />

                        <Input
                          name="userName"
                          placeholder="Username"
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.userName}
                        />
                      </>
                    )}
                  </>

                  <Button
                    type="submit"
                    disabled={
                      isSubmitting ||
                      !values.email ||
                      !values.password ||
                      (!values.userName &&
                        !values.name &&
                        variant === "register")
                    }
                  >
                    {variant === "login" ? "Log in" : "Sign up"}
                  </Button>
                </form>
              )}
            </Formik>

            <p className="text-sm text-gray-400 text-center mt-4">
              People who use our service may have uploaded your contact
              information to Instagram.{" "}
              <span className="text-blue-500 cursor-pointer hover:underline">
                Learn More
              </span>
            </p>
          </div>

          {/* Second Box - Below Form */}
          <div className="bg-black border border-gray-700 p-7 mt-2 w-70 lg:w-95 text-center text-gray-300">
            {variant === "login" ? (
              <>
                Don't have an account?{" "}
                <span
                  onClick={toogleVariant}
                  className="text-blue-500 cursor-pointer hover:underline"
                >
                  Sign up
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span
                  onClick={toogleVariant}
                  className="text-blue-500 cursor-pointer hover:underline"
                >
                  Log in
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
