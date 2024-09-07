import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const AddDonate = () => {
  return (
    <>
      <div className="w-full h-screen bg-red-400 flex justify-center items-center">
        <Card>
          <CardHeader>
            <CardTitle>FoodCart</CardTitle>
            <CardDescription>
              Your request will be reviewed by the organization
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message-2">Food Description</Label>
              <Textarea placeholder="Type your message here." id="message-2" />
              <p className="text-sm text-muted-foreground">
                Please provide the Description of Food.
              </p>
            </div>
            <div className="grid w-full gap-1.5 mt-2">
              <Label htmlFor="message-2">Quantity</Label>
              <div className="flex items-center gap-2">
                <Plus className="h-4 w-4 " />
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="1" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 unit</SelectItem>
                    <SelectItem value="2">2 units</SelectItem>
                    <SelectItem value="5">5 units</SelectItem>
                    <SelectItem value="10">10 units</SelectItem>
                    <SelectItem value="20">20 units</SelectItem>
                  </SelectContent>
                </Select>
                <Minus className="h-4 w-4" />
              </div>

              <p className="text-sm text-muted-foreground">
                quantity description
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex  justify-between w-full">
              <Button onClick={() => toast.success("Request Sent!")}>
                Request
              </Button>
              <Link to={"/donate"}>
                <Button variant={"destructive"}>Cancel</Button>
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default AddDonate;
