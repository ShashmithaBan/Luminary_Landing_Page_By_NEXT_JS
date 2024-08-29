"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ContactBtn } from "./ContactBtn";

const links = [
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Tech Stacks", path: "#techstacks" },
  { name: "Community", path: "#community" },
  { name: "Pricing", path: "#pricing" }
];
export const MobileNav = () => {
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
        threshold: 0.7, 
      }
    );


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
    <Sheet>
      <SheetTrigger className="flex justify-center items-center ">
        <CiMenuBurger className="text-[25px] md:text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="bg-white bg-opacity-80 juy flex flex-col p-10 px-5 ">
        
        <div className="flex flex-col h-screen space-y-20 ">
        <nav className="flex flex-col space-y-5 justify-center items-center ">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`capitalize font-medium hover:text-accent transition-all ${
                activeLink === link.path ? "text-primary border-b-2 border-primary" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          <ContactBtn/>
        </nav>
        
        </div>
      </SheetContent>
    </Sheet>
  );
};