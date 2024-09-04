import { MessageHeader } from "./Messages-header"
import { MessageChat } from "./MessagesChat"
import { MessageFooter } from "./MessagesFooter"

const Messages = () => {

    return (

        <>
            <article className="grid grid-rows-[auto_1fr_auto] h-screen">

                <MessageHeader />

                <MessageChat />

                <MessageFooter />

            </article>
        </>
    )
}

export default Messages