import { Bell, Search, User } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card">
      <div className="flex h-16 items-center gap-4 px-6">
        <SidebarTrigger />
        
        <div className="flex-1 flex items-center gap-4 max-w-2xl">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search products, brands, RFQs..."
              className="pl-10 bg-background border-border"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5 text-foreground" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-destructive p-0 flex items-center justify-center text-xs">
              3
            </Badge>
          </Button>

          <div className="flex items-center gap-2">
            <div className="text-right">
              <div className="text-sm font-medium text-primary">Admin User</div>
              <div className="text-xs text-muted-foreground">admin@svexim.com</div>
            </div>
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-secondary text-secondary-foreground">
                <User className="h-5 w-5" />
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}
