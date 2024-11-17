"use client";

import React from "react";
import {
  Settings,
  BarChart2,
  HelpCircle,
  FileText,
  Mail,
  Plus,
} from "lucide-react";

const mockEvents = [
  {
    id: 1,
    name: "Purchase",
    status: "active",
    lastConversion: "2024-11-17 14:30",
    count: 156,
  },
  {
    id: 2,
    name: "Add to Cart",
    status: "active",
    lastConversion: "2024-11-17 14:15",
    count: 284,
  },
  {
    id: 3,
    name: "Checkout",
    status: "inactive",
    lastConversion: "2024-11-17 13:45",
    count: 92,
  },
];

const placeholderEvents = [
  { id: 4, name: "Page View", description: "Track visitor page views" },
  {
    id: 5,
    name: "View Content",
    description: "Monitor product page interactions",
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <img
                src="/api/placeholder/32/32"
                alt="Logo"
                className="h-8 w-8 mr-2"
              />
              <span className="text-lg font-semibold">
                Google Conversion Pixel
              </span>
            </div>
            <nav className="flex space-x-4">
              <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                <BarChart2 className="h-4 w-4 mr-2" />
                Analytics
              </button>
              <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Google Conversion Pixel Dashboard
          </h1>
          <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <Plus className="h-4 w-4 mr-2" />
            Add New Event
          </button>
        </div>

        {/* Active Events Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {mockEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200"
            >
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {event.name}
                  </h3>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      event.status === "active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {event.status.charAt(0).toUpperCase() +
                      event.status.slice(1)}
                  </span>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Last Conversion</p>
                  <p className="text-sm font-medium text-gray-900">
                    {event.lastConversion}
                  </p>
                  <div className="mt-4">
                    <span className="text-2xl font-semibold text-gray-900">
                      {event.count}
                    </span>
                    <span className="ml-2 text-sm text-gray-500">
                      conversions today
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder Events */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {placeholderEvents.map((event) => (
            <div
              key={event.id}
              className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-gray-400 transition-colors duration-200"
            >
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {event.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {event.description}
                </p>
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <Plus className="h-4 w-4 mr-2" />
                  Configure Event
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4 flex justify-center space-x-8">
            <a
              href="#"
              className="flex items-center text-sm text-gray-500 hover:text-gray-900"
            >
              <HelpCircle className="h-4 w-4 mr-2" />
              Support
            </a>
            <a
              href="#"
              className="flex items-center text-sm text-gray-500 hover:text-gray-900"
            >
              <FileText className="h-4 w-4 mr-2" />
              Documentation
            </a>
            <a
              href="#"
              className="flex items-center text-sm text-gray-500 hover:text-gray-900"
            >
              <Mail className="h-4 w-4 mr-2" />
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
