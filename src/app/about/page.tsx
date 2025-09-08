import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  const milestones = [
    {
      year: "2018",
      title: "The Beginning",
      description: "Started crafting natural soaps in a small home kitchen, driven by a passion for chemical-free skincare."
    },
    {
      year: "2019",
      title: "First Market",
      description: "Began selling at local farmers markets, receiving overwhelming positive feedback from customers."
    },
    {
      year: "2020",
      title: "Online Launch",
      description: "Launched our first website and started shipping nationwide during the pandemic."
    },
    {
      year: "2021",
      title: "Certified Organic",
      description: "Achieved organic certification for all our ingredients and manufacturing processes."
    },
    {
      year: "2022",
      title: "Expansion",
      description: "Moved to a larger facility and expanded our product line beyond soaps."
    },
    {
      year: "2024",
      title: "Today",
      description: "Serving thousands of customers with premium natural skincare products."
    }
  ];

  const values = [
    {
      title: "100% Natural",
      description: "We use only natural and organic ingredients, never any harsh chemicals or artificial additives.",
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Handcrafted Quality",
      description: "Each bar is carefully handmade in small batches to ensure premium quality and attention to detail.",
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Eco-Friendly",
      description: "Committed to sustainable practices, from sourcing ingredients to packaging and shipping.",
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Customer First",
      description: "Your satisfaction is our priority. We stand behind every product with our quality guarantee.",
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & Artisan Soapmaker",
      bio: "With over 6 years of experience in natural skincare, Sarah founded NaturalSoap Co. with a vision to make premium natural products accessible to everyone.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ad00bf01-e812-42fc-9d73-2eda15c01b5a.png"
    },
    {
      name: "Michael Chen",
      role: "Quality Control & Ingredients Specialist",
      bio: "Michael ensures every ingredient meets our rigorous quality standards. His background in organic chemistry helps maintain our product excellence.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6a70f937-f209-4fc0-9eab-867b41134674.png"
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Experience Manager",
      bio: "Emily leads our customer service team, ensuring every customer has an exceptional experience with our brand and products.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/30f22e2f-1f31-4165-900a-fe30142c20d2.png"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-green-100 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                  Our Story
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Crafting Natural Goodness
                  <span className="text-green-600 block">Since 2018</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  What started as a passion project in a small kitchen has grown into a mission to provide 
                  premium handmade natural soaps and expanding skincare products. Every bar tells a story 
                  of dedication, quality, and love for natural ingredients.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-green-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">6+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">15,000+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Natural Products</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4131f5f5-73e0-43b9-9298-a17dbfb06d7f.png"
                      alt="Artisan soap making process"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://placehold.co/300x225?text=Natural+soap+bars+arranged+beautifully+handmade"
                      alt="Natural soap bars"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://placehold.co/300x225?text=Organic+ingredients+essential+oils+natural+materials"
                      alt="Organic ingredients"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://placehold.co/300x300?text=Founder+Sarah+Johnson+smiling+soap+workshop"
                      alt="Founder in workshop"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do, from ingredient sourcing to customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-4 bg-green-50 rounded-2xl">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to a trusted brand, here's how we've grown while staying true to our values.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-8 items-start">
                  <div className="flex-shrink-0 w-24 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full font-bold text-lg">
                      {milestone.year}
                    </div>
                  </div>
                  <Card className="flex-1">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate people behind NaturalSoap Co. who make our mission possible every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="aspect-square rounded-full overflow-hidden mx-auto mb-4 w-32 h-32">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                  Our Process
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Traditional Cold Process Method
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We use the traditional cold process method, which preserves the natural glycerin 
                  and beneficial properties of our organic ingredients. This time-honored technique 
                  results in longer-lasting, more moisturizing bars.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ingredient Selection</h4>
                    <p className="text-gray-600">We carefully source the finest organic oils, butters, and essential oils.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Cold Process Mixing</h4>
                    <p className="text-gray-600">Ingredients are mixed at low temperatures to preserve their beneficial properties.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Curing & Quality</h4>
                    <p className="text-gray-600">Each bar is cured for 4-6 weeks and tested for quality before packaging.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/112fa1d6-58bf-4a2a-96d7-3bfc9c84a9a5.png"
                    alt="Cold process mixing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://placehold.co/300x225?text=Soap+bars+curing+drying+wooden+shelves+workshop"
                    alt="Soap curing process"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bb7eb956-e491-4128-a9bc-76f7e9e8fa61.png"
                    alt="Quality testing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://placehold.co/300x300?text=Finished+soap+bars+packaging+beautiful+presentation"
                    alt="Final packaging"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Commitment */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Sustainability Commitment</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in protecting the planet while creating beautiful products for your skin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Eco-Friendly Packaging</h3>
              <p className="text-gray-600">Minimal, recyclable packaging made from sustainable materials.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Renewable Energy</h3>
              <p className="text-gray-600">Our facility runs on 100% renewable energy sources.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Carbon Neutral Shipping</h3>
              <p className="text-gray-600">We offset all shipping emissions through verified carbon programs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Ready to Experience Natural Goodness?
              </h2>
              <p className="text-lg text-green-100 max-w-2xl mx-auto">
                Join thousands of satisfied customers who've made the switch to natural, 
                handmade skincare products.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-green-600 hover:bg-green-50 px-8 py-3">
                <Link href="/shop">Shop Our Products</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}