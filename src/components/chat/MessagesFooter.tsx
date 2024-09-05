import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { useState } from "react";
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';

import { FaRegSmileBeam } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

export const MessageFooter = () => {


    const [message, setMessage] = useState("")
    const [EmojiPickerOpen, setEmojiPickerOpen] = useState(false)

    const handleSendMessage = async () => {

        console.log(message)

        setEmojiPickerOpen(false)
        setMessage("")
    }

    const handleSendEmoji = async (emojiData: EmojiClickData,) => {


        setMessage((prev) => prev + emojiData.emoji)
    }




    return (

        <footer className="border-t p-4 flex gap-x-2 relative">
            <Button onClick={() => setEmojiPickerOpen((prev => !prev))}>
                <FaRegSmileBeam className="text-xl" />
            </Button>
            <div className="absolute bottom-12">

                <EmojiPicker open={EmojiPickerOpen} onEmojiClick={handleSendEmoji} />
            </div>
            <Input
                placeholder="Type a messsage"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <Button onClick={handleSendMessage}>
                <IoSend className="text-xl" />
            </Button>
        </footer>
    )
}