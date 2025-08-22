import React from "react";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const EventModal = ({ 
  show, 
  onClose, 
  onSubmit, 
  formData, 
  handleChange, 
  handleImageChange, 
  editingEvent 
}) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div 
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-2xl shadow-2xl w-[700px] relative"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
            >
              <MdClose size={24} />
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold mb-5 text-gray-800 text-center">
              {editingEvent ? "✏️ Edit Event" : "🎉 Create Event"}
            </h2>

            <div className="flex flex-col gap-4">
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Event Title"
                className="border border-gray-300 focus:ring-2 focus:ring-blue-500 p-2 rounded-lg outline-none"
              />
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                className="border border-gray-300 focus:ring-2 focus:ring-blue-500 p-2 rounded-lg outline-none"
              />
              <input
                type="date"
                name="datetime"
                value={formData.datetime}
                onChange={handleChange}
                className="border border-gray-300 focus:ring-2 focus:ring-blue-500 p-2 rounded-lg outline-none"
              />
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Price"
                className="border border-gray-300 focus:ring-2 focus:ring-blue-500 p-2 rounded-lg outline-none"
              />
              <input
                type="number"
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}
                placeholder="capacity"
                className="border border-gray-300 focus:ring-2 focus:ring-blue-500 p-2 rounded-lg outline-none"
              />

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                className="border border-gray-300 focus:ring-2 focus:ring-blue-500 p-2 rounded-lg outline-none min-h-[100px]"
              />

              {/* Image Upload */}
              <label className="border-2 border-dashed rounded-lg p-4 cursor-pointer hover:border-blue-500 transition text-center text-sm text-gray-600">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                📷 Upload Image
              </label>

              {formData.image && (
                <img 
                  src={formData.image} 
                  alt="preview" 
                  className="w-full h-40 object-cover rounded-lg shadow-md"
                />
              )}

              {/* Submit Button */}
              <button
                onClick={onSubmit}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2.5 rounded-xl font-semibold shadow-md hover:opacity-90 transition"
              >
                {editingEvent ? "Update Event" : "Create Event"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EventModal;
