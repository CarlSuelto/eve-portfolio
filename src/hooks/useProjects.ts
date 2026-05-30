import { useEffect, useState } from "react"
import { supabase } from "../services/supabaseClient"

export const useProjects = () => {
  const [projects, setProjects] = useState<any[]>([])

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    const { data } = await supabase.from("projects").select("*")
    setProjects(data || [])
  }

  return { projects }
}