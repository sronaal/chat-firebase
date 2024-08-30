import { loginFormSchema } from "@/lib/zod"
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


const Login = () => {

  // Se inicializa formulario 
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })

  // Funcion para obtener los valores
  function onSubmit(values: z.infer<typeof loginFormSchema>) {

    console.log(values)

  }

  return (

    <div className="bg-white p-8">

      <Form {...form}>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                  <Input placeholder="Ingrese su contraseña" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}

          >

          </FormField>

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default Login