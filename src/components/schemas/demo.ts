import { z } from "zod";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const demoSchema = z.object({
    emailAddress: z.string().email("Invalid email address").regex(emailRegex, "Invalid email address"),
    company: z.string().min(3, "Company name must be at least 3 characters"),
    contactNumber: z.string().min(10, "Contact number must be at least 10 digits"),
    name: z.string().min(1, "Name is required"),
    message: z.string().optional().or(z.literal("")),

})