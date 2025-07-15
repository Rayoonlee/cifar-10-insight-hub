import { Button } from "@/components/ui/button";
import { Brain, Database, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-bg overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Brain className="w-20 h-20 text-ml-neural animate-pulse" />
            <div className="absolute inset-0 bg-ml-neural/20 blur-xl rounded-full"></div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          CIFAR-10 Visual Explorer
        </h1>
        
        <h2 className="text-xl md:text-2xl font-medium mb-8 text-muted-foreground max-w-3xl mx-auto">
          Interactive Machine Learning Dataset Explorer & Model Evaluator
        </h2>
        
        <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Dive deep into the CIFAR-10 dataset with 60,000 32×32 color images across 10 distinct classes. 
          Explore data distributions, test pre-trained models, and visualize machine learning in action.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            variant="gradient" 
            size="lg" 
            className="text-lg px-8 py-6 h-auto"
          >
            <Database className="w-5 h-5 mr-2" />
            Explore Dataset
          </Button>
          <Button 
            variant="accent" 
            size="lg"
            className="text-lg px-8 py-6 h-auto"
          >
            <Zap className="w-5 h-5 mr-2" />
            Test Models
          </Button>
        </div>
        
        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="p-6 rounded-xl bg-gradient-card border border-border/50 backdrop-blur-sm">
            <Database className="w-12 h-12 text-ml-data mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">Dataset Exploration</h3>
            <p className="text-muted-foreground">Browse through 10 classes with interactive visualizations and statistics</p>
          </div>
          
          <div className="p-6 rounded-xl bg-gradient-card border border-border/50 backdrop-blur-sm">
            <Brain className="w-12 h-12 text-ml-model mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">Model Testing</h3>
            <p className="text-muted-foreground">Test pre-trained models with real-time inference and accuracy metrics</p>
          </div>
          
          <div className="p-6 rounded-xl bg-gradient-card border border-border/50 backdrop-blur-sm">
            <Zap className="w-12 h-12 text-ml-neural mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">Visual Analytics</h3>
            <p className="text-muted-foreground">Rich charts, confusion matrices, and performance visualizations</p>
          </div>
        </div>
      </div>
    </div>
  );
};