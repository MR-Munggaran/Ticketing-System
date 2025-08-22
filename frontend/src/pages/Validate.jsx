import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useTicket } from '../hooks/useTicket';
import toast from 'react-hot-toast';

export default function Validate() {
  const [qrCode, setQrCode] = useState('');
  const [loading, setLoading] = useState(false);
  const { validateTickets } = useTicket();

  const handleValidate = async () => {
    setLoading(true);
    try {
      const res = await validateTickets({qrCode})
      return res.data
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to validate tickets");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-22 sm:py-27 lg:py-40 my-[10vh]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          
          {/* Form */}
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-extrabold tracking-tight text-white">Validate Your Ticket</h2>
            <p className="mt-4 text-lg text-gray-300">
              Enter your Ticket ID or scan your QR code to see if it’s valid. Don’t worry—we’ll check it instantly!
            </p>

            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="ticket-id" className="sr-only">Ticket ID</label>
              <input
                id="ticket-id"
                type="text"
                value={qrCode}
                onChange={(e) => setQrCode(e.target.value)}
                placeholder="EVT-12345678"
                className="min-w-0 flex-auto rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white/10 sm:text-sm"
              />
              <button
                type="button"
                onClick={handleValidate}
                disabled={loading}
                className="flex-none rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-3 text-white font-semibold shadow-lg hover:from-amber-600 hover:to-orange-700 transition disabled:opacity-50"
              >
                {loading ? 'Checking...' : 'Validate'}
              </button>
            </div>
          </div>

          {/* Info Cards */}
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start rounded-xl bg-white/5 p-4 ring-1 ring-white/20 hover:shadow-lg transition">
              <div className="rounded-md bg-amber-500/20 p-2">
                <CalendarDaysIcon aria-hidden="true" className="h-6 w-6 text-amber-500" />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">Event Date</dt>
              <dd className="mt-2 text-gray-400 text-sm">
                Make sure your ticket is valid for the correct date and time.
              </dd>
            </div>

            <div className="flex flex-col items-start rounded-xl bg-white/5 p-4 ring-1 ring-white/20 hover:shadow-lg transition">
              <div className="rounded-md bg-amber-500/20 p-2">
                <HandRaisedIcon aria-hidden="true" className="h-6 w-6 text-amber-500" />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">No Fraud</dt>
              <dd className="mt-2 text-gray-400 text-sm">
                Each ticket is unique. Invalid or duplicate tickets will be rejected immediately.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Abstract Background */}
      <div aria-hidden="true" className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1155/678 w-[72rem] bg-gradient-to-tr from-amber-400 to-orange-600 opacity-30"
        />
      </div>
    </div>
  );
}
