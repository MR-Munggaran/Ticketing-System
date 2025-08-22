// TicketEvent.jsx
import { useEffect, useState } from "react";
import { FaTrash, FaSearch } from "react-icons/fa";
import { FaCity } from "react-icons/fa6";
import { useListTicket } from "../hooks/useListTicket";
import { useEvents } from "../hooks/useEvents";

export default function TicketEvent() {
  const [selectedEvent, setSelectedEvent] = useState("");
  const {events} = useEvents()

  const { tickets, loading, listTickets, deleteTicket } = useListTicket(selectedEvent);

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;


  // load tiket setiap kali selectedEvent berubah
  useEffect(() => {
    if (selectedEvent) {
      listTickets();
      setCurrentPage(1);
    }
  }, [selectedEvent, listTickets]);

  // filter + search
  const filteredTickets = tickets.filter((t) => {
    const matchSearch =
      t?.user?.name.toLowerCase().includes(search.toLowerCase()) ||
      t?.event?.title.toLowerCase().includes(search.toLowerCase());
    return matchSearch;
  });

  const totalPages = Math.ceil(filteredTickets.length / itemsPerPage);
  const paginatedTickets = filteredTickets.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="px-6 py-[11rem] max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
          🎟️ Daftar Pembeli Tiket
        </h1>
      </div>

      {/* Event Selector + Search */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center">
        {/* Event Dropdown */}
        <div className="relative w-full sm:w-1/3">
          <FaCity className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <select
            value={selectedEvent}
            onChange={(e) => setSelectedEvent(e.target.value)}
            className="pl-10 pr-3 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition appearance-none"
          >
            {events.length === 0 && <option>Loading events...</option>}
            {events.map((ev) => (
              <option key={ev._id} value={ev._id}>
                {ev.title}
              </option>
            ))}
          </select>
        </div>

        {/* Search Box */}
        <div className="relative w-full sm:w-1/3">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Cari pembeli..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="pl-10 pr-3 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-lg p-4">
        <div className="overflow-x-auto rounded-xl shadow-lg">
          <table className="w-full border-collapse">
            <thead className="bg-gradient-to-r from-amber-300 to-yellow-600 text-white">
              <tr>
                <th className="p-3 text-left text-sm font-semibold uppercase">#</th>
                <th className="p-3 text-left text-sm font-semibold uppercase">Event</th>
                <th className="p-3 text-left text-sm font-semibold uppercase">Nama Pembeli</th>
                <th className="p-3 text-left text-sm font-semibold uppercase">Email</th>
                <th className="p-3 text-left text-sm font-semibold uppercase">Jumlah Tiket</th>
                <th className="p-3 text-left text-sm font-semibold uppercase">Status</th>
                <th className="p-3 text-center text-sm font-semibold uppercase">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={7} className="p-10 text-center text-gray-500">
                    Loading tickets...
                  </td>
                </tr>
              ) : paginatedTickets.length > 0 ? (
                paginatedTickets.map((ticket, index) => (
                  <tr
                    key={ticket._id}
                    className="border-b last:border-0 hover:bg-gray-50 transition"
                  >
                    <td className="p-3 text-gray-700">
                      {(currentPage - 1) * itemsPerPage + index + 1}
                    </td>
                    <td className="p-3 font-medium text-gray-800">{ticket?.event?.title}</td>
                    <td className="p-3 text-gray-600">{ticket?.user?.name}</td>
                    <td className="p-3 text-gray-600">{ticket?.user?.email}</td>
                    <td className="p-3 text-gray-600">{ticket?.quantity}</td>
                    <td className="p-3 font-semibold text-gray-800">
                      {ticket?.status}
                    </td>
                    <td className="p-3 flex justify-center gap-3">
                      <button
                        onClick={() => deleteTicket(ticket._id)}
                        className="p-2 rounded-lg bg-red-500 hover:bg-red-600 text-white shadow-md transition"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="p-10 text-center text-gray-500">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-4xl">📭</span>
                      <p className="text-gray-500">Tidak ada data tiket</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="px-4 py-2 border rounded-lg shadow-sm disabled:opacity-50 hover:bg-gray-100"
        >
          ⬅ Prev
        </button>
        <span className="text-sm text-gray-700">
          Halaman {currentPage} dari {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="px-4 py-2 border rounded-lg shadow-sm disabled:opacity-50 hover:bg-gray-100"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}
