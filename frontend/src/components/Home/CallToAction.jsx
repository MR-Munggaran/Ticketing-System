import { FaArrowRight, FaTicketAlt } from "react-icons/fa";
import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gradient-to-r from-orange-500 to-pink-500 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent)]"></div>

          {/* Content */}
          <div className="relative mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Secure Your Spot 🎶
            </h2>
            <p className="mt-6 text-lg text-orange-50">
              Be part of the most unforgettable night! Limited seats, get yours
              before it’s gone.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                to="/event"
                className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-orange-600 shadow-lg hover:scale-105 hover:bg-orange-50 transition-all duration-200"
              >
                <FaTicketAlt className="text-orange-500" />
                Buy Ticket
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              alt="Concert Crowd"
              src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1170&auto=format&fit=crop"
              width={1824}
              height={1080}
              className="absolute top-0 left-0 w-228 max-w-none rounded-xl shadow-lg ring-2 ring-white/20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
