import { Cog, Zap, Anchor, Wrench, Factory, Ship } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const ProductCategories = () => {
  const { t } = useTranslation();

  const categories = [
    {
      title: t("productCategories.categories.industrialPumps"),
      description: t("productCategories.descriptions.industrialPumps"),
      icon: Cog,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: t("productCategories.categories.marineEngines"),
      description: t("productCategories.descriptions.marineEngines"),
      icon: Ship,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      title: t("productCategories.categories.powerGeneration"),
      description: t("productCategories.descriptions.powerGeneration"),
      icon: Zap,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: t("productCategories.categories.marineHardware"),
      description: t("productCategories.descriptions.marineHardware"),
      icon: Anchor,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      title: t("productCategories.categories.industrialValves"),
      description: t("productCategories.descriptions.industrialValves"),
      icon: Wrench,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: t("productCategories.categories.processEquipment"),
      description: t("productCategories.descriptions.processEquipment"),
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
            {t("productCategories.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("productCategories.subtitle")}
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

                  <div
                    className={`w-16 h-16 ${category.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
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
