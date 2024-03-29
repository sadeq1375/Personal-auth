import * as z from "zod";
export const LoginSchema = z.object({
  email: z.string().email({
    message: "⚠️ Enter Valid Email,we will send you verification code",
  }),
  password: z.string(),
});
