interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-2xl">
      {/* Icon */}
      <div className="text-6xl mb-4 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-md">
        {title}
      </h3>

      {/* Description */}
      <p className="text-white/90 text-base leading-relaxed drop-shadow">
        {description}
      </p>
    </div>
  )
}
