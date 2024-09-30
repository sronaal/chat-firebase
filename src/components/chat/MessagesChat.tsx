import Message from "./Message"

export const MessageChat = () => {

    return (

        <main className="bg-indigo-100 p-4 space-y-4 overflow-y-auto custom-scrollbar">
            {
                Array.from({ length: 10 }).map(() => (
                    <>
                        <Message
                            message="Hola que tal :v"
                            time="3:30 AM"
                            photoURL="https://randomuser.me/api/portraits/thumb/men/12.jpg"
                            isCurrentUser={false}

                        />

                        <Message
                            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis corrupti, placeat nam enim eveniet nemo consectetur error beatae nulla excepturi aperiam iste. Minima repudiandae aperiam similique? Totam consectetur libero sed."
                            time="3:30 AM"
                            photoURL="https://lh3.googleusercontent.com/a/ACg8ocKxESgokM1qYOlI7E8eT7TeEr_0Sqw7QkJZsvmzJoQzpYXUpRvy=s288-c-no"
                            isCurrentUser={true}
                        />


             
                    </>
                ))
            }




        </main>
    )
}