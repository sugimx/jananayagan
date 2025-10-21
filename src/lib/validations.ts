import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

export const registerSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 characters'),
  phone: z
    .string()
    .optional(),
});

export const addUserSchema = z.object({
  name: z.string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters"),

  email: z.string()
    .min(1, 'Email is required')
    .email('Invalid Email Format')
    .refine(
      (email) => email.endsWith("@gmail.com"),
      { message: 'Email must be a Gmail address' }
    ),

  phone: z.string()
    .min(10, "Phone number must be at least 10 digits")
    .max(10, "Phone number is too long")
    .regex(/^\d+$/, "Phone number must contain digits only"),
  birthDate: z.coerce.date() 
    .refine(
      (date) => !isNaN(date.getTime()),
      { message: "Date is required" }
    )
    .refine(
      (date) => date < new Date(),
      { message: "Invalid date of birth" }
    ),
  state: z.string().min(1, "State is required"),
  
  district: z.string().min(1, "District is required"),
})

export type AddUserFormData = z.infer<typeof addUserSchema>
export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
