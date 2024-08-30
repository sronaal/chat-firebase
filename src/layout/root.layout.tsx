import Login from "@/components/auth/Login"
import Register from "@/components/auth/Register"

const RootLayout = () => {


    const user = false
    return (

        <div className="">
            {
                user ? 
                (
                    <h1>Bievenido!</h1>
                ) : 
                (
                    <div className="h-screen bg-orange-300 grid grid-cols-2 place-content-center place-items-center">
                        <Login />
                        <Register />
                    </div>
                )
            }
        </div>
    )
}

export default RootLayout