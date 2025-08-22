import React from 'react'

const Hero = () => {
  return (
        <div className="bg-white dark:bg-gray-900">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#F97316] to-[#FDBA74] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-2xl font-extrabold tracking-tight text-balance text-gray-900 sm:text-6xl dark:text-white">
              Rasakan Serunya Konser & Pameran Favoritmu!
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8 dark:text-gray-400">
              Jangan cuma dengar cerita—jadilah bagian dari momen tak terlupakan. 
              Pesan tiketmu sekarang dan nikmati pengalaman seru penuh musik, seni, 
              dan energi yang tidak akan kamu dapatkan di tempat lain!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#upcoming"
                className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-md 
                          bg-gradient-to-r from-orange-500 to-amber-600 
                          hover:from-orange-600 hover:to-amber-700
                          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Get started
              </a>
              <a 
                href="#HIW" 
                className="text-sm font-semibold text-gray-900 hover:text-orange-600 dark:text-white dark:hover:text-orange-400"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#F97316] to-[#FDBA74] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero