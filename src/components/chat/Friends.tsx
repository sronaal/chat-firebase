import FriendItem from "./Friend-item"
import FriendSearch from "./friend-search"

const Friends = () => {

    return (
        <>
            <div className="grid grid-rows-[auto_1fr] h-screen">

                <section className="border-b p-4">
                    <h2 className="text-xl font-bold text-gray-700 mb-4">Chats</h2>
                    
                    <FriendSearch/>

                </section>

                <section className="overflow-y-auto custom-scrollbar">
                    <FriendItem/>
                    <FriendItem/>
                    <FriendItem/>
                </section>
            </div>
        </>
    )
}

export default Friends