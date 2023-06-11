export default function Post({ params }: { params: { slug: string } }) {
  return <h1>Hello {params.slug}</h1>
}
