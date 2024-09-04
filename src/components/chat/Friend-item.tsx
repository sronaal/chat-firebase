
const FriendItem = ({displayName,lastMessage,photoURL}) => {
    return (
        <div>


            <article className="flex items-center gap-x-4 py-4 px-5 border-b hover:bg-gray-100 cursor-pointer">
                <img
                    src={photoURL}
                    alt=""
                    className="w-12 h-12 rounded-md"
                />
                <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg text-gray-800">{ displayName }</h3>
                    <p className="text-sm text-gray-800 truncate"> { lastMessage }</p>
                </div>
            </article>
            
          
    
        </div>
    )
}

export default FriendItem