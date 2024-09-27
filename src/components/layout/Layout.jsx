import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import CardForm from "../organisms/CardForm";
import { X, Menu } from "lucide-react";

const Layout = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Bar */}
      <header className="fixed top-0 left-0 right-0 bg-background border-b p-4 z-20">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Logo</div>
          <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                {isDrawerOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[80%] sm:w-[385px] p-0">
              <ScrollArea className="h-full p-4">
                <CardForm />
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Desktop Drawer */}
      <div className="hidden md:block fixed left-0 top-[65px] bottom-0 w-1/2 bg-background border-r p-4 overflow-hidden">
        <ScrollArea className="h-full">
          <CardForm />
        </ScrollArea>
      </div>

      {/* Content */}
      <main className="md:ml-[50%] pt-[65px] p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;