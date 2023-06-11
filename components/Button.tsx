const variants = {
  regular:
    'px-3 font-semibold rounded-sm shadow-sm bg-emerald-500 text-white py-1.5',
  transparent: 'px-3 font-semibold py-1.5 drop-shadow-sm text-zinc-800'
} as const

interface ButtonProps {
  type: keyof typeof variants
  render: (styles: string) => JSX.Element
}

export default function Button({ type, render }: ButtonProps) {
  return render(variants[type])
}
