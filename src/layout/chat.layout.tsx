import Friends from "@/components/chat/Friends"
import Messages from "@/components/chat/Messages"
import Profile from "@/components/chat/Profile"

const ChatLayout = () => {


    return (

        <div className="grid grid-cols-[1fr_3fr_1fr] h-screen">
            <Friends/>
            <Messages/>
            <Profile/>
        </div>
    )
}


export default ChatLayout