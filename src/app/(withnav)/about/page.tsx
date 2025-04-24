import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  Clock,
  Users,
  Target,
  ChevronRight,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

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

        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center px-4">
            <div className="inline-flex items-center px-4 py-1.5 mb-8 text-xs font-medium rounded-full bg-white/10 text-cyan-50 backdrop-blur-sm border border-white/20">
              <span className="relative px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white mr-3">
                CCS.AZ
              </span>
              INNOVATIVE CONSTRUCTION SOLUTIONS
            </div>
            <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white max-w-4xl leading-tight">
              Building the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
                future together
              </span>
            </h1>
            <p className="mb-10 max-w-2xl text-lg sm:text-xl text-cyan-50/90 leading-relaxed">
              Caspian Construction Systems is Azerbaijan's leading provider of
              innovative construction materials and solutions since 2012.
            </p>
            <div className="flex flex-wrap gap-5 justify-center">
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-white to-cyan-50 text-blue-900 hover:from-cyan-50 hover:to-white hover:text-blue-800 shadow-lg shadow-blue-900/20"
              >
                Our Products
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full text-white border-white/60 hover:bg-white/10 hover:border-white"
              >
                Contact Us
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
      <section className="py-20 relative overflow-hidden">
        <div className="container">
          <div className="grid gap-16 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1 px-4 md:px-0">
              <div className="inline-flex items-center px-4 py-1.5 mb-6 text-xs font-medium rounded-full bg-blue-50 text-blue-700 shadow-sm">
                OUR STORY
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-slate-900 leading-tight">
                Over a decade of innovation and excellence
              </h2>
              <div className="space-y-6 text-slate-600">
                <p className="leading-relaxed text-lg">
                  Caspian Construction Systems was founded in 2012 by a team of
                  experienced specialists in the field of construction
                  chemicals. What began as a small operation has grown into one
                  of Azerbaijan's leading providers of innovative construction
                  solutions.
                </p>
                <p className="leading-relaxed text-lg">
                  Our founders recognized a gap in the market for high-quality,
                  reliable construction materials that could meet the specific
                  needs of projects in the Caspian region.
                </p>

                <div className="grid grid-cols-2 gap-6 mt-10">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl shadow-sm border border-blue-100/50 hover:shadow-md transition-shadow">
                    <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-2">
                      200+
                    </div>
                    <p className="text-slate-700 font-medium">
                      Innovative Products
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl shadow-sm border border-blue-100/50 hover:shadow-md transition-shadow">
                    <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-2">
                      11
                    </div>
                    <p className="text-slate-700 font-medium">
                      Product Categories
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <Button className="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-md shadow-blue-900/10">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative px-4 md:px-0">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="CCS History"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="text-sm font-medium mb-1 text-cyan-200">
                    ESTABLISHED 2012
                  </div>
                  <div className="text-xl font-bold">
                    Our Journey of Excellence
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company values */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <div className="text-center mb-16 px-4">
            <div className="inline-flex items-center px-4 py-1.5 mb-6 text-xs font-medium rounded-full bg-blue-50 text-blue-700 shadow-sm">
              OUR VALUES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
              What Drives Us Forward
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed text-lg">
              At Caspian Construction Systems, our values guide everything we
              do, from product development to customer service.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-4">
            {[
              {
                title: "Quality",
                description:
                  "We never compromise on the quality of our products and services.",
                icon: <Award className="h-8 w-8 text-cyan-600" />,
              },
              {
                title: "Innovation",
                description:
                  "We continuously seek new ways to improve and innovate in our field.",
                icon: <Target className="h-8 w-8 text-blue-600" />,
              },
              {
                title: "Reliability",
                description:
                  "Our customers can always count on us to deliver on our promises.",
                icon: <Clock className="h-8 w-8 text-indigo-600" />,
              },
              {
                title: "Customer Focus",
                description:
                  "We put our customers at the center of everything we do.",
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
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white">
        <div className="container">
          <div className="text-center mb-16 px-4">
            <div className="inline-flex items-center px-4 py-1.5 mb-6 text-xs font-medium rounded-full bg-white/10 text-cyan-50 backdrop-blur-sm border border-white/20">
              OUR TEAM
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
              Meet Our Leadership
            </h2>
            <p className="text-cyan-50 max-w-2xl mx-auto leading-relaxed text-lg">
              Our experienced team of professionals is dedicated to providing
              the best solutions for your construction needs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
            {[
              {
                name: "Eldar Mammadov",
                position: "Chief Executive Officer",
              },
              {
                name: "Leyla Aliyeva",
                position: "Technical Director",
              },
              {
                name: "Farid Hasanov",
                position: "Head of Research & Development",
              },
              {
                name: "Nigar Ismayilova",
                position: "Sales Director",
              },
              {
                name: "Rashad Guliyev",
                position: "Operations Manager",
              },
              {
                name: "Aysel Mammadova",
                position: "Customer Service Manager",
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
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
            {[
              {
                number: "500+",
                label: "Projects Completed",
              },
              {
                number: "50+",
                label: "Expert Team Members",
              },
              {
                number: "12",
                label: "Years of Experience",
              },
              {
                number: "98%",
                label: "Client Satisfaction",
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
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-10 md:p-12 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-700 text-white">
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                  Ready to Work With Us?
                </h2>
                <p className="mb-8 text-blue-50 leading-relaxed">
                  Contact our team today to learn more about our products and
                  how we can help with your construction projects.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Professional consultation",
                    "Customized solutions",
                    "Technical support",
                    "Quality assurance",
                    "After-sales service",
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
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="CCS Projects"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="text-sm font-medium mb-2">OUR PROJECTS</p>
                    <h3 className="text-xl font-bold">
                      Over 500 successful projects across Azerbaijan
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16 px-4">
            <div className="inline-flex items-center px-4 py-1.5 mb-6 text-xs font-medium rounded-full bg-blue-50 text-blue-700 shadow-sm">
              CLIENT TESTIMONIALS
            </div>
            <h2 className="text-4xl font-bold tracking-tight mb-6 text-slate-900">
              What Our Clients Say
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed text-lg">
              Don't just take our word for it. Here's what some of our satisfied
              clients have to say about our services.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 px-4">
            {[
              {
                quote:
                  "CCS provided exceptional technical support for our waterproofing needs. Their products and expertise were instrumental in the success of our project.",
                name: "Farid Mammadov",
                company: "Baku Construction Group",
              },
              {
                quote:
                  "The quality of CCS products is outstanding. We've been using their floor coverings for years, and they consistently deliver excellent results.",
                name: "Leyla Hasanova",
                company: "Modern Interiors LLC",
              },
              {
                quote:
                  "The team at CCS went above and beyond to help us find the right solution for our sound insulation requirements. Highly recommended!",
                name: "Rashad Aliyev",
                company: "Caspian Developers",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="overflow-hidden">
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
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="text-center px-4">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">
              Trusted by Leading Companies
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                >
                  <div className="w-32 h-16 bg-slate-200 rounded flex items-center justify-center">
                    <span className="text-slate-500 font-medium">
                      Partner {i + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
