import FriendItem from "./Friend-item"

const Friends = () => {

    return (
        <>
            <div className="grid grid-rows-[auto_1fr] h-screen">

                <section className="border-b p-4">
                    <h2>Chats</h2>
                    <div>Input Search</div>
                </section>

                <section className="overflow-y-auto">
                    <FriendItem/>
                    <FriendItem/>
                    <FriendItem/>
                </section>
            </div>
        </>
    )
}

export default Friends