import React, { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import BotMessage from "./components/BotMessage"
import UserMessage from "./components/UserMessage"

export type Message = {
  id: string | number
  message: string
  type: "assistant" | "user"
  isLoaded?: boolean
}
const InputField = dynamic(
  () => import("@/components/chat/components/InputField"),
  { ssr: false },
)
const Chat = () => {
  const [chats, setChats] = useState<Message[]>([])
  const [message, setMessage] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const disable = message.trim() === "" || isLoading
  const onClick = () => {
    if (disable) return
    if (message) {
      setIsLoading(true)
      setChats([
        ...chats,
        { id: chats.length, message, type: "user", isLoaded: true },
        {
          id: chats.length,
          message: "Thinking...",
          type: "assistant",
          isLoaded: false,
        },
      ])
      setMessage("")
    }
    setTimeout(() => {
      setIsLoading(false)
      setChats([
        ...chats,
        { id: chats.length, message, type: "user" },
        {
          id: chats.length,
          isLoaded: true,
          message:
            "Lorem peterLorem peterLorem peterLorem peterLorem peterLorem peterLorem peterLorem peterLorem peterLorem peterLorem peterLorem peterLorem peterLorem peterLorem peterLorem peterLorem peterLorem peterLorem peterLorem peterLorem peterLorem peterLorem peterLorem peterLorem peterLorem peterLorem peterLorem peterLorem peterLorem peterLorem peterLorem peterLorem peterLorem peterLorem peter",
          type: "assistant",
        },
      ])
    }, 3000)
  }

  useEffect(() => {
    const chat = document.getElementById("chat")
    chat?.scrollTo(0, chat.scrollHeight)
  }, [chats])
  return (
    <main className="flex h-full w-full flex-col">
      {/* Chat */}
      <ul
        className="flex h-[20vh] flex-grow flex-col gap-2 overflow-auto bg-background p-2 text-foreground"
        id="chat"
      >
        {chats?.map((chat) => (
          <li key={chat.id + chat.message}>
            {chat.type === "assistant" ? (
              isLoading ? (
                <BotMessage
                  message={chat.message}
                  className="animate-pulse"
                  isLoaded={chat.isLoaded}
                />
              ) : (
                <BotMessage message={chat.message} isLoaded={chat.isLoaded} />
              )
            ) : (
              <UserMessage message={chat.message} />
            )}
          </li>
        ))}
      </ul>
      {/* Form */}
      <InputField
        onClick={onClick}
        message={message}
        setMessage={setMessage}
        disabled={disable}
      />
    </main>
  )
}

export default Chat
