import { useState, useCallback } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const useListTicket = (eventId) => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);

 const getConfig = () => ({
    withCredentials: true,
  });

  const listTickets = useCallback(async () => {
    if (!eventId) return;
    setLoading(true);
    try {
      const res = await axios.get(
        `/api/v1/ticket/events/${eventId}/tickets`,
        getConfig()
      );
      setTickets(res.data || []);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch tickets");
    } finally {
      setLoading(false);
    }
  }, [eventId]);

  const deleteTicket = async (id) => {
    try {
      await axios.delete(`/api/v1/ticket/tickets/${id}`, getConfig());
      setTickets((prev) => prev.filter((t) => t._id !== id));
      toast.success("Ticket deleted successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete ticket");
    }
  };

  return { tickets, loading, listTickets, deleteTicket };
};
