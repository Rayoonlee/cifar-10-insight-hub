import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Image, Layers, Zap } from "lucide-react";

export const DatasetOverview = () => {
  const stats = [
    { label: "Total Images", value: "60,000", icon: Image, color: "text-ml-data" },
    { label: "Classes", value: "10", icon: Layers, color: "text-ml-neural" },
    { label: "Resolution", value: "32×32", icon: BarChart3, color: "text-ml-model" },
    { label: "Color Channels", value: "3 (RGB)", icon: Zap, color: "text-ml-success" },
  ];

  const classInfo = [
    { name: "Airplane", count: "6,000", color: "bg-blue-500/20 text-blue-400" },
    { name: "Automobile", count: "6,000", color: "bg-red-500/20 text-red-400" },
    { name: "Bird", count: "6,000", color: "bg-yellow-500/20 text-yellow-400" },
    { name: "Cat", count: "6,000", color: "bg-orange-500/20 text-orange-400" },
    { name: "Deer", count: "6,000", color: "bg-amber-500/20 text-amber-400" },
    { name: "Dog", count: "6,000", color: "bg-emerald-500/20 text-emerald-400" },
    { name: "Frog", count: "6,000", color: "bg-green-500/20 text-green-400" },
    { name: "Horse", count: "6,000", color: "bg-teal-500/20 text-teal-400" },
    { name: "Ship", count: "6,000", color: "bg-cyan-500/20 text-cyan-400" },
    { name: "Truck", count: "6,000", color: "bg-purple-500/20 text-purple-400" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Dataset Overview
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            CIFAR-10 is a well-established computer vision dataset consisting of 60,000 32×32 color images in 10 classes, 
            with 6,000 images per class.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Class Distribution */}
        <Card className="bg-gradient-card border-border/50 shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-foreground">
              Class Distribution
            </CardTitle>
            <p className="text-center text-muted-foreground">
              Each class contains exactly 6,000 images, ensuring balanced dataset representation
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {classInfo.map((classItem, index) => (
                <div key={index} className="text-center">
                  <Badge 
                    variant="secondary" 
                    className={`${classItem.color} border-0 mb-2 px-4 py-2 text-sm font-medium`}
                  >
                    {classItem.name}
                  </Badge>
                  <div className="text-lg font-semibold text-foreground">{classItem.count}</div>
                  <div className="text-xs text-muted-foreground">images</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};