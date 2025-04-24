
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const carouselData = [
  {
    id: 1,
    title: "Capture Moments",
    description: "Find the perfect shot for your next project",
    image: "/lovable-uploads/39b20d03-6422-4530-987a-dcf74b4bdeb4.png"
  },
  {
    id: 2,
    title: "Professional Quality",
    description: "High resolution images for your needs",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b"
  },
  {
    id: 3,
    title: "Diverse Collection",
    description: "From nature to technology, find what you need",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716"
  }
];

const HeroCarousel = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-8">
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {carouselData.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <div className="px-4">
                    <h2 className="text-4xl font-bold text-white mb-4 neon-text">{slide.title}</h2>
                    <p className="text-xl text-white/80">{slide.description}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
