import React, { useEffect, useState } from "react"
import Header from "@/components/Header"
import Chat, { Message } from "@/components/chat/Chat"
const Home = () => {

  return (
    <div className={`flex h-[100svh] w-full flex-col `}>
      <Header chatName="PeterPeterPeterPeterPeterPeterPeterPeterPeter" />
      <Chat />
    </div>
  )
}

export default Home
