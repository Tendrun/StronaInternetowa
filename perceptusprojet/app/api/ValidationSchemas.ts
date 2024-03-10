import { z } from 'zod';

export const CreateProductSchema = z.object({
    Name: z.string().min(1).max(100),
    price: z.number().min(1).max(100)
});

export const CreateAccountSchema = z.object({
    Pesel: z.number().gte(10000000000, 'Invalid pesel format').lte(99999999999, 'Invalid pesel format'),
    Email: z.string().email().min(1).max(50, 'This text is too long'),
    Name: z.string().min(1, 'Enter your name').max(30, 'This text is too long'),
    Second_name: z.string().min(1, 'Enter your Second name').max(30, 'This text is too long'),
    Password: z.string().min(1, 'Enter your passwrd').max(30, 'This text is too long'),
});







function isFloat(value: number): boolean {
    return Number.isFinite(value) && !Number.isInteger(value);
}