import { FiCalendar, FiMail } from "react-icons/fi";
import { GiFireworkRocket } from "react-icons/gi";

export default function Benefits() {
  const benefits = [
    {
      name: "Weekly Articles",
      description: "Dapatkan insight & update terbaru setiap minggu langsung ke email Anda.",
      icon: FiCalendar,
    },
    {
      name: "No Spam",
      description: "Kami hanya kirim konten yang bermanfaat. Tidak ada spam, janji!",
      icon: FiMail,
    },
    {
      name: "Exclusive Access",
      description: "Akses konten premium & promo terbatas hanya untuk subscriber.",
      icon: GiFireworkRocket,
    },
  ]

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-15 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          {/* Ubah indigo jadi orange */}
          <h2 className="text-base font-semibold leading-7 text-orange-400">
            Why Join Us
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Keuntungan yang Anda dapatkan
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Kami percaya pengalaman terbaik datang dari konten yang tepat, tanpa ribet, tanpa ganggu.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.name} className="flex flex-col">
                {/* Ubah indigo jadi orange */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-orange-500">
                  <benefit.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <dt className="text-lg font-semibold text-white">
                  {benefit.name}
                </dt>
                <dd className="mt-2 text-base text-gray-400">
                  {benefit.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
