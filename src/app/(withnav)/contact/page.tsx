"use client";

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
import { ContactForm } from "@/components/contact-form";

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
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl overflow-hidden h-full">
              <div className="h-3 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.4283901490703!2d49.8517568!3d40.3771909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d079efb5163%3A0xc20aa51a5f0b5e01!2sBaku%2C%20Azerbaijan!5e0!3m2!1sen!2s!4v1647881234567!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
