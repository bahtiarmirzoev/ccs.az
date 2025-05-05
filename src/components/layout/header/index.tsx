"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: "/", label: "Əsas" },
    { href: "/about", label: "Haqqımızda" },
    { href: "/services", label: "Xidmətlər" },
    { href: "/products", label: "Məhsullar" },
    { href: "/systems", label: "Sistemlər" },
    { href: "/projects", label: "Layihələr" },
    { href: "/contact", label: "Əlaqə" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-2"
          : "bg-white py-3"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between relative">
        <Link href="/" className="relative z-10 group">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent transition-colors">
            CCS.AZ
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 rounded transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Desktop nav */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-6">
              {navLinks.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "group relative inline-block font-medium text-gray-700 px-1 py-2 transition-colors duration-300 hover:text-blue-600",
                        isActive(item.href) && "text-blue-600"
                      )}
                    >
                      {item.label}
                      <span
                        className={cn(
                          "absolute left-0 -bottom-0.5 h-0.5 bg-blue-600 rounded-full transition-all duration-300",
                          isActive(item.href)
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        )}
                        style={{ height: "2px" }}
                      ></span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-blue-600 hover:bg-blue-100"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[85%] sm:w-[350px] border-l border-blue-100 p-0"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-4 border-b border-blue-100">
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    CCS.AZ
                  </span>
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-blue-600 hover:bg-blue-100"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetClose>
                </div>

                <div className="flex-1 overflow-y-auto">
                  <div className="p-4 space-y-1">
                    {navLinks.map((item) => (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center px-4 py-3 text-base font-medium rounded-lg transition-colors",
                            isActive(item.href)
                              ? "text-blue-600 bg-blue-50"
                              : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                          )}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
