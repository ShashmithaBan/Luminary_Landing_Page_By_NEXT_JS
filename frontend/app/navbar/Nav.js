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
          className={`capitalize font-sans font-light text-sm hover:text-accent transition-all ${
            activeLink === link.path ? "text-primary font-medium border-b-2 border-blue-500" : ""
          }`}
        >
          {link.name}</Link>
      ))}
    </nav>
  );
};