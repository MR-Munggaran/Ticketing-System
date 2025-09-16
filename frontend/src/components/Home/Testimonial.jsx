import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Logo from '../../assets/Logo.png'

const testimonials = [
  {
    quote:
      "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae.”",
    name: "Judith Black",
    role: "CEO of Workcation",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    logo: Logo,
  },
  {
    quote:
      "“Aplikasi ini benar-benar membantu saya dalam mengelola event dengan mudah dan cepat!”",
    name: "Michael Scott",
    role: "Regional Manager",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    logo: Logo,
  },
  {
    quote:
      "“Desainnya simpel tapi powerful, cocok banget untuk kebutuhan bisnis kami.”",
    name: "Pam Beesly",
    role: "Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    logo: Logo,
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl text-center transition-all duration-500 ease-in-out">
        <img
          src={testimonials[current].logo}
          alt=""
          className="mx-auto h-12"
        />
        <figure className="mt-10">
          <blockquote className="text-xl font-semibold text-gray-900 sm:text-2xl">
            <p className="transition-opacity duration-500">{testimonials[current].quote}</p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="mx-auto h-12 w-12 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">
                {testimonials[current].name}
              </div>
              <span className="text-gray-600">•</span>
              <div className="text-gray-600">{testimonials[current].role}</div>
            </div>
          </figcaption>
        </figure>
      </div>

      {/* Tombol Navigasi */}
      <div className="absolute inset-y-0 left-4 flex items-center">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-orange-500 text-white shadow hover:bg-orange-600 transition"
        >
          <FaChevronLeft />
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 flex items-center">
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-orange-500 text-white shadow hover:bg-orange-600 transition"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Dot Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition ${
              index === current ? "bg-orange-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
