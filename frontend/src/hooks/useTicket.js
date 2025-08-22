import { useState, useCallback } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

export const useTicket = () => {
  const { authUser } = useAuthContext();
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);

  const getConfig = () => ({
    withCredentials: true,
  });

  const buyTickets = async ({ eventId, quantity }) => {
    if (!authUser) return;
    setLoading(true);
    try {
    const res = await axios.post(
      "/api/v1/ticket/tickets",
      { eventId, quantity },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
      toast.success("Ticket purchased successfully!");
      return res.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to buy ticket");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const myTickets = useCallback(async (userId) => {
    if (!authUser) return;
    setLoading(true);
    try {
      const res = await axios.get(`/api/v1/ticket/tickets/my/${userId}`, getConfig());
      setTickets(res.data || []);
      return res.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch my tickets");
      throw error;
    } finally {
      setLoading(false);
    }
  }, [authUser]);

  const validateTickets = async ({qrCode}) => {
    setLoading(true)
    try {
    const res = await axios.post(
      "/api/v1/ticket/tickets/validate",
      { qrCode },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
      toast.success("Ticket purchased successfully!");
      return res.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to validate tickets");
    }finally{
        setLoading(false);
    }
  };


  return {
    tickets,
    loading,
    buyTickets,
    myTickets,
    validateTickets
  };
};
