import { useState, useEffect } from 'react';
import { useTicket } from '../hooks/useTicket';
import { useAuthContext } from '../context/AuthContext';
import { formatDate } from "../assets/formatDate";

export default function Ticket() {
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const { authUser } = useAuthContext();
  const { myTickets, tickets } = useTicket();

  useEffect(() => {
    if (authUser?.user._id) {
      myTickets(authUser.user._id);
    }
  }, [authUser, myTickets]);

  const filteredTickets = tickets.filter(
    (ticket) =>
      (ticket?.event?.title?.toLowerCase().includes(search.toLowerCase()) ||
        ticket?.location?.toLowerCase().includes(search.toLowerCase())) &&
      (filterStatus ? ticket.status === filterStatus : true)
  );

  const totalPages = Math.ceil(filteredTickets.length / itemsPerPage);
  const paginatedTickets = filteredTickets.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

  return (
    <div className="p-6 bg-white rounded-2xl shadow-xl mx-[10vw] my-[15vh]">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">🎟️ My Tickets</h2>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by event or location..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="px-4 py-3 border rounded-xl w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        <select
          value={filterStatus}
          onChange={(e) => {
            setFilterStatus(e.target.value);
            setCurrentPage(1);
          }}
          className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="paid">Paid</option>
          <option value="validated">Validated</option>
        </select>
      </div>
      <div className="overflow-x-auto rounded-xl shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-amber-50">
            <tr>
              {['Event', 'Date', 'Location', 'Code', 'Status'].map((col) => (
                <th
                  key={col}
                  className="px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedTickets.length > 0 ? (
              paginatedTickets.map((ticket) => (
                <tr key={ticket._id || ticket.id} className="hover:bg-amber-50 transition">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">
                    {ticket?.event?.title || '-'}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    {formatDate(ticket?.event?.datetime)}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">{ticket?.event?.location || '-'}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{ticket?.qrCode || '-'}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        ticket.status === 'paid'
                          ? 'inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 inset-ring inset-ring-green-600/20'
                          : ticket.status === 'validated'
                          ? 'inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 inset-ring inset-ring-red-600/10'
                          : 'inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 inset-ring inset-ring-purple-700/10'
                      }`}
                    >
                      {ticket.status || '-'}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-gray-500">
                  Tidak ada tiket ditemukan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold shadow hover:from-amber-600 hover:to-orange-600 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm font-medium text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold shadow hover:from-amber-600 hover:to-orange-600 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
