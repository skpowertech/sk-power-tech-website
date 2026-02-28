"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface ToastProps {
  message: string;
  show: boolean;
  onClose: () => void;
}

const Toast = ({ message, show, onClose }: ToastProps) => {
  useEffect(() => {
    if (!show) return;

    const timer = setTimeout(() => {
      onClose();
    }, 2500);

    return () => clearTimeout(timer);
  }, [show, onClose]);

  return (
    <div
      className={cn(
        "fixed top-16 left-1/2 z-50 -translate-x-1/2 px-4 transition-all duration-300",
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <div className="border-zodiac-100 flex w-full max-w-sm items-center gap-4 rounded-xl border bg-white px-7 py-5 text-center font-medium shadow-xl">
        <div className="bg-zodiac-600/10 flex h-6 w-6 items-center justify-center rounded-full">
          <svg
            className="text-zodiac-600 h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
