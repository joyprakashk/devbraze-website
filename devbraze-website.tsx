import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, ChevronDown, ArrowRight } from "lucide-react"

export default function DevBrazeWebsite() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-950 to-blue-900">
      {/* Navigation bar */}
      <nav className="py-4 px-6 mx-auto w-full max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-bold text-2xl text-white">&lt;db/&gt;</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-sm text-white/80 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="#" className="text-sm text-white/80 hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="#" className="text-sm text-white/80 hover:text-white transition-colors">
              Events
            </Link>
            <Link href="#" className="text-sm text-white/80 hover:text-white transition-colors">
              Teams
            </Link>
            <Link href="#" className="text-sm text-white/80 hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="#" className="text-sm text-white/80 hover:text-white transition-colors">
              Join Us
            </Link>
            <Link href="#" className="text-sm text-white/80 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
          <Button size="sm" className="md:hidden bg-transparent hover:bg-blue-800/50 text-white border border-blue-700">
            Menu
          </Button>
        </div>
      </nav>

      {/* Hero section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-300 mb-4">Hey there!</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-12 tracking-tight">
            We are DevBraze...
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button className="px-8 py-6 rounded-md bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2">
              Explore About Us <ArrowRight className="w-4 h-4" />
            </Button>
            <Button className="px-8 py-6 rounded-md bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2">
              Join Teams <ArrowRight className="w-4 h-4" />
            </Button>
            <Button className="px-8 py-6 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-2">
              Write Blog <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="mt-20 animate-bounce">
            <ChevronDown className="w-6 h-6 text-white/50 mx-auto" />
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">What We Do?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Research card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">Research</h4>
                <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate cumque repudiandae voluptatum, incidunt ea atque eligendi enim optio nulla pariatur corporis officiis adipisci quibusdam totam, deserunt voluptates vel nobis animi.
                </p>
                <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Development card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">Development</h4>
                <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate cumque repudiandae voluptatum, incidunt ea atque eligendi enim optio nulla pariatur corporis officiis adipisci quibusdam totam, deserunt voluptates vel nobis animi.
                </p>
                <Link href="#" className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Design card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="p-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">Design</h4>
                <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate cumque repudiandae voluptatum, incidunt ea atque eligendi enim optio nulla pariatur corporis officiis adipisci quibusdam totam, deserunt voluptates vel nobis animi.
                </p>
                <Link href="#" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Innovation card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">Innovation</h4>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate cumque repudiandae voluptatum, incidunt ea atque eligendi enim optio nulla pariatur corporis officiis adipisci quibusdam totam, deserunt voluptates vel nobis animi.
                </p>
                <Link href="#" className="text-green-600 hover:text-green-800 text-sm font-medium">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="flex items-center gap-2 mb-3">
                <Phone className="w-4 h-4 text-blue-300" />
                <span className="text-sm text-gray-300">+91 123 456 7890</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Mail className="w-4 h-4 text-blue-300" />
                <span className="text-sm text-gray-300">devbraze@gmail.com</span>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                School of Electronics and Communication Engineering
                <br />
                REVA University, Yelahanka
                <br />
                Bengaluru, Karnataka - 560064
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  About Us
                </Link>
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  Events
                </Link>
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  Teams
                </Link>
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  Blog
                </Link>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
              <p className="text-sm text-gray-400 mb-4">
                Subscribe to our page to stay updated about with the latest club activities!
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 text-sm bg-blue-900 border border-blue-800 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-600 text-white w-full"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-l-none">Subscribe</Button>
              </div>
              <div className="flex gap-4 mt-6">
                <Link
                  href="#"
                  className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center hover:bg-blue-800"
                >
                  <span className="text-white text-xs">FB</span>
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center hover:bg-blue-800"
                >
                  <span className="text-white text-xs">TW</span>
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center hover:bg-blue-800"
                >
                  <span className="text-white text-xs">IG</span>
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center hover:bg-blue-800"
                >
                  <span className="text-white text-xs">LI</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-6 border-t border-blue-900 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} DevBraze | School of Electronics and Communication Engineering | All Rights reserved
          </div>
        </div>
      </footer>
    </div>
  )
}

