import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full py-12 mt-auto">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="space-y-6">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center items-center gap-6 text-sm text-white/90">
            <Link
              href="/blog"
              className="hover:text-white transition-colors underline decoration-white/50 hover:decoration-white"
            >
              Blog
            </Link>
            <span className="text-white/50">•</span>
            <Link
              href="/privacy"
              className="hover:text-white transition-colors underline decoration-white/50 hover:decoration-white"
            >
              Privacy Policy
            </Link>
            <span className="text-white/50">•</span>
            <Link
              href="/terms"
              className="hover:text-white transition-colors underline decoration-white/50 hover:decoration-white"
            >
              Terms of Service
            </Link>
            <span className="text-white/50">•</span>
            <a
              href="mailto:support@nuvin.app"
              className="hover:text-white transition-colors underline decoration-white/50 hover:decoration-white"
            >
              Support
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-white/80">
            © {new Date().getFullYear()} Nuvin. All rights reserved.
          </p>

          {/* Medical Disclaimer */}
          <p className="text-xs text-white/70 max-w-2xl mx-auto">
            Not a substitute for professional medical care. If you're experiencing a mental health crisis,
            call 911 or the National Suicide Prevention Lifeline at 988.
          </p>
        </div>
      </div>
    </footer>
  )
}
