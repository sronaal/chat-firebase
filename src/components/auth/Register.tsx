import { registerFormSchema } from "@/lib/zod"
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"


import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"


const Register = () => {

    // Se inicializa formulario 
    const form = useForm<z.infer<typeof registerFormSchema>>({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {
            photoUrl: undefined,
            displayname: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
    })

    // Funcion para obtener los valores
    function onSubmit(values: z.infer<typeof registerFormSchema>) {

        console.log(values)

    }

    return (

        <Card className="p-5">
            <CardHeader>
                <CardTitle>Usuarios Nuevos</CardTitle>
                <CardDescription> ¡Bievenido! Registrate </CardDescription>
            </CardHeader>

            <CardContent>
                <Form {...form}>

                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="displayname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nombre Completo</FormLabel>
                                    <FormControl>
                                        <Input placeholder="ingrese su nombre" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Correo Electronico</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Ingrese su correo electronico" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Contraseña</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Ingrese su contraseña" type="password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirme su contraseña</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Confirmar contraseña" type="password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}

                        >

                        </FormField>
                        <FormField
                            control={form.control}
                            name="photoUrl"
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            render={({ field: { value, onChange, ...fieldProps } }) => (
                                <FormItem>
                                    <FormLabel>Avatar</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...fieldProps}
                                            type="file"
                                            accept="application/jpge"
                                            onChange={(event) =>
                                                onChange(event.target.files && event.target.files[0])
                                            }
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>

    )
}

export default Register