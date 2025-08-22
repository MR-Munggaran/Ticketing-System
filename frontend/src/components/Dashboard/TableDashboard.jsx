import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const TableDashboard = ({ currentEvents, handleEdit, handleDelete, indexOfFirst }) => {
  return (
    <div className="overflow-x-auto rounded-xl shadow-lg">
      <table className="w-full border-collapse">
        {/* Table Header */}
        <thead className="bg-gradient-to-r from-amber-300 to-yellow-600 text-white">
          <tr>
            <th className="p-3 text-left text-sm font-semibold uppercase">#</th>
            <th className="p-3 text-left text-sm font-semibold uppercase">Title</th>
            <th className="p-3 text-left text-sm font-semibold uppercase">Location</th>
            <th className="p-3 text-left text-sm font-semibold uppercase">Date</th>
            <th className="p-3 text-left text-sm font-semibold uppercase">Price</th>
            <th className="p-3 text-center text-sm font-semibold uppercase">Actions</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {currentEvents.map((ev, idx) => (
            <tr
              key={ev._id}
              className="border-b last:border-0 hover:bg-gray-50 transition"
            >
              <td className="p-3 text-gray-700">{indexOfFirst + idx + 1}</td>
              <td className="p-3 font-medium text-gray-800">{ev.title}</td>
              <td className="p-3 text-gray-600">{ev.location}</td>
              <td className="p-3 text-gray-600">{new Date(ev.datetime).toLocaleString()}</td>
              <td className="p-3 font-semibold text-gray-800">
                Rp {Number(ev.price ?? 0).toLocaleString()}
              </td>
              <td className="p-3 flex justify-center gap-3">
                {/* Edit Button */}
                <button
                  onClick={() => handleEdit(ev)}
                  className="p-2 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-white shadow-md transition"
                  title="Edit Event"
                >
                  <FaEdit />
                </button>

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(ev._id)}
                  className="p-2 rounded-lg bg-red-500 hover:bg-red-600 text-white shadow-md transition"
                  title="Delete Event"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}

          {/* Empty State */}
          {currentEvents.length === 0 && (
            <tr>
              <td colSpan={6} className="p-10 text-center text-gray-500">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-4xl">📭</span>
                  <p className="text-gray-500">Tidak ada data pada halaman ini</p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableDashboard;
