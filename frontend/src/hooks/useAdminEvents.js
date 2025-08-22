// hooks/useAdminEventsAuth.js
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

export const useAdminEventsAuth = () => {
  const { authUser } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const getConfig = () => ({
    withCredentials: true, 
  });

  const createEvent = async (data) => {
    if (!authUser) return;
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/v1/event/events", data, getConfig());
      toast.success("Event created successfully!");
      return res.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to create event");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updateEvent = async (id, data) => {
    if (!authUser) return;
    setLoading(true);
    try {
      const res = await axios.put(`http://localhost:5000/api/v1/event/events/${id}`, data, getConfig());
      toast.success("Event updated successfully!");
      return res.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update event");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const deleteEvent = async (id) => {
    if (!authUser) return;
    setLoading(true);
    try {
      await axios.delete(`http://localhost:5000/api/v1/event/events/${id}`, getConfig());
      toast.success("Event deleted successfully!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete event");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    createEvent,
    updateEvent,
    deleteEvent,
  };
};
