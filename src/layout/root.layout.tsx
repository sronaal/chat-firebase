import ChatLayout from "./chat.layout"
import AuthLayout from "./auth.layout"

const RootLayout = () => {


    const user = true
    return (

        <main>
            { user ? <ChatLayout/> :  <AuthLayout/> }
        </main>
    )
}

export default RootLayout