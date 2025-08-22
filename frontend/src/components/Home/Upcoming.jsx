import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { useEvents } from '../../hooks/useEvents'
import { getImageUrl } from "../../assets/getImageUrl";



function Countdown({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { expired: true };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.expired) {
    return <p className="text-red-500 font-semibold">Event Started!</p>;
  }

  return (
    <div className="flex gap-2 text-sm text-orange-600 font-medium">
      <span>{timeLeft.days}d</span>
      <span>{timeLeft.hours}h</span>
      <span>{timeLeft.minutes}m</span>
      <span>{timeLeft.seconds}s</span>
    </div>
  );
}

export default function UpcomingEvents() {
  // ambil hanya 3 event pertama untuk ditampilkan di homepage
  const {events, loading} = useEvents();
  const previewEvents = events.slice(0, 3);
  if (loading) return <p>Loading...</p>;

  return (
    <section
      className="bg-gradient-to-b from-orange-50 to-white py-[7rem]"
      id="upcoming"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="flex justify-center text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
          Jangan Lewatkan Momen Spesial Ini!
        </h2>
        <p className="text-center max-w-2xl mx-auto text-lg text-gray-600 mb-10">
          Konser, pameran, dan acara seru menunggumu. Pesan tiket sekarang
          sebelum kehabisan dan rasakan pengalaman tak terlupakan bersama
          ribuan orang lainnya!
        </p>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {previewEvents.map((event) => (
            <SwiperSlide key={event._id}>
              <div className="bg-white my-5 shadow-lg rounded-2xl overflow-hidden transition hover:scale-105 hover:shadow-xl">
                <img
                  src={getImageUrl(event.image)}
                  alt={event.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {new Date(event.datetime).toLocaleString()}
                  </p>
                  <p className="my-1 text-md text-gray-700">{event.location}</p>
                  <Countdown targetDate={event.datetime} />

                  <div className="mt-3 flex justify-between items-center">
                    <p className="text-sm font-bold text-orange-600">
                      {event.price ? `Rp ${event.price.toLocaleString("id-ID")}` : "Free"}
                    </p>
                    <Link
                      to={`/event/${event._id}`}
                      aria-label={`View details of ${event.title}`}
                      className="inline-block rounded-md bg-gradient-to-r from-orange-500 to-amber-600 px-3 py-1 text-sm font-semibold text-white shadow-md hover:from-orange-600 hover:to-amber-700"
                    >
                      Pesan Tiket
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Tombol Lihat Semua Event */}
        <div className="flex justify-center mt-10">
          <Link
            to="/event"
            className="rounded-lg bg-orange-600 px-6 py-3 text-white font-semibold shadow-md hover:bg-orange-700 transition"
          >
            Lihat Semua Event →
          </Link>
        </div>
      </div>
    </section>
  );
}
