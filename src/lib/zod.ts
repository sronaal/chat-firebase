import { z } from 'zod'


export const loginFormSchema = z.object({

    email: z.string().email("Ingrese un correo valido").min(0,"Ingrese un correo electronico"),
    password: z.string().min(6, "La contraseña debe tener minimo 6 caracteres")
})
