import Image from 'next/image'

interface AppStoreButtonProps {
  href: string
  className?: string
}

export default function AppStoreButton({ href, className = '' }: AppStoreButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block transition-transform-smooth hover-lift ${className}`}
      aria-label="Download Nuvin on the App Store"
    >
      <Image
        src="/app-store-badge.svg"
        alt="Download on the App Store"
        width={135}
        height={40}
        priority
        className="h-auto w-[135px] sm:w-[150px]"
      />
    </a>
  )
}
