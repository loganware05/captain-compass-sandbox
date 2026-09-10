import { useId, useState } from 'react'
import './CraftTokensDemo.css'

const TOKEN_SWATCHES = [
  { name: '--craft-ink', label: 'Ink', value: 'var(--craft-ink)' },
  { name: '--craft-paper', label: 'Paper', value: 'var(--craft-paper)' },
  { name: '--craft-sea', label: 'Sea', value: 'var(--craft-sea)' },
  { name: '--craft-sand', label: 'Sand', value: 'var(--craft-sand)' },
  { name: '--craft-signal', label: 'Signal', value: 'var(--craft-signal)' },
] as const

/**
 * Bounded M23 UI experiment: in-repo craft design tokens demo.
 * Inspired by starred design-system / frontend-ui discovery signals —
 * not a vendor install and not a third-party clone.
 */
function CraftTokensDemo() {
  const headingId = useId()
  const [active, setActive] = useState<(typeof TOKEN_SWATCHES)[number]['name']>(
    '--craft-sea',
  )
  const activeSwatch =
    TOKEN_SWATCHES.find((token) => token.name === active) ?? TOKEN_SWATCHES[2]

  return (
    <section
      id="craft-tokens"
      className="craft-tokens"
      aria-labelledby={headingId}
    >
      <div className="craft-tokens__atmosphere" aria-hidden="true" />
      <div className="craft-tokens__content">
        <p className="craft-tokens__eyebrow">NorthStar sandbox · M23</p>
        <h2 id={headingId}>Craft tokens</h2>
        <p className="craft-tokens__lede">
          A bounded design-system experiment using in-repo CSS variables —
          inspired by starred craft/token repos, without installing them.
        </p>

        <div
          className="craft-tokens__stage"
          style={{ ['--craft-active' as string]: `var(${activeSwatch.name})` }}
        >
          <p className="craft-tokens__stage-label">
            Active token: <code>{activeSwatch.name}</code>
          </p>
          <button type="button" className="craft-tokens__cta">
            Preview {activeSwatch.label}
          </button>
        </div>

        <ul className="craft-tokens__swatches" role="list">
          {TOKEN_SWATCHES.map((token) => {
            const selected = token.name === active
            return (
              <li key={token.name}>
                <button
                  type="button"
                  className={
                    selected
                      ? 'craft-tokens__swatch is-selected'
                      : 'craft-tokens__swatch'
                  }
                  aria-pressed={selected}
                  aria-label={`Select ${token.label} token ${token.name}`}
                  onClick={() => setActive(token.name)}
                >
                  <span
                    className="craft-tokens__chip"
                    style={{ background: token.value }}
                    aria-hidden="true"
                  />
                  <span className="craft-tokens__swatch-text">
                    <span className="craft-tokens__swatch-label">
                      {token.label}
                    </span>
                    <code>{token.name}</code>
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default CraftTokensDemo
