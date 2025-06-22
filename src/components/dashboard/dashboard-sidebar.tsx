"use client"

import {
  BarChart3,
  Home,
  Package,
  ShoppingCart,
  Users,
  TrendingUp,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const sidebarItems = [
  {
    title: "Overview",
    icon: Home,
    url: "/dashboard",
    isActive: true,
  },
  {
    title: "Analytics",
    icon: BarChart3,
    url: "/dashboard/analytics",
  },
  {
    title: "Orders",
    icon: ShoppingCart,
    url: "/dashboard/orders",
  },
  {
    title: "Products",
    icon: Package,
    url: "/dashboard/products",
  },
  {
    title: "Customers",
    icon: Users,
    url: "/dashboard/customers",
  },
  {
    title: "Reports",
    icon: TrendingUp,
    url: "/dashboard/reports",
  },
]

export function DashboardSidebar() {
  return (
    <Sidebar className="border-r bg-gradient-to-b from-background via-background to-muted/20">
      <SidebarHeader className="border-b px-6 py-4">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <Package className="h-4 w-4 text-white" />
          </div>
          <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Commerce
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-4 py-4">
        <SidebarMenu>
          {sidebarItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={item.isActive}
                className="cursor-pointer hover:bg-muted/50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-3 p-3 rounded-lg">
                  <item.icon className="h-4 w-4" />
                  <span className="font-medium">{item.title}</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
} 