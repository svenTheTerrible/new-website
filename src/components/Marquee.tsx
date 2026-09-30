const ITEM = 'INSERT COIN ◆ PRESS START ◆ GAME OVER? CONTINUE? ◆ FULLSTACK ENGINEER ◆\u00A0'

export function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <span>{ITEM}</span>
        <span>{ITEM}</span>
      </div>
    </div>
  )
}
