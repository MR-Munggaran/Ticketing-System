import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";


export const useEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/v1/event/events");
      setEvents(res.data || []);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch events");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return { events, loading, fetchEvents };
};
