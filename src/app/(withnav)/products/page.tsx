"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Search, Filter, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Временные данные для демонстрации
const categories = [
  { id: "izolyasiya", name: "İzolyasiya Materialları" },
  { id: "temir", name: "Təmir və Tikinti" },
  { id: "aksesuar", name: "Aksesuar və Alətlər" },
]

const brands = [
  "Penosil",
  "Soudal",
  "Makroflex",
  "Tytan",
  "Ceresit",
  "Knauf",
]

const products = [
  {
    id: 1,
    name: "Premium Hidroizolyasiya",
    category: "Hidroizolyasiya",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Hidroizolyasiya",
    description: "Yüksək keyfiyyətli hidroizolyasiya materialı",
    price: "120 AZN",
  },
  {
    id: 2,
    name: "İstilik İzolyasiya Paneli",
    category: "İstilik İzolyasiyası",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=İstilik+İzolyasiyası",
    description: "Effektiv istilik izolyasiyası üçün panel",
    price: "85 AZN",
  },
  {
    id: 3,
    name: "Dekorativ Plitka",
    category: "Bəzək Materialları",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Dekorativ+Plitka",
    description: "Müasir dizayn üçün dekorativ plitka",
    price: "45 AZN",
  },
  {
    id: 4,
    name: "Laminat Döşəmə",
    category: "Döşəmə Materialları",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Laminat+Döşəmə",
    description: "Davamlı və gözəl laminat döşəmə",
    price: "65 AZN",
  },
  {
    id: 5,
    name: "Rəngli Boya",
    category: "Bəzək Materialları",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Rəngli+Boya",
    description: "Yüksək keyfiyyətli rəngli boya",
    price: "35 AZN",
  },
  {
    id: 6,
    name: "Metal Profil",
    category: "Konstruksiya Materialları",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Metal+Profil",
    description: "Güclü və davamlı metal profil",
    price: "95 AZN",
  }
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100])
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("newest")

  // Фильтрация продуктов
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Поиск по названию и описанию
      const matchesSearch = searchQuery === "" || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())

      // Фильтрация по категории
      const matchesCategory = selectedCategory === "all" || 
        product.category.toLowerCase() === selectedCategory.toLowerCase()

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Məhsullarımız</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Yüksək keyfiyyətli tikinti materialları və həlləri ilə layihələrinizi
          həyata keçirin
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Məhsul axtar..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Kateqoriya" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Bütün kateqoriyalar</SelectItem>
              <SelectItem value="Hidroizolyasiya">Hidroizolyasiya</SelectItem>
              <SelectItem value="İstilik İzolyasiyası">İstilik İzolyasiyası</SelectItem>
              <SelectItem value="Bəzək Materialları">Bəzək Materialları</SelectItem>
              <SelectItem value="Döşəmə Materialları">Döşəmə Materialları</SelectItem>
              <SelectItem value="Konstruksiya Materialları">Konstruksiya Materialları</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader className="p-0">
              <div className="aspect-video relative bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="text-sm text-cyan-600 mb-2">{product.category}</div>
              <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <div className="text-lg font-semibold text-gray-900">{product.price}</div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800">
                Ətraflı Məlumat
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* No Results Message */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">Məhsul tapılmadı</p>
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center mt-12">
        <div className="flex gap-2">
          <Button variant="outline">Əvvəlki</Button>
          <Button variant="outline">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">Sonrakı</Button>
        </div>
      </div>
    </div>
  )
}

function FilterContent() {
  return (
    <div className="space-y-6">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="category">
          <AccordionTrigger className="text-sm font-medium">
            Kateqoriya
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox id={category.id} />
                  <Label htmlFor={category.id} className="text-sm">
                    {category.name}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="brand">
          <AccordionTrigger className="text-sm font-medium">
            Marka
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox id={brand} />
                  <Label htmlFor={brand} className="text-sm">
                    {brand}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger className="text-sm font-medium">
            Qiymət
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Input type="number" placeholder="Min" className="w-24" />
                <span>-</span>
                <Input type="number" placeholder="Max" className="w-24" />
              </div>
              <Button className="w-full">Tətbiq et</Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
} 