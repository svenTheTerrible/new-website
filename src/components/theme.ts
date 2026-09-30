const SPRITE_MAP = [
  '00100000100',
  '00010001000',
  '00111111100',
  '01101110110',
  '11111111111',
  '10111111101',
  '10100000101',
  '00011011000',
]

export function buildSprite(px: number): string {
  const pixels: string[] = []
  for (let y = 0; y < SPRITE_MAP.length; y++) {
    const row = SPRITE_MAP[y]
    for (let x = 0; x < row.length; x++) {
      if (row[x] === '1') pixels.push(`${x * px}px ${y * px}px 0 0 var(--glow)`)
    }
  }
  return pixels.join(',')
}
