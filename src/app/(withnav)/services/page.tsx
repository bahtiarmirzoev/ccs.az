"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Droplets,
  Building2,
  PaintBucket,
  Hammer,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Award,
  Users,
  BadgeCheck,
  ChevronRight,
  Star,
  Zap,
  Layers,
  Factory,
  Home,
  HeartHandshake,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Building,
  User,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      {/* Hero Section with 3D-like elements */}
      <div className="relative h-[500px] md:h-[600px] bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-20"></div>

        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-40 h-40 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-[20%] right-[10%] w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[10%] left-[30%] w-44 h-44 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          <div className="absolute bottom-[20%] right-[20%] w-36 h-36 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000"></div>
        </div>

        {/* Geometric decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-[5%] left-[10%] w-32 h-32 border-4 border-white/30 rounded-lg transform rotate-12"></div>
          <div className="absolute top-[15%] right-[15%] w-40 h-40 border-4 border-white/30 rounded-full"></div>
          <div className="absolute bottom-[10%] left-[20%] w-36 h-36 border-4 border-white/30 transform -rotate-15"></div>
          <div className="absolute bottom-[20%] right-[10%] w-24 h-24 border-4 border-white/30 rounded-lg transform rotate-45"></div>
        </div>

        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center px-4 md:px-6 relative z-10">
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border-none">
            İnnovativ həllər
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-md">
            <span className="text-cyan-200">Xidmətlərimiz</span>
          </h1>
          <p className="text-white/90 max-w-2xl text-lg md:text-xl drop-shadow mb-8">
            Azərbaycanda aparıcı tikinti materialları təchizatçısından tikinti
            və təmir üçün kompleks həllər
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-white text-cyan-700 hover:bg-cyan-50 px-8 py-6 h-auto text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 group">
              <span>Bizimlə əlaqə saxlayın</span>
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/20 px-8 py-6 h-auto text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Daha ətraflı
            </Button>
          </div>
        </div>

        {/* Bottom wave shape */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full h-auto"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Stats Counter Section */}
      <div className="container mx-auto px-4 md:px-6 py-8 relative z-20 -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-white/90 backdrop-blur-sm border-cyan-100 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">200+</div>
              <p className="text-gray-600">Məhsul çeşidi</p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-cyan-100 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">11</div>
              <p className="text-gray-600">Məhsul kateqoriyası</p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-cyan-100 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">10+</div>
              <p className="text-gray-600">İl təcrübə</p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-cyan-100 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">500+</div>
              <p className="text-gray-600">Tamamlanmış layihə</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Services Section */}
      <div className="container mx-auto py-16 px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-cyan-100 text-cyan-800 hover:bg-cyan-200">
            Əsas xidmətlər
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Peşəkar həllər təklif edirik
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tikinti və təmir işləriniz üçün yüksək keyfiyyətli materiallar və
            hərtərəfli həllər
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <Card className="bg-white/90 backdrop-blur-sm border-cyan-100 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
            <div className="h-2 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
            <CardHeader className="pb-0">
              <div className="w-14 h-14 rounded-lg bg-cyan-100 flex items-center justify-center mb-4 group-hover:bg-cyan-600 transition-colors duration-300">
                <Droplets className="h-8 w-8 text-cyan-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <CardTitle className="text-xl font-bold text-cyan-800">
                Hidroizolyasiya
              </CardTitle>
              <CardDescription className="text-cyan-600">
                Nəmdən qorunmaq üçün kompleks həllər
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-gray-600">
                Müasir hidroizolyasiya materiallarımız binaları və tikililəri su
                və nəm keçməsindən etibarlı şəkildə qoruyur, onların istismar
                müddətini uzadır.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Membran hidroizolyasiya</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Sürtkü hidroizolyasiya</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Penetrasiya hidroizolyasiya
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link
                href="#"
                className="inline-flex items-center text-cyan-600 hover:text-cyan-800 font-medium group-hover:translate-x-1 transition-transform duration-300"
              >
                Daha ətraflı <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>

          {/* Service Card 2 */}
          <Card className="bg-white/90 backdrop-blur-sm border-cyan-100 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
            <div className="h-2 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
            <CardHeader className="pb-0">
              <div className="w-14 h-14 rounded-lg bg-cyan-100 flex items-center justify-center mb-4 group-hover:bg-cyan-600 transition-colors duration-300">
                <Shield className="h-8 w-8 text-cyan-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <CardTitle className="text-xl font-bold text-cyan-800">
                İstilik izolyasiyası
              </CardTitle>
              <CardDescription className="text-cyan-600">
                Enerji səmərəli həllər
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-gray-600">
                İstilik izolyasiya materiallarımız isitmə və soyutma xərclərini
                azaltmağa kömək edir, ilin istənilən vaxtında binalarda rahat
                mikroiqlim yaradır.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Mineral yun</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Penopolistirol</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Maye istilik izolyasiyası
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link
                href="#"
                className="inline-flex items-center text-cyan-600 hover:text-cyan-800 font-medium group-hover:translate-x-1 transition-transform duration-300"
              >
                Daha ətraflı <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>

          {/* Service Card 3 */}
          <Card className="bg-white/90 backdrop-blur-sm border-cyan-100 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
            <div className="h-2 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
            <CardHeader className="pb-0">
              <div className="w-14 h-14 rounded-lg bg-cyan-100 flex items-center justify-center mb-4 group-hover:bg-cyan-600 transition-colors duration-300">
                <PaintBucket className="h-8 w-8 text-cyan-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <CardTitle className="text-xl font-bold text-cyan-800">
                Bəzək materialları
              </CardTitle>
              <CardDescription className="text-cyan-600">
                Son tamamlama üçün müasir həllər
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-gray-600">
                Binaların daxili və xarici hissələrində estetik və uzunömürlü
                səthlərin yaradılması üçün yüksək keyfiyyətli bəzək
                materiallarının geniş çeşidi.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Dekorativ suvaqlar</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Boyalar və emulsiyalar</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Fasad sistemləri</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link
                href="#"
                className="inline-flex items-center text-cyan-600 hover:text-cyan-800 font-medium group-hover:translate-x-1 transition-transform duration-300"
              >
                Daha ətraflı <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>

          {/* Service Card 4 */}
          <Card className="bg-white/90 backdrop-blur-sm border-cyan-100 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
            <div className="h-2 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
            <CardHeader className="pb-0">
              <div className="w-14 h-14 rounded-lg bg-cyan-100 flex items-center justify-center mb-4 group-hover:bg-cyan-600 transition-colors duration-300">
                <Layers className="h-8 w-8 text-cyan-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <CardTitle className="text-xl font-bold text-cyan-800">
                Döşəmə örtükləri
              </CardTitle>
              <CardDescription className="text-cyan-600">
                Dayanıqlı və estetik döşəmə həlləri
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-gray-600">
                Müxtəlif növ döşəmə örtükləri və onların quraşdırılması üçün
                materiallar təklif edirik, yüksək keyfiyyətli və uzunömürlü
                döşəmələr yaradırıq.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Özü hamarlaşan qarışıqlar
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Epoksi və poliuretan örtüklər
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Döşəmə yapışdırıcıları</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link
                href="#"
                className="inline-flex items-center text-cyan-600 hover:text-cyan-800 font-medium group-hover:translate-x-1 transition-transform duration-300"
              >
                Daha ətraflı <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>

          {/* Service Card 5 */}
          <Card className="bg-white/90 backdrop-blur-sm border-cyan-100 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
            <div className="h-2 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
            <CardHeader className="pb-0">
              <div className="w-14 h-14 rounded-lg bg-cyan-100 flex items-center justify-center mb-4 group-hover:bg-cyan-600 transition-colors duration-300">
                <Wrench className="h-8 w-8 text-cyan-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <CardTitle className="text-xl font-bold text-cyan-800">
                Təmir materialları
              </CardTitle>
              <CardDescription className="text-cyan-600">
                Beton və digər səthlərin bərpası
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-gray-600">
                Zədələnmiş beton və digər inşaat konstruksiyalarının tez və
                effektiv bərpası üçün yüksək keyfiyyətli təmir materialları
                təklif edirik.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Beton təmir qarışıqları</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">İnyeksiya materialları</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Ankerleme sistemləri</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link
                href="#"
                className="inline-flex items-center text-cyan-600 hover:text-cyan-800 font-medium group-hover:translate-x-1 transition-transform duration-300"
              >
                Daha ətraflı <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>

          {/* Service Card 6 */}
          <Card className="bg-white/90 backdrop-blur-sm border-cyan-100 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
            <div className="h-2 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
            <CardHeader className="pb-0">
              <div className="w-14 h-14 rounded-lg bg-cyan-100 flex items-center justify-center mb-4 group-hover:bg-cyan-600 transition-colors duration-300">
                <Zap className="h-8 w-8 text-cyan-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <CardTitle className="text-xl font-bold text-cyan-800">
                Texniki dəstək
              </CardTitle>
              <CardDescription className="text-cyan-600">
                Peşəkar məsləhət və texniki yardım
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-gray-600">
                Layihənin bütün mərhələlərində peşəkar texniki dəstək təklif
                edirik - materialların seçimindən tutmuş onların tətbiqinə
                qədər.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Layihə məsləhətləşməsi</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Sahə nəzarəti</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Təlim və seminarlar</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link
                href="#"
                className="inline-flex items-center text-cyan-600 hover:text-cyan-800 font-medium group-hover:translate-x-1 transition-transform duration-300"
              >
                Daha ətraflı <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Featured Service with 3D effect */}
      <div className="bg-gradient-to-r from-cyan-900 to-blue-900 py-20 my-16 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="mb-4 bg-cyan-500/20 text-cyan-200 hover:bg-cyan-500/30 backdrop-blur-sm border-none">
                Premium xidmət
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Sənaye obyektləri üçün kompleks həllər
              </h2>
              <p className="text-cyan-100 mb-8 text-lg">
                Sənaye obyektləri üçün layihələndirmə, material təchizatı və
                texniki dəstək daxil olmaqla tam xidmət spektri təklif edirik.
                Mütəxəssislərimiz müxtəlif mürəkkəblikdəki obyektlərlə işləmək
                təcrübəsinə malikdir.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-start hover:bg-white/20 transition-colors duration-300">
                  <Building2 className="h-6 w-6 text-cyan-300 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white mb-1">
                      Sənaye döşəmələri
                    </h3>
                    <p className="text-cyan-200/80 text-sm">
                      Möhkəm və uzunömürlü həllər
                    </p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-start hover:bg-white/20 transition-colors duration-300">
                  <Hammer className="h-6 w-6 text-cyan-300 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white mb-1">
                      Korroziyaya qarşı müdafiə
                    </h3>
                    <p className="text-cyan-200/80 text-sm">
                      Konstruksiyaların xidmət müddətinin uzadılması
                    </p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-start hover:bg-white/20 transition-colors duration-300">
                  <Wrench className="h-6 w-6 text-cyan-300 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white mb-1">
                      Təmir qarışıqları
                    </h3>
                    <p className="text-cyan-200/80 text-sm">
                      Səthlərin tez bərpası
                    </p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-start hover:bg-white/20 transition-colors duration-300">
                  <Shield className="h-6 w-6 text-cyan-300 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white mb-1">
                      Yanğından müdafiə
                    </h3>
                    <p className="text-cyan-200/80 text-sm">
                      Təhlükəsizlik normalarına uyğunluq
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/contact">
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 h-auto text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                  Məsləhət üçün müraciət edin
                </Button>
              </Link>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 to-transparent z-10"></div>
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Sənaye obyekti"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-4 z-20 max-w-xs transform hover:translate-y-[-5px] transition-transform duration-300">
                <div className="flex items-center mb-2">
                  <BadgeCheck className="h-5 w-5 text-cyan-600 mr-2" />
                  <h3 className="font-bold text-cyan-800">
                    Sertifikatlı həllər
                  </h3>
                </div>
                <p className="text-sm text-gray-600">
                  Bütün materiallarımız lazımi keyfiyyət sertifikatlarına
                  malikdir və beynəlxalq standartlara uyğundur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Categories Tabs */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-cyan-100 text-cyan-800 hover:bg-cyan-200">
            Xidmət kateqoriyaları
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Müxtəlif sahələr üçün həllər
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sənaye və tikinti sahələrinin müxtəlif sahələri üçün
            ixtisaslaşdırılmış həllər təklif edirik
          </p>
        </div>

        <Tabs defaultValue="construction" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger
              value="construction"
              className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white"
            >
              Tikinti
            </TabsTrigger>
            <TabsTrigger
              value="industrial"
              className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white"
            >
              Sənaye
            </TabsTrigger>
            <TabsTrigger
              value="residential"
              className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white"
            >
              Yaşayış obyektləri
            </TabsTrigger>
            <TabsTrigger
              value="infrastructure"
              className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white"
            >
              İnfrastruktur
            </TabsTrigger>
          </TabsList>

          <TabsContent value="construction" className="border-none p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-xl overflow-hidden relative h-[300px] md:h-[400px] shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Tikinti"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-cyan-800 mb-4">
                  Tikinti sənayesi üçün həllər
                </h3>
                <p className="text-gray-600 mb-6">
                  Tikintinin bütün mərhələləri üçün geniş material və
                  texnologiya spektri təklif edirik, təməldən damadək.
                  Həllərimiz tikintinin keyfiyyətini artırmağa, müddətləri
                  qısaltmağa və xərcləri optimallaşdırmağa kömək edir.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-cyan-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Təməl işləri
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Hidroizolyasiya, betona əlavələr, təmir qarışıqları
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-cyan-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Fasad sistemləri
                      </h4>
                      <p className="text-gray-600 text-sm">
                        İstilik izolyasiyası, dekorativ suvaqlar, boyalar
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-cyan-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Dam örtükləri
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Hidroizolyasiya, istilik izolyasiyası, qoruyucu örtüklər
                      </p>
                    </div>
                  </div>
                </div>
                <Link href="/contact">
                  <Button className="mt-8 bg-cyan-600 hover:bg-cyan-700 text-white w-fit">
                    Həllər haqqında ətraflı
                  </Button>
                </Link>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="industrial" className="border-none p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-xl overflow-hidden relative h-[300px] md:h-[400px] shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Sənaye"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-cyan-800 mb-4">
                  Sənaye obyektləri üçün həllər
                </h3>
                <p className="text-gray-600 mb-6">
                  Möhkəmlik, kimyəvi davamlılıq və uzunömürlülük üçün yüksək
                  tələblərə cavab verən sənaye obyektləri üçün
                  ixtisaslaşdırılmış materiallar. Həllərimiz müxtəlif sahələrin
                  müəssisələrində tətbiq olunur.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-cyan-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Sənaye döşəmələri
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Polimer, epoksi, poliuretan örtüklər
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-cyan-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Korroziyaya qarşı müdafiə
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Metal konstruksiyalar üçün qoruyucu örtüklər
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-cyan-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Kimyəvi müdafiə
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Aqressiv mühitlərə davamlı materiallar
                      </p>
                    </div>
                  </div>
                </div>
                <Link href="/contact">
                  <Button className="mt-8 bg-cyan-600 hover:bg-cyan-700 text-white w-fit">
                    Həllər haqqında ətraflı
                  </Button>
                </Link>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="residential" className="border-none p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-xl overflow-hidden relative h-[300px] md:h-[400px] shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Yaşayış obyektləri"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-cyan-800 mb-4">
                  Yaşayış obyektləri üçün həllər
                </h3>
                <p className="text-gray-600 mb-6">
                  Yaşayış binalarının tikintisi və təmiri üçün rahatlıq,
                  təhlükəsizlik və estetikliyi təmin edən materiallar.
                  Həllərimiz rahat və sağlam yaşayış məkanı yaratmağa kömək
                  edir.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-cyan-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Daxili bəzək
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Suvaqlar, şpaklyovkalar, boyalar, dekorativ örtüklər
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-cyan-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Səs izolyasiyası
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Otaqlarda səs-küyü azaltmaq üçün materiallar
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-cyan-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Döşəmə örtükləri
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Özü hamarlaşan qarışıqlar, tökmə döşəmələr, yapışqanlar
                      </p>
                    </div>
                  </div>
                </div>
                <Link href="/contact">
                  <Button className="mt-8 bg-cyan-600 hover:bg-cyan-700 text-white w-fit">
                    Həllər haqqında ətraflı
                  </Button>
                </Link>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="infrastructure" className="border-none p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-xl overflow-hidden relative h-[300px] md:h-[400px] shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="İnfrastruktur"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-cyan-800 mb-4">
                  İnfrastruktur obyektləri üçün həllər
                </h3>
                <p className="text-gray-600 mb-6">
                  Yolların, körpülərin, tunellərin və digər infrastruktur
                  obyektlərinin tikintisi və təmiri üçün ixtisaslaşdırılmış
                  materiallar. Həllərimiz çətin istismar şəraitində
                  uzunömürlülük və etibarlılığı təmin edir.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-cyan-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Yol tikintisi
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Asfalta əlavələr, təmir qarışıqları, hermetiklər
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-cyan-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Körpü qurğuları
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Hidroizolyasiya, qoruyucu örtüklər, təmir qarışıqları
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-cyan-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Tunellər və yeraltı qurğular
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Hidroizolyasiya, inyeksiya materialları
                      </p>
                    </div>
                  </div>
                </div>
                <Link href="/contact">
                  <Button className="mt-8 bg-cyan-600 hover:bg-cyan-700 text-white w-fit">
                    Həllər haqqında ətraflı
                  </Button>
                </Link>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-b from-cyan-50 to-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-cyan-100 text-cyan-800 hover:bg-cyan-200">
              Müştəri rəyləri
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Müştərilərimiz bizdən razıdır
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Müştərilərimizin bizim xidmətlərimiz haqqında dedikləri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-cyan-100 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 italic mb-6">
                  "CCS şirkəti ilə işləmək çox rahat oldu. Onlar bizim sənaye
                  obyektimiz üçün mükəmməl döşəmə həlli təklif etdilər.
                  Materialların keyfiyyəti və texniki dəstək ən yüksək səviyyədə
                  idi."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center mr-4">
                    <Building className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Əli Məmmədov</h4>
                    <p className="text-gray-600 text-sm">
                      İnşaat şirkətinin direktoru
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-cyan-100 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 italic mb-6">
                  "Biz CCS-in hidroizolyasiya materiallarını bir neçə layihədə
                  istifadə etmişik və nəticələr həmişə mükəmməl olub. Onların
                  texniki dəstəyi və məhsulların keyfiyyəti rəqibsizdir."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center mr-4">
                    <Factory className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Leyla Əliyeva</h4>
                    <p className="text-gray-600 text-sm">Layihə meneceri</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-cyan-100 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 italic mb-6">
                  "Yaşayış kompleksimizin tikintisində CCS-in fasad
                  sistemlərindən istifadə etdik. Həm estetik, həm də texniki
                  cəhətdən mükəmməl nəticə əldə etdik. Mütəxəssislərin
                  peşəkarlığı və materialların keyfiyyəti ən yüksək
                  səviyyədədir."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center mr-4">
                    <Home className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Rəşad Hüseynov
                    </h4>
                    <p className="text-gray-600 text-sm">Baş mühəndis</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-cyan-100 text-cyan-800 hover:bg-cyan-200">
            Üstünlüklərimiz
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Niyə bizi seçirlər
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Biz sadəcə materiallar deyil, tapşırıqlarınız üçün kompleks həllər
            təklif edirik
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="border-cyan-100 bg-white shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center mb-4 group-hover:bg-cyan-600 transition-colors duration-300">
                <Award className="h-6 w-6 text-cyan-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-cyan-800 mb-2">
                Keyfiyyət
              </h3>
              <p className="text-gray-600">
                Bütün materiallarımız beynəlxalq keyfiyyət standartlarına
                uyğundur və lazımi sertifikatlara malikdir
              </p>
            </CardContent>
          </Card>

          <Card className="border-cyan-100 bg-white shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center mb-4 group-hover:bg-cyan-600 transition-colors duration-300">
                <Users className="h-6 w-6 text-cyan-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-cyan-800 mb-2">Təcrübə</h3>
              <p className="text-gray-600">
                Komandamız müxtəlif mürəkkəblik və miqyaslı obyektlərlə işləmək
                üzrə çoxillik təcrübəyə malikdir
              </p>
            </CardContent>
          </Card>

          <Card className="border-cyan-100 bg-white shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center mb-4 group-hover:bg-cyan-600 transition-colors duration-300">
                <Clock className="h-6 w-6 text-cyan-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-cyan-800 mb-2">
                Operativlik
              </h3>
              <p className="text-gray-600">
                Materialların tez çatdırılmasını və operativ texniki dəstəyi
                təmin edirik
              </p>
            </CardContent>
          </Card>

          <Card className="border-cyan-100 bg-white shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center mb-4 group-hover:bg-cyan-600 transition-colors duration-300">
                <BadgeCheck className="h-6 w-6 text-cyan-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-cyan-800 mb-2">Zəmanət</h3>
              <p className="text-gray-600">
                Təchiz etdiyimiz bütün materiallara və yerinə yetirilən işlərə
                zəmanət veririk
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section - Replaced form with direct contact link */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <Card className="border-0 shadow-2xl overflow-hidden">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700"></div>
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center mix-blend-overlay opacity-20"></div>

            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full"></div>
              <div className="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-white/10 rounded-lg transform rotate-12"></div>
              <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-4 border-white/10 rounded-full"></div>
            </div>

            <CardContent className="relative z-10 p-8 md:p-12">
              <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border-none">
                  Bizimlə əlaqə saxlayın
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Layihənizə başlamağa hazırsınız?
                </h2>
                <p className="text-cyan-100 mb-8 text-lg">
                  Məsləhət almaq və tapşırığınız üçün optimal həll seçmək üçün
                  bizimlə əlaqə saxlayın. Komandamız sizə ən yaxşı həlləri
                  təklif etməyə hazırdır.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8">
                  <Card className="bg-white/10 backdrop-blur-sm border-none hover:bg-white/20 transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <Phone className="h-8 w-8 text-cyan-200 mb-4" />
                      <h3 className="font-medium text-white mb-2">Telefon</h3>
                      <p className="text-cyan-100">+994 12 345 67 89</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/10 backdrop-blur-sm border-none hover:bg-white/20 transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <Mail className="h-8 w-8 text-cyan-200 mb-4" />
                      <h3 className="font-medium text-white mb-2">Email</h3>
                      <p className="text-cyan-100">info@ccs.az</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/10 backdrop-blur-sm border-none hover:bg-white/20 transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <HeartHandshake className="h-8 w-8 text-cyan-200 mb-4" />
                      <h3 className="font-medium text-white mb-2">
                        Əməkdaşlıq
                      </h3>
                      <p className="text-cyan-100">sales@ccs.az</p>
                    </CardContent>
                  </Card>
                </div>

                <Link href="/contact">
                  <Button className="bg-white text-cyan-700 hover:bg-cyan-50 px-8 py-6 h-auto text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <span>Əlaqə səhifəsinə keçid</span>
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                <p className="text-cyan-100 mt-6">
                  Biz sizin layihənizin uğurlu olması üçün ən yaxşı həlləri
                  təklif etməyə hazırıq
                </p>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>

      {/* Partners Section */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-cyan-100 text-cyan-800 hover:bg-cyan-200">
            Tərəfdaşlarımız
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Etibarlı tərəfdaşlarımız
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Biz dünyanın aparıcı istehsalçıları ilə əməkdaşlıq edirik
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Image
                src="/placeholder.svg?height=80&width=160"
                alt={`Partner ${i + 1}`}
                width={160}
                height={80}
                className="object-contain h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
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
