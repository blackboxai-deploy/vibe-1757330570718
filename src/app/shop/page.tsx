"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const [products] = useState([
    {
      id: 1,
      name: "Lavender Dreams Soap",
      price: 12.99,
      originalPrice: 15.99,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f6e859fd-5f5d-4cb4-ae57-88363cd625fa.png",
      description: "Relaxing lavender soap with organic oils and dried flowers",
      category: "soaps",
      tags: ["lavender", "relaxing", "organic", "essential-oils"],
      isNew: true,
      isBestseller: false,
      rating: 4.8,
      reviews: 124,
      inStock: true,
      stock: 45
    },
    {
      id: 2,
      name: "Charcoal Detox Bar",
      price: 14.99,
      image: "https://placehold.co/400x400?text=Activated+charcoal+black+soap+bar+detoxifying+natural+skincare",
      description: "Deep cleansing activated charcoal soap for problem skin",
      category: "soaps",
      tags: ["charcoal", "detox", "acne", "deep-cleansing"],
      isNew: false,
      isBestseller: true,
      rating: 4.9,
      reviews: 89,
      inStock: true,
      stock: 32
    },
    {
      id: 3,
      name: "Honey Oat Scrub",
      price: 13.99,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/044d9896-e311-4c63-9f57-ccea9a204490.png",
      description: "Gentle exfoliating soap with honey and oats for smooth skin",
      category: "soaps",
      tags: ["honey", "oat", "exfoliating", "gentle"],
      isNew: false,
      isBestseller: false,
      rating: 4.7,
      reviews: 156,
      inStock: true,
      stock: 28
    },
    {
      id: 4,
      name: "Tea Tree Fresh",
      price: 11.99,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0b54ee47-3522-4adc-b897-1be36dedea2e.png",
      description: "Antibacterial tea tree oil soap for fresh, clean skin",
      category: "soaps",
      tags: ["tea-tree", "antibacterial", "fresh", "natural"],
      isNew: false,
      isBestseller: false,
      rating: 4.6,
      reviews: 98,
      inStock: true,
      stock: 41
    },
    {
      id: 5,
      name: "Rose Garden Bar",
      price: 15.99,
      image: "https://placehold.co/400x400?text=Rose+petals+pink+soap+bar+romantic+floral+natural+beauty",
      description: "Luxurious rose petal soap with moisturizing properties",
      category: "soaps",
      tags: ["rose", "floral", "luxurious", "moisturizing"],
      isNew: true,
      isBestseller: false,
      rating: 4.8,
      reviews: 67,
      inStock: true,
      stock: 23
    },
    {
      id: 6,
      name: "Eucalyptus Mint",
      price: 12.99,
      image: "https://placehold.co/400x400?text=Eucalyptus+mint+green+soap+bar+refreshing+invigorating+natural",
      description: "Invigorating eucalyptus and mint soap for energy boost",
      category: "soaps",
      tags: ["eucalyptus", "mint", "refreshing", "energizing"],
      isNew: false,
      isBestseller: true,
      rating: 4.7,
      reviews: 134,
      inStock: true,
      stock: 36
    },
    {
      id: 7,
      name: "Coconut Vanilla Cream",
      price: 13.99,
      image: "https://placehold.co/400x400?text=Coconut+vanilla+cream+white+soap+bar+tropical+moisturizing",
      description: "Tropical coconut and vanilla soap with creamy lather",
      category: "soaps",
      tags: ["coconut", "vanilla", "tropical", "moisturizing"],
      isNew: false,
      isBestseller: false,
      rating: 4.6,
      reviews: 91,
      inStock: true,
      stock: 19
    },
    {
      id: 8,
      name: "Lemon Verbena Fresh",
      price: 11.99,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c425ac9a-4043-49fd-969a-4678e55a17a3.png",
      description: "Bright lemon verbena soap for morning freshness",
      category: "soaps",
      tags: ["lemon", "citrus", "fresh", "morning"],
      isNew: false,
      isBestseller: false,
      rating: 4.5,
      reviews: 78,
      inStock: true,
      stock: 44
    },
    {
      id: 9,
      name: "Natural Body Butter",
      price: 19.99,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2fc05197-ce49-4e09-b417-2130fd81dd6b.png",
      description: "Rich organic body butter for deep moisturization",
      category: "body-care",
      tags: ["body-butter", "moisturizing", "organic", "rich"],
      isNew: true,
      isBestseller: false,
      rating: 4.9,
      reviews: 45,
      inStock: true,
      stock: 15
    },
    {
      id: 10,
      name: "Healing Hand Salve",
      price: 8.99,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/97b16ae1-c223-42cd-8a57-6759a227648d.png",
      description: "Healing salve for dry, cracked hands",
      category: "body-care",
      tags: ["hand-salve", "healing", "repair", "dry-skin"],
      isNew: false,
      isBestseller: true,
      rating: 4.8,
      reviews: 167,
      inStock: true,
      stock: 62
    }
  ]);

  const categories = [
    { value: "all", label: "All Products" },
    { value: "soaps", label: "Natural Soaps" },
    { value: "body-care", label: "Body Care" },
    { value: "gift-sets", label: "Gift Sets" }
  ];

  const priceRanges = [
    { value: "all", label: "All Prices" },
    { value: "0-10", label: "Under $10" },
    { value: "10-15", label: "$10 - $15" },
    { value: "15-20", label: "$15 - $20" },
    { value: "20+", label: "Over $20" }
  ];

  const sortOptions = [
    { value: "featured", label: "Featured" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "name", label: "Name A-Z" },
    { value: "rating", label: "Highest Rated" },
    { value: "newest", label: "Newest First" }
  ];

  const filterOptions = [
    { id: "new", label: "New Arrivals", count: products.filter(p => p.isNew).length },
    { id: "bestseller", label: "Bestsellers", count: products.filter(p => p.isBestseller).length },
    { id: "sale", label: "On Sale", count: products.filter(p => p.originalPrice).length },
    { id: "in-stock", label: "In Stock", count: products.filter(p => p.inStock).length }
  ];

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Price range filter
    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(p => p === "+" ? Infinity : parseFloat(p));
      filtered = filtered.filter(product => {
        if (max === undefined) return product.price >= min;
        return product.price >= min && product.price <= max;
      });
    }

    // Additional filters
    if (selectedFilters.includes("new")) {
      filtered = filtered.filter(product => product.isNew);
    }
    if (selectedFilters.includes("bestseller")) {
      filtered = filtered.filter(product => product.isBestseller);
    }
    if (selectedFilters.includes("sale")) {
      filtered = filtered.filter(product => product.originalPrice);
    }
    if (selectedFilters.includes("in-stock")) {
      filtered = filtered.filter(product => product.inStock);
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        // Featured - keep original order but prioritize bestsellers and new
        filtered.sort((a, b) => {
          if (a.isBestseller && !b.isBestseller) return -1;
          if (!a.isBestseller && b.isBestseller) return 1;
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return 0;
        });
    }

    return filtered;
  }, [products, searchQuery, selectedCategory, priceRange, sortBy, selectedFilters]);

  const handleFilterChange = (filterId: string, checked: boolean) => {
    if (checked) {
      setSelectedFilters([...selectedFilters, filterId]);
    } else {
      setSelectedFilters(selectedFilters.filter(f => f !== filterId));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Products</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our complete collection of handmade natural soaps and expanding body care products. 
              Each item is crafted with premium organic ingredients.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-6 sticky top-4">
              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Search Products</label>
                <Input
                  type="search"
                  placeholder="Search by name, description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Category</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Price Range</label>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {priceRanges.map(range => (
                      <SelectItem key={range.value} value={range.value}>
                        {range.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Additional Filters */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Filters</label>
                <div className="space-y-2">
                  {filterOptions.map(filter => (
                    <div key={filter.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={filter.id}
                        checked={selectedFilters.includes(filter.id)}
                        onCheckedChange={(checked) => handleFilterChange(filter.id, !!checked)}
                      />
                      <label htmlFor={filter.id} className="text-sm text-gray-700 flex-1 cursor-pointer">
                        {filter.label} ({filter.count})
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(searchQuery || selectedCategory !== "all" || priceRange !== "all" || selectedFilters.length > 0) && (
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                    setPriceRange("all");
                    setSelectedFilters([]);
                  }}
                  className="w-full"
                >
                  Clear All Filters
                </Button>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <p className="text-gray-600">
                  Showing {filteredProducts.length} of {products.length} products
                </p>
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700">Sort by:</label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map(option => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters or search terms.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                    setPriceRange("all");
                    setSelectedFilters([]);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 left-2 flex flex-col gap-1">
                          {product.isNew && (
                            <Badge className="bg-blue-500 hover:bg-blue-600 text-white">New</Badge>
                          )}
                          {product.isBestseller && (
                            <Badge className="bg-orange-500 hover:bg-orange-600 text-white">Bestseller</Badge>
                          )}
                          {product.originalPrice && (
                            <Badge className="bg-red-500 hover:bg-red-600 text-white">Sale</Badge>
                          )}
                        </div>
                        <Button 
                          size="sm" 
                          className="absolute top-2 right-2 bg-white/90 text-gray-600 hover:bg-white hover:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </Button>
                        {!product.inStock && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <Badge className="bg-gray-600 text-white">Out of Stock</Badge>
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <CardTitle className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
                        {product.name}
                      </CardTitle>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">({product.reviews})</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-green-600">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                          )}
                        </div>
                        {product.inStock && (
                          <span className="text-xs text-gray-500">{product.stock} left</span>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <div className="w-full space-y-2">
                        <Button asChild className="w-full bg-green-600 hover:bg-green-700" disabled={!product.inStock}>
                          <Link href={`/shop/${product.id}`}>
                            {product.inStock ? "View Details" : "Out of Stock"}
                          </Link>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}