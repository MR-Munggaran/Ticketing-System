import React, { useState } from 'react';
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink, useLocation } from 'react-router-dom';
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../context/AuthContext";

import Logo from "../assets/Logo.png";

const Header = () => {
  const { authUser } = useAuthContext();
  const { logout, loading } = useLogout();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  // Navigation dasar untuk semua user
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Event', href: '/event' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  // Navigation untuk admin
  const adminNavigation = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Validate', href: '/validate' },
  ];

  // Navigation untuk semua user login
  const userNavigation = [
    { name: 'My Ticket', href: '/my-ticket' },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      {/* Main navbar */}
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <NavLink to={'/'} className="-m-1.5 p-1.5">
            <span className="sr-only">Cinemax</span>
            <img
              alt="Cinemax"
              src={Logo}
              className="h-8 w-auto transition-transform hover:scale-105"
            />
          </NavLink>
        </div>

        {/* Mobile toggle */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <FiMenu aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className="text-sm font-semibold text-gray-900 hover:text-amber-600 transition-colors"
            >
              {item.name}
            </NavLink>
          ))}

          {/* Untuk admin */}
          {authUser?.user?.role === 'admin' && adminNavigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className="text-sm font-semibold text-gray-900 hover:text-amber-600 transition-colors"
            >
              {item.name}
            </NavLink>
          ))}

          {/* Untuk semua user login */}
          {authUser && userNavigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className="text-sm font-semibold text-gray-900 hover:text-amber-600 transition-colors"
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Auth button desktop */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {authUser ? (
            <button
              onClick={logout}
              disabled={loading}
              className="text-sm font-semibold text-gray-900 hover:text-red-600"
            >
              {loading ? "Logging out..." : "Logout"}
            </button>
          ) : (
            <NavLink
              to="/login"
              className="rounded-md bg-amber-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition-colors"
            >
              Log in →
            </NavLink>
          )}
        </div>
      </nav>

      {/* Sub-navbar (hanya untuk dashboard) */}
      {isDashboard && authUser?.user?.role === 'admin' && (
        <div className="flex items-center justify-center p-6 lg:px-8 gap-4">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300
              shadow-md backdrop-blur-sm
              ${isActive 
                ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg scale-105" 
                : "bg-blue-600/90 text-white hover:bg-blue-700 hover:scale-105"}`
            }
          >
            <span>📅</span> Events
          </NavLink>

          <NavLink
            to="/dashboard/event-tickets"
            className={({ isActive }) =>
              `flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300
              shadow-md backdrop-blur-sm
              ${isActive 
                ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg scale-105" 
                : "bg-blue-600/90 text-white hover:bg-blue-700 hover:scale-105"}`
            }
          >
            🎟️ Event Tickets
          </NavLink>
        </div>
      )}

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <div className="ml-auto h-full w-64 bg-white dark:bg-gray-900 shadow-lg p-6 transform transition-transform duration-300">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold dark:text-white">Menu</h2>
              <button onClick={() => setMobileMenuOpen(false)}>
                <FiX className="w-6 h-6 text-gray-700 dark:text-gray-200" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                {/* Navigation links */}
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-amber-100/25"
                    >
                      {item.name}
                    </NavLink>
                  ))}

                  {authUser?.role === 'admin' && adminNavigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-amber-100/25"
                    >
                      {item.name}
                    </NavLink>
                  ))}

                  {authUser && userNavigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-amber-100/25"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>

                {/* Auth button mobile */}
                <div className="py-6">
                  {authUser ? (
                    <button
                      onClick={() => {
                        logout();
                        setMobileMenuOpen(false);
                      }}
                      disabled={loading}
                      className="-mx-3 block w-full rounded-lg px-3 py-2.5 text-left text-base font-semibold text-gray-900 hover:bg-amber-100"
                    >
                      {loading ? "Logging out..." : "Logout"}
                    </button>
                  ) : (
                    <NavLink
                      to="/login"
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-amber-100"
                    >
                      Log in
                    </NavLink>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
