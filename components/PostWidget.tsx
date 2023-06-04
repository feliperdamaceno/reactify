interface PostWidgetProps {
  type: 'Recent Posts' | 'Related Posts'
}

export default function PostWidget({ type }: PostWidgetProps) {
  return (
    <section aria-label={type}>
      <h2>{type}</h2>
    </section>
  )
}
