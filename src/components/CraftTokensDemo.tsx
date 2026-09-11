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
 * Bounded craft design-tokens demo (Skill: craft-tokens-design-system).
 * Run: NS-SKILL-001 / OVA-16 dispatch. In-repo CSS variables only —
 * inspired by starred design-system signals; never clone or install Stars.
 */
function CraftTokensDemo() {
  const headingId = useId()
  const usageId = useId()
  const [active, setActive] = useState<(typeof TOKEN_SWATCHES)[number]['name']>(
    '--craft-sea',
  )
  const activeSwatch =
    TOKEN_SWATCHES.find((token) => token.name === active) ?? TOKEN_SWATCHES[2]
  const usageSnippet = [
    `color: var(${activeSwatch.name});`,
    `border-color: var(${activeSwatch.name});`,
    `background: color-mix(in srgb, var(${activeSwatch.name}) 14%, white);`,
  ].join('\n')

  return (
    <section
      id="craft-tokens"
      className="craft-tokens"
      aria-labelledby={headingId}
    >
      <div className="craft-tokens__atmosphere" aria-hidden="true" />
      <div className="craft-tokens__content">
        <p className="craft-tokens__eyebrow">NorthStar sandbox · craft tokens</p>
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

        <figure
          className="craft-tokens__usage"
          style={{ ['--craft-active' as string]: `var(${activeSwatch.name})` }}
          aria-labelledby={usageId}
        >
          <figcaption id={usageId} className="craft-tokens__usage-caption">
            Token usage — apply <code>{activeSwatch.name}</code> in CSS
          </figcaption>
          <div className="craft-tokens__usage-body">
            <pre className="craft-tokens__usage-code">
              <code>{usageSnippet}</code>
            </pre>
            <div
              className="craft-tokens__usage-preview"
              data-testid="craft-token-usage-preview"
              aria-hidden="true"
            >
              <span>{activeSwatch.label} surface</span>
            </div>
          </div>
        </figure>

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
