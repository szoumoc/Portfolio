"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

interface AboutData {
  heading: string;
  body: string;
  image: string | null;
}

interface AppleCardsCarouselDemoProps {
  aboutData: AboutData[];
}

export function AppleCardsCarouselDemo({ aboutData }: AppleCardsCarouselDemoProps) {
  const cards = aboutData.map((item, index) => (
    <Card 
      key={`about-${index}`} 
      card={{
        src: item.image || "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: item.heading,
        category: "About",
        body: item.body,
      }} 
      index={index} 
    />
  ));

  return (
    <div className="w-full h-full justify-center items-center bg-black">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl text-white text-center font-sans">
        About Me
      </h2>
      <Carousel items={cards} />
    </div>
  );
}