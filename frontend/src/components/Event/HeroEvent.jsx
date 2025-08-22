export default function EventsHero() {
  return (
    <div className="relative overflow-hidden bg-white py-[8rem]">
      <div className="pt-16 pb-32 sm:pt-24 sm:pb-40 lg:pt-36 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          {/* Intro Text */}
          <div className="sm:max-w-xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Temukan Event Seru Dekatmu 🎉
            </h1>
            <p className="mt-4 text-lg text-gray-600 sm:text-xl">
              Dari konser musik, pameran seni, hingga workshop eksklusif — semua ada di sini.
              Jangan lewatkan momen terbaik untuk menikmati pengalaman yang tak terlupakan.
            </p>
          </div>

          {/* CTA + Image Grid */}
          <div className="mt-10">
            {/* Decorative image grid */}
            <div
              aria-hidden="true"
              className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
            >
              <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:translate-x-8 lg:-translate-y-1/2">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-2xl shadow-lg sm:opacity-0 lg:opacity-100">
                      <img
                        alt="Music Festival"
                        src="https://images.unsplash.com/photo-1563841930606-67e2bce48b78?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="size-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-2xl shadow-lg">
                      <img
                        alt="Art Workshop"
                        src="https://images.unsplash.com/photo-1670028514318-0ac718c0590d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="size-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-2xl shadow-lg">
                      <img
                        alt="Conference"
                        src="https://images.unsplash.com/photo-1610901056511-31de499995f0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="size-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-2xl shadow-lg">
                      <img
                        alt="Tech Meetup"
                        src="https://images.unsplash.com/photo-1560527341-725efe8887d9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="size-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-2xl shadow-lg">
                      <img
                        alt="Startup Pitch"
                        src="https://images.unsplash.com/photo-1629276298823-13b6653d65a5?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="size-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-2xl shadow-lg">
                      <img
                        alt="Charity Event"
                        src="https://images.unsplash.com/photo-1525018923-1ebe8261a6a6?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="size-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#listEvent"
              className="inline-block rounded-lg border border-transparent bg-amber-500 px-8 py-3 text-center font-semibold text-white shadow-md transition-all hover:bg-amber-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
            >
              🎟️ Lihat Semua Event
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
