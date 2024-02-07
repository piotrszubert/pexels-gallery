export async function GET() {
  const apiKey = process.env.PEXELS_API_KEY

  if (!apiKey) {
    return Response.json(
      { message: "Pexels API key not found in environment variables" },
      { status: 401 }
    )
  }

  const res = await fetch(
    `https://api.pexels.com/v1/curated?per_page=${process.env.IMAGES_PER_PAGE}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKey,
      },
      next: {
        revalidate: 3600, //1h
      },
    }
  )

  const data = await res.json()

  return Response.json({ data }, { status: 200 })
}
