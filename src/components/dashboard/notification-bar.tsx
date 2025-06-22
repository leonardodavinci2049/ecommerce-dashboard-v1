"use client"

import { Badge } from "@/components/ui/badge"
import { Bell, TrendingUp, Users, ShoppingBag, X } from "lucide-react"
import { useState } from "react"
import dashboardData from "@/data/dashboard-data.json"

const iconMap = {
  TrendingUp: TrendingUp,
  Users: Users,
  ShoppingBag: ShoppingBag,
}

export function NotificationBar() {
  const [currentNotification, setCurrentNotification] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const notifications = dashboardData.notifications

  if (!isVisible || !notifications.length) return null

  const notification = notifications[currentNotification]
  const Icon = iconMap[notification.icon as keyof typeof iconMap] || TrendingUp

  const nextNotification = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentNotification((prev) => (prev + 1) % notifications.length)
      setIsTransitioning(false)
    }, 150)
  }

  const closeNotification = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setIsVisible(false)
    }, 300)
  }

  return (
    <div className={`rounded-lg border-0 shadow-sm mb-6 bg-gradient-to-r ${notification.bgGradient} p-4 transition-all duration-300 ease-in-out ${isTransitioning ? 'opacity-50 scale-98' : 'opacity-100 scale-100'}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${notification.gradient} shadow-lg transition-transform duration-200 hover:scale-105`}>
            <Icon className="h-5 w-5 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-semibold text-gray-800 transition-colors duration-200">{notification.title}</h4>
              <Badge 
                variant="secondary" 
                className="bg-white/80 text-gray-700 border-gray-200 text-xs transition-all duration-200 hover:bg-white"
              >
                {notification.badge}
              </Badge>
            </div>
            <p className="text-sm text-gray-600 transition-colors duration-200">{notification.message}</p>
            <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          {notifications.length > 1 && (
            <button
              onClick={nextNotification}
              className="p-2 rounded-lg hover:bg-white/50 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
              disabled={isTransitioning}
            >
              <Bell className="h-4 w-4 text-gray-600" />
            </button>
          )}
          <button
            onClick={closeNotification}
            className="p-2 rounded-lg hover:bg-white/50 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
            disabled={isTransitioning}
          >
            <X className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      </div>
      
      {notifications.length > 1 && (
        <div className="flex items-center justify-center mt-3 space-x-1">
          {notifications.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ease-in-out cursor-pointer hover:scale-125 ${
                index === currentNotification ? 'bg-gray-600 scale-110' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => {
                if (index !== currentNotification) {
                  setIsTransitioning(true)
                  setTimeout(() => {
                    setCurrentNotification(index)
                    setIsTransitioning(false)
                  }, 150)
                }
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
} 