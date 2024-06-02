/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jAPez41qA8a
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Image from "next/image"

export default function AllCoursesFilter() {
    const products = [
        {
            id: 1,
            name: "Wireless Headphones",
            category: "Electronics",
            price: 99.99,
            date: "2023-04-15",
            mentor: "John Doe",
        },
        {
            id: 2,
            name: "Leather Backpack",
            category: "Bags",
            price: 79.99,
            date: "2023-03-20",
            mentor: "Jane Smith",
        },
        {
            id: 3,
            name: "Outdoor Camping Gear",
            category: "Sports",
            price: 149.99,
            date: "2023-05-01",
            mentor: "Michael Johnson",
        },
        {
            id: 4,
            name: "Ergonomic Office Chair",
            category: "Furniture",
            price: 199.99,
            date: "2023-02-28",
            mentor: "Sarah Lee",
        },
        {
            id: 5,
            name: "Luxury Silk Scarf",
            category: "Accessories",
            price: 59.99,
            date: "2023-06-01",
            mentor: "David Kim",
        },
        {
            id: 6,
            name: "High-Performance Blender",
            category: "Kitchen",
            price: 129.99,
            date: "2023-04-10",
            mentor: "Emily Chen",
        },
        {
            id: 7,
            name: "Vintage Leather Wallet",
            category: "Accessories",
            price: 49.99,
            date: "2023-03-15",
            mentor: "John Doe",
        },
        {
            id: 8,
            name: "Outdoor Camping Tent",
            category: "Sports",
            price: 199.99,
            date: "2023-05-05",
            mentor: "Jane Smith",
        },
    ]
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState([])
    const [priceRange, setPriceRange] = useState([0, 500])
    const [sortBy, setSortBy] = useState("date")
    const [sortOrder, setSortOrder] = useState("desc")
    const [selectedMentor, setSelectedMentor] = useState([])
    const filteredProducts = useMemo(() => {
        return products
            .filter((product) => {
                const nameMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
                const categoryMatch = selectedCategory.length === 0 || selectedCategory.includes(product.category)
                const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1]
                const mentorMatch = selectedMentor.length === 0 || selectedMentor.includes(product.mentor)
                return nameMatch && categoryMatch && priceMatch && mentorMatch
            })
            .sort((a, b) => {
                if (sortBy === "name") {
                    return sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
                } else if (sortBy === "price") {
                    return sortOrder === "asc" ? a.price - b.price : b.price - a.price
                } else if (sortBy === "date") {
                    return sortOrder === "asc" ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date)
                } else if (sortBy === "mentor") {
                    return sortOrder === "asc" ? a.mentor.localeCompare(b.mentor) : b.mentor.localeCompare(a.mentor)
                }
                return 0
            })
    }, [searchTerm, selectedCategory, priceRange, sortBy, sortOrder, selectedMentor])
    const uniqueCategories = useMemo(() => {
        return [...new Set(products.map((product) => product.category))]
    }, [])
    const uniqueMentors = useMemo(() => {
        return [...new Set(products.map((product) => product.mentor))]
    }, [])
    return (
        <div className="grid container mx-auto grid-cols-1 md:grid-cols-[300px_1fr] gap-8 p-8">
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Filters</h2>
                <div className="grid gap-4">
                    <div>
                        <label htmlFor="search" className="block text-sm font-medium text-gray-700">
                            Search
                        </label>
                        <div className="mt-1">
                            <Input
                                id="search"
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search products..."
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
                                min={0}
                                max={500}
                                step={10}
                                value={priceRange}
                                onValueChange={setPriceRange}
                                className="w-full"
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
                                id="sort"
                                value={sortBy}
                                onValueChange={setSortBy}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <Image
                                src="/placeholder.svg"
                                alt={product.name}
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{product.name}</h3>
                                <p className="text-gray-500 text-sm">{product.category}</p>
                                <p className="text-gray-700 font-bold">${product.price.toFixed(2)}</p>
                                <p className="text-gray-500 text-sm">Mentor: {product.mentor}</p>
                                <p className="text-gray-500 text-sm">Date: {new Date(product.date).toLocaleDateString()}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}