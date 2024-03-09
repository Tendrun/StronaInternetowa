import { z } from 'zod';

export const CreateProductSchema = z.object({
    Name: z.string().min(1).max(100),
    price: z.number().min(1).max(100)
});
