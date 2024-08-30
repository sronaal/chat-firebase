import Login from "@/components/auth/Login"
import Register from "@/components/auth/Register"

const AuthLayout = () => {

    return (
        <div className="min-h-screen  grid md:grid-cols-2 
        place-content-center md:place-items-center 
        max-w-[1200px] mx-auto">
            <Login />
            <Register />
        </div>
    )

}

export default AuthLayout