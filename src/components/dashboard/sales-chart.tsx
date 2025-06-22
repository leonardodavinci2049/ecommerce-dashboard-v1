"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PieChart, Pie, Cell, ResponsiveContainer} from "recharts"
import { BarChart } from "lucide-react"
import dashboardData from "@/data/dashboard-data.json"

const chartConfig = {
  electronics: {
    label: "Electronics",
    color: "#3b82f6",
  },
  clothing: {
    label: "Clothing",
    color: "#8b5cf6",
  },
  books: {
    label: "Books",
    color: "#f59e0b",
  },
  home: {
    label: "Home",
    color: "#10b981",
  },
} satisfies ChartConfig

export function SalesChart() {
  return (
    <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 border-0 shadow-sm bg-gradient-to-br from-white via-white to-purple-50/30 w-full">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
          <BarChart className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
          Sales by Category
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm">
          Distribution of sales across different product categories
        </CardDescription>
      </CardHeader>
      <CardContent className="p-3 sm:p-6">
        <ChartContainer config={chartConfig} className="min-h-[200px] h-[200px] sm:h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dashboardData.salesData}
                cx="50%"
                cy="50%"
                innerRadius={30}
                outerRadius={60}
                paddingAngle={2}
                dataKey="sales"
              >
                {dashboardData.salesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <ChartTooltip 
                content={<ChartTooltipContent nameKey="category" />}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
        
        {/* Mobile-friendly legend */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-4 mt-4">
          {dashboardData.salesData.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full flex-shrink-0" 
                style={{ backgroundColor: item.fill }}
              ></div>
              <span className="text-xs sm:text-sm text-gray-600 truncate">
                {item.category}
              </span>
              <span className="text-xs sm:text-sm text-gray-500 font-medium">
                ({item.percentage}%)
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 