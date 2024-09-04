import { useEffect, useState } from "react"
import FriendItem from "./Friend-item"
import FriendSearch from "./friend-search"
import { UserFriend } from "@/interfaces/userFriend.interface"



interface Friend {

    uuid: string
    displayName : string
    photoURL: string
    lastMessage: string

}
const Friends = () => {


    const [friends, setFriends] = useState<Friend[]>([])


    useEffect(() => {

        const getFriends = async () => {

            const res = await fetch('https://randomuser.me/api/?results=15&nat=CO')
            const { results } : UserFriend = await res.json()
            
            const data = results.map((user) => ({

                uuid: user.login.uuid,
                displayName : `${user.name.first} ${user.name.last}`,
                photoURL: user.picture.thumbnail,
                lastMessage: "Hola, ¿Estas bien? :O HPLAAAAAAAAAAAAAAAAA"
            }))
            
            setFriends(data)

        }

        getFriends()
    },[])

    return (
        <>
            <div className="grid grid-rows-[auto_1fr] h-screen border-r">

                <section className="border-b p-4">
                    <h2 className="text-xl font-bold text-gray-700 mb-4">Chats</h2>

                    <FriendSearch/>

                </section>

                <section className="overflow-y-auto custom-scrollbar">

                   {
                        friends.map((friend,i) => (
                            <FriendItem {...friend} key={i}/>
                        ))
                   }
                </section>
            </div>
        </>
    )
}

export default Friends