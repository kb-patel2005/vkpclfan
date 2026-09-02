import {
  BriefcaseBusiness,
  Camera,
  Mail,
  Phone,
  Play,
  Users,
} from "lucide-react";

import React from "react";

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 8.04899C16 3.60355 12.4184 0 8.001 0C3.58155 0.000999875 0 3.60355 0 8.04999C0 12.0665 2.92563 15.3961 6.74916 16V10.3757H4.71941V8.04999H6.75116V6.27522C6.75116 4.25847 7.94601 3.14461 9.77278 3.14461C10.6487 3.14461 11.5636 3.30159 11.5636 3.30159V5.28134H10.5547C9.5618 5.28134 9.25184 5.90226 9.25184 6.53918V8.04899H11.4696L11.1156 10.3747H9.25084V15.999C13.0744 15.3951 16 12.0655 16 8.04899Z"
          fill="black"
        />
      </svg>
    ),
  },

  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.99839 3.99915C4.89666 3.99915 3.99757 4.89826 3.99757 6C3.99757 7.10174 4.89666 8.00085 5.99839 8.00085C7.10011 8.00085 7.9992 7.10174 7.9992 6C7.9992 4.89826 7.10011 3.99915 5.99839 3.99915ZM11.9993 6C11.9993 5.17144 12.0068 4.35039 11.9603 3.52333C11.9138 2.56268 11.6946 1.7101 10.9922 1.00763C10.2882 0.303651 9.43715 0.0860043 8.47652 0.0394728C7.64797 -0.00705863 6.82693 0.000446468 5.99989 0.000446468C5.17134 0.000446468 4.3503 -0.00705863 3.52326 0.0394728C2.56263 0.0860043 1.71007 0.305152 1.00761 1.00763C0.303646 1.7116 0.0860026 2.56268 0.0394721 3.52333C-0.00705849 4.35189 0.00044646 5.17294 0.00044646 6C0.00044646 6.82706 -0.00705849 7.64962 0.0394721 8.47667C0.0860026 9.43732 0.305147 10.2899 1.00761 10.9924C1.71157 11.6963 2.56263 11.914 3.52326 11.9605C4.35181 12.0071 5.17284 11.9996 5.99989 11.9996C6.82843 11.9996 7.64947 12.0071 8.47652 11.9605C9.43715 11.914 10.2897 11.6948 10.9922 10.9924C11.6961 10.2884 11.9138 9.43732 11.9603 8.47667C12.0083 7.64962 11.9993 6.82856 11.9993 6ZM5.99839 9.07858C4.29477 9.07858 2.91986 7.70365 2.91986 6C2.91986 4.29635 4.29477 2.92142 5.99839 2.92142C7.70201 2.92142 9.07691 4.29635 9.07691 6C9.07691 7.70365 7.70201 9.07858 5.99839 9.07858ZM9.20299 3.51432C8.80523 3.51432 8.48402 3.1931 8.48402 2.79533C8.48402 2.39757 8.80523 2.07635 9.20299 2.07635C9.60075 2.07635 9.92197 2.39757 9.92197 2.79533C9.92208 2.88979 9.90357 2.98333 9.86748 3.07062C9.83139 3.1579 9.77843 3.23721 9.71165 3.304C9.64486 3.37079 9.56556 3.42374 9.47827 3.45983C9.39099 3.49592 9.29744 3.51444 9.20299 3.51432Z"
          fill="black"
        />
      </svg>
    ),
  },

  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg
        width="16"
        height="10"
        viewBox="0 0 16 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.6661 1.5621C15.575 1.25962 15.3964 0.983765 15.1482 0.762159C14.9 0.540553 14.5909 0.380964 14.2518 0.299363C13.0036 6.47932e-08 8 0 8 0C8 0 2.99643 -6.47932e-08 1.74821 0.297771C1.40896 0.379107 1.09969 0.538607 0.851439 0.760254C0.603191 0.981901 0.424713 1.25789 0.333929 1.56051C-7.26609e-08 2.67516 0 5 0 5C0 5 -7.26609e-08 7.32484 0.333929 8.4379C0.517857 9.05255 1.06071 9.53662 1.74821 9.70064C2.99643 10 8 10 8 10C8 10 13.0036 10 14.2518 9.70064C14.9411 9.53662 15.4821 9.05255 15.6661 8.4379C16 7.32484 16 5 16 5C16 5 16 2.67516 15.6661 1.5621ZM6.41071 7.13376V2.86624L10.5536 4.98408L6.41071 7.13376Z"
          fill="black"
        />
      </svg>
    ),
  },

  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="14" height="14" rx="2" fill="black" />

        <path
          d="M4.02 5.3H2.15V11.3H4.02V5.3ZM3.08 4.48C3.68 4.48 4.17 3.99 4.17 3.39C4.17 2.8 3.68 2.31 3.08 2.31C2.49 2.31 2 2.8 2 3.39C2 3.99 2.49 4.48 3.08 4.48ZM11.3 8.01C11.3 6.2 10.34 5.3 8.95 5.3C7.83 5.3 7.33 5.92 7.05 6.35V5.3H5.18V11.3H7.05V8.33C7.05 7.55 7.2 6.8 8.17 6.8C9.12 6.8 9.13 7.69 9.13 8.38V11.3H11.3V8.01Z"
          fill="white"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="text-[#5D5D5D]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-0">

        <div className="flex flex-wrap *:gap-5 lg:gap-0 justify-between">

          {/* ================= COLUMN 1 ================= */}
          <div className="lg:pr-6">
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
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full transition bg-[#EDEEEF] duration-300 hover:bg-[#FDCD2E] hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>


          {/* ================= COLUMN 2 ================= */}
          <div className="w-full lg:w-[60%] mt-8 flex justify-between">
            <div className="lg:mt-0 lg:pr-6">

              <h3 className="mb-5 text-[16px] leading-6 font-bold tracking-wider text-[#191C1D]">
                Quick Links
              </h3>

              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="/about"
                    className="link-hover transition font-normal text-[#5D5D5D] text-[16px] duration-500 hover:text-[#FDCD2E]"
                  >
                    About
                  </a>

                </li>
                <li>
                  <a href="/products" className="link-hover transition font-normal text-[#5D5D5D] text-[16px] duration-500 hover:text-[#FDCD2E]">
                    Our Products
                  </a>
                </li>
                <li>
                  <a href="/blog" className="link-hover transition font-normal text-[#5D5D5D] text-[16px] duration-500 hover:text-[#FDCD2E]">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/gallery" className="link-hover transition font-normal text-[#5D5D5D] text-[16px] duration-500 hover:text-[#FDCD2E]">
                    Gallery
                  </a>
                </li>
                <li className="lg:hidden">
                  <a href="/contact-us" className="link-hover transition font-normal text-[#5D5D5D] text-[16px] duration-500 hover:text-[#FDCD2E]">
                    Contact Us
                  </a>
                </li>
              </ul>

            </div>

            <div className="hidden lg:block">
              <h3 className="mb-5 text-[16px] font-bold tracking-wider text-[#191C1D]">
                Quick Links
              </h3>

              <ul className="space-y-3 text-sm">
                <li>
                  <a href="/contact-us" className="link-hover transition text-[#5D5D5D] text-[16px] hover:text-[#FDCD2E]">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="link-hover transition text-[#5D5D5D] text-[16px] hover:text-[#FDCD2E]">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-and-services" className="link-hover transition text-[#5D5D5D] text-[16px] hover:text-[#FDCD2E]">
                    Terms and Services
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:mt-0">

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


                <span>
                  email: info@floentair.com
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+919925624342"
                className="flex items-center gap-3 text-sm transition duration-300 hover:text-black"
              >

                <span>
                  phone: +91 9925624342
                </span>
              </a>

            </div>
          </div>
        </div>


        {/* ================= COPYRIGHT ================= */}
        <div className="mt-12 lg:mb-0 mb-14 border-t border-gray-200 pt-6 flex items-center justify-between gap-4 sm:flex-row flex-col">

          <p className="text-center text-[16px] text-[#5D5D5D]">
            © {new Date().getFullYear()} Floent Technologies.
            All rights reserved.
          </p>
          <div className="flex items-center gap-4 justify-center">
            <a href="#" className="text-[16px]   hover:text-[#FDCD2E]">
              Privacy Policy
            </a>
            <a href="#" className="text-[16px]  hover:text-[#FDCD2E]">
              Terms and Conditions
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}