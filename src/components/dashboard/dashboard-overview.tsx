"use client"

import { RevenueChart } from "./revenue-chart"
import { SalesChart } from "./sales-chart"
import { RecentOrders } from "./recent-orders"
import { TopProducts } from "./top-products"
import { OverviewCards } from "./overview-cards"
import { NotificationBar } from "./notification-bar"
import { DashboardHeader } from "./dashboard-header"
import { DashboardTabs } from "./dashboard-tabs"

export function DashboardOverview() {
  return (
    <div className="space-y-4 sm:space-y-6 w-full max-w-full overflow-hidden">
      {/* Header with Avatar and Calendar */}
      <DashboardHeader />

      {/* Notification Bar */}
      <NotificationBar />

      {/* Overview Cards */}
      <OverviewCards />

      {/* Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
        <RevenueChart />
        <SalesChart />
      </div>

      {/* Important Updates Tabs */}
      <DashboardTabs />

      {/* Tables Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
        <RecentOrders />
        <TopProducts />
      </div>
    </div>
  )
} 