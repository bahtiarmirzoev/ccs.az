import Image from "next/image";
import { Navbar } from "@/components/layout/header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Droplet,
  Shield,
  Building2,
  Users,
  Phone,
} from "lucide-react";

// Импорт компонентов Card из shadcn/ui
import { Card, CardContent } from "@/components/ui/card";
export default function Home() {
  return (
    <>
      <Navbar />
      <section className="relative h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-cyan-700/50 z-10" />
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="CCS Products"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex h-full flex-col items-center justify-center text-center text-white px-4">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Caspian Construction Systems
          </h1>
          <p className="mb-8 max-w-[600px] text-lg sm:text-xl text-blue-50">
            Innovative Construction Products
          </p>
          <Button size="lg" className="group bg-cyan-600 hover:bg-cyan-700">
            PRODUCTS
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* О компании */}
      <section id="about" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="CCS Office Building"
                width={600}
                height={400}
                className="rounded-lg shadow-lg max-w-full"
              />
            </div>
            <div className="space-y-6 text-center md:text-left">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                ABOUT US
              </div>
              <h2 className="text-3xl font-bold tracking-tight">
                Caspian Construction Systems
              </h2>
              <p className="text-muted-foreground">
                "Caspian Construction Systems" was founded in 2012 by
                experienced specialists in the field of industry chemicals. With
                more than 200 products in 11 categories, from waterproofing to
                sound insulation, injection materials to floor coverings, CCS.az
                offers innovative products suitable for all customer needs.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Our mission</h3>
                <p className="text-muted-foreground">
                  Our mission is to develop innovative and reliable chemical
                  solutions that meet the evolving needs of our customers.
                </p>
              </div>
              <div className="flex justify-center md:justify-start">
                <Button variant="outline" className="mt-4">
                  Learn More <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Продукты */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Our Products
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a wide range of high-quality construction products across
              multiple categories to meet all your project needs.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
            {[
              {
                title: "Waterproofing",
                description: "Advanced solutions for moisture protection",
                icon: <Droplet className="h-10 w-10 text-cyan-600" />,
              },
              {
                title: "Sound Insulation",
                description: "Effective acoustic control materials",
                icon: <Shield className="h-10 w-10 text-cyan-600" />,
              },
              {
                title: "Injection Materials",
                description: "Precision repair and reinforcement",
                icon: <Building2 className="h-10 w-10 text-cyan-600" />,
              },
              {
                title: "Floor Coverings",
                description: "Durable and aesthetic flooring solutions",
                icon: <Users className="h-10 w-10 text-cyan-600" />,
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-all hover:shadow-lg w-full max-w-[300px]"
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 rounded-full bg-blue-50 p-3">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                  <Button variant="link" className="mt-4">
                    View Products <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg">
              View All Products <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
