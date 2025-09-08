"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProductPageProps {
  params: { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const productId = parseInt(params.id);
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Mock product data - in a real app, this would be fetched from an API
  const product = {
    id: productId,
    name: "Lavender Dreams Soap",
    price: 12.99,
    originalPrice: 15.99,
    images: [
      "https://placehold.co/800x800?text=Lavender+soap+bar+main+view+purple+dried+flowers+handmade+natural",
      "https://placehold.co/800x800?text=Lavender+soap+bar+side+angle+natural+texture+organic+ingredients",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fb506d23-fb51-472f-bfa3-6cc5716c9539.png",
      "https://placehold.co/800x800?text=Lavender+soap+lather+foam+purple+tint+luxurious+texture"
    ],
    description: "Immerse yourself in tranquility with our Lavender Dreams Soap. Handcrafted with premium organic lavender essential oil and dried lavender flowers, this luxurious bar delivers a soothing, spa-like experience every time you use it.",
    longDescription: "Our Lavender Dreams Soap is more than just a cleansing bar—it's a moment of peaceful escape in your daily routine. Each bar is carefully crafted in small batches using traditional cold-process methods, ensuring the highest quality and maximum benefits from every natural ingredient. The organic lavender essential oil not only provides the signature calming fragrance but also offers natural antiseptic and anti-inflammatory properties, making it perfect for all skin types, especially sensitive or stressed skin.",
    category: "soaps",
    tags: ["lavender", "relaxing", "organic", "essential-oils", "handmade", "cold-process"],
    isNew: true,
    isBestseller: false,
    rating: 4.8,
    reviews: 124,
    inStock: true,
    stock: 45,
    ingredients: [
      "Organic Coconut Oil",
      "Organic Olive Oil",
      "Organic Palm Oil",
      "Organic Lavender Essential Oil",
      "Dried Lavender Flowers",
      "Organic Shea Butter",
      "Sodium Hydroxide (Saponified)",
      "Natural Glycerin"
    ],
    benefits: [
      "Deeply moisturizes and nourishes skin",
      "Promotes relaxation and reduces stress",
      "Gentle enough for sensitive skin",
      "Long-lasting with rich, creamy lather",
      "100% natural and organic ingredients",
      "Cruelty-free and eco-friendly"
    ],
    careInstructions: [
      "Keep soap in a well-drained soap dish",
      "Allow to dry between uses for longevity",
      "Store in a cool, dry place",
      "Avoid direct sunlight and water when storing",
      "Use within 12 months for best quality"
    ],
    specifications: {
      weight: "4.5 oz (128g)",
      dimensions: "3.5 x 2.5 x 1 inches",
      pH: "7.5-8.5",
      shelfLife: "12 months",
      scent: "Natural Lavender",
      color: "Light Purple with Lavender Speckles"
    }
  };

  const [reviews] = useState([
    {
      id: 1,
      customerName: "Sarah M.",
      rating: 5,
      date: "2024-01-15",
      title: "Absolutely in love!",
      text: "This lavender soap is absolutely amazing! The scent is so relaxing and my skin feels incredibly soft after using it. I've been using it for 3 weeks now and it's become part of my evening routine.",
      verified: true,
      helpful: 12
    },
    {
      id: 2,
      customerName: "Jennifer L.",
      rating: 5,
      date: "2024-01-10",
      title: "Perfect for sensitive skin",
      text: "I have very sensitive skin and most soaps irritate it, but this lavender soap is so gentle. No irritation at all and the moisturizing effect lasts for hours.",
      verified: true,
      helpful: 8
    },
    {
      id: 3,
      customerName: "Michael R.",
      rating: 4,
      date: "2024-01-05",
      title: "Great quality, long lasting",
      text: "High quality soap that lasts much longer than commercial bars. The lavender scent is authentic and not overwhelming. Would definitely buy again.",
      verified: true,
      helpful: 6
    }
  ]);

  const [relatedProducts] = useState([
    {
      id: 2,
      name: "Rose Garden Bar",
      price: 15.99,
      image: "https://placehold.co/300x300?text=Rose+petals+pink+soap+bar+romantic+floral+natural+beauty",
      rating: 4.8,
      reviews: 67
    },
    {
      id: 3,
      name: "Eucalyptus Mint",
      price: 12.99,
      image: "https://placehold.co/300x300?text=Eucalyptus+mint+green+soap+bar+refreshing+invigorating+natural",
      rating: 4.7,
      reviews: 134
    },
    {
      id: 4,
      name: "Honey Oat Scrub",
      price: 13.99,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b1cbef54-b356-48da-b924-db836eba4433.png",
      rating: 4.7,
      reviews: 156
    }
  ]);

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-green-600">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-green-600">Shop</Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-white shadow-sm">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImageIndex === index ? 'border-green-600' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
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
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600">{product.rating} ({product.reviews} reviews)</span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{product.description}</p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-green-600">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>
                {product.originalPrice && (
                  <Badge className="bg-red-100 text-red-800">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </Badge>
                )}
              </div>

              {product.inStock ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <label className="text-sm font-medium text-gray-700">Quantity:</label>
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button
                        onClick={() => handleQuantityChange(-1)}
                        disabled={quantity <= 1}
                        className="px-3 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50"
                      >
                        -
                      </button>
                      <span className="px-4 py-2 min-w-12 text-center border-x">{quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(1)}
                        disabled={quantity >= product.stock}
                        className="px-3 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-sm text-gray-600">{product.stock} available</span>
                  </div>

                  <div className="flex gap-4">
                    <Button size="lg" className="flex-1 bg-green-600 hover:bg-green-700">
                      Add to Cart - ${(product.price * quantity).toFixed(2)}
                    </Button>
                    <Button size="lg" variant="outline" className="px-6">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <Badge className="bg-gray-100 text-gray-800">Out of Stock</Badge>
                  <Button size="lg" disabled className="w-full">
                    Notify When Available
                  </Button>
                </div>
              )}

              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h1.586a1 1 0 01.707.293l1.414 1.414a1 1 0 00.707.293H19a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                  Free shipping on orders over $50
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  30-day return guarantee
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Secure checkout
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-gray-50 rounded-none">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
              <TabsTrigger value="care">Care Instructions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Description</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{product.longDescription}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Specifications</h4>
                    <dl className="space-y-2">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <dt className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').toLowerCase()}:</dt>
                          <dd className="text-gray-900 font-medium">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="ingredients" className="p-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Natural Ingredients</h3>
                <p className="text-gray-600 mb-6">
                  Our {product.name} is made with carefully selected organic and natural ingredients, 
                  each chosen for their beneficial properties for your skin.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                      <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-800">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="p-6">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Reviews</h3>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-6 h-6 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-lg font-semibold">{product.rating} out of 5</span>
                    <span className="text-gray-600">({product.reviews} reviews)</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-gray-900">{review.customerName}</span>
                            {review.verified && (
                              <Badge className="bg-green-100 text-green-800 text-xs">Verified Purchase</Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex">
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
                            <span className="text-sm text-gray-600">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{review.title}</h4>
                      <p className="text-gray-700 mb-3">{review.text}</p>
                      <div className="flex items-center gap-4">
                        <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                          </svg>
                          Helpful ({review.helpful})
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Button variant="outline">Load More Reviews</Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="care" className="p-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Care Instructions</h3>
                <p className="text-gray-600 mb-6">
                  Follow these simple care instructions to maximize the life and quality of your natural soap.
                </p>
                <ul className="space-y-3">
                  {product.careInstructions.map((instruction, index) => (
                    <li key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-800">{instruction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
                    {relatedProduct.name}
                  </CardTitle>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(relatedProduct.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({relatedProduct.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-600">${relatedProduct.price}</span>
                    <Button asChild size="sm" className="bg-green-600 hover:bg-green-700">
                      <Link href={`/shop/${relatedProduct.id}`}>View</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}