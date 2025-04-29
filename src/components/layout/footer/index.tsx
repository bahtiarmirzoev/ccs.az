import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronRight,
  Send,
  ArrowRight,
  CheckCircle,
  Award,
  Target,
  Clock,
  Users,
  Droplet,
  Shield,
  Building2,
  Star,
} from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      <div className="w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-auto fill-cyan-600"
        >
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 rounded-md bg-gradient-to-r from-cyan-600 to-blue-700 flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">
                Caspian Construction Systems
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Azərbaycanda tikinti materialları və həllərinin aparıcı
              təchizatçısı. Biz müştərilərimizə yüksək keyfiyyətli məhsullar və
              peşəkar xidmətlər təklif edirik.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="h-9 w-9 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 hover:bg-cyan-600 hover:text-white transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 hover:bg-cyan-600 hover:text-white transition-colors duration-300"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 hover:bg-cyan-600 hover:text-white transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 hover:bg-cyan-600 hover:text-white transition-colors duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
              <span className="h-5 w-1 bg-cyan-600 rounded-full mr-2"></span>
              Sürətli Keçidlər
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-cyan-600 flex items-center group"
                >
                  <ChevronRight
                    size={16}
                    className="mr-2 text-cyan-600 group-hover:translate-x-1 transition-transform"
                  />
                  Ana Səhifə
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-cyan-600 flex items-center group"
                >
                  <ChevronRight
                    size={16}
                    className="mr-2 text-cyan-600 group-hover:translate-x-1 transition-transform"
                  />
                  Haqqımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-cyan-600 flex items-center group"
                >
                  <ChevronRight
                    size={16}
                    className="mr-2 text-cyan-600 group-hover:translate-x-1 transition-transform"
                  />
                  Xidmətlər
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-600 hover:text-cyan-600 flex items-center group"
                >
                  <ChevronRight
                    size={16}
                    className="mr-2 text-cyan-600 group-hover:translate-x-1 transition-transform"
                  />
                  Məhsullar
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-600 hover:text-cyan-600 flex items-center group"
                >
                  <ChevronRight
                    size={16}
                    className="mr-2 text-cyan-600 group-hover:translate-x-1 transition-transform"
                  />
                  Layihələr
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-cyan-600 flex items-center group"
                >
                  <ChevronRight
                    size={16}
                    className="mr-2 text-cyan-600 group-hover:translate-x-1 transition-transform"
                  />
                  Əlaqə
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
              <span className="h-5 w-1 bg-cyan-600 rounded-full mr-2"></span>
              Xidmətlərimiz
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services#hydroisolation"
                  className="text-gray-600 hover:text-cyan-600 flex items-center group"
                >
                  <ChevronRight
                    size={16}
                    className="mr-2 text-cyan-600 group-hover:translate-x-1 transition-transform"
                  />
                  Hidroizolyasiya
                </Link>
              </li>
              <li>
                <Link
                  href="/services#thermoisolation"
                  className="text-gray-600 hover:text-cyan-600 flex items-center group"
                >
                  <ChevronRight
                    size={16}
                    className="mr-2 text-cyan-600 group-hover:translate-x-1 transition-transform"
                  />
                  İstilik İzolyasiyası
                </Link>
              </li>
              <li>
                <Link
                  href="/services#finishing"
                  className="text-gray-600 hover:text-cyan-600 flex items-center group"
                >
                  <ChevronRight
                    size={16}
                    className="mr-2 text-cyan-600 group-hover:translate-x-1 transition-transform"
                  />
                  Bəzək Materialları
                </Link>
              </li>
              <li>
                <Link
                  href="/services#flooring"
                  className="text-gray-600 hover:text-cyan-600 flex items-center group"
                >
                  <ChevronRight
                    size={16}
                    className="mr-2 text-cyan-600 group-hover:translate-x-1 transition-transform"
                  />
                  Döşəmə Örtükləri
                </Link>
              </li>
              <li>
                <Link
                  href="/services#repair"
                  className="text-gray-600 hover:text-cyan-600 flex items-center group"
                >
                  <ChevronRight
                    size={16}
                    className="mr-2 text-cyan-600 group-hover:translate-x-1 transition-transform"
                  />
                  Təmir Materialları
                </Link>
              </li>
              <li>
                <Link
                  href="/services#technical"
                  className="text-gray-600 hover:text-cyan-600 flex items-center group"
                >
                  <ChevronRight
                    size={16}
                    className="mr-2 text-cyan-600 group-hover:translate-x-1 transition-transform"
                  />
                  Texniki Dəstək
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
              <span className="h-5 w-1 bg-cyan-600 rounded-full mr-2"></span>
              Əlaqə Məlumatları
            </h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <MapPin
                  size={18}
                  className="mr-3 text-cyan-600 mt-1 flex-shrink-0"
                />
                <span className="text-gray-600">
                  123 Construction Avenue, Baku, Azerbaijan
                </span>
              </li>
              <li className="flex items-start">
                <Phone
                  size={18}
                  className="mr-3 text-cyan-600 mt-1 flex-shrink-0"
                />
                <span className="text-gray-600">+994 12 345 67 89</span>
              </li>
              <li className="flex items-start">
                <Mail
                  size={18}
                  className="mr-3 text-cyan-600 mt-1 flex-shrink-0"
                />
                <span className="text-gray-600">info@ccs.az</span>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Xəbərlər üçün abunə olun
            </h3>
            <div className="flex">
              <Input
                type="email"
                placeholder="Email ünvanınız"
                className="rounded-r-none border-r-0 focus-visible:ring-cyan-600"
              />
              <Button className="rounded-l-none bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800">
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            Caspian Construction Systems. Bütün hüquqlar qorunur.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy-policy"
              className="text-gray-600 hover:text-cyan-600 text-sm"
            >
              Məxfilik Siyasəti
            </Link>
            <Link
              href="/terms-of-service"
              className="text-gray-600 hover:text-cyan-600 text-sm"
            >
              Xidmət Şərtləri
            </Link>
            <Link
              href="/sitemap"
              className="text-gray-600 hover:text-cyan-600 text-sm"
            >
              Sayt Xəritəsi
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
