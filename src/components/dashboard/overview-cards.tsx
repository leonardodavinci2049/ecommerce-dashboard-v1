"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, ShoppingCart, Users, TrendingUp } from "lucide-react"
import dashboardData from "@/data/dashboard-data.json"

const overviewItems = [
  {
    title: "Total Revenue",
    value: `$${dashboardData.overview.totalRevenue.toLocaleString()}`,
    icon: DollarSign,
    trend: "+20.1%",
    trendType: "up" as const,
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
  },
  {
    title: "Total Orders",
    value: dashboardData.overview.totalOrders.toLocaleString(),
    icon: ShoppingCart,
    trend: "+12.5%",
    trendType: "up" as const,
    gradient: "from-blue-500 to-cyan-600",
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    title: "Total Customers",
    value: dashboardData.overview.totalCustomers.toLocaleString(),
    icon: Users,
    trend: "+8.2%",
    trendType: "up" as const,
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-50 to-pink-50",
  },
  {
    title: "Conversion Rate",
    value: `${dashboardData.overview.conversionRate}%`,
    icon: TrendingUp,
    trend: "+2.1%",
    trendType: "up" as const,
    gradient: "from-orange-500 to-red-600",
    bgGradient: "from-orange-50 to-red-50",
  },
]

export function OverviewCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {overviewItems.map((item) => (
        <Card
          key={item.title}
          className={`cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br ${item.bgGradient} shadow-sm`}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              {item.title}
            </CardTitle>
            <div className={`p-2 rounded-lg bg-gradient-to-r ${item.gradient} shadow-lg`}>
              <item.icon className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-gray-800">
                {item.value}
              </div>
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-800 border-green-200"
              >
                {item.trend}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
} 