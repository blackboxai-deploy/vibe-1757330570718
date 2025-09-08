"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  const [featuredProducts] = useState([
    {
      id: 1,
      name: "Lavender Dreams Soap",
      price: 12.99,
      originalPrice: 15.99,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d2cf6628-fdc1-496d-b32a-2472ba141249.png",
      description: "Relaxing lavender soap with organic oils",
      isNew: true,
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: "Charcoal Detox Bar",
      price: 14.99,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/551dd7f4-64ad-4801-ac22-2771a82e9f60.png",
      description: "Deep cleansing activated charcoal soap",
      isBestseller: true,
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: "Honey Oat Scrub",
      price: 13.99,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1de448c9-6415-47ba-a398-41ab5017e813.png",
      description: "Gentle exfoliating soap with honey and oats",
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      name: "Tea Tree Fresh",
      price: 11.99,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2aa707d2-cd07-4b79-b150-81bdf672b487.png",
      description: "Antibacterial tea tree oil soap",
      rating: 4.6,
      reviews: 98
    }
  ]);

  const [customerReviews] = useState([
    {
      id: 1,
      customerName: "Sarah M.",
      productName: "Lavender Dreams Soap",
      videoUrl: "https://placehold.co/600x400?text=Customer+review+video+Sarah+using+lavender+soap+happy+testimonial",
      thumbnailUrl: "https://placehold.co/300x200?text=Video+thumbnail+Sarah+review+lavender+soap",
      rating: 5,
      text: "This lavender soap is absolutely amazing! My skin feels so soft and the scent is incredibly relaxing.",
      verified: true,
      featured: true
    },
    {
      id: 2,
      customerName: "Mike R.",
      productName: "Charcoal Detox Bar",
      videoUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/26d4d142-481c-41bd-8835-0d198a928985.png",
      thumbnailUrl: "https://placehold.co/300x200?text=Video+thumbnail+Mike+charcoal+soap+review",
      rating: 5,
      text: "The charcoal bar cleared up my skin issues in just two weeks. Highly recommend!",
      verified: true,
      featured: true
    },
    {
      id: 3,
      customerName: "Emily K.",
      productName: "Honey Oat Scrub",
      videoUrl: "https://placehold.co/600x400?text=Customer+review+video+Emily+honey+oat+scrub+exfoliation+demo",
      thumbnailUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e1bcdde6-155e-4255-8792-cc52ff3233ae.png",
      rating: 5,
      text: "Perfect for sensitive skin! The honey oat scrub is gentle yet effective.",
      verified: true,
      featured: true
    }
  ]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-green-100 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                  Handmade with Love
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Premium Natural Soaps for
                  <span className="text-green-600 block">Healthy Skin</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Discover our collection of handcrafted natural soaps made with organic ingredients. 
                  Started with soaps, now expanding to more natural products for your complete skincare routine.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                  <Link href="/shop">Shop Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3">
                  <Link href="/about">Our Story</Link>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-green-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Natural</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">5000+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Products</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a9a1993e-1e7b-4208-b191-ae303ed3c8d7.png"
                  alt="Natural soap making process with organic ingredients"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-green-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">4.9/5 Rating</div>
                    <div className="text-gray-500">2,500+ Reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Featured Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked bestsellers loved by our customers. Each soap is carefully crafted with premium natural ingredients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
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
                    </div>
                    <Button 
                      size="sm" 
                      className="absolute top-2 right-2 bg-white/90 text-gray-600 hover:bg-white hover:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </Button>
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
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-green-600">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <Link href={`/shop/${product.id}`}>Add to Cart</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50">
              <Link href="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Video Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real customers sharing their experiences with our natural soaps. Every review is verified and approved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {customerReviews.map((review) => (
              <Card key={review.id} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg aspect-video">
                    <img
                      src={review.thumbnailUrl}
                      alt={`${review.customerName} review of ${review.productName}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="lg" className="rounded-full bg-white/90 text-gray-900 hover:bg-white">
                        <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </Button>
                    </div>
                    <div className="absolute top-2 right-2 flex gap-1">
                      {review.verified && (
                        <Badge className="bg-green-500 hover:bg-green-600 text-white text-xs">Verified</Badge>
                      )}
                      {review.featured && (
                        <Badge className="bg-blue-500 hover:bg-blue-600 text-white text-xs">Featured</Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-600">{review.customerName}</span>
                  </div>
                  <p className="text-gray-700 mb-3 line-clamp-3">{review.text}</p>
                  <p className="text-sm text-green-600 font-medium">Product: {review.productName}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-4">
            <Button asChild variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50 mr-4">
              <Link href="/reviews">View All Reviews</Link>
            </Button>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/reviews/submit">Share Your Review</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                  Our Story
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Crafting Natural Goodness Since Day One
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  What started as a passion for natural skincare has grown into a mission to provide 
                  premium handmade soaps and expanding into more natural products. Every bar is crafted 
                  with care, using only the finest organic ingredients.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">100% Natural and Organic Ingredients</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Handmade in Small Batches</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Cruelty-Free and Eco-Friendly</span>
                </div>
              </div>
              
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/37b37c55-ac6a-49b6-abb2-52365731b0ea.png"
                    alt="Natural soap making process"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/32244836-ded2-4770-8d93-f92ebc8195c4.png"
                    alt="Organic essential oils"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/17e06fcf-a927-43c3-b362-7301e1a76b9f.png"
                    alt="Finished natural soap bars"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/497dfcf8-1d4c-4e17-8423-de236e4fb9e6.png"
                    alt="Artisan crafting soap"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Stay Updated with New Products
              </h2>
              <p className="text-lg text-green-100 max-w-2xl mx-auto">
                Be the first to know about new soap releases, special offers, and natural skincare tips.
              </p>
            </div>
            
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-green-300 focus:outline-none"
                />
                <Button className="bg-white text-green-600 hover:bg-green-50 px-6">
                  Subscribe
                </Button>
              </div>
            </div>
            
            <p className="text-sm text-green-200">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}