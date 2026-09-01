import {
  BriefcaseBusiness,
  Camera,
  Mail,
  Phone,
  Play,
  Users,
} from "lucide-react";

import React from "react";

export default function Footer() {
  return (
    <footer className="text-[#5D5D5D]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-0">

        {/* ================= 4 COLUMNS ================= */}
        <div className="flex flex-wrap">

          {/* ================= COLUMN 1 ================= */}
          <div className="w-full lg:basis-1/4 lg:pr-6">
            {/* Logo */}
            <img
              src="/floent.png"
              alt="Floent Fans"
              className="mb-6 h-18 w-18 bg-white object-contain"
            />

            {/* Description */}
            <p className="max-w-sm text-[16px] text-[#5D5D5D] font-normal leading-6">
              Floent fans are manufactured by Floent Technologies having
              manufacturing facility at well known industrial city Ahmedabad,
              Gujarat, India.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C5C5D9] transition duration-300 hover:bg-white hover:text-[#09273A]"
              >
                <Users
                  className="h-3.5 w-3.5"
                  strokeWidth={1.9}
                />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C5C5D9] transition duration-300 hover:bg-white hover:text-[#09273A]"
              >
                <Camera
                  className="h-3.5 w-3.5"
                  strokeWidth={1.9}
                />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C5C5D9] transition duration-300 hover:bg-white hover:text-[#09273A]"
              >
                <Play
                  className="h-3.5 w-3.5 fill-current"
                  strokeWidth={1.9}
                />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C5C5D9] transition duration-300 hover:bg-white hover:text-[#09273A]"
              >
                <BriefcaseBusiness
                  className="h-3.5 w-3.5"
                  strokeWidth={1.9}
                />
              </a>

            </div>
          </div>


          {/* ================= COLUMN 2 ================= */}
          <div className="mt-8 basis-1/2 lg:mt-0 lg:basis-1/4 lg:pr-6">

            <h3 className="mb-5 text-[16px] leading-6 font-bold tracking-wider text-[#191C1D]">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/about"
                  className="transition font-normal text-[#5D5D5D] text-[16px] duration-300 hover:text-black"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="/products"
                  className="transition font-normal text-[#5D5D5D] text-[16px] duration-300 hover:text-black"
                >
                  Our Products
                </a>
              </li>

              <li>
                <a
                  href="/blog"
                  className="transition font-normal text-[#5D5D5D] text-[16px] duration-300 hover:text-black"
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  href="/gallery"
                  className="transition font-normal text-[#5D5D5D] text-[16px] duration-300 hover:text-black"
                >
                  Gallery
                </a>
              </li>
            </ul>

          </div>


          {/* ================= COLUMN 3 ================= */}
          <div className="mt-8 basis-1/2 lg:mt-0 lg:basis-1/4 lg:pr-6">

            <h3 className="mb-5 text-[16px] leading-6 font-bold tracking-wider text-[#191C1D]">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/contact-us"
                  className="transition font-normal text-[#5D5D5D] text-[16px] duration-300 hover:text-black"
                >
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="/privacy-policy"
                  className="transition font-normal text-[#5D5D5D] text-[16px] duration-300 hover:text-black"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="/terms-and-conditions"
                  className="transition font-normal text-[#5D5D5D] text-[16px] duration-300 hover:text-black"
                >
                  Terms and Conditions
                </a>
              </li>
            </ul>

          </div>


          {/* ================= COLUMN 4 ================= */}
          <div className="mt-8 w-full lg:mt-0 lg:basis-1/4">

            <h3 className="mb-5 text-[16px] leading-6 font-bold tracking-wider text-[#191C1D]">
              Contact
            </h3>

            {/* Contact Sales */}
            <p className="mb-4 text-sm font-bold text-[#785900]">
              Contact Sales
            </p>

            {/* Email */}
            <a
              href="mailto:info@floentair.com"
              className="mb-4 flex items-center gap-3 text-sm transition duration-300 hover:text-black"
            >
              <Mail size={18} />

              <span>
                info@floentair.com
              </span>
            </a>

            {/* Phone */}
            <a
              href="tel:+919925624342"
              className="flex items-center gap-3 text-sm transition duration-300 hover:text-black"
            >
              <Phone size={18} />

              <span>
                +91 9925624342
              </span>
            </a>

          </div>

        </div>


        {/* ================= COPYRIGHT ================= */}
        <div className="mt-12 border-t border-gray-200 pt-6">

          <p className="text-center text-xs text-[#C5C5D9]">
            © {new Date().getFullYear()} Floent Technologies.
            All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}