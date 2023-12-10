import { Eye, Menu } from "lucide-react"
import React from "react"
import TooltipComponent from "./shared/Tooltip"
import { cn } from "@/lib/utils"

const Header = ({ chatName }: { chatName: string }) => {
  return (
    <header
      className={cn(
        "h-14 w-full shrink-0 border-b bg-background text-foreground flex px-2 justify-between items-center"
      )}
    >
      <TooltipComponent message="Open Sidebar">
        <Menu size={24} />
      </TooltipComponent>
      <h1 className="font-semibold break-all line-clamp-1 max-w-[200px] text-ellipsis overflow-hidden">
        {chatName}
      </h1>
      <TooltipComponent message="View Document">
        <Eye size={24} />
      </TooltipComponent>
    </header>
  )
}

export default Header
