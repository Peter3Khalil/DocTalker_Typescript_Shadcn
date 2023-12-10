import React from "react"
import Header from "@/components/Header"
const Home = () => {
  return (
    <div className={`w-full h-[100svh] flex flex-col`}>
      <Header chatName="PeterPeterPeterPeterPeterPeterPeterPeterPeter" />
      <main className="w-full h-full flex flex-col">
        <div className="h-[calc(100svh-7.5rem)] bg-background text-foreground overflow-auto">
          <div className="w-full h-[320vh]"></div>
        </div>
        <div className="h-16 border-t shrink-0 bg-primary"></div>
      </main>
    </div>
  )
}

export default Home
