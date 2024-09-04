import { searchFormSchema } from '@/lib/zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from '../ui/input'

const FriendSearch = () => {


    const form = useForm<z.infer<typeof searchFormSchema>>({
        resolver: zodResolver(searchFormSchema),
        defaultValues: {
            emails: ""
        },
    })

    async function onSubmit(values: z.infer<typeof searchFormSchema>) {

        console.log(values.emails)

    }

    return (

        <div>
            <Form {...form}>

                <form

                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-8'
                >
                    <FormField
                        control={form.control}
                        name="emails"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder='Search Friend'
                                        className='rounded-full'
                                        {...field}

                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    ></FormField>
                </form>
            </Form>
        </div>
    )


}

export default FriendSearch