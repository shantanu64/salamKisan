import { useState } from "react";

export default function MobNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center w-full justify-between border-b border-gray-400 py-2 px-4">
      <a href="/">
        <img src="logo.png" className="w-24" alt="logo" />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/">Home</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/aboutUs">About Us</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/services">Services</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/news">News</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/events">Events</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contactUs">Contact Us</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/login">Login</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/aboutUs">About Us</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/news">News</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="/contactUs">Contact Us</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        color: black;
      }
    `}</style>
    </div>
  );
}
