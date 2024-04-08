import * as z from "zod";
export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Pssword must be atleast 6 characters",
  }),
});
export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});
export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, { message: "Password is required." }),
});
export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 characters." }),
  name: z.string().min(3, { message: "name is required,atleast 3 characters" }),
});
