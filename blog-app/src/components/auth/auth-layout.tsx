'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Login from "./login-form"
import Register from "./register-form"
import { useState } from "react"

const AuthLayout = () => {

  const [activeTab, setActiveTab] = useState("login")

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="w-full max-w-md p-5 bg-card rounded-lg shadow-sm border">
        <h1 className="text-2xl font-bold text-center mb-6 ">
          Welcome!
        </h1>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList variant={'default'} className="grid grid-cols-2 ">
            <TabsTrigger value="login">
              Login
            </TabsTrigger>
            <TabsTrigger value="register">
              Register
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Login />
          </TabsContent>
          <TabsContent value="register">
            <Register />
          </TabsContent>

        </Tabs>
      </div>

    </div>
  )
}

export default AuthLayout