"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag } from "lucide-react"
import dashboardData from "@/data/dashboard-data.json"

export function RecentOrders() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-300"
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-300"
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-300"
      default:
        return "bg-gray-100 text-gray-800 border-gray-300"
    }
  }

  return (
    <Card className="cursor-pointer group hover:shadow-lg transition-all duration-300 border-0 shadow-sm bg-gradient-to-br from-white via-white to-green-50/20 w-full">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
          <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
          Recent Orders
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm">
          Latest orders from your customers
        </CardDescription>
      </CardHeader>
      <CardContent className="p-3 sm:p-6">
        <div className="space-y-3 sm:space-y-4">
          {dashboardData.recentOrders.map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between p-2 sm:p-3 rounded-lg hover:bg-green-50/50 transition-all duration-200 group-hover:border-green-200 border border-transparent hover:shadow-sm hover:scale-102"
            >
              <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                <Avatar className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0">
                  <AvatarImage src={`/avatars/${order.id}.png`} alt={order.customer} />
                  <AvatarFallback className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold text-xs sm:text-sm">
                    {order.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-gray-900 text-sm sm:text-base truncate">{order.customer}</p>
                  <p className="text-xs sm:text-sm text-gray-500 truncate">{order.email}</p>
                </div>
              </div>
              <div className="text-right flex-shrink-0 ml-2">
                <p className="font-semibold text-gray-900 text-sm sm:text-base">${order.amount}</p>
                <Badge className={`${getStatusColor(order.status)} text-xs mt-1`}>
                  {order.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 