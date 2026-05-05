import { z } from "zod";

export const phoneSchema = z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10 digit Indian mobile number");

export const cartItemSchema = z.object({
  variantId: z.string().min(1),
  quantity: z.number().int().min(1).max(50)
});

export const couponSchema = z.object({
  code: z.string().trim().min(2).max(32)
});

export const addressSchema = z.object({
  name: z.string().trim().min(2),
  phone: phoneSchema,
  line1: z.string().trim().min(5),
  line2: z.string().trim().optional(),
  city: z.string().trim().min(2),
  pincode: z.string().regex(/^\d{6}$/)
});

export const orderSchema = z.object({
  paymentMethod: z.enum(["COD", "RAZORPAY"]),
  address: addressSchema,
  couponCode: z.string().trim().optional()
});

export const otpSendSchema = z.object({
  phone: phoneSchema
});

export const otpVerifySchema = z.object({
  phone: phoneSchema,
  otp: z.string().regex(/^\d{6}$/)
});
