import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Bookmark,
  CircleUser,
  Menu,
  Package2,
  Search,
  HandPlatter,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  //   const navigate = useNavigate();

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-50 ">
      <nav className="hidden flex-col gap-0 text-2xl font-bold md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 w-full justify-between p-4">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <HandPlatter className="h-6 w-6" />

          <span className="sr-only">FoodCart</span>
          <h1 className="text-md ">FoodCart</h1>
        </NavLink>

        <div className="flex gap-24 mr-20">
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` transition-colors hover:text-foreground ${
                isActive ? "text-foreground" : "text-muted-foreground"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              ` transition-colors hover:text-foreground ${
                isActive ? "text-foreground" : "text-muted-foreground"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              `  transition-colors hover:text-foreground ${
                isActive ? "text-foreground" : "text-muted-foreground"
              } `
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/donate"
            className={({ isActive }) =>
              `  transition-colors hover:text-foreground ${
                isActive ? "text-foreground" : "text-muted-foreground"
              } `
            }
          >
            Donation
          </NavLink>
        </div>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden ">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <NavLink
              to="/ "
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">FoodCart</span>
              <h1 className="text-md bg-red-500">FoodCart</h1>
            </NavLink>

            <NavLink
              to="/"
              className={({ isActive }) =>
                `  transition-colors hover:text-foreground ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                } `
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                ` transition-colors hover:text-foreground ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                ` transition-colors hover:text-foreground ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="blogs"
              className={({ isActive }) =>
                `  transition-colors hover:text-foreground ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                } `
              }
            >
              Blogs
            </NavLink>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
