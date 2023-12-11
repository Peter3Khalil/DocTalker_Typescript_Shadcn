import React, { memo } from "react"
import Icon from "@/components/shared/Icon"

const UserMessage = ({ message }: { message: string }) => {
  console.log("UserMessage")
  return (
    <div className={`flex w-full items-start gap-1 rounded px-3 py-2`}>
      <Icon name={"User"} size={20} className="shrink-0" />
      <p className="break-all text-sm font-semibold">{message}</p>
    </div>
  )
}

export default memo(UserMessage)
