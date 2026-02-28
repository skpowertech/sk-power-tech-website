'use client'

import { cn } from "@/lib/utils"
import { useEffect } from "react"

interface ToastProps {
  message: string,
  show: boolean,
  onClose: () => void
}

const Toast = ({message, show, onClose}: ToastProps) => {

  useEffect(() => {
    if(!show) return

    const timer = setTimeout(() => {
      onClose()
    }, 2500)
  
    return () => clearTimeout(timer)
  }, [show, onClose])
  

  return (
    <div className={cn(
      'fixed top-16  left-1/2 -translate-x-1/2  z-50 transition-all duration-300 px-4', 
      show
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-4 pointer-events-none'
    )}>
      <div className="w-full max-w-sm flex items-center gap-4 px-7 py-5 rounded-xl bg-white shadow-xl border border-zodiac-100 font-medium text-center" >
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-zodiac-600/10">
          <svg
            className="w-4 h-4 text-zodiac-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <span>{message}</span>
      </div>
    </div>
  )
}

export default Toast