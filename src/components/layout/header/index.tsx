"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { User, LogIn, Menu, X } from "lucide-react";
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
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-white py-3"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between relative">
        <Link href="/" className="relative group z-10">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            CCS.AZ
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Центрированные ссылки */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-4">
              {[
                { href: "/", label: "Əsas" },
                { href: "/about", label: "Haqqimizda" },
                { href: "/services", label: "Xidmətlər" },
                { href: "/contact", label: "Əlaqə" },
              ].map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink 
                      className={cn(
                        "group relative px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300",
                        isActive(item.href) && "text-blue-600"
                      )}
                    >
                      {item.label}
                      <span className={cn(
                        "absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300",
                        isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                      )}></span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}

              {/* Выпадающее меню "Məhsullarimiz" */}
              <NavigationMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className={cn(
                      "group relative px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300",
                      pathname.startsWith("/products") && "text-blue-600"
                    )}>
                      Məhsullarimiz
                      <span className={cn(
                        "absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300",
                        pathname.startsWith("/products") ? "w-full" : "w-0 group-hover:w-full"
                      )}></span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="mt-2 shadow-lg rounded-md border p-2 bg-white">
                    <DropdownMenuItem asChild>
                      <Link
                        href="/products?category=izolyasiya"
                        className={cn(
                          "w-full cursor-pointer",
                          pathname === "/products" && searchParams.get("category") === "izolyasiya" && "text-blue-600"
                        )}
                      >
                        İzolyasiya Materialları
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link 
                        href="/products?category=temir"
                        className={cn(
                          "w-full cursor-pointer",
                          pathname === "/products" && searchParams.get("category") === "temir" && "text-blue-600"
                        )}
                      >
                        Təmir və Tikinti
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/products?category=aksesuar"
                        className={cn(
                          "w-full cursor-pointer",
                          pathname === "/products" && searchParams.get("category") === "aksesuar" && "text-blue-600"
                        )}
                      >
                        Aksesuar və Alətlər
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Кнопки справа */}
        <div className="hidden md:flex items-center space-x-3 z-10">
          <Link href="/sign-in">
            <Button
              variant="outline"
              size="sm"
              className="border-blue-300 text-blue-600 hover:bg-blue-50"
            >
              <LogIn className="mr-2 h-4 w-4" />
              Giriş
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <User className="mr-2 h-4 w-4" />
              Registrasiya
            </Button>
          </Link>
        </div>

        {/* Мобильное меню */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-blue-600">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[80%] sm:w-[350px] border-l border-blue-100"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    CCS.AZ
                  </span>
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-blue-600"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetClose>
                </div>

                <div className="flex flex-col space-y-4">
                  {[
                    { href: "/", label: "Əsas" },
                    { href: "/about", label: "Haqqimizda" },
                    { href: "/services", label: "Xidmətlər" },
                    { href: "/contact", label: "Əlaqə" },
                    { href: "/products", label: "Məhsullarimiz" },
                  ].map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "px-2 py-3 text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors",
                          isActive(item.href) && "text-blue-600 bg-blue-50"
                        )}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>

                <div className="mt-auto pt-6 flex flex-col space-y-3">
                  <SheetClose asChild>
                    <Link href="/sign-in">
                      <Button
                        variant="outline"
                        className="w-full border-blue-300 text-blue-600 hover:bg-blue-50"
                      >
                        <LogIn className="mr-2 h-4 w-4" />
                        Giriş
                      </Button>
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link href="/sign-up">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        <User className="mr-2 h-4 w-4" />
                        Registrasiya
                      </Button>
                    </Link>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
