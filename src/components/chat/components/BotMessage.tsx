import React, { memo, useState } from "react"
import Icon from "@/components/shared/Icon"
type BotMessageProps = {
  message: string
  className?: string
  isLoaded?: boolean
}
const BotMessage = ({ message, className, isLoaded }: BotMessageProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false)
  const copy = ()=>{
    navigator.clipboard.writeText(message).then(()=>{
      setIsCopied(true)
      setTimeout(()=>{
        setIsCopied(false)
      },1000)
    })
  }
  console.log("BotMessage")
  return (
    <div
      className={`flex w-full flex-col rounded bg-primary p-3 text-primary-foreground ${className}}`}
    >
      <div className="flex w-full items-start  gap-1">
        <Icon name={"Bot"} size={20} className="shrink-0" />
        <p className="break-all text-sm font-semibold">{message}</p>
      </div>
      {isLoaded && (
        <div className="flex items-center self-end gap-1 py-2">
          <button>
            <Icon name="Star" size={16} />
          </button>
          <button>
            {isCopied ? <Icon name="Check" size={16} /> : <Icon name="Copy" size={16} onClick={copy}/>}
          </button>
        </div>
      )}
    </div>
  )
}

export default memo(BotMessage)
