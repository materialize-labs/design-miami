import { IBlog } from '@pages/api/[blog]'

async function getBlog(blog: string) {
  const res = await fetch(`${process.env.SITE_URL}/api/${blog}`, {
    cache: 'force-cache',
    next: { revalidate: 60 },
  })
  return res.json()
}

const Blog = async ({ params }: { params: { blog: string } }) => {
  const data: IBlog = await getBlog(params.blog)

  // Return
  return <div>Blog {data.name}</div>
}

export default Blog
