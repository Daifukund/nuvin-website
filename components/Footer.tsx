import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full mt-auto bg-nuvin-navy text-white">
      <div className="max-w-5xl mx-auto px-4 py-14">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="flex items-center gap-3">
            <Image src="/nuvin-icon.png" alt="" width={36} height={36} className="rounded-lg" />
            <span className="text-xl font-extrabold">Nuvin</span>
          </div>

          <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-white/80">
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span className="text-white/30" aria-hidden>•</span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-white/30" aria-hidden>•</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="text-white/30" aria-hidden>•</span>
            <a href="mailto:nathan@nuvin.app" className="hover:text-white transition-colors">Support</a>
          </nav>

          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Nuvin. All rights reserved.
          </p>

          <p className="text-xs text-white/50 max-w-2xl leading-relaxed">
            Nuvin helps with everyday, situational anxiety and is not a substitute
            for professional medical care. If you are experiencing a mental health
            crisis, call 911 or the Suicide &amp; Crisis Lifeline at 988 (US).
          </p>
        </div>
      </div>
    </footer>
  )
}
