import { useState } from "react";
import toast from "react-hot-toast";

export default function TicketPurchase({ event, authUser, buyTickets, listTickets }) {
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    if (!authUser) {
      toast.error("Silahkan login terlebih dahulu untuk memesan tiket.");
      return;
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleConfirmPurchase = async () => {
    if (quantity < 1) {
      toast.error("Jumlah tiket minimal 1.");
      return;
    }
    try {
      await buyTickets({
        eventId: event._id, 
        quantity,            
      });
      await listTickets(); 
      handleCloseModal();
    } catch (error) {
      console.error(error);
      toast.error("Gagal membeli tiket, silahkan coba lagi.");
    }
  };

  return (
    <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      {/* Price */}
      <div className="flex items-center gap-4">
        <p className="text-2xl font-semibold text-gray-900">
          {event.price ? `Rp ${event.price.toLocaleString("id-ID")}` : "Free"}
        </p>
      </div>

      {/* Button */}
      <div className="flex items-center gap-3">
        {!authUser && (
          <p className="text-sm text-red-600">Silahkan login dahulu untuk memesan</p>
        )}

        <button
          onClick={handleOpenModal}
          className={`rounded-lg px-6 py-3 font-medium transition ${
            authUser
              ? "bg-amber-600 text-white hover:bg-amber-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          {authUser ? "Pesan Tiket" : "Login dulu"}
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Pesan Tiket</h2>

            <div className="flex items-center gap-2 mb-4">
              <label htmlFor="modal-quantity" className="text-gray-700">
                Jumlah tiket:
              </label>
              <input
                id="modal-quantity"
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-20 border rounded-lg px-2 py-1 text-center"
              />
            </div>

            {event.price > 0 && (
              <p className="mb-4 text-gray-700">
                Total: Rp {(event.price * quantity).toLocaleString("id-ID")}
              </p>
            )}

            <div className="flex justify-end gap-3">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Batal
              </button>
              <button
                onClick={handleConfirmPurchase}
                className="px-4 py-2 rounded-lg bg-amber-600 text-white hover:bg-amber-700"
              >
                Konfirmasi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
