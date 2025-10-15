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
        src="/apple-app-store-badge.svg"
        alt="Download on the App Store"
        width={200}
        height={60}
        priority
        className="h-auto w-[200px] sm:w-[220px]"
      />
    </a>
  )
}
