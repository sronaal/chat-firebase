import { Button } from "@/components/ui/button"

export const MessageHeader = () => {


    return (
        <header className="border-b p-4 flex items-center gap-x-4">
            <img src="https://randomuser.me/api/portraits/thumb/men/12.jpg"
                alt="foto" className="rounded-full size-15" />
            <div className="flex-1">
                <p className="text-lg font-semibold text-gray-600">Lorem, ipsum dolor.</p>
                <p className="text-xs text-green-700">Active</p>
            </div>

            <div className="ml-auto">
                <Button>Close chat</Button>
            </div>
        </header>
    )
}