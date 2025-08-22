import React from "react";

const Hiw = () => {
  return (
    <div className="bg-orange-50 py-24 sm:py-32" id="HIW">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base font-semibold text-orange-600">
          How It Works
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Dapatkan Tiketmu Dalam 4 Langkah 🎟️
        </p>

        <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {/* Step 1 - Pilih Event */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl shadow-md">
              <div className="px-8 pt-8 pb-4">
                <p className="text-xl font-semibold text-gray-900 text-center">
                  1. Pilih Event Favoritmu
                </p>
                <p className="mt-2 text-sm text-gray-600 text-center">
                  Dari konser, pameran, hingga konferensi – semua ada di sini.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center p-6">
                <img
                  alt="Choose event"
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop"
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Step 2 - Beli Tiket */}
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl shadow-md">
              <div className="px-8 pt-8 pb-4">
                <p className="text-xl font-semibold text-gray-900 text-center">
                  2. Beli Tiket Online
                </p>
                <p className="mt-2 text-sm text-gray-600 text-center">
                  Proses cepat & aman, bisa bayar dengan berbagai metode.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center p-6">
                <img
                  alt="Buy ticket"
                  src="https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=600&auto=format&fit=crop"
                  className="h-32 object-contain rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Step 3 - Scan QR */}
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl shadow-md">
              <div className="px-8 pt-8 pb-4">
                <p className="text-xl font-semibold text-gray-900 text-center">
                  3. Dapatkan QR Code
                </p>
                <p className="mt-2 text-sm text-gray-600 text-center">
                  Tiket digital langsung dikirim, cukup scan di pintu masuk.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center p-6">
                <img
                  alt="Scan QR"
                  src="https://mecaluxcom.cdnwm.com/documents/20128/507202/M22P7+qr-logistica.jpg/d6faaef3-57f7-d3f2-3552-2029cc11ab7c?t=1644961441000&e=jpg"
                  className="h-28 object-contain rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Step 4 - Enjoy */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl shadow-md">
              <div className="px-8 pt-8 pb-4">
                <p className="text-xl font-semibold text-gray-900 text-center">
                  4. Nikmati Acaranya 🎉
                </p>
                <p className="mt-2 text-sm text-gray-600 text-center">
                  Tinggal datang, scan tiketmu, dan rasakan pengalaman tak
                  terlupakan!
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center p-6">
                <img
                  alt="Enjoy event"
                  src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=600&auto=format&fit=crop"
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hiw;
