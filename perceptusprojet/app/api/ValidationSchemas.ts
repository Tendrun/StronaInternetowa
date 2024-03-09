import { z } from 'zod';

export const CreateProductSchema = z.object({
    Name: z.string().min(1).max(100),
    price: z.number().min(1).max(100)
});

export const CreateAccountSchema = z.object({
    Pesel: z.number(),
    Email: z.string().email().min(1).max(50),
    Name: z.string().min(1).max(30),
    Second_name: z.string().min(1).max(30),
    Password: z.string().min(1).max(30),
});







function isFloat(value: number): boolean {
    return Number.isFinite(value) && !Number.isInteger(value);
}