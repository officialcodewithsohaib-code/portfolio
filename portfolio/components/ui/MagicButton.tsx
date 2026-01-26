import React from 'react'

function MagicButton({
  title,
  icon,
  position,
  handleClick,
  otherClasses
}: {
  title: string,
  icon: React.ReactNode,
  position: string,
  handleClick?: () => void,
  otherClasses?: string
}) {
  return (
    <button
      className={`relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white ${otherClasses}`}
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0066CC_0%,#4A90E2_50%,#0066CC_100%)]" />
      <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-7 text-sm font-medium text-blue-600 backdrop-blur-3xl gap-2 hover:bg-blue-50 transition-colors`}>
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  )
}

export default MagicButton
