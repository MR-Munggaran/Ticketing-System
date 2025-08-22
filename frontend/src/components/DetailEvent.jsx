import {
  MapPinIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { ShareIcon } from "@heroicons/react/20/solid";
import { useEvent } from "../hooks/useEvent";
import {  useParams } from "react-router-dom";
import { getImageUrl } from "../assets/getImageUrl";
import { formatDate } from "../assets/formatDate";
import { useAuthContext } from "../context/AuthContext";
import TicketPurchase from "./Event/TicketPurchase";
import { useTicket } from "../hooks/useTicket";
import { useListTicket } from "../hooks/useListTicket";

export default function DetailEvent() {
  const { id } = useParams();
  const {buyTickets} = useTicket();
  const {listTickets} = useListTicket();
  const { event, loading } = useEvent(id);
  const { authUser } = useAuthContext();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Loading event...</p>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Event not found</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen my-[3rem]">
      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-6 text-gray-500">
          <span className="hover:underline cursor-pointer">Home</span> /{" "}
          <span className="hover:underline cursor-pointer">Events</span> /{" "}
          <span className="text-gray-900 font-medium">{event.title}</span>
        </nav>

        {/* Gambar */}
        <div className="w-full overflow-hidden rounded-2xl shadow-lg">
          <img
            src={getImageUrl(event.image)}
            alt={event.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Info */}
        <div className="mt-8">
          <h1 className="text-3xl font-bold text-gray-900">{event.title}</h1>
          <div className="mt-6 space-y-4 text-gray-600">
            <div className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5 text-amber-600" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDaysIcon className="h-5 w-5 text-amber-600" />
              <span>{formatDate(event.datetime)}</span>
            </div>
            <div className="flex items-center gap-2">
              <UserGroupIcon className="h-5 w-5 text-amber-600" />
              <span>
                Capacity: {event.capacity} Penonton
              </span>
            </div>
            <div className="flex items-center gap-2">
              <UserIcon className="h-5 w-5 text-amber-600" />
              <span>Created by: {event.createdBy.name}</span>
            </div>
          </div>
            <TicketPurchase event={event} authUser={authUser} buyTickets={buyTickets} listTickets={listTickets}/>
        </div>

        <div className="mt-12 border-t pt-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Tentang Acara
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {event.description}
          </p>
        </div>
      </div>
    </div>
  );
}
