import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"

export default async function Notes() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data: notes } = await supabase.from("notes").select()

  return (
    <div>
      {notes?.map((note) => (
        <div>
          {note.id} - {note.title}
        </div>
      ))}
    </div>
  )
}
