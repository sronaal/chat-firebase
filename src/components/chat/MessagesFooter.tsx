import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { FaRegSmileBeam } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

export const MessageFooter = () => {

    return (

        <footer className="border-t p-4 flex gap-x-2">

            <Button>
                <FaRegSmileBeam className="text-xl"/>
            </Button>

            <Input placeholder="Type a messsage"/>
            <Button>
                <IoSend className="text-xl"/>
            </Button>
        </footer>
    )
}