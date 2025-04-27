import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
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
  Clock,
  User,
  Building,
} from "lucide-react";
import Link from "next/link";
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      <div className="relative h-[300px] md:h-[400px] bg-gradient-to-r from-cyan-600 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900/70"></div>
        <div className="container mx-auto h-full flex flex-col justify-end pb-12 px-4 md:px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
            Contact Us
          </h1>
          <p className="text-white/90 max-w-2xl text-lg md:text-xl drop-shadow">
            We're here to help with all your construction system needs
          </p>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4 md:px-6 relative z-10 -mt-10">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="bg-white/80 backdrop-blur-sm border-cyan-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-full bg-cyan-100 flex items-center justify-center mb-4 group-hover:bg-cyan-600 transition-colors duration-300">
                <Phone className="h-6 w-6 text-cyan-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-lg mb-2">Phone</h3>
              <p className="text-cyan-700">+994 12 345 67 89</p>
              <p className="text-cyan-700">+994 50 123 45 67</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-cyan-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-full bg-cyan-100 flex items-center justify-center mb-4 group-hover:bg-cyan-600 transition-colors duration-300">
                <Mail className="h-6 w-6 text-cyan-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-cyan-700">info@ccs.az</p>
              <p className="text-cyan-700">sales@ccs.az</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-cyan-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-full bg-cyan-100 flex items-center justify-center mb-4 group-hover:bg-cyan-600 transition-colors duration-300">
                <MapPin className="h-6 w-6 text-cyan-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-lg mb-2">Address</h3>
              <p className="text-cyan-700">123 Construction Avenue</p>
              <p className="text-cyan-700">Baku, Azerbaijan</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-cyan-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-full bg-cyan-100 flex items-center justify-center mb-4 group-hover:bg-cyan-600 transition-colors duration-300">
                <Clock className="h-6 w-6 text-cyan-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-lg mb-2">Working Hours</h3>
              <p className="text-cyan-700">Mon-Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-cyan-700">Sat: 9:00 AM - 1:00 PM</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-cyan-700 flex items-center">
                  <Send className="h-6 w-6 mr-2 text-cyan-600" />
                  Send Us a Message
                </h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="font-medium text-gray-700 flex items-center"
                      >
                        <User className="h-4 w-4 mr-2 text-cyan-600" />
                        Full Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        required
                        className="border-cyan-200 focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="company"
                        className="font-medium text-gray-700 flex items-center"
                      >
                        <Building className="h-4 w-4 mr-2 text-cyan-600" />
                        Company Name
                      </label>
                      <Input
                        id="company"
                        placeholder="Enter your company name"
                        className="border-cyan-200 focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="font-medium text-gray-700 flex items-center"
                      >
                        <Mail className="h-4 w-4 mr-2 text-cyan-600" />
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        required
                        className="border-cyan-200 focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="font-medium text-gray-700 flex items-center"
                      >
                        <Phone className="h-4 w-4 mr-2 text-cyan-600" />
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        placeholder="Enter your phone number"
                        required
                        className="border-cyan-200 focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="font-medium text-gray-700"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Enter message subject"
                      required
                      className="border-cyan-200 focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Enter your message here"
                      rows={6}
                      required
                      className="border-cyan-200 focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white w-full md:w-auto px-8 py-6 h-auto text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Company Info */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl h-full bg-gradient-to-br from-cyan-600 to-blue-800 text-white overflow-hidden">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-2">
                    Caspian Construction Systems
                  </h2>
                  <p className="text-white/80">
                    Innovative construction products suitable for all customer
                    needs
                  </p>
                </div>

                <Separator className="bg-white/20 my-6" />

                <div className="space-y-6 flex-grow">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-cyan-200 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-cyan-100">Our Office</h3>
                      <p className="text-white/80">
                        123 Construction Avenue, Baku, Azerbaijan
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-cyan-200 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-cyan-100">Call Us</h3>
                      <p className="text-white/80">+994 12 345 67 89</p>
                      <p className="text-white/80">+994 50 123 45 67</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-cyan-200 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-cyan-100">Email Us</h3>
                      <p className="text-white/80">info@ccs.az</p>
                      <p className="text-white/80">sales@ccs.az</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-cyan-200 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-cyan-100">
                        Working Hours
                      </h3>
                      <p className="text-white/80">
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </p>
                      <p className="text-white/80">
                        Saturday: 9:00 AM - 1:00 PM
                      </p>
                      <p className="text-white/80">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <h3 className="font-medium text-cyan-100 mb-3">
                    Connect With Us
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                    >
                      <svg
                        className="h-5 w-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                    >
                      <svg
                        className="h-5 w-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                    >
                      <svg
                        className="h-5 w-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                    >
                      <svg
                        className="h-5 w-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <Card className="border-0 shadow-xl overflow-hidden">
          <CardContent className="p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194473.42999465074!2d49.71487296863279!3d40.37627259651587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2sBaku%2C%20Azerbaijan!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CCS.az Location"
              className="rounded-lg"
            />
          </CardContent>
        </Card>
      </div>
      <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
        {/* Top wave shape */}
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
                təchizatçısı. Biz müştərilərimizə yüksək keyfiyyətli məhsullar
                və peşəkar xidmətlər təklif edirik.
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
    </div>
  );
}
