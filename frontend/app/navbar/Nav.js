"use client";
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

const links = [
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Tech Stacks", path: "#techstacks" },
  { name: "Community", path: "#community" },
  { name: "Pricing", path: "#pricing" }
];

export const Nav = () => {
  const [activeLink, setActiveLink] = useState("");
  const navRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.7, // Adjust as needed
      }
    );

    // Observe each section
    links.forEach((link) => {
      const section = document.querySelector(link.path);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav ref={navRef} className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`capitalize font-sans font-thin hover:text-accent transition-all ${
            activeLink === link.path ? "text-blue-500 border-b-2 border-blue-500" : ""
          }`}
        >
          <a>{link.name}</a> {/* Ensure to use the 'a' tag for Next.js Link component */}
        </Link>
      ))}
    </nav>
  );
};