import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BarChart3, Twitter, MessageCircle, Phone, Briefcase } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Paul Calebs Dashboard
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            A beautiful, modern e-commerce dashboard with interactive search, notification system, 
            and data-driven insights. Built with Next.js, ShadCN UI, and ShadCN Charts.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/dashboard">
            <Button 
              size="lg" 
              className="cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 px-8 py-6 text-lg"
            >
              <BarChart3 className="w-6 h-6" />
              Access Dashboard
            </Button>
          </Link>
          
          <div className="text-sm text-muted-foreground">
            Built with ❤️ using ShadCN UI & Charts
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 p-6 sm:p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Get In Touch</h2>
          <p className="text-gray-600 mb-6">
            Need a custom dashboard or web development? Lets connect! 
            <span className="font-semibold text-green-600"> WhatsApp is the fastest way to reach me.</span>
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/2348068243327"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer group flex flex-col items-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 hover:border-green-300 hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-3 group-hover:from-green-600 group-hover:to-green-700 transition-all duration-300">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-green-800 mb-1">WhatsApp</h3>
              <p className="text-sm text-green-600 text-center">+234 806 824 3327</p>
              <p className="text-xs text-green-500 mt-1 font-medium">Fastest Response!</p>
            </a>

            {/* Phone */}
            <a
              href="tel:+2348068243327"
              className="cursor-pointer group flex flex-col items-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-3 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-blue-800 mb-1">Phone Call</h3>
              <p className="text-sm text-blue-600 text-center">+234 806 824 3327</p>
              <p className="text-xs text-blue-500 mt-1">Click to Call</p>
            </a>

            {/* Twitter */}
            <a
              href="https://x.com/iampaulcaleb"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer group flex flex-col items-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200 hover:border-purple-300 hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mb-3 group-hover:from-purple-600 group-hover:to-purple-700 transition-all duration-300">
                <Twitter className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-purple-800 mb-1">Twitter/X</h3>
              <p className="text-sm text-purple-600 text-center">@iampaulcaleb</p>
              <p className="text-xs text-purple-500 mt-1">Follow Me</p>
            </a>

            {/* Upwork */}
            <a
              href="https://www.upwork.com/freelancers/~019e42a4635bb3380c?s=1044578476142100494"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer group flex flex-col items-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200 hover:border-orange-300 hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              <div className="p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-3 group-hover:from-orange-600 group-hover:to-orange-700 transition-all duration-300">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-orange-800 mb-1">Upwork</h3>
              <p className="text-sm text-orange-600 text-center">Hire Me</p>
              <p className="text-xs text-orange-500 mt-1">Professional Projects</p>
            </a>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Specializing in:</span> React, Next.js, TypeScript, ShadCN UI, 
              Tailwind CSS, Dashboard Development, E-commerce Solutions & Modern Web Applications
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}