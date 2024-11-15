import { z } from "zod";

export const formSchema = z.object({
    email: z.string({required_error: "Email harus diisi"}).email({message: 'Email tidak Valid'}),
    password: z.string({required_error: "Password harus diisi"}).min(5,{message:'Password harus memiliki minimal 5 karakter'})

})