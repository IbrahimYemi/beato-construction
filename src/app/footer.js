import React from "react";

export default function Footer() {
  return (
    <footer className="p-4 bg-gray-900 md:p-8 lg:p-10">
      <div className="mx-auto max-w-screen-xl text-center">
        <hr/>
        <p className="text-base md:text-xl my-2  text-gray-100">BEATO CONSULTING LLC</p>
        <p className="my-3 text-gray-100">Business Center 1, M Floor, The Meydan Hotel, Nad Al Sheba, Dubai, U.A.E</p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-300">
          <li>
            <a
              href="https://alstrada.com"
              className="mr-4 hover:underline md:mr-6 "
            >
              About Alstrada
            </a>
          </li>
          <li>
            <a href="https://alstrada.com" className="mr-4 hover:underline md:mr-6">
              Have a question?
            </a>
          </li>
          <li>
            <a
              href="mailto:info@beatoconsultingllc.com"
              className="mr-4 hover:underline md:mr-6"
            >
              Email us: info@beatoconsultingllc.com
            </a>
          </li>
          <li>
            <a href="tel:+971549962845" className="mr-4 hover:underline md:mr-6">
              Call us on +971 54 996 2845
            </a>
          </li>
          <li>
            <a href="tel:+971509962804" className="mr-4 hover:underline md:mr-6">
              Or call +971 50 996 2804
            </a>
          </li>
        </ul>
        <span className="text-sm text-gray-100 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="/" className="hover:underline">
            Beato Consulting LLC™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
