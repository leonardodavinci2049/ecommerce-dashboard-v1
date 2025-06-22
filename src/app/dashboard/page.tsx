import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from '@/components/dashboard/dashboard-sidebar';
import { DashboardOverview } from "@/components/dashboard/dashboard-overview";

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />
        <main className="from-background via-background to-muted/20 w-full min-w-0 flex-1 overflow-x-hidden bg-gradient-to-br p-3 sm:p-4 lg:p-6">
          <DashboardOverview />
        </main>
      </div>
    </SidebarProvider>
  );
}
