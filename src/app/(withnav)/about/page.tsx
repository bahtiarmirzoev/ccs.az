import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
} from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Hero section */}
      <section className="relative bg-gradient-to-br from-cyan-900 via-blue-800 to-blue-900 pt-28 pb-36 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute -top-[30%] -left-[10%] w-[80%] h-[80%] rounded-full bg-cyan-400 blur-3xl"></div>
          <div className="absolute top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-400 blur-3xl"></div>
          <div className="absolute bottom-[10%] left-[30%] w-[40%] h-[40%] rounded-full bg-indigo-400 blur-3xl"></div>
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/20 animate-float"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4">
            <div className="inline-flex items-center px-4 py-1.5 mb-8 text-xs font-medium rounded-full bg-white/10 text-cyan-50 backdrop-blur-sm border border-white/20">
              <span className="relative px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white mr-3">
                CCS.AZ
              </span>
              İNNOVATİV TİKİNTİ HƏLLƏRİ
            </div>
            <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
              Gələcəyi{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
                birlikdə qururuq
              </span>
            </h1>
            <p className="mb-10 max-w-2xl text-lg sm:text-xl text-cyan-50/90 leading-relaxed">
              Xəzər Tikinti Sistemləri 2012-ci ildən bəri Azərbaycanın innovativ
              tikinti materialları və həllərinin aparıcı təchizatçısıdır.
            </p>
            <div className="flex flex-wrap gap-5 justify-center">
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-white to-cyan-50 text-blue-900 hover:from-cyan-50 hover:to-white hover:text-blue-800 shadow-lg shadow-blue-900/20"
              >
                Məhsullarımız
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full text-white border-white/60 hover:bg-white/10 hover:border-white"
              >
                Bizimlə Əlaqə
              </Button>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[70px]"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="fill-white"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="fill-white"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="fill-white"
            ></path>
          </svg>
        </div>
      </section>

      {/* Company history */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-16 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1 px-4 md:px-6">
              <div className="inline-flex items-center px-4 py-1.5 mb-6 text-xs font-medium rounded-full bg-blue-50 text-blue-700 shadow-sm">
                BİZİM HEKAYƏMİZ
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-slate-900 leading-tight">
                On ildən artıq innovasiya və mükəmməllik
              </h2>
              <div className="space-y-6 text-slate-600">
                <p className="leading-relaxed text-lg">
                  Xəzər Tikinti Sistemləri 2012-ci ildə tikinti kimyasalları
                  sahəsində təcrübəli mütəxəssislər komandası tərəfindən
                  qurulmuşdur. Kiçik bir əməliyyat kimi başlayan şirkət,
                  Azərbaycanın innovativ tikinti həllərinin aparıcı
                  təchizatçılarından birinə çevrilmişdir.
                </p>
                <p className="leading-relaxed text-lg">
                  Təsisçilərimiz Xəzər regionundakı layihələrin xüsusi
                  ehtiyaclarını qarşılaya biləcək yüksək keyfiyyətli, etibarlı
                  tikinti materialları üçün bazarda boşluq olduğunu müəyyən
                  etdilər.
                </p>

                <div className="grid grid-cols-2 gap-6 mt-10">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl shadow-sm border border-blue-100/50 hover:shadow-md transition-shadow">
                    <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-2">
                      200+
                    </div>
                    <p className="text-slate-700 font-medium">
                      İnnovativ Məhsul
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl shadow-sm border border-blue-100/50 hover:shadow-md transition-shadow">
                    <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-2">
                      11
                    </div>
                    <p className="text-slate-700 font-medium">
                      Məhsul Kateqoriyası
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <Button className="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-md shadow-blue-900/10">
                    Daha Ətraflı
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative px-4 md:px-6">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="CCS Tarixi"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="text-sm font-medium mb-1 text-cyan-200">
                    2012-Cİ İLDƏ QURULUB
                  </div>
                  <div className="text-xl font-bold">
                    Mükəmməllik Səyahətimiz
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company values */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 px-4">
            <div className="inline-flex items-center px-4 py-1.5 mb-6 text-xs font-medium rounded-full bg-blue-50 text-blue-700 shadow-sm">
              DƏYƏRLƏRİMİZ
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
              Bizi İrəli Aparan Nədir
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed text-lg">
              Xəzər Tikinti Sistemlərində dəyərlərimiz məhsul inkişafından
              müştəri xidmətinə qədər etdiyimiz hər şeyə rəhbərlik edir.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-4">
            {[
              {
                title: "Keyfiyyət",
                description:
                  "Məhsul və xidmətlərimizin keyfiyyətindən heç vaxt güzəştə getmirik.",
                icon: <Award className="h-8 w-8 text-cyan-600" />,
              },
              {
                title: "İnnovasiya",
                description:
                  "Sahəmizdə təkmilləşdirmək və yenilik etmək üçün daim yeni yollar axtarırıq.",
                icon: <Target className="h-8 w-8 text-blue-600" />,
              },
              {
                title: "Etibarlılıq",
                description:
                  "Müştərilərimiz həmişə vədlərimizi yerinə yetirəcəyimizə güvənə bilərlər.",
                icon: <Clock className="h-8 w-8 text-indigo-600" />,
              },
              {
                title: "Müştəri Fokuslu",
                description:
                  "Müştərilərimizi etdiyimiz hər şeyin mərkəzinə qoyuruq.",
                icon: <Users className="h-8 w-8 text-purple-600" />,
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                  <div className="mb-6 rounded-full bg-blue-50 p-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 px-4">
            <div className="inline-flex items-center px-4 py-1.5 mb-6 text-xs font-medium rounded-full bg-white/10 text-cyan-50 backdrop-blur-sm border border-white/20">
              KOMANDAMIZ
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
              Rəhbərliyimizlə Tanış Olun
            </h2>
            <p className="text-cyan-50 max-w-2xl mx-auto leading-relaxed text-lg">
              Təcrübəli mütəxəssislərdən ibarət komandamız tikinti
              ehtiyaclarınız üçün ən yaxşı həlləri təmin etməyə həsr olunub.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
            {[
              {
                name: "Eldar Məmmədov",
                position: "Baş İcraçı Direktor",
              },
              {
                name: "Leyla Əliyeva",
                position: "Texniki Direktor",
              },
              {
                name: "Fərid Həsənov",
                position: "Tədqiqat və İnkişaf Rəhbəri",
              },
              {
                name: "Nigar İsmayılova",
                position: "Satış Direktoru",
              },
              {
                name: "Rəşad Quliyev",
                position: "Əməliyyat Meneceri",
              },
              {
                name: "Aysel Məmmədova",
                position: "Müştəri Xidmətləri Meneceri",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 bg-white/5 backdrop-blur-sm border-white/10"
              >
                <div className="aspect-[3/4] bg-blue-800/30">
                  <Image
                    src={`/placeholder.svg?height=400&width=300&text=${member.name.charAt(
                      0
                    )}`}
                    alt={member.name}
                    width={300}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="text-cyan-300">{member.position}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
            {[
              {
                number: "500+",
                label: "Tamamlanmış Layihə",
              },
              {
                number: "50+",
                label: "Ekspert Komanda Üzvü",
              },
              {
                number: "12",
                label: "İllik Təcrübə",
              },
              {
                number: "98%",
                label: "Müştəri Məmnuniyyəti",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  {stat.number}
                </div>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-10 md:p-12 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-700 text-white">
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                  Bizimlə İşləməyə Hazırsınız?
                </h2>
                <p className="mb-8 text-blue-50 leading-relaxed">
                  Məhsullarımız və tikinti layihələrinizə necə kömək edə
                  biləcəyimiz haqqında daha çox məlumat əldə etmək üçün
                  komandamızla bu gün əlaqə saxlayın.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Peşəkar məsləhət",
                    "Fərdi həllər",
                    "Texniki dəstək",
                    "Keyfiyyət təminatı",
                    "Satışdan sonra xidmət",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-cyan-300 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  className="rounded-full bg-white text-blue-700 hover:bg-blue-50 shadow-lg shadow-blue-900/20"
                >
                  Bizimlə Əlaqə
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="CCS Layihələri"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="text-sm font-medium mb-2">LAYİHƏLƏRİMİZ</p>
                    <h3 className="text-xl font-bold">
                      Azərbaycan boyunca 500-dən çox uğurlu layihə
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 px-4">
            <div className="inline-flex items-center px-4 py-1.5 mb-6 text-xs font-medium rounded-full bg-blue-50 text-blue-700 shadow-sm">
              MÜŞTƏRİ RƏYLƏRİ
            </div>
            <h2 className="text-4xl font-bold tracking-tight mb-6 text-slate-900">
              Müştərilərimiz Nə Deyir
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed text-lg">
              Sadəcə bizim sözümüzə inanmayın. Bəzi məmnun müştərilərimizin
              xidmətlərimiz haqqında dediklərinə baxın.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 px-4">
            {[
              {
                quote:
                  "CCS su keçirməzlik ehtiyaclarımız üçün müstəsna texniki dəstək təmin etdi. Onların məhsulları və təcrübəsi layihəmizin uğurunda mühüm rol oynadı.",
                name: "Fərid Məmmədov",
                company: "Bakı Tikinti Qrupu",
              },
              {
                quote:
                  "CCS məhsullarının keyfiyyəti mükəmməldir. İllərdir onların döşəmə örtüklərindən istifadə edirik və onlar daim mükəmməl nəticələr təqdim edirlər.",
                name: "Leyla Həsənova",
                company: "Modern İnteriors MMC",
              },
              {
                quote:
                  "CCS-dəki komanda səs izolyasiyası tələblərimiz üçün düzgün həll tapmağımıza kömək etmək üçün əlindən gələni etdi. Çox tövsiyə olunur!",
                name: "Rəşad Əliyev",
                company: "Xəzər Developers",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-all"
              >
                <CardContent className="p-8">
                  <div className="mb-6 text-5xl text-cyan-600">"</div>
                  <p className="text-slate-700 mb-8 italic leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-slate-500">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center px-4">
            <h3 className="text-2xl font-semibold text-slate-900 mb-12">
              Aparıcı Şirkətlər Tərəfindən Etibar Edilir
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                >
                  <div className="w-32 h-16 bg-slate-200 rounded flex items-center justify-center">
                    <span className="text-slate-500 font-medium">
                      Tərəfdaş {i + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
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
    </main>
  );
}
