import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate()

  useEffect(()=>{
      navigate("/dashboard")
  }, [navigate])
    return (
        <div className="w-screen h-screen flex flex-row">
          Redirecting...
        </div>
    )
}
