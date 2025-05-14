import {
  Briefcase,
  Facebook,
  Inbox,
  Instagram,
  Linkedin,
  MapPin,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                <img src="./metalogo.png" alt="logo" />
              </div>
              <span className="font-bold text-lg">MetaLogic</span>
            </div>
            <div className="flex flex-col space-y-2 text-gray-300 text-sm">
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>Saptakhel, Lalitpur (Head office)</span>
              </div>
              <div className="flex items-center">
                <Briefcase size={16} className="mr-2" />
                <span>+ 977 9851353599</span>
              </div>
              <div className="flex items-center">
                <Inbox size={16} className="mr-2" />
                <span>info@metalogic.com.np</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  News
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Mobile Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cloud & DevOps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Technical Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Join us on Social Media</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-500 transition"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-500 transition"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-500 transition"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-500 transition"
              >
                <Linkedin size={16} />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="font-bold mb-4">Careers</h4>
              <a href="#" className="text-sm text-gray-300 hover:text-white">
                View open positions
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-400 text-center">
            © Copyright 2025 MetaLogic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
