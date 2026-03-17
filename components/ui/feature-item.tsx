import Image from 'next/image';
import React from 'react'

const FeatureItem = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex gap-2">
      <Image
        src={"/icons/ui/tick-icon.png"}
        alt="tick icon"
        width={16}
        height={16}
        className="mt-1 h-4 w-4"
      ></Image>
      <span className="text-zinc-500">{children}</span>
    </div>
  )
}


export default FeatureItem