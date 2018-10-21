export default function opt(string) {
  return string[0].split('\n').map((s) => s.trim()).join('')
}