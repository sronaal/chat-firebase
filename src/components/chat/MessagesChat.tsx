export const MessageChat = () => {

    return (

        <main className="bg-indigo-100 p-4 space-y-4">

            <article className="flex gap-x-2">
                <img src="https://randomuser.me/api/portraits/thumb/men/12.jpg" className="rounded-full size-10"></img>
                <div className="bg-white rounded-md p-4 text-gray-700 max-w-[70%]">
                    <p>No puede ser verdad lo que pasado</p>
                    <p className="text-right text-xs p-1">right now</p>
                </div>
            </article>


            <article className="flex gap-x-2">
                <img src="https://randomuser.me/api/portraits/thumb/men/12.jpg" className="rounded-full size-10"></img>
                <div className="bg-white rounded-md p-4 text-gray-700 max-w-[70%]">
                    <p>Lorem ipsum dolor sit.</p>
                    <p className="text-right text-xs p-1">right now</p>
                </div>
            </article>


            <article className="flex gap-x-2 flex-row-reverse ">
                <img src="https://lh3.googleusercontent.com/a/ACg8ocKxESgokM1qYOlI7E8eT7TeEr_0Sqw7QkJZsvmzJoQzpYXUpRvy=s288-c-no" 
                className="rounded-full size-10 order-2"></img>
                <div className="bg-white rounded-md p-4 text-gray-700 max-w-[70%]">
                    <p>Holaa
                    </p>
                    <p className="text-left text-xs p-1">right now</p>
                </div>
            </article>

        </main>
    )
}