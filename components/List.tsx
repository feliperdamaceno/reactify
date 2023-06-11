interface ListProps<T> {
  items: T[]
  render: (item: T, index?: number) => React.ReactNode
}

export default function List<T>({ items, render }: ListProps<T>) {
  return <>{items.map((item, index) => render(item, index))}</>
}
