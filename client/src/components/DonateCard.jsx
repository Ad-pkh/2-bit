import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const DonateCard = () => {
  const organizations = [
    {
      name: "Nepal Food Corporation",
      description:
        "Government organization responsible for food distribution and management.",
      focusArea: "Food security, Distribution",
      img: "https://www.pexels.com/photo/man-in-white-crew-neck-t-shirt-holding-brown-cardboard-box-6646884/",
    },
    {
      name: "Maiti Nepal",
      description:
        "An NGO working to combat human trafficking and provide support to women and children.",
      focusArea: "Human rights, Rehabilitation",
      img: "https://unsplash.com/photos/XTZhOUUu0DU",
    },
    {
      name: "Himalayan Climate Initiative (HCI)",
      description:
        "An organization focusing on environmental conservation and sustainable development.",
      focusArea: "Climate change, Environmental protection",
      img: "https://unsplash.com/photos/nHdxlF-jgF8",
    },
    {
      name: "Nepal Red Cross Society",
      description:
        "A humanitarian organization providing relief during emergencies and disasters.",
      focusArea: "Disaster relief, Health services",
      img: "https://unsplash.com/photos/nHdxlF-jgF8",
    },
    {
      name: "Nepal Youth Foundation",
      description:
        "Works to provide education, health, and freedom to children in need.",
      focusArea: "Child welfare, Education, Healthcare",
      img: "https://unsplash.com/photos/nHdxlF-jgF8",
    },
    {
      name: "LEAD Nepal",
      description:
        "Focuses on leadership development, community empowerment, and policy reform.",
      focusArea: "Leadership, Empowerment",
      img: "https://unsplash.com/photos/nHdxlF-jgF8",
    },
    {
      name: "Samasource Nepal",
      description:
        "A social enterprise that connects marginalized individuals to work opportunities in technology.",
      focusArea: "Technology, Employment",
      img: "https://unsplash.com/photos/nHdxlF-jgF8",
    },

    {
      name: "Kathmandu Food Bank",
      description:
        "An initiative working to collect surplus food and distribute it to those in need.",
      focusArea: "Food security, Poverty reduction",
      img: "https://unsplash.com/photos/nHdxlF-jgF8",
    },
  ];

  return (
    <>
      {organizations.map((item, index) => {
        return (
          <Card className="w-80 mx-h-1/2" key={index}>
            <CardHeader>
              <img className="w-full" src={item.img} alt="" />
              <CardTitle>{item.name}</CardTitle>
              {/* <CardTitle>ABC organiztion</CardTitle> */}
              <CardDescription>Balkumari, Lalitpur</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                The food distribution is happening at Balkumari,lalitpur Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Nisi
                veritatis.
              </p>

              <p className="mt-4">
                <h5 className="font-light">Date: Mon 2024</h5>
                <h5 className="font-light">Time: 3:PM</h5>
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex gap-5 items-center justify-center mx-5">
                <Button>view map</Button>
                <Link to={"/adddonate"}>
                  <Button className="bg-black hover:bg-slate-600">
                    Donate
                  </Button>
                </Link>
              </div>
            </CardFooter>
          </Card>
        );
      })}
    </>
  );
};

export default DonateCard;
