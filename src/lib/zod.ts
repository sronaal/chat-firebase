import { z } from 'zod'


export const loginFormSchema = z.object({

    email: z.string().email("Ingrese un correo valido").min(0, "Ingrese un correo electronico"),
    password: z.string().min(6, "La contraseña debe tener minimo 6 caracteres")
})


export const registerFormSchema = z.object({

    photoUrl: z
        .instanceof(File, {
            message: "Por favor subir una imagen valida"
        }),
    displayname: z
        .string()
        .min(1, "Nombre es requerido")
        .max(50, "Maximo 50 caracteres"),
    email: z.string().email("Ingrese un correo valido").min(0, "Ingrese un correo electronico"),
    password: z.string().min(6, "La contraseña debe tener minimo 6 caracteres"),
    confirmPassword: z.string().min(6, "La contraseña debe tener minimo 6 caracteres")

})
    .refine((data) => data.password == data.confirmPassword, {
        message: "Las contraseñas no coinciden"
    }).refine((data) => data.photoUrl.size < 2 * 1024 * 1024, {
        message: "La imagen no puede pesar mas de 2MB"
    })