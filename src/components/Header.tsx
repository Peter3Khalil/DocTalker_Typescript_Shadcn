import React from "react"
import TooltipComponent from "./shared/Tooltip"
import Icon from "./shared/Icon"

const Header = ({ chatName }: { chatName: string }) => {
  return (
    <header
      className={
        "flex h-14 w-full shrink-0 items-center justify-between border-b bg-background px-2 text-foreground dark:border-foreground/30"
      }
    >
      <TooltipComponent message="Open Sidebar">
        <Icon name="Menu" size={24} />
      </TooltipComponent>
      <h1 className="line-clamp-1 max-w-[200px] overflow-hidden text-ellipsis break-all font-semibold">
        {chatName}
      </h1>
      <TooltipComponent message="View Document">
        <Icon name="Eye" size={24} />
      </TooltipComponent>
    </header>
  )
}

export default Header
