import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar";
import List from "@/components/List";

const Electronics = () => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">Electronics</h1>
                <div className="space-y-4">
                    <List />
                    <List />
                    <List />
                    <List />
                </div>
            </div>
        </SidebarProvider>
    )
}

export default Electronics;