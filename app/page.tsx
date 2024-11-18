"use client";

import React, { useState } from "react";
import {
  Settings,
  BarChart2,
  HelpCircle,
  FileText,
  Mail,
  Plus,
  ChevronRight,
  Search,
  Bell,
  Menu,
} from "lucide-react";

const mockEvents = [
  {
    id: 1,
    name: "Purchase",
    status: "active",
    lastConversion: "14:30",
    count: 156,
    trend: "+12.5%",
    todayCount: 24,
  },
  {
    id: 2,
    name: "Add to Cart",
    status: "active",
    lastConversion: "14:15",
    count: 284,
    trend: "+8.3%",
    todayCount: 45,
  },
  {
    id: 3,
    name: "Checkout",
    status: "inactive",
    lastConversion: "13:45",
    count: 92,
    trend: "-2.1%",
    todayCount: 18,
  },
];

const placeholderEvents = [
  {
    id: 4,
    name: "Page View",
    description: "Track visitor page views",
    estimatedImpact: "High impact on conversion tracking",
  },
  {
    id: 5,
    name: "View Content",
    description: "Monitor product page interactions",
    estimatedImpact: "Medium impact on conversion tracking",
  },
];

const HomePage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 h-16">
            <div className="flex items-center space-x-4">
              <button
                className="lg:hidden text-gray-500 hover:text-gray-700"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-2">
                  <img
                    src="/api/placeholder/24/24"
                    alt="Logo"
                    className="h-6 w-6"
                  />
                </div>
                <span className="text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Google Conversion Pixel
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="relative">
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search events..."
                  className="pl-10 pr-4 py-2 w-64 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <nav className="flex items-center space-x-4">
                <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-150">
                  <BarChart2 className="h-4 w-4 mr-2" />
                  Analytics
                </button>
                <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-150">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </button>
              </nav>
              <button className="relative text-gray-500 hover:text-gray-700">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-blue-600 rounded-full flex items-center justify-center text-xs text-white">
                  2
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100">
            <div className="px-4 py-3 space-y-3">
              <div className="relative">
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search events..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <nav className="flex flex-col space-y-2">
                <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">
                  <BarChart2 className="h-4 w-4 mr-2" />
                  Analytics
                </button>
                <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </button>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              Dashboard Overview
            </h1>
            <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-150 shadow-sm hover:shadow mt-4 sm:mt-0">
              <Plus className="h-4 w-4 mr-2" />
              Add New Event
            </button>
          </div>
          <p className="text-gray-500">
            Track and manage your conversion events
          </p>
        </div>

        {/* Active Events Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {mockEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {event.name}
                  </h3>
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      event.status === "active"
                        ? "bg-green-50 text-green-700 ring-1 ring-green-600/20"
                        : "bg-red-50 text-red-700 ring-1 ring-red-600/20"
                    }`}
                  >
                    {event.status.charAt(0).toUpperCase() +
                      event.status.slice(1)}
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-baseline justify-between">
                    <span className="text-3xl font-bold text-gray-900">
                      {event.todayCount}
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        event.trend.startsWith("+")
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {event.trend}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Today's Conversions</span>
                    <span className="text-gray-900 font-medium">
                      Last: {event.lastConversion}
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <button className="text-sm text-gray-700 hover:text-blue-600 font-medium flex items-center transition-colors duration-150">
                  View Details
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder Events */}
        <div className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold text-gray-900">
            Recommended Events
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {placeholderEvents.map((event) => (
              <div
                key={event.id}
                className="group relative bg-white rounded-xl border-2 border-dashed border-gray-200 p-6 hover:border-blue-500 transition-colors duration-200"
              >
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-600 mb-2">
                    <Plus className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {event.name}
                  </h3>
                  <p className="text-sm text-gray-500">{event.description}</p>
                  <div className="text-xs text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full inline-block">
                    {event.estimatedImpact}
                  </div>
                  <button className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-gray-200 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-150">
                    Configure Event
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-8">
              <a
                href="#"
                className="flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors duration-150"
              >
                <HelpCircle className="h-4 w-4 mr-2" />
                Support
              </a>
              <a
                href="#"
                className="flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors duration-150"
              >
                <FileText className="h-4 w-4 mr-2" />
                Documentation
              </a>
              <a
                href="#"
                className="flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors duration-150"
              >
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </a>
            </div>
            <p className="text-sm text-gray-500">
              © 2024 Google Conversion Pixel. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
