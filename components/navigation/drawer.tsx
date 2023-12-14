import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import React, { FC } from "react";

interface NavigationDrawerProps {
  component: React.ReactNode;
}

const NavigationDrawer: FC<NavigationDrawerProps> = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  return (
    <Sheet onOpenChange={setDrawerOpen} open={drawerOpen}>
      <SheetTrigger className="lg:hidden" asChild>
        <Button
          onClick={() => setDrawerOpen(!drawerOpen)}
          variant={"ghost"}
          size="icon"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="lg:hidden" side={"left"}>
        {props.component}
      </SheetContent>
    </Sheet>
  );
};

export default NavigationDrawer;
