import { Link } from "react-router-dom";
import React from "react";
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react";
import { Calendar as CalendarIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import toast from "react-hot-toast";

export const description =
  "An application shell with a header and main content area. The header has a navbar, a search input and and a user nav dropdown. The user nav is toggled by a button with an avatar image.";

export function OrganizationHome() {
  const date = "2024/08/11";
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Donation Received
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45</div>
              {/* <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p> */}
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Accepted</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              {/* <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p> */}
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Rejected</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              {/* <p className="text-xs text-muted-foreground">
                +19% from last month
              </p> */}
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Your event count
              </CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              {/* <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p> */}
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Add Event</CardTitle>
                <CardDescription>Lead a Event!</CardDescription>
              </div>
              <Button asChild size="sm" className="ml-auto gap-1">
                <Link href="#">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <Card>
                <CardHeader>
                  <CardTitle></CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid w-full gap-1.5">
                    <Label htmlFor="message-2">Event Description</Label>
                    <Textarea
                      placeholder="Enter event Discription."
                      id="message-2"
                    />
                    <p className="text-sm text-muted-foreground"></p>
                  </div>
                  <div className="grid w-full gap-1.5 mt-2 mb-3">
                    <Label htmlFor="message-2">Address</Label>
                    <Input type="text" placeholder="Address" />
                  </div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[280px] justify-start text-left font-normal"
                          // !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span>Pick a date</span>
                        {/* {date ? format(date, "PPP") : <span>Pick a date</span>} */}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        // selected={date}
                        // onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </CardContent>
                <CardFooter>
                  <div className="flex  justify-between w-full">
                    <Button onClick={() => toast.success("Request Sent!")}>
                      Add
                    </Button>
                    <Link to={""}>
                      <Button variant={"destructive"}>Cancel</Button>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
              <CardTitle>Requests</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <div className="flex items-center gap-4 w-full flex-col">
                <Card className="w-full">
                  <CardHeader>
                    <div className="flex text-center">
                      <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/01.png" alt="Avatar" />
                        <AvatarFallback>SR</AvatarFallback>
                      </Avatar>
                      <CardTitle className="text-center  m-2">
                        Sandesh Rana
                      </CardTitle>
                    </div>
                    <CardDescription>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      Lorem ipsum dolor sit amet.{" "}
                    </CardDescription>
                  </CardHeader>
                  {/* <CardContent><p>Card Content</p></CardContent> */}
                  <CardFooter>
                    <div className="flex gap-2 w-full items-center justify-between px-5">
                      <Button>Accept</Button>
                      <Button variant="destructive">Reject</Button>
                    </div>
                  </CardFooter>
                </Card>
                <Card className="w-full">
                  <CardHeader>
                    <div className="flex text-center">
                      <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/01.png" alt="Avatar" />
                        <AvatarFallback>IR</AvatarFallback>
                      </Avatar>
                      <CardTitle className="text-center  m-2">
                        Instant cafe
                      </CardTitle>
                    </div>
                    <CardDescription>10 plate momo</CardDescription>
                  </CardHeader>
                  {/* <CardContent><p>Card Content</p></CardContent> */}
                  <CardFooter>
                    <div className="flex gap-2 w-full items-center justify-between px-5">
                      <Button>Accept</Button>
                      <Button variant="destructive">Reject</Button>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
