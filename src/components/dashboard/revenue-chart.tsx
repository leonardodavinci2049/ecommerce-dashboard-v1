"use client"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { TrendingUp } from "lucide-react"
import dashboardData from "@/data/dashboard-data.json"

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "#3b82f6",
  },
  profit: {
    label: "Profit",
    color: "#10b981",
  },
} satisfies ChartConfig

export function RevenueChart() {
  return (
    <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 border-0 shadow-sm bg-gradient-to-br from-white via-white to-blue-50/30 w-full">
      <CardHeader className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 pb-4">
        <div className="space-y-1">
          <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
            <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
            Revenue Overview
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm">
            Monthly revenue and profit trends
          </CardDescription>
        </div>
        <div className="text-left sm:text-right">
          <div className="text-xl sm:text-2xl font-bold text-blue-600">
            +12.5%
          </div>
          <p className="text-xs text-muted-foreground">vs last period</p>
        </div>
      </CardHeader>
      <CardContent className="p-3 sm:p-6">
        <ChartContainer config={chartConfig} className="min-h-[200px] h-[200px] sm:h-[300px] w-full">
          <AreaChart
            accessibilityLayer
            data={dashboardData.revenueData}
            margin={{
              left: 8,
              right: 8,
              top: 8,
              bottom: 8,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
              fontSize={12}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              fontSize={12}
              width={40}
            />
            <ChartTooltip 
              cursor={false} 
              content={<ChartTooltipContent />}
              labelFormatter={(value) => `Month: ${value}`}
            />
            <defs>
              <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="#3b82f6"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="#3b82f6"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillProfit" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="#10b981"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="#10b981"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="profit"
              type="natural"
              fill="url(#fillProfit)"
              fillOpacity={0.4}
              stroke="#10b981"
              strokeWidth={2}
              stackId="a"
            />
            <Area
              dataKey="revenue"
              type="natural"
              fill="url(#fillRevenue)"
              fillOpacity={0.4}
              stroke="#3b82f6"
              strokeWidth={2}
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
} 