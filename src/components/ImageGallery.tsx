import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Shuffle, Eye } from "lucide-react";

// Import CIFAR-10 sample images
import airplaneImg from "@/assets/cifar10-airplane.png";
import automobileImg from "@/assets/cifar10-automobile.png";
import birdImg from "@/assets/cifar10-bird.png";
import catImg from "@/assets/cifar10-cat.png";
import deerImg from "@/assets/cifar10-deer.png";
import dogImg from "@/assets/cifar10-dog.png";
import frogImg from "@/assets/cifar10-frog.png";
import horseImg from "@/assets/cifar10-horse.png";
import shipImg from "@/assets/cifar10-ship.png";
import truckImg from "@/assets/cifar10-truck.png";

const cifarClasses = [
  { 
    name: "Airplane", 
    image: airplaneImg, 
    color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    description: "Commercial and military aircraft, various angles and types"
  },
  { 
    name: "Automobile", 
    image: automobileImg, 
    color: "bg-red-500/20 text-red-400 border-red-500/30",
    description: "Cars, sedans, and passenger vehicles from multiple perspectives"
  },
  { 
    name: "Bird", 
    image: birdImg, 
    color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    description: "Various bird species in flight, perched, and in natural settings"
  },
  { 
    name: "Cat", 
    image: catImg, 
    color: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    description: "Domestic cats in different poses, breeds, and environments"
  },
  { 
    name: "Deer", 
    image: deerImg, 
    color: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    description: "Wild deer in natural habitats, various species and poses"
  },
  { 
    name: "Dog", 
    image: dogImg, 
    color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    description: "Dogs of different breeds, sizes, and in various activities"
  },
  { 
    name: "Frog", 
    image: frogImg, 
    color: "bg-green-500/20 text-green-400 border-green-500/30",
    description: "Frogs and amphibians in natural and aquatic environments"
  },
  { 
    name: "Horse", 
    image: horseImg, 
    color: "bg-teal-500/20 text-teal-400 border-teal-500/30",
    description: "Horses in fields, racing, and various equestrian activities"
  },
  { 
    name: "Ship", 
    image: shipImg, 
    color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    description: "Naval vessels, sailing boats, and maritime transportation"
  },
  { 
    name: "Truck", 
    image: truckImg, 
    color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    description: "Trucks, lorries, and commercial transportation vehicles"
  },
];

export const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % cifarClasses.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + cifarClasses.length) % cifarClasses.length);
  };

  const randomImage = () => {
    const randomIndex = Math.floor(Math.random() * cifarClasses.length);
    setCurrentIndex(randomIndex);
  };

  const currentClass = cifarClasses[currentIndex];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Interactive Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore sample images from each of the 10 CIFAR-10 classes. Each image represents the typical characteristics 
            and variations found within that category.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Image Display */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Sample Image
                  </CardTitle>
                  <Badge className={`${currentClass.color} border`}>
                    Class {currentIndex}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-muted/50 to-muted rounded-lg p-8 mb-6">
                    <img 
                      src={currentClass.image} 
                      alt={currentClass.name}
                      className="w-full h-full object-contain rounded-lg shadow-lg"
                    />
                  </div>
                  
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-bold text-foreground mb-2">
                      {currentClass.name}
                    </h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      {currentClass.description}
                    </p>
                  </div>

                  <div className="flex justify-center gap-3">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      onClick={prevImage}
                      className="hover:shadow-glow"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button 
                      variant="accent" 
                      size="lg" 
                      onClick={randomImage}
                      className="px-6"
                    >
                      <Shuffle className="w-5 h-5 mr-2" />
                      Random
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      onClick={nextImage}
                      className="hover:shadow-glow"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Class List */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground flex items-center">
                  <Eye className="w-5 h-5 mr-2 text-ml-data" />
                  All Classes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {cifarClasses.map((classItem, index) => (
                    <div 
                      key={index}
                      className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 hover:shadow-md ${
                        index === currentIndex 
                          ? `${classItem.color} border-current shadow-md` 
                          : 'border-border/50 hover:border-border'
                      }`}
                      onClick={() => setCurrentIndex(index)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <img 
                            src={classItem.image} 
                            alt={classItem.name}
                            className="w-8 h-8 rounded object-cover"
                          />
                          <span className="font-medium text-foreground">
                            {classItem.name}
                          </span>
                        </div>
                        <Badge 
                          variant="secondary" 
                          className="text-xs"
                        >
                          {index}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};