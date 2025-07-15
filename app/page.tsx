"use client" // This component needs to be a Client Component to use useState

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, TrendingUp, CheckCircle, Shield, Award, Clock, Zap, Target } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import Video from 'next-video'
import JoyVideo from '/videos/jolly joy.mp4'

export default function LinkedInBookLanding() {
  const [devfomaExpanded, setDevfomaExpanded] = useState(false)
  const [destinyExpanded, setDestinyExpanded] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Dramatic Style */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border border-yellow-400 rotate-45"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border border-blue-400 rotate-12"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rotate-45"></div>
        </div>

        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="text-center space-y-8">
            <Badge className="bg-yellow-400 text-black hover:bg-yellow-300 text-lg px-6 py-2 font-bold">
              🔥 LINKEDIN GROWTH SECRETS REVEALED
            </Badge>

            <h1 className="text-4xl md:text-7xl font-black leading-tight">
              <span className="text-yellow-400">THE SIMPLEST</span>
              <br />
              <span className="text-white">LINKEDIN GROWTH</span>
              <br />
              <span className="text-blue-400">GUIDEBOOK</span>
            </h1>

            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-medium">
                "So many people create a LinkedIn account, stare at their empty profile, (basically unlinked), and they
                wonder, What now?"
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/images/guidebook.jpeg"
                  alt="Unlinked to LinkedIn Guidebook"
                  width={400}
                  height={500}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold animate-pulse">
                  33% OFF!
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-center gap-4 text-yellow-400">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
                <span className="text-white font-semibold">Perfect for LinkedIn Beginners</span>
              </div>

              <div className="flex items-center justify-center gap-8 text-2xl font-bold">
                <div className="text-center">
                  <div className="text-red-500 line-through">₦ 15,000</div>
                  <div className="text-xs text-gray-400">Regular Price</div>
                </div>
                <div className="text-6xl text-yellow-400">→</div>
                <div className="text-center">
                  <div className="text-green-400 text-4xl">₦ 9,999</div>
                  <div className="text-xs text-gray-400">Discounted Price</div>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 text-base md:px-12 md:py-6 md:text-xl font-black rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <a href="https://selar.com/p/4sx144?affiliate=1q3t4c" target="_blank">GET INSTANT ACCESS NOW →</a>
              </Button>

              <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                <Shield className="w-4 h-4" />
                <span>Instant Download • Secure Payment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Maybe you've posted before, but <span className="text-red-400">no one engaged.</span>
              <br />
              Or worse, <span className="text-red-400">you don't even know what to post.</span>
            </h2>

            <div className="text-2xl text-yellow-400 font-bold">And I get it.</div>

            <p className="text-xl text-gray-300 leading-relaxed">
              That's exactly why <span className="text-blue-400 font-semibold">"Unlinked to LinkedIn"</span> was
              created.
              <br />
              Yes, to take away the confusion and make LinkedIn so...
            </p>

            <div className="bg-black border border-yellow-400 rounded-lg p-8">
              <h3 className="text-3xl font-bold text-yellow-400 mb-4">SIMPLE & EFFECTIVE</h3>
              <p className="text-lg text-gray-300">
                Learn the steps on how to navigate LinkedIn with ease and create content that drives real growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn - Detailed */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What's Inside This <span className="text-yellow-400">Game-Changing</span> Guide?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to transform from confused and "unlinked" to confident and connected
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="bg-gray-900 border-yellow-400 border-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Profile That Magnetizes Connections</h3>
                <p className="text-gray-300 mb-4 text-lg">
                  <span className="text-yellow-400 font-semibold">
                    How to create a profile that makes people want to connect with you.
                  </span>
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Craft a headline that stops people in their tracks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Write a summary that converts visitors into connections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Optimize every section to attract your ideal network</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Professional photo and banner strategies that work</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-blue-400 border-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Content That Grabs Attention</h3>
                <p className="text-gray-300 mb-4 text-lg">
                  <span className="text-blue-400 font-semibold">
                    What to post to grab attention and build your brand.
                  </span>
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Content types that get maximum engagement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>How to share your expertise without being salesy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>The psychology behind viral LinkedIn posts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Personal branding secrets that build authority</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Step-by-Step Strategy */}
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 mb-16 border-2 border-yellow-400">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                <span className="text-yellow-400">BONUS:</span> Complete Step-by-Step System
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Step-by-Step Content Strategy</h4>
                    <p className="text-gray-300">
                      <span className="text-green-400 font-semibold">
                        A step-by-step content strategy that actually works.
                      </span>{" "}
                      No more guessing what to post or when to post it.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">15-Day Content Plan</h4>
                    <p className="text-gray-300">
                      <span className="text-purple-400 font-semibold">
                        A 15-day content plan so you always know what to post.
                      </span>{" "}
                      Never stare at a blank screen again!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 rounded-lg p-6 border border-gray-700">
                <h4 className="text-xl font-bold text-yellow-400 mb-4">What This Means For You:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>No more writer's block or content confusion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Ready-to-use content templates and ideas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>A proven system you can follow immediately</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Consistent posting schedule that builds momentum</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="text-center bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-12 border border-blue-400">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Paint a Picture...</h3>

            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                <span className="text-yellow-400 font-semibold">
                  Imagine logging into LinkedIn and seeing people engaging with your content, sending you messages, and
                  even offering you endless opportunities.
                </span>
              </p>

              <p className="text-lg text-blue-200">That's what happens when you use LinkedIn the right way.</p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-black/30 rounded-lg p-6">
                  <div className="text-3xl mb-2">💬</div>
                  <h4 className="text-white font-bold mb-2">Active Engagement</h4>
                  <p className="text-gray-300 text-sm">People commenting, liking, and sharing your posts</p>
                </div>
                <div className="bg-black/30 rounded-lg p-6">
                  <div className="text-3xl mb-2">📩</div>
                  <h4 className="text-white font-bold mb-2">Inbound Messages</h4>
                  <p className="text-gray-300 text-sm">Professionals reaching out to connect and collaborate</p>
                </div>
                <div className="bg-black/30 rounded-lg p-6">
                  <div className="text-3xl mb-2">🚀</div>
                  <h4 className="text-white font-bold mb-2">Endless Opportunities</h4>
                  <p className="text-gray-300 text-sm">Job offers, partnerships, and business deals</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-yellow-400/10 rounded-lg border border-yellow-400">
                <p className="text-xl text-white font-semibold">
                  <span className="text-yellow-400">P.S.</span> You don't have to feel lost anymore.
                  <br />
                  Let's get started, and I'll show you exactly how to stand out and grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-yellow-400 text-black hover:bg-yellow-300 text-lg px-6 py-2 font-bold mb-6">
              🎥 REAL SUCCESS STORY
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              See How <span className="text-yellow-400">One Reader</span> Transformed Their LinkedIn
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - watch this real transformation story from someone who went from
              <span className="text-red-400"> "unlinked"</span> to{" "}
              <span className="text-blue-400">LinkedIn success</span>
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gray-800 rounded-2xl p-8 border-2 border-yellow-400">
              {/* Video Container */}
              <div className="relative bg-black rounded-lg overflow-hidden mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-white text-lg font-semibold">Click to Play Video Testimonial</p>
                    <p className="text-gray-400">Real results from a real reader</p>
                  </div>
                </div>

                {/* Placeholder for actual video - you can replace this with your video embed */}
                <Video src={JoyVideo}/>
              </div>

              {/* Testimonial Quote */}
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed">
                  "I was completely lost on LinkedIn before this guide. Now I'm getting connection requests daily and my
                  posts are actually getting engagement. This book literally changed my professional life!"
                </blockquote>

                <div className="flex items-center justify-center gap-4 pt-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center overflow-hidden">
                    <img src="/images/JOy.jpeg" alt="" className="object-cover w-full h-full" width={48} height={48} />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold">Joy Ifeanacho</p>
                    <p className="text-gray-400">Content Creator</p>
                  </div>
                </div>
              </div>

              {/* Results Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">500%</div>
                  <div className="text-sm text-gray-400">More Connections</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">10x</div>
                  <div className="text-sm text-gray-400">Post Engagement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">30</div>
                  <div className="text-sm text-gray-400">Days to Success</div>
                </div>
              </div>
            </div>

            {/* Call to Action after testimonial */}
            <div className="text-center mt-8">
              <p className="text-xl text-gray-300 mb-6">
                Ready to get the same results?{" "}
                <span className="text-yellow-400 font-bold">Your transformation starts now!</span>
              </p>
              <Button
                asChild
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 text-base md:px-10 md:py-4 font-bold rounded-full transform hover:scale-105 transition-all duration-200"
              >
                <a href="https://selar.com/p/4sx144?affiliate=1q3t4c" target="_blank">GET YOUR COPY NOW - ₦ 9,999 →</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* LinkedIn Testimonial Section */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-blue-400 text-white hover:bg-blue-300 text-lg px-6 py-2 font-bold mb-6">
                💼 LINKEDIN SUCCESS STORY
              </Badge>
              <h2 className="text-4xl font-bold text-white mb-4">
                Real Results from <span className="text-blue-400">Real LinkedIn Users</span>
              </h2>
            </div>

            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border-2 border-blue-400">
              {/* LinkedIn Post Style - DevFoma */}
              <div className="bg-white rounded-lg p-6 mb-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/images/devfoma.jpeg"
                      alt="DevFoma"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-gray-900">DevFoma</h4>
                      <span className="text-gray-500 text-sm">LinkedIn Growth Enthusiast</span>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="bg-blue-500 text-white hover:bg-blue-600 hover:text-white border-blue-500"
                    >
                      <a
                        href="https://www.linkedin.com/posts/devfoma_check-out-this-untapped-gold-mine-do-you-activity-7312877054423642112-XQo-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEA5GqsB4NDtI9fZGeu0EQF4nmifeJadCbc"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Post
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div
                    className={`relative overflow-hidden transition-all duration-300 ${devfomaExpanded ? "max-h-full" : "max-h-36 md:max-h-full"}`}
                  >
                    <p className="text-gray-800 leading-relaxed">
                      My Boss (Sylvia Omachi) just released a book on LinkedIn Optimization. In this Book she laid out
                      her strategies, struggles and everything she went through to crack the code of LinkedIn. The
                      point? This will save you months of endless trial and error because she has outlined in very
                      simple and practical steps how to skip that phase of struggling and start winning.
                    </p>
                    <p className="text-gray-800 leading-relaxed">
                      It took me a few hours to finish her new book "Unlinked to Linkedin". I had barely finished
                      implementing everything her book but the results were crazy already.
                    </p>
                    <p className="text-gray-800 leading-relaxed">In just two days I got 50+ followers.</p>
                    <p className="text-gray-800 leading-relaxed">
                      I created one post with one of her content type and I had over 10000% rise in impressions🔥 Most
                      importantly because the book was so straight forward and had actionable steps that were easy to
                      implement. I didn't have any trouble taking action.
                    </p>
                    <p className="text-gray-800 leading-relaxed">
                      I highly recommend this book if you're looking to optimize your LinkedIn profile for Jobs and
                      Career Opportunities.
                    </p>
                    {!devfomaExpanded && (
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none md:hidden" />
                    )}
                  </div>
                  <Button
                    variant="link"
                    onClick={() => setDevfomaExpanded(!devfomaExpanded)}
                    className="p-0 h-auto text-blue-600 hover:text-blue-800 md:hidden"
                  >
                    {devfomaExpanded ? "Show Less" : "Read More"}
                  </Button>
                </div>
              </div>

              {/* Results Highlight */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="text-center bg-black/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-400">50+</div>
                  <div className="text-sm text-gray-400">Followers in 2 Days</div>
                </div>
                <div className="text-center bg-black/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-400">10000%+</div>
                  <div className="text-sm text-gray-400">Impressions Rise</div>
                </div>
                <div className="text-center bg-black/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-400">Easy</div>
                  <div className="text-sm text-gray-400">Implementation</div>
                </div>
              </div>
            </div>

            {/* Destiny Eni LinkedIn Testimonial Section */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border-2 border-blue-400 mt-8">
              {/* LinkedIn Post Style */}
              <div className="bg-white rounded-lg p-6 mb-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/images/destiny-eni.jpeg"
                      alt="Destiny Eni"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-gray-900">Destiny Eni</h4>
                      <span className="text-gray-500 text-sm">Social Media Strategist</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div
                    className={`relative overflow-hidden transition-all duration-300 ${destinyExpanded ? "max-h-full" : "max-h-36 md:max-h-full"}`}
                  >
                    <p className="text-gray-800 leading-relaxed">
                      "A huge thank you for the LinkedIn ebook! Here's the unexpected part: I haven't even used it on
                      LinkedIn! Instead, I implemented the core strategies directly on my X account, and I'm thrilled to
                      say it's working brilliantly. 😌 It's amazing how adaptable and powerful the advice is. So
                      grateful. ❤️❤️"
                    </p>
                    <p className="text-gray-800 leading-relaxed">
                      "I was stuck with 35 followers for a while now. But last week, after using the
                      guide in the ebook and strategically positioning myself in just one week I was able to significantly grow my followers to 90+ using the steps outlined in the
                      ebook."
                    </p>
                    {!destinyExpanded && (
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none md:hidden" />
                    )}
                  </div>
                  <Button
                    variant="link"
                    onClick={() => setDestinyExpanded(!destinyExpanded)}
                    className="p-0 h-auto text-blue-600 hover:text-blue-800 md:hidden"
                  >
                    {destinyExpanded ? "Show Less" : "Read More"}
                  </Button>
                </div>

                {/* Comparison Images */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Before</p>
                    <Image
                      src="/images/dee-testimonial-before.jpeg"
                      alt="Destiny Eni Profile Before"
                      width={250}
                      height={200}
                      className="rounded-lg border border-gray-300"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">After</p>
                    <Image
                      src="/images/dee-testimonial-after.jpeg"
                      alt="Destiny Eni Profile After"
                      width={250}
                      height={200}
                      className="rounded-lg border border-gray-300"
                    />
                  </div>
                </div>
              </div>

              {/* Results Highlight */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="text-center bg-black/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-400">35 → 90+</div>
                  <div className="text-sm text-gray-400">Followers Gained</div>
                </div>
                <div className="text-center bg-black/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-400">Optimized</div>
                  <div className="text-sm text-gray-400">Following</div>
                </div>
                <div className="text-center bg-black/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-400">Cross-Platform</div>
                  <div className="text-sm text-gray-400">Impact</div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-xl text-gray-300 mb-6">
                Ready to get similar results?{" "}
                <span className="text-yellow-400 font-bold">
                  Join hundreds of others transforming their LinkedIn presence!
                </span>
              </p>
              <Button
                asChild
                size="lg"
                className="bg-blue-400 hover:bg-blue-300 text-white px-8 py-4 text-lg md:px-10 md:py-4 font-bold rounded-full transform hover:scale-105 transition-all duration-200"
              >
                <a href="https://selar.com/p/4sx144?affiliate=1q3t4c" target="_blank">GET YOUR COPY NOW →</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Guidance Section */}
      <section className="bg-gradient-to-r from-purple-800 to-indigo-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Need Personalized Guidance?</h2>
            <p className="text-xl text-purple-100">
              If you prefer a direct approach or have specific questions before getting the book, reach out for
              personalized assistance.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 text-base md:px-12 md:py-6 md:text-xl font-black rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <a href="https://wa.link/rm5ndn" target="_blank" rel="noopener noreferrer">
                Message Us on WhatsApp →
              </a>
            </Button>
            <p className="text-sm text-purple-200">
              <Shield className="w-4 h-4 inline mr-1" />
              Direct Support • Quick Responses • Get Your Questions Answered
            </p>
          </div>
        </div>
      </section>

      {/* Co-Authors Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Meet the Authors of <span className="text-yellow-400">"Unlinked to LinkedIn"</span>
              </h2>
              <p className="text-xl text-gray-300">The experts who crafted your path to LinkedIn mastery</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Sylvia Omachi */}
              <div className="text-center">
                <div className="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden">
                  <Image
                    src="/images/sylvia.jpeg"
                    alt="Sylvia Omachi"
                    width={192}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Sylvia Omachi</h3>
                <p className="text-yellow-400 font-semibold mb-4">Co-Author, "Unlinked to LinkedIn"</p>
                <Button
                  asChild
                  variant="outline"
                  className="bg-blue-500 text-white hover:bg-blue-600 hover:text-white border-blue-500"
                >
                  <a href="https://www.linkedin.com/in/sylviaomachi/" target="_blank" rel="noopener noreferrer">
                    View LinkedIn Profile
                  </a>
                </Button>
                <div className="space-y-3 text-left max-w-sm mx-auto mt-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Co-creator of this transformative guide</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">LinkedIn Content Expert</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Simple, actionable strategies</span>
                  </div>
                </div>
              </div>

              {/* Adebola Solaja */}
              <div className="text-center">
                <div className="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden">
                  <Image
                    src="/images/adebola.jpeg"
                    alt="Adebola Solaja"
                    width={192}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Adebola Solaja</h3>
                <p className="text-green-400 font-semibold mb-4">Co-Author, "Unlinked to LinkedIn"</p>
                <Button
                  asChild
                  variant="outline"
                  className="bg-blue-500 text-white hover:bg-blue-600 hover:text-white border-blue-500"
                >
                  <a href="https://www.linkedin.com/in/adebola-solaja/" target="_blank" rel="noopener noreferrer">
                    View LinkedIn Profile
                  </a>
                </Button>
                <div className="space-y-3 text-left max-w-sm mx-auto mt-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Co-creator of this transformative guide</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Professional Network Builder</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">LinkedIn Optimization Expert</span>
                  </div>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Proven growth methodologies</span>
                  </li>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-black border border-yellow-400 rounded-lg p-8 max-w-4xl mx-auto">
                <h4 className="text-2xl font-bold text-yellow-400 mb-4">Combined Expertise</h4>
                <p className="text-lg text-gray-300 leading-relaxed">
                  As the visionary authors behind "Unlinked to LinkedIn," Sylvia and Adebola combine their extensive
                  expertise in LinkedIn growth, content strategy, and professional networking. Their proven
                  methodologies, distilled into this guide, have already helped thousands transform their LinkedIn
                  presence from invisible to influential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex items-center justify-center gap-4 text-yellow-400">
              <Clock className="w-8 h-8" />
              <span className="text-2xl font-bold">LIMITED TIME OFFER</span>
              <Clock className="w-8 h-8" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Don't Stay <span className="text-yellow-400">"Unlinked"</span> Any Longer!
            </h2>

            <p className="text-xl text-red-100">
              While others struggle with LinkedIn, you could be building your network and growing your influence TODAY.
            </p>

            <div className="bg-black/30 backdrop-blur rounded-2xl p-8 space-y-6">
              <div className="flex items-center justify-center gap-8 text-white">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">₦ 9,999</div>
                  <div className="text-sm text-red-200">Instead of ₦ 15,000</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">33%</div>
                  <div className="text-sm text-red-200">Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">Instant</div>
                  <div className="text-sm text-red-200">Download</div>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 text-base md:px-12 md:py-6 md:text-xl font-black rounded-full transform hover:scale-105 transition-all duration-200"
              >
                <a href="https://selar.com/p/4sx144?affiliate=1q3t4c" target="_blank">
                  <Zap className="w-6 h-6 mr-2" />
                  GET INSTANT ACCESS NOW
                </a>
              </Button>

              <p className="text-sm text-red-200">
                <Shield className="w-4 h-4 inline mr-1" />
                Secure checkout • Instant download
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black py-16 border-t border-yellow-400">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Ready to go from <span className="text-red-400 line-through">Unlinked</span> to{" "}
              <span className="text-blue-400">LinkedIn</span>?
            </h3>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-black px-6 py-3 text-base md:px-12 md:py-6 md:text-xl font-black rounded-full"
            >
              <a href="https://selar.com/p/4sx144?affiliate=1q3t4c" target="_blank">THEN GO FOR IT →</a>
            </Button>

            <div className="flex justify-center items-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Instant Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
