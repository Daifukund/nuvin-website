import type { Locale } from '@/lib/blog'

// Mandatory safety footer for every anxiety/mental-health article.
// Because Nuvin publishes health (YMYL) content automatically, this must be
// baked into the shared article layout so it appears on EVERY post regardless
// of what the article body says. It provides real crisis resources.
//
// Resources are shown per language/region. US 988 line is always included as a
// widely recognized fallback; FR adds the French national line (3114).

const COPY: Record<
  Locale,
  { intro: string; lines: { label: string; value: string }[] }
> = {
  en: {
    intro:
      'This article is educational and is not a substitute for professional medical advice. If you are in crisis or thinking about harming yourself, please reach out now, you deserve support.',
    lines: [
      { label: 'US, Suicide & Crisis Lifeline', value: 'Call or text 988' },
      { label: 'US, Crisis Text Line', value: 'Text HOME to 741741' },
      { label: 'Emergency', value: 'Call 911 (US) or your local emergency number' },
      {
        label: 'International',
        value: 'findahelpline.com lists free crisis lines worldwide',
      },
    ],
  },
  fr: {
    intro:
      "Cet article a une vocation informative et ne remplace pas l'avis d'un professionnel de santé. Si vous traversez une crise ou avez des pensées suicidaires, parlez-en dès maintenant, vous méritez d'être aidé.",
    lines: [
      { label: 'France, Numéro national de prévention du suicide', value: 'Appelez le 3114 (gratuit, 24h/24)' },
      { label: 'Urgences', value: 'Appelez le 112 (Europe) ou le 15 (SAMU)' },
      {
        label: 'International',
        value: 'findahelpline.com recense des lignes d\'écoute gratuites dans le monde entier',
      },
    ],
  },
}

export default function CrisisDisclaimer({ lang }: { lang: Locale }) {
  const copy = COPY[lang]
  return (
    <aside
      role="note"
      aria-label={lang === 'fr' ? "Ressources d'aide" : 'Support resources'}
      className="mt-12 rounded-xl border border-nuvin-purple/20 bg-nuvin-purple/5 p-6 text-sm text-gray-700"
    >
      <p className="mb-3 leading-relaxed">{copy.intro}</p>
      <ul className="space-y-1.5">
        {copy.lines.map((line) => (
          <li key={line.label}>
            <span className="font-semibold text-gray-900">{line.label}:</span>{' '}
            {line.value}
          </li>
        ))}
      </ul>
    </aside>
  )
}
