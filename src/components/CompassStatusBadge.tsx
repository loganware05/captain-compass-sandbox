import './CompassStatusBadge.css'

/** Installed NorthStar / Captain's Compass workflow version for this sandbox. */
export const COMPASS_WORKFLOW_VERSION = '1.71.1'

export default function CompassStatusBadge() {
  return (
    <p
      className="compass-status-badge"
      role="status"
      aria-label={`NorthStar workflow version ${COMPASS_WORKFLOW_VERSION}`}
    >
      <span className="compass-status-badge__label">NorthStar workflow</span>
      <span className="compass-status-badge__version">v{COMPASS_WORKFLOW_VERSION}</span>
    </p>
  )
}
