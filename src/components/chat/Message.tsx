import { cn } from "@/lib/utils";

interface MessageProps {

    message: string;
    time: string;
    photoURL: string
    isCurrentUser: boolean
}

const Message = ({
    message,
    time,
    photoURL,
    isCurrentUser
}: MessageProps) => {
    return (

        <div>
            <article className={ 
                cn("flex gap-x-2", {
                    "flex-row-reverse": isCurrentUser,
                    "flex-row": !isCurrentUser
                })
            }>
                <img src={photoURL} 
                     className="rounded-full size-10"
                />

                
                <div 
                    className={
                        cn("rounded-md p-4 text-gray-700 max-w-[70%]", {
                            "bg-blue-300": isCurrentUser,
                            "bg-white": !isCurrentUser
                        })
                    }>
                    <p>{message}</p>
                    <p className="text-right text-xs p-1"> {time} </p>
                </div>
            </article>

        </div>
    )
}

export default Message