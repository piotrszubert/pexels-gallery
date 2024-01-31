export async function GET() {
  const res = await fetch(
    `https://api.pexels.com/v1/curated?per_page=${process.env.IMAGES_PER_PAGE}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.PEXELS_API_KEY!,
      },
    }
  )

  const data = await res.json()

  return Response.json({ data })
}
