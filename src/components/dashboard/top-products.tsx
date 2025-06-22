"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Package, TrendingUp, TrendingDown } from "lucide-react"
import dashboardData from "@/data/dashboard-data.json"

/* const getTrendIcon = (trend: string) => {
  return trend === "up" ? (
    <TrendingUp className="h-4 w-4 text-green-500" />
  ) : (
    <TrendingDown className="h-4 w-4 text-red-500" />
  )
}

const getTrendColor = (trend: string) => {
  return trend === "up"
    ? "bg-green-100 text-green-800 border-green-200"
    : "bg-red-100 text-red-800 border-red-200"
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Electronics":
      return "bg-blue-100 text-blue-800 border-blue-200"
    case "Clothing":
      return "bg-purple-100 text-purple-800 border-purple-200"
    case "Books":
      return "bg-orange-100 text-orange-800 border-orange-200"
    case "Home":
      return "bg-green-100 text-green-800 border-green-200"
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
} */

export function TopProducts() {
  return (
    <Card className="cursor-pointer group hover:shadow-lg transition-all duration-300 border-0 shadow-sm bg-gradient-to-br from-white via-white to-orange-50/20 w-full">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
          <Package className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600" />
          Top Products
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm">
          Best performing products by sales and revenue
        </CardDescription>
      </CardHeader>
      <CardContent className="p-3 sm:p-6">
        <div className="space-y-3 sm:space-y-4">
          {dashboardData.topProducts.map((product, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 sm:p-3 rounded-lg hover:bg-orange-50/50 transition-all duration-200 group-hover:border-orange-200 border border-transparent hover:shadow-sm hover:scale-102"
            >
              <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold text-xs sm:text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-gray-900 text-sm sm:text-base truncate">{product.name}</p>
                  <p className="text-xs sm:text-sm text-gray-500 truncate">{product.category}</p>
                </div>
              </div>
              <div className="text-right flex items-center space-x-1 sm:space-x-2 flex-shrink-0 ml-2">
                <div className="text-right">
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">${product.revenue.toLocaleString()}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{product.sales} sales</p>
                </div>
                {product.trend === "up" ? (
                  <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                ) : (
                  <TrendingDown className="h-3 w-3 sm:h-4 sm:w-4 text-red-500" />
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 