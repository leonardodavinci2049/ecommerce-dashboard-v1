"use client"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, AlertTriangle, ShoppingCart, Users, Package, DollarSign } from "lucide-react"
import dashboardData from "@/data/dashboard-data.json"

const getColorStyles = (color: string) => {
  switch (color) {
    case "green":
      return {
        bg: "bg-green-50",
        border: "border-green-200",
        text: "text-green-800",
        icon: "text-green-600",
        badge: "bg-green-100 text-green-800 border-green-300"
      }
    case "blue":
      return {
        bg: "bg-blue-50",
        border: "border-blue-200", 
        text: "text-blue-800",
        icon: "text-blue-600",
        badge: "bg-blue-100 text-blue-800 border-blue-300"
      }
    case "purple":
      return {
        bg: "bg-purple-50",
        border: "border-purple-200",
        text: "text-purple-800", 
        icon: "text-purple-600",
        badge: "bg-purple-100 text-purple-800 border-purple-300"
      }
    default:
      return {
        bg: "bg-gray-50",
        border: "border-gray-200",
        text: "text-gray-800",
        icon: "text-gray-600", 
        badge: "bg-gray-100 text-gray-800 border-gray-300"
      }
  }
}

const getStatusStyles = (status: string) => {
  switch (status) {
    case "critical":
      return {
        bg: "bg-red-50",
        border: "border-red-200",
        text: "text-red-800",
        badge: "bg-red-100 text-red-800 border-red-300"
      }
    case "low":
      return {
        bg: "bg-orange-50", 
        border: "border-orange-200",
        text: "text-orange-800",
        badge: "bg-orange-100 text-orange-800 border-orange-300"
      }
    case "good":
      return {
        bg: "bg-green-50",
        border: "border-green-200", 
        text: "text-green-800",
        badge: "bg-green-100 text-green-800 border-green-300"
      }
    default:
      return {
        bg: "bg-gray-50",
        border: "border-gray-200",
        text: "text-gray-800",
        badge: "bg-gray-100 text-gray-800 border-gray-300"
      }
  }
}

const getAlertStyles = (type: string) => {
  switch (type) {
    case "critical":
      return {
        bg: "bg-red-50",
        border: "border-red-200",
        text: "text-red-800", 
        icon: "text-red-600",
        badge: "bg-red-100 text-red-800 border-red-300"
      }
    case "warning":
      return {
        bg: "bg-yellow-50",
        border: "border-yellow-200",
        text: "text-yellow-800",
        icon: "text-yellow-600", 
        badge: "bg-yellow-100 text-yellow-800 border-yellow-300"
      }
    case "info":
      return {
        bg: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-800",
        icon: "text-blue-600",
        badge: "bg-blue-100 text-blue-800 border-blue-300"
      }
    default:
      return {
        bg: "bg-gray-50", 
        border: "border-gray-200",
        text: "text-gray-800",
        icon: "text-gray-600",
        badge: "bg-gray-100 text-gray-800 border-gray-300"
      }
  }
}

export function DashboardTabs() {
  const tabsData = dashboardData.tabsData

  return (
    <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 border-0 shadow-sm bg-gradient-to-br from-white via-white to-gray-50/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-indigo-600" />
          Important Updates
        </CardTitle>
        <CardDescription>
          Critical updates and insights for your e-commerce business
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="performance" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
          </TabsList>
          
          <TabsContent value="performance" className="space-y-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tabsData.performance.slice(0, 2).map((item, index) => {
                const styles = getColorStyles(item.color)
                const Icon = item.type === "revenue" ? DollarSign : Users
                
                return (
                  <div key={index} className={`p-4 rounded-lg ${styles.bg} border ${styles.border}`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Icon className={`h-4 w-4 ${styles.icon}`} />
                        <h4 className={`font-semibold ${styles.text}`}>{item.title}</h4>
                      </div>
                      <Badge className={styles.badge}>{item.value}</Badge>
                    </div>
                    <p className={`text-sm ${styles.text.replace('800', '700')}`}>{item.description}</p>
                  </div>
                )
              })}
            </div>
            
            {tabsData.performance[2] && (
              <div className={`p-4 rounded-lg ${getColorStyles(tabsData.performance[2].color).bg} border ${getColorStyles(tabsData.performance[2].color).border}`}>
                <div className="flex items-center gap-2 mb-2">
                  <ShoppingCart className={`h-4 w-4 ${getColorStyles(tabsData.performance[2].color).icon}`} />
                  <h4 className={`font-semibold ${getColorStyles(tabsData.performance[2].color).text}`}>{tabsData.performance[2].title}</h4>
                </div>
                <p className={`text-sm ${getColorStyles(tabsData.performance[2].color).text.replace('800', '700')} mb-2`}>{tabsData.performance[2].description}</p>
                <div className="flex gap-2">
                  {tabsData.performance[2].metrics?.map((metric, index) => (
                    <Badge key={index} variant="secondary">{metric.label}: {metric.value}</Badge>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="inventory" className="space-y-4 mt-4">
            <div className="space-y-3">
              {tabsData.inventory.map((item, index) => {
                const styles = getStatusStyles(item.status)
                const statusText = item.status === "good" ? "In Stock" : item.status === "low" ? "Low Stock" : "Critical"
                
                return (
                  <div key={index} className={`flex items-center justify-between p-3 rounded-lg border ${styles.border} ${styles.bg}`}>
                    <div className="flex items-center gap-3">
                      <Package className={`h-4 w-4 ${styles.text.replace('800', '600')}`} />
                      <div>
                        <p className={`font-medium ${styles.text}`}>{item.name}</p>
                        <p className={`text-sm ${styles.text.replace('800', '600')}`}>
                          {item.status === "good" ? `${item.stock} units available` : `Only ${item.stock} units left`}
                        </p>
                      </div>
                    </div>
                    <Badge className={styles.badge}>{statusText}</Badge>
                  </div>
                )
              })}
            </div>
          </TabsContent>
          
          <TabsContent value="alerts" className="space-y-4 mt-4">
            <div className="space-y-3">
              {tabsData.alerts.map((alert) => {
                const styles = getAlertStyles(alert.type)
                const Icon = alert.type === "info" ? TrendingUp : AlertTriangle
                const badgeText = alert.type.charAt(0).toUpperCase() + alert.type.slice(1)
                
                return (
                  <div key={alert.id} className={`flex items-start gap-3 p-3 rounded-lg border ${styles.border} ${styles.bg}`}>
                    <Icon className={`h-4 w-4 ${styles.icon} mt-0.5`} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className={`font-semibold ${styles.text}`}>{alert.title}</h4>
                        <Badge className={styles.badge}>{badgeText}</Badge>
                      </div>
                      <p className={`text-sm ${styles.text.replace('800', '700')}`}>{alert.message}</p>
                      <p className={`text-xs ${styles.text.replace('800', '600')} mt-1`}>{alert.time}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
} 