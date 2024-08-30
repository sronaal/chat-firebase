import ChatLayout from "./chat.layout"
import AuthLayout from "./auth.layout"

const RootLayout = () => {


    const user = true
    return (

        <main className="">
            {
                user ? 
                (
                   <ChatLayout/>
                ) : 
                (
                    <AuthLayout/>
                )
            }
        </main>
    )
}

export default RootLayout