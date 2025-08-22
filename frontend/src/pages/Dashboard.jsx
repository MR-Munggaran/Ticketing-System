import React, { useMemo, useState, useEffect } from "react";
import { FaPlus, FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import EventModal from "../components/Dashboard/EventModal";
import TableDashboard from "../components/Dashboard/TableDashboard";
import SearchDashboard from "../components/Dashboard/SearchDashboard";
import { useEvents } from "../hooks/useEvents";
import { useAdminEventsAuth } from "../hooks/useAdminEvents";
import { useAuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { authUser } = useAuthContext();
  const { events } = useEvents(); // fetch dari hook
  const { loading, createEvent, updateEvent, deleteEvent } = useAdminEventsAuth();

  // State lokal untuk tabel agar bisa refresh otomatis
  const [localEvents, setLocalEvents] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    datetime: "",
    price: "",
    capacity: "",
    description: "",
    image: null // gunakan File untuk upload
  });

  const [search, setSearch] = useState("");
  const [filterCity, setFilterCity] = useState("all");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 5;

  // Sync state lokal dengan events dari hook
  useEffect(() => {
    setLocalEvents(events);
  }, [events]);

  // Derive unique cities
  const cities = useMemo(() => Array.from(new Set(localEvents.map(e => e.location))), [localEvents]);

  // Filtered events
  const filteredEvents = useMemo(() => {
    const q = search.trim().toLowerCase();
    return localEvents.filter(ev => {
      const matchSearch =
        !q ||
        ev.title.toLowerCase().includes(q) ||
        ev.location.toLowerCase().includes(q);
      const matchCity = filterCity === "all" || ev.location === filterCity;
      return matchSearch && matchCity;
    });
  }, [localEvents, search, filterCity]);

  const totalPages = Math.max(1, Math.ceil(filteredEvents.length / eventsPerPage));
  const indexOfLast = currentPage * eventsPerPage;
  const indexOfFirst = indexOfLast - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirst, indexOfLast);

  // ---------------- Modal create/edit ----------------
  const openCreate = () => {
    setEditingEvent(null);
    setFormData({
      title: "",
      location: "",
      datetime: "",
      price: "",
      capacity: "",
      description: "",
      image: null
    });
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "price" && value !== "" ? Number(value) : value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFormData(prev => ({ ...prev, image: file }));
  };

  const handleSubmit = async () => {
    if (!formData.title.trim() || !formData.location.trim() || !formData.datetime.trim()) {
      alert("Title, location, dan datetime wajib diisi.");
      return;
    }

    try {
      const payload = new FormData();
      payload.append("title", formData.title);
      payload.append("location", formData.location);
      payload.append("datetime", formData.datetime);
      payload.append("price", formData.price);
      payload.append("capacity", formData.capacity);
      payload.append("description", formData.description);
      if (formData.image instanceof File) payload.append("image", formData.image);

      if (editingEvent) {
        const updatedEvent = await updateEvent(editingEvent._id, payload);
        setLocalEvents(prev => prev.map(ev => ev._id === updatedEvent._id ? updatedEvent : ev));
      } else {
        const newEvent = await createEvent(payload);
        setLocalEvents(prev => [newEvent, ...prev]);
        setCurrentPage(1); // balik ke page 1
      }

      setShowModal(false);
      setEditingEvent(null);
    } catch (err) {
      console.error(err);
      alert("Gagal menyimpan event, cek console.");
    }
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
    setFormData({
      title: event.title || "",
      location: event.location || "",
      datetime: event.datetime || "",
      price: event.price ?? "",
      capacity: event.capacity ?? "",
      description: event.description || "",
      image: null // biarkan null, kalau tidak ganti
    });
    setShowModal(true);
  };

  const handleDelete = async (_id) => {
    if (!_id) return;
    if (!window.confirm("Are you sure to delete this event?")) return;
    try {
      await deleteEvent(_id);
      setLocalEvents(prev => prev.filter(ev => ev._id !== _id));
      alert("Event berhasil dihapus!");
    } catch (err) {
      console.error(err);
      alert("Gagal menghapus event.");
    }
  };

  return (
    <div className="px-6 py-[11rem] max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">🎟️ Event Dashboard</h1>
        <button
          onClick={openCreate}
          className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 
                    text-white font-semibold rounded-xl shadow-md hover:opacity-90 transition"
          disabled={loading}
        >
          <FaPlus /> Add Event
        </button>
      </div>

      {/* Search & Filter */}
      <div className="mb-6">
        <SearchDashboard
          search={search}
          setSearch={setSearch}
          setCurrentPage={setCurrentPage}
          setFilterCity={setFilterCity}
          filterCity={filterCity}
          cities={cities}
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-lg p-4">
        <TableDashboard
          currentEvents={currentEvents}
          handleEdit={authUser ? handleEdit : undefined}
          handleDelete={authUser ? handleDelete : undefined}
          indexOfFirst={indexOfFirst}
        />
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 gap-2">
        <button
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className={`px-3 py-1.5 rounded-full border shadow-sm transition 
            ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}
        >
          <FaArrowLeft className="h-5 w-5" />
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1.5 rounded-full border shadow-sm transition 
              ${currentPage === i + 1 ? "bg-amber-400 text-white font-semibold shadow" : "hover:bg-gray-100"}`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className={`px-3 py-1.5 rounded-full border shadow-sm transition 
            ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}
        >
          <FaArrowRight className="h-5 w-5" />
        </button>
      </div>

      {/* Event Modal */}
      <EventModal
        show={showModal}
        onClose={() => { setShowModal(false); setEditingEvent(null); }}
        onSubmit={handleSubmit}
        formData={formData}
        handleChange={handleChange}
        handleImageChange={handleImageChange}
        editingEvent={editingEvent}
        loading={loading}
      />
    </div>
  );
};

export default Dashboard;
