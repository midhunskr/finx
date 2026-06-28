'use client'

import { useEffect, useState } from "react";

export default function StickyNav({ sectionIds }) {
  const [activeLink, setActiveLink] = useState(sectionIds[0]);

  useEffect(() => {
    const topNav = document.querySelector('#sticky-nav-top');
    const bottomNav = document.querySelector('#sticky-nav-bottom');

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;
      const isAtBottom = scrollY + windowHeight >= fullHeight - 50;

      if (scrollY > 10 && !isAtBottom) {
        topNav?.classList.remove('translate-y-[-100%]');
        bottomNav?.classList.remove('translate-y-full');
      } else {
        topNav?.classList.add('translate-y-[-100%]');
        bottomNav?.classList.add('translate-y-full');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean);

    const activeLinkObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveLink(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach(section => activeLinkObserver.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      activeLinkObserver.disconnect();
    };
  }, [sectionIds]);

  return (
    <>
      {/* Sticky Nav — Top (md and up) */}
      <div
        id="sticky-nav-top"
        className="hidden md:block fixed top-0 w-full z-50 bg-light shadow-md transition-all translate-y-[-100%]"
      >
        <nav className="h-16" aria-label="Main navigation">
          <ul className="flex items-center justify-between w-full font-medium py-5 md:px-12 lg:px-20 xl:px-40 xxl:px-64 xxxl:px-80">
            {sectionIds.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={activeLink === id ? 'true' : undefined}
                  className={`transition-colors duration-200 ${activeLink === id ? 'text-green-accent' : 'text-text-disabled'}`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Sticky Nav — Bottom (mobile only) */}
      <div
        id="sticky-nav-bottom"
        className="md:hidden fixed bottom-4 left-4 right-3 rounded-full z-50 bg-light shadow-lg transition-all transform translate-y-full border border-grey-shade-3"
      >
        <nav className="flex h-14 items-center justify-center" aria-label="Main navigation">
          <ul className="flex space-x-4 text-sm sm:text-base sm:space-x-4 font-medium justify-between items-center">
            {sectionIds.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={activeLink === id ? 'true' : undefined}
                  className={`transition-colors duration-200 ${activeLink === id ? 'text-green-accent' : 'text-text-disabled'}`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
