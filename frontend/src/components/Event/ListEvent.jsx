import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { useEvents } from '../../hooks/useEvents'
import { getImageUrl } from "../../assets/getImageUrl";

export default function ListEvent() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // 3 kolom x 4 baris

  const {events, loading} = useEvents();

  const totalPages = Math.max(1, Math.ceil(events.length / itemsPerPage));
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentEvents = events.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="bg-white" id="listEvent">
      {/* Event List */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
          🔥 Don’t Miss These Events!
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentEvents.map((event) => (
            <section
              key={event._id}
              className="group rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 bg-white"
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={getImageUrl(event.image)}
                  alt={event.title}
                  className="aspect-square w-full object-cover group-hover:scale-105 transition duration-300"
                />
                <Link
                  to={`/event/${event._id}`}
                  aria-label={`View details of ${event.title}`}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                    h-14 w-14 bg-white rounded-full flex items-center justify-center shadow-md 
                    opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 
                    transition duration-300"
                >
                  <FaSearch className="text-gray-700 text-xl" />
                </Link>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-amber-600 transition">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600">{event.location}</p>
                <p className="mt-1 text-sm text-gray-700">
                  Seats Available: {event.capacity}
                </p>
                <p className="mt-2 text-lg font-bold text-amber-500">
                  {event.price ? `Rp ${event.price.toLocaleString("id-ID")}` : "Free"}
                </p>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center border-t border-gray-200 px-6 py-8">
        <nav aria-label="Pagination" className="inline-flex gap-2">
          {/* Prev */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center justify-center rounded-full px-3 py-2 
              border text-gray-600 hover:bg-gray-50 disabled:opacity-40"
          >
            <FaArrowLeft className="h-5 w-5" />
          </button>

          {/* Numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              aria-current={currentPage === page ? "page" : undefined}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                currentPage === page
                  ? "bg-amber-400 text-white"
                  : "text-gray-700 border hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}

          {/* Next */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center rounded-full px-3 py-2 
              border text-gray-600 hover:bg-gray-50 disabled:opacity-40"
          >
            <FaArrowRight className="h-5 w-5" />
          </button>
        </nav>
      </div>
    </div>
  );
}
