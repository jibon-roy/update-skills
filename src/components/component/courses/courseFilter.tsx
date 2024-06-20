
"use client"
import Image1 from "@/assets/images/animation.png"
import Image2 from "@/assets/images/banner.png"
import Image3 from "@/assets/images/uiux.png"
import Image4 from "@/assets/images/wordpress.png"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import VideoHolder from "../videoHolder"
import { PrimaryVideoDetails } from "@/lib/utils/interfaces/components.interface"
import { PaginationView } from "../pagination"

export default function AllCoursesFilter() {
    const courses: PrimaryVideoDetails[] = [
        {
            _id: 1,
            title: "Coding Masterclass",
            category: "Courses",
            price: 99.99,
            launch_date: "2023-04-15",
            mentor: "John Doe",
            thumbnail: Image1,
            description: "Learn to code from the best in the industry.",
        },
        {
            _id: 2,
            title: "UI/UX Design Workshop",
            category: "Courses",
            price: 79.99,
            launch_date: "2023-03-20",
            mentor: "Jane Smith",
            thumbnail: Image2,
            description: "Unlock your design potential with our expert-led workshop.",
        },
        {
            _id: 3,
            title: "Entrepreneurship Bootcamp",
            category: "Courses",
            price: 149.99,
            mentor: "Michael Johnson",
            launch_date: "2023-05-01",
            thumbnail: Image3,
            description: "Embark on your entrepreneurial journey with our intensive bootcamp.",
        },
        {
            _id: 4,
            title: "Data Science Fundamentals",
            category: "Courses",
            price: 89.99,
            mentor: "Emily Davis",
            launch_date: "2023-02-28",
            thumbnail: Image4,
            description: "Dive into the world of data science with our comprehensive course.",
        },
        {
            _id: 5,
            title: "Digital Marketing Masterclass",
            category: "Courses",
            price: 119.99,
            mentor: "David Lee",
            launch_date: "2023-06-10",
            thumbnail: Image1,
            description: "Elevate your digital marketing skills with our expert-led masterclass.",
        },
        {
            _id: 6,
            title: "Project Management Essentials",
            category: "Courses",
            price: 69.99,
            mentor: "Sarah Wilson",
            launch_date: "2023-01-25",
            thumbnail: Image2,
            description: "Master the fundamentals of project management with our comprehensive course.",
        },
        {
            _id: 7,
            title: "Creative Writing Workshop",
            category: "Courses",
            price: 59.99,
            mentor: "Alex Thompson",
            launch_date: "2023-07-01",
            thumbnail: Image3,
            description: "Unleash your creative writing potential with our expert-led workshop.",
        },
        {
            _id: 8,
            title: "Public Speaking Masterclass",
            category: "Courses",
            price: 99.99,
            mentor: "Olivia Martinez",
            launch_date: "2023-05-15",
            thumbnail: Image4,
            description: "Conquer your fear of public speaking with our transformative masterclass.",
        },
    ]
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState([])
    const [priceRange, setPriceRange] = useState([0, 500])
    const [selectedMentor, setSelectedMentor] = useState([])
    const [sortBy, setSortBy] = useState("date")
    const [sortOrder, setSortOrder] = useState("desc")
    const filteredCourses = useMemo(() => {
        return courses
            .filter((product) => {
                const nameMatch = product.title.toLowerCase().includes(searchTerm.toLowerCase())
                const categoryMatch = selectedCategory.length === 0 || selectedCategory.includes(product?.category)
                const priceMatch = product.price! >= priceRange[0] && product.price! <= priceRange[1]
                const mentorMatch = selectedMentor.length === 0 || selectedMentor.includes(product?.mentor)
                return nameMatch && categoryMatch && priceMatch && mentorMatch
            })
            .sort((a, b) => {
                if (sortBy === "name") {
                    return sortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
                } else if (sortBy === "price") {
                    return sortOrder === "asc" ? a.price! - b.price! : b.price! - a.price!
                } else if (sortBy === "date") {
                    return sortOrder === "asc" ? new Date(a.launch_date!).valueOf() - new Date(b.launch_date!).valueOf() : new Date(b.launch_date!).valueOf() - new Date(a.launch_date!).valueOf()
                } else if (sortBy === "mentor") {
                    return sortOrder === "asc" ? a.mentor!.localeCompare(b.mentor ?? '') : b.mentor!.localeCompare(a.mentor!)
                }
                return 0
            })
    }, [searchTerm, selectedCategory, priceRange, sortBy, sortOrder, selectedMentor])
    const uniqueCategories = useMemo(() => {
        return [...new Set(courses.map((product) => product.category))]
    }, [])
    const uniqueMentors = useMemo(() => {
        return [...new Set(courses.map((product) => product.mentor))]
    }, [])
    return (
        <>
        <div className="grid container mx-auto grid-cols-1 md:grid-cols-[300px_1fr] gap-8 p-8">
            <div className="bg-white h-fit rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Search and filters</h2>
                <div className="grid gap-4">
                    <div>
                        <label htmlFor="search" className="block text-sm font-medium text-gray-700">
                            Search
                        </label>
                        <div className="mt-1">
                            <Input
                                type="text"
                                id="search"
                                value={searchTerm}
                                placeholder="Search courses..."
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                            Category
                        </label>
                        <div className="mt-1">
                            <div className="grid gap-2">
                                {uniqueCategories.map((category) => (
                                    <Label key={category} className="flex items-center gap-2 font-normal">
                                        <Checkbox value={category} />
                                        {category}
                                    </Label>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                            Price Range
                        </label>
                        <div className="mt-1">
                            <Slider
                                id="price"
                                className="w-full"
                                max={500}
                                min={0}
                                value={priceRange}
                                onValueChange={setPriceRange}
                                step={10}
                            />
                            <div className="flex justify-between text-sm text-gray-500">
                                <span>${priceRange[0]}</span>
                                <span>${priceRange[1]}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="sort" className="block text-sm font-medium text-gray-700">
                            Sort By
                        </label>
                        <div className="mt-1">
                            <Select

                                value={sortBy}
                                onValueChange={setSortBy}

                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select sort option" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="name">Name</SelectItem>
                                    <SelectItem value="price">Price</SelectItem>
                                    <SelectItem value="date">Date</SelectItem>
                                    <SelectItem value="mentor">Mentor</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="mt-2">
                            <RadioGroup value={sortOrder} onValueChange={setSortOrder} className="flex items-center gap-2">
                                <Label htmlFor="sort-asc" className="flex items-center gap-2 font-normal">
                                    <RadioGroupItem id="sort-asc" value="asc" />
                                    Ascending
                                </Label>
                                <Label htmlFor="sort-desc" className="flex items-center gap-2 font-normal">
                                    <RadioGroupItem id="sort-desc" value="desc" />
                                    Descending
                                </Label>
                            </RadioGroup>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="mentor" className="block text-sm font-medium text-gray-700">
                            Mentor
                        </label>
                        <div className="mt-1">
                            <div className="grid gap-2">
                                {uniqueMentors.map((mentor) => (
                                    <Label key={mentor} className="flex items-center gap-2 font-normal">
                                        <Checkbox value={mentor} />
                                        {mentor}
                                    </Label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                    {filteredCourses.map((product) => (
                        <VideoHolder key={product._id} course={product} />
                    ))}

                </div>

            </div>
        </div>
                <div className="my-10">
                    <PaginationView />
                </div>
                        </>
    )
}