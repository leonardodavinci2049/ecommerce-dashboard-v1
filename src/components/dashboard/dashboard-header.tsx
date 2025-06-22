"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { CalendarDays, Bell, Settings, Search, X } from "lucide-react"
import { useState } from "react"
import dashboardData from "@/data/dashboard-data.json"

export function DashboardHeader() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const [notificationOpen, setNotificationOpen] = useState(false)

  const user = dashboardData.user
  const notifications = dashboardData.headerNotifications
  const unreadCount = notifications.filter(n => !n.read).length

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // In a real app, this would trigger search functionality
      console.log("Searching for:", searchQuery)
      alert(`Searching for: "${searchQuery}"`)
      setSearchQuery("")
      setIsSearchVisible(false)
    }
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "order": return "🛒"
      case "payment": return "💳"
      case "stock": return "📦"
      case "review": return "⭐"
      default: return "📢"
    }
  }

  return (
    <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 mb-6 p-3 sm:p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-100 shadow-sm">
      {/* Left side - Title and description or Search */}
      <div className="flex-1 flex items-center min-w-0">
        {isSearchVisible ? (
          <form onSubmit={handleSearch} className="flex items-center space-x-2 w-full max-w-md">
            <Input
              placeholder="Search orders, products, customers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 text-sm"
              autoFocus
            />
            <Button type="submit" size="sm" disabled={!searchQuery.trim()}>
              Search
            </Button>
            <Button 
              type="button" 
              variant="ghost" 
              size="sm" 
              onClick={() => {
                setIsSearchVisible(false)
                setSearchQuery("")
              }}
            >
              <X className="h-4 w-4" />
            </Button>
          </form>
        ) : (
          <div className="flex flex-col space-y-1 min-w-0">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent truncate">
              Dashboard Overview
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground truncate">
              Welcome back, {user.name}! Heres whats happening with your store today.
            </p>
          </div>
        )}
      </div>

      {/* Right side - Actions and user */}
      <div className="flex items-center justify-between sm:justify-end space-x-2 sm:space-x-4">
        {/* Mobile: Compact action buttons */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          {/* Search */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="cursor-pointer h-8 w-8 sm:h-10 sm:w-10"
            onClick={() => setIsSearchVisible(!isSearchVisible)}
          >
            <Search className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>

          {/* Calendar */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="cursor-pointer h-8 w-8 sm:h-10 sm:w-10">
                <CalendarDays className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          {/* Notifications */}
          <Popover open={notificationOpen} onOpenChange={setNotificationOpen}>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="cursor-pointer relative h-8 w-8 sm:h-10 sm:w-10">
                <Bell className="h-3 w-3 sm:h-4 sm:w-4" />
                {unreadCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center p-0 bg-red-500 text-white text-xs">
                    {unreadCount}
                  </Badge>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-72 sm:w-80 p-0" align="end">
              <div className="p-4 border-b">
                <h3 className="font-semibold">Notifications</h3>
                <p className="text-sm text-muted-foreground">{unreadCount} unread notifications</p>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer ${
                      !notification.read ? 'bg-blue-50/50' : ''
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="text-lg">{getNotificationIcon(notification.type)}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className={`text-sm font-medium ${!notification.read ? 'text-gray-900' : 'text-gray-700'} truncate`}>
                            {notification.title}
                          </p>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1 break-words">{notification.message}</p>
                        <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-3 border-t">
                <Button variant="ghost" className="w-full text-sm cursor-pointer">
                  View all notifications
                </Button>
              </div>
            </PopoverContent>
          </Popover>

          {/* Settings - Hidden on small screens */}
          <Button variant="ghost" size="icon" className="cursor-pointer h-8 w-8 sm:h-10 sm:w-10 hidden sm:flex">
            <Settings className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </div>

        {/* User Avatar */}
        <div className="flex items-center space-x-2 sm:space-x-3 pl-2 sm:pl-3 border-l border-gray-200">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
            <p className="text-xs text-muted-foreground truncate">{user.role}</p>
          </div>
          <Avatar className="h-8 w-8 sm:h-10 sm:w-10 cursor-pointer ring-2 ring-offset-2 ring-blue-500 hover:ring-blue-600 transition-all">
            <AvatarImage src="/avatars/01.png" alt={user.name} />
            <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-xs sm:text-sm">
              {user.avatar}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  )
} 