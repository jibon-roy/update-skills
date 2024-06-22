
"use client"
import Image1 from "@/assets/images/animation.png"
import Image2 from "@/assets/images/banner.png"
import Image3 from "@/assets/images/uiux.png"
import Image4 from "@/assets/images/wordpress.png"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Calendar } from "@/components/ui/calendar"

export default function Component() {
  const courses = [
    {
      id: 1,
      name: "Coding Masterclass",
      category: "Courses",
      price: 99.99,
      date: "2023-04-15",
      mentor: "John Doe",
      image: Image1,
      description: "Learn to code from the best in the industry.",
    },
    {
      id: 2,
      name: "UI/UX Design Workshop",
      category: "Courses",
      price: 79.99,
      date: "2023-03-20",
      mentor: "Jane Smith",
      image: Image2,
      description: "Unlock your design potential with our expert-led workshop.",
    },
    {
      id: 3,
      name: "Entrepreneurship Bootcamp",
      category: "Courses",
      price: 149.99,
      date: "2023-05-01",
      mentor: "Michael Johnson",
      image: Image3,
      description: "Embark on your entrepreneurial journey with our intensive bootcamp.",
    },
    {
      id: 4,
      name: "Data Science Fundamentals",
      category: "Courses",
      price: 89.99,
      date: "2023-02-28",
      mentor: "Emily Davis",
      image: Image4,
      description: "Dive into the world of data science with our comprehensive course.",
    },
    {
      id: 5,
      name: "Digital Marketing Masterclass",
      category: "Courses",
      price: 119.99,
      date: "2023-06-10",
      mentor: "David Lee",
      image: Image1,
      description: "Elevate your digital marketing skills with our expert-led masterclass.",
    },
    {
      id: 6,
      name: "Project Management Essentials",
      category: "Courses",
      price: 69.99,
      date: "2023-01-25",
      mentor: "Sarah Wilson",
      image: Image2,
      description: "Master the fundamentals of project management with our comprehensive course.",
    },
    {
      id: 7,
      name: "Creative Writing Workshop",
      category: "Courses",
      price: 59.99,
      date: "2023-07-01",
      mentor: "Alex Thompson",
      image: Image3,
      description: "Unleash your creative writing potential with our expert-led workshop.",
    },
    {
      id: 8,
      name: "Public Speaking Masterclass",
      category: "Courses",
      price: 99.99,
      date: "2023-05-15",
      mentor: "Olivia Martinez",
      image: Image4,
      description: "Conquer your fear of public speaking with our transformative masterclass.",
    },
  ]
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState([])
  const [priceRange, setPriceRange] = useState([0, 200])
  const [selectedDate, setSelectedDate] = useState()
  const [selectedMentor, setSelectedMentor] = useState([])
  const filteredProducts = useMemo(() => {
    return courses.filter((product) => {
      const nameMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
      const categoryMatch = selectedCategory.length === 0 || selectedCategory.includes(product.category)
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1]
      const dateMatch = selectedDate ? new Date(product.date) >= selectedDate : true
      const mentorMatch = selectedMentor.length === 0 || selectedMentor.includes(product.mentor)
      return nameMatch && categoryMatch && priceMatch && dateMatch && mentorMatch
    })
  }, [searchTerm, selectedCategory, priceRange, selectedDate, selectedMentor])
  return (
    <div className="grid grid-cols-[1fr_300px] gap-8 p-8">
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white dark:bg-gray-950 rounded-lg shadow-md overflow-hidden">
              <Link href="#" prefetch={false}>
                <img
                  src={product.image.src}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-primary font-semibold">${product.price.toFixed(2)}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{product.mentor}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="search" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Search
            </label>
            <Input
              id="search"
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Category</label>
            <div className="grid gap-2">
              <Checkbox id="category-courses" value="Courses">
                Courses
              </Checkbox>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Price Range</label>
            <Slider min={0} max={200} step={10} value={priceRange} onValueChange={setPriceRange} className="w-full" />
            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
          <div>
            <label htmlFor="date" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Date
            </label>
            <Calendar id="date" mode="single" value={selectedDate??''} onValueChange={setSelectedDate} className="w-full" />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Mentor</label>
            <div className="grid gap-2">
              <Checkbox id="mentor-john-doe" value="John Doe">
                John Doe
              </Checkbox>
              <Checkbox id="mentor-jane-smith" value="Jane Smith">
                Jane Smith
              </Checkbox>
              <Checkbox id="mentor-michael-johnson" value="Michael Johnson">
                Michael Johnson
              </Checkbox>
              <Checkbox id="mentor-emily-davis" value="Emily Davis">
                Emily Davis
              </Checkbox>
              <Checkbox id="mentor-david-lee" value="David Lee">
                David Lee
              </Checkbox>
              <Checkbox id="mentor-sarah-wilson" value="Sarah Wilson">
                Sarah Wilson
              </Checkbox>
              <Checkbox id="mentor-alex-thompson" value="Alex Thompson">
                Alex Thompson
              </Checkbox>
              <Checkbox id="mentor-olivia-martinez" value="Olivia Martinez">
                Olivia Martinez
              </Checkbox>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}