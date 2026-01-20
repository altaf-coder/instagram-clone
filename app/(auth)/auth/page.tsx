"use client";
import GoogleLoginButton from "@/components/ui/GoogleButton";
import { authValidation } from "@/validation/authValidation";
import { Formik } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, User, AtSign } from "lucide-react";
import { Instagram } from "lucide-react";

const Page = () => {
  const [variant, setVariant] = useState<"login" | "register">("login");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const toggleVariant = () => {
    setVariant(variant === "login" ? "register" : "login");
    setShowPassword(false);
  };

  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center bg-background px-4 py-8 sm:py-12">
      <div className="w-full max-w-5xl flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left Side - Image (Hidden on mobile, shown on desktop) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:flex flex-1 items-center justify-center"
        >
          <div className="relative w-full max-w-md">
            <img
              src="/images/login.png"
              alt="Instagram Preview"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </motion.div>

        {/* Right Side - Auth Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md flex flex-col gap-4"
        >
          {/* Main Form Card */}
          <div className="bg-card border border-border rounded-lg p-6 sm:p-8 md:p-10 shadow-lg">
            {/* Logo */}
            <div className="flex flex-col items-center mb-6 sm:mb-8">
              <div className="mb-4">
                <Instagram className="h-12 w-12 sm:h-16 sm:w-16 text-foreground" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 text-center">
                {variant === "login" ? "Welcome back" : "Create account"}
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground text-center max-w-sm">
                {variant === "login"
                  ? "Sign in to continue to Instagram"
                  : "Sign up to see photos and videos from your friends"}
              </p>
            </div>

            {/* Google Login Button */}
            <GoogleLoginButton
              label={variant === "login" ? "Continue with Google" : "Sign up with Google"}
              onClick={() => signIn("google", { callbackUrl: "/" })}
            />

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-border" />
              <span className="text-sm text-muted-foreground font-medium">OR</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Form */}
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
                      toast.success("Login successful!");
                      router.push("/");
                    } else {
                      toast.error(res?.error || "Invalid email or password");
                    }
                  } else {
                    await axios.post("/api/register", values);
                    const res = await signIn("credentials", {
                      email: values.email,
                      password: values.password,
                      redirect: false,
                    });
                    if (res?.ok) {
                      toast.success("Account created successfully!");
                      router.push("/");
                    } else {
                      toast.error("Registration successful, but login failed. Please try logging in.");
                    }
                  }
                } catch (error: any) {
                  console.error("Auth error:", error);
                  const errorMessage =
                    error.response?.data?.error ||
                    error.message ||
                    "Something went wrong. Please try again.";
                  toast.error(errorMessage);
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
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Email Field */}
                  <div className="space-y-2">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        name="email"
                        placeholder="Email"
                        type="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        className={`pl-10 h-11 sm:h-12 ${
                          touched.email && errors.email
                            ? "border-destructive focus-visible:ring-destructive"
                            : ""
                        }`}
                      />
                    </div>
                    {touched.email && errors.email && (
                      <p className="text-sm text-destructive px-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        name="password"
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        className={`pl-10 pr-10 h-11 sm:h-12 ${
                          touched.password && errors.password
                            ? "border-destructive focus-visible:ring-destructive"
                            : ""
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                    {touched.password && errors.password && (
                      <p className="text-sm text-destructive px-1">{errors.password}</p>
                    )}
                  </div>

                  {/* Register Only Fields */}
                  <AnimatePresence>
                    {variant === "register" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        {/* Name Field */}
                        <div className="space-y-2">
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                              name="name"
                              placeholder="Full Name"
                              type="text"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.name}
                              className={`pl-10 h-11 sm:h-12 ${
                                touched.name && errors.name
                                  ? "border-destructive focus-visible:ring-destructive"
                                  : ""
                              }`}
                            />
                          </div>
                          {touched.name && errors.name && (
                            <p className="text-sm text-destructive px-1">{errors.name}</p>
                          )}
                        </div>

                        {/* Username Field */}
                        <div className="space-y-2">
                          <div className="relative">
                            <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                              name="userName"
                              placeholder="Username"
                              type="text"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.userName}
                              className={`pl-10 h-11 sm:h-12 ${
                                touched.userName && errors.userName
                                  ? "border-destructive focus-visible:ring-destructive"
                                  : ""
                              }`}
                            />
                          </div>
                          {touched.userName && errors.userName && (
                            <p className="text-sm text-destructive px-1">{errors.userName}</p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={
                      isSubmitting ||
                      !values.email ||
                      !values.password ||
                      (variant === "register" && (!values.userName || !values.name))
                    }
                    className="w-full h-11 sm:h-12 text-base font-semibold disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        {variant === "login" ? "Signing in..." : "Creating account..."}
                      </span>
                    ) : variant === "login" ? (
                      "Log in"
                    ) : (
                      "Sign up"
                    )}
                  </Button>
                </form>
              )}
            </Formik>

            {/* Terms Text */}
            {variant === "register" && (
              <p className="text-xs text-muted-foreground text-center mt-4 px-2">
                People who use our service may have uploaded your contact information to
                Instagram.{" "}
                <span className="text-primary cursor-pointer hover:underline">
                  Learn More
                </span>
              </p>
            )}
          </div>

          {/* Switch Variant Card */}
          <div className="bg-card border border-border rounded-lg p-6 sm:p-8 text-center">
            <p className="text-sm sm:text-base text-foreground">
              {variant === "login" ? (
                <>
                  Don't have an account?{" "}
                  <button
                    onClick={toggleVariant}
                    className="text-primary font-semibold hover:underline transition-colors"
                  >
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Have an account?{" "}
                  <button
                    onClick={toggleVariant}
                    className="text-primary font-semibold hover:underline transition-colors"
                  >
                    Log in
                  </button>
                </>
              )}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
