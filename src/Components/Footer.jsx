import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-16">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Branding Section */}
          <div className="mb-8 md:mb-0 md:w-1/4 flex flex-col space-y-3">
            <h2 className="text-3xl font-extrabold tracking-wide">
              <span className=" text-neutral-900"></span>Footer
            </h2>
            <p className="text-gray-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit!
            </p>
            <div className="flex space-x-4 mt-4">
              {/* Social Icons */}
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-blue-800 transition duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23.954 4.569c-0.885 0.392-1.83 0.656-2.825 0.775 1.014-0.608 1.794-1.574 2.163-2.724-0.951 0.564-2.005 0.974-3.127 1.195-0.897-0.957-2.178-1.555-3.594-1.555-2.723 0-4.928 2.204-4.928 4.928 0 0.39 0.045 0.765 0.127 1.124-4.094-0.205-7.725-2.165-10.157-5.144-0.424 0.727-0.666 1.573-0.666 2.475 0 1.708 0.87 3.217 2.188 4.099-0.807-0.025-1.566-0.247-2.228-0.616v0.062c0 2.385 1.693 4.374 3.946 4.827-0.413 0.111-0.849 0.171-1.296 0.171-0.317 0-0.626-0.031-0.928-0.088 0.627 1.956 2.444 3.377 4.6 3.416-1.68 1.318-3.801 2.104-6.104 2.104-0.397 0-0.787-0.023-1.175-0.067 2.179 1.397 4.768 2.213 7.548 2.213 9.057 0 14.009-7.509 14.009-14.009 0-0.213-0.005-0.426-0.014-0.637 0.962-0.695 1.796-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-white-700 hover:bg-blue-600 transition duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22.675 0h-21.35c-0.733 0-1.325 0.592-1.325 1.324v21.352c0 0.732 0.592 1.324 1.325 1.324h11.498v-9.294h-3.13v-3.622h3.13v-2.671c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464 0.099 2.795 0.143v3.24l-1.918 0.001c-1.504 0-1.796 0.716-1.796 1.765v2.311h3.592l-0.467 3.622h-3.125v9.294h6.125c0.732 0 1.324-0.592 1.324-1.324v-21.352c0-0.732-0.592-1.324-1.324-1.324z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-red-400 transition duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div className="grid grid-cols-2 gap-8 md:w-3/4 md:grid-cols-4">
            <div>
              <h3 className="text-xl font-semibold mb-4 border-b text-neutral-900 pb-2">
                <span className='text-gray-100 font-medium'> Products</span>
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className=" transition">
                    App
                  </a>
                </li>
                <li>
                  <a href="#" className=" transition">
                    Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className=" transition">
                    Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className=" transition">
                    Commerce
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 border-b text-neutral-900 pb-2">
                <span className='text-gray-100 font-medium'>Company</span>
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className=" transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className=" transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className=" transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className=" transition">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 border-b text-neutral-900 pb-2">
                <span className='text-gray-100 font-medium'>Support</span>
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className=" transition">
                    API Docs
                  </a>
                </li>
                <li>
                  <a href="#" className=" transition">
                    Status
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 border-b text-neutral-900 pb-2">
                <span className='text-gray-100 font-medium'>Legal</span>
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className=" transition">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className=" transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className=" transition">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="mt-10 border-t  text-neutral-900 pt-6 text-center text-sm">
          <span className=' text-gray-100 font-medium '>  &copy; {new Date().getFullYear()}Ankit_Kumar. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

