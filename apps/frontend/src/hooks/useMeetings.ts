import { useEffect, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import axios from "axios";
import { BACKEND_URL } from "../lib/constants/urls";
import { Meetings } from "../lib/@types/Items/calendar";

export const useMeetings = () => {
  const [meetings, setMeetings] = useState<Meetings | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { session } = useAuth();

  useEffect(() => {
    const fetchMeetings = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get<Meetings>(`${BACKEND_URL}/calendar/meetings/upcoming/`, {
          headers: {
            Authorization: `Bearer ${session}`
          }
        })
        setMeetings(response.data)
      } catch (error) {
        console.error("failed to fetch upcoming meetings: ", error)
      } finally {
        setIsLoading(false)
      }
    }
    if (session) {
      fetchMeetings()
    }
  }, [session])

  return { meetings, isLoading }
}
