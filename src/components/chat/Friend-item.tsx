/* eslint-disable @typescript-eslint/no-explicit-any */

const FriendItem = (props : any) => {
    return (
        <div>


            <article className="flex items-center gap-x-4 py-4 px-5 border-b hover:bg-gray-100 cursor-pointer">
                <img
                    src={props.photoURL}
                    alt=""
                    className="w-12 h-12 rounded-md"
                />
                <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg text-gray-800">{ props.displayName }</h3>
                    <p className="text-sm text-gray-800 truncate"> { props.lastMessage }</p>
                </div>
            </article>
            
          
    
        </div>
    )
}

export default FriendItem