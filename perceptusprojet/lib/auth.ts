import { AuthOptions } from "next-auth";
import { EmailProvider } from "next-auth/providers";

export const options {
    providers: [
        EmailProvider({
            server: process.env.EMAIL_SEVER,
            from: process.env.EMAIL_FROM
        })
    ]
} satisfies AuthOptions;