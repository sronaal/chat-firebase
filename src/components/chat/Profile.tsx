import { Button } from "../ui/button"

const Profile = () => {


    return (
        <>
            <div className="p-4 text-center">
          
                <h2 className="text-xl font-bold text-gray-700 mb-4">Profile</h2>
                <img src="https://lh3.googleusercontent.com/a/ACg8ocKxESgokM1qYOlI7E8eT7TeEr_0Sqw7QkJZsvmzJoQzpYXUpRvy=s288-c-no" 
                className="w-20 h-20 mb-4 mx-auto rounded-full" alt="" />
                <p className="text-sm font-semibold text-gray-600">Ronal Sánchez</p>
                <p className="text-sm font-medium text-gray-800 mb-2">ronal.sanx21@gmail.com</p>
                <Button className="w-full">Logout</Button>
            </div>
        </>
    )

}

export default Profile