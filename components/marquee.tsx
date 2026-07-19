const words = [
  'Data',
  'Model',
  'Train',
  'Predict',
  'Optimize',
  'Deploy',
  'Impact',
  'Innovate',
]

export function Marquee() {
  const row = [...words, ...words]
  return (
    <div
      className="overflow-hidden border-y-2 border-foreground bg-foreground py-3"
      aria-hidden="true"
    >
      <div className="animate-marquee flex w-max items-center">
        {[...row, ...row].map((word, i) => (
          <span
            key={i}
            className="flex items-center gap-6 pr-6 font-mono text-sm font-bold uppercase tracking-widest text-background"
          >
            {word}
            <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
