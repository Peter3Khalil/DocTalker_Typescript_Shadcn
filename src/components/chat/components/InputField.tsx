"use client"
import React from "react"
import TooltipComponent from "../../shared/Tooltip"
import { SendHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"
type InputFieldProps = {
  message: string
  setMessage: (message: string) => void
  onClick: () => void
  disabled?: boolean
}
const InputField = ({
  message,
  setMessage,
  onClick,
  disabled = false,
}: InputFieldProps) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onClick()
  }
  console.log("InputField")
  return (
    <form
      onSubmit={onSubmit}
      className="flex shrink-0 flex-col items-center justify-center gap-1 border-t bg-background  px-2 py-3 text-foreground dark:border-foreground/30"
    >
      <div className="flex w-full items-center gap-1">
        <input
          type="text"
          className="w-full rounded border bg-inherit p-2 text-lg outline-none focus:border-primary dark:border-foreground/30 dark:focus:border-primary"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <TooltipComponent message="Send message">
          <button type="button" className={cn(`text-primary`,disabled?"text-primary/30":"")} disabled={disabled}>
            <SendHorizontal
              size={24}
              onClick={onClick}
            />
          </button>
        </TooltipComponent>
      </div>
      <p className="text-center text-[12px] text-foreground/50">
        DocTalker can make mistakes. Consider checking important information.
      </p>
    </form>
  )
}

export default InputField
