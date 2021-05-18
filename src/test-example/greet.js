export default function greet(...names) {
  if (names.length === 0) return 'Hi, stranger'
  if (names.length >= 2) return 'Hi, guys'
  const name = names[0]
  return name === 'Jerry' ? `Hi, coach` : `Hi, ${name}`
}
