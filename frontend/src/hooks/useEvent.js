import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const useEvent = (id) => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchEvent = async () => {
    if (!id) return;
    setLoading(true);
    try {
      const res = await axios.get(
        `/api/v1/event/events/${id}`
      );
      setEvent(res.data || null);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch event");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvent();
  }, [id]);

  return { event, loading, fetchEvent };
};