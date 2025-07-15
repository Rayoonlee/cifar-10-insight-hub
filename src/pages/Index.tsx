import { Hero } from "@/components/Hero";
import { DatasetOverview } from "@/components/DatasetOverview";
import { ImageGallery } from "@/components/ImageGallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <DatasetOverview />
      <ImageGallery />
    </div>
  );
};

export default Index;
