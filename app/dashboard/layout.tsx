import { ReactNode } from "react";
import { SidebarNav } from "../components/sidebar/sidebar-nav";
import NavBar from "../components/navbar/navbar";
import { Toaster } from "@/components/ui/sonner";

const sidebarNavItems = [
    {
        title: "Overview",
        href: "/dashboard/overview",
    },
    {
      title: "Profile",
      href: "/dashboard/profile",
    },
    {
      title: "My Task",
      href: "/dashboard/myTask",
    },
  ]

export default function DashboardLayout({children}:{children: ReactNode}){
    return(
        <div x-data="{ sidebarOpen: true }" className="flex overflow-x-hidden h-screen">
            <div >
                <aside className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <SidebarNav items={sidebarNavItems}/>
                </aside>
            </div>

            <div className="flex-1">
                <NavBar />
                <div className="flex-1 lg:max-w-2xl">{children}</div>
                <Toaster />
            </div>
        </div>
    );
}