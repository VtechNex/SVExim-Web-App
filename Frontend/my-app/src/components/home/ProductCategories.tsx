
import { Cog, Zap, Anchor, Wrench, Factory, Ship } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProductCategories = () => {
  const categories = [
    {
      title: "Industrial Pumps",
      description: "Centrifugal, gear, and submersible pumps for various applications",
      icon: Cog,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Marine Engines",
      description: "High-performance diesel engines for marine vessels",
      icon: Ship,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      title: "Power Generation",
      description: "Generators, alternators, and power distribution systems",
      icon: Zap,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Marine Hardware",
      description: "Anchors, chains, winches, and deck equipment",
      icon: Anchor,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      title: "Industrial Valves",
      description: "Ball valves, gate valves, and control systems",
      icon: Wrench,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Process Equipment",
      description: "Heat exchangers, separators, and filtration systems",
      icon: Factory,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Product Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive range of industrial and marine equipment to meet all your operational needs
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-card-hover transition-all duration-300 cursor-pointer border-border/50 hover:border-primary/20"
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${category.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;