import { Shield, Clock, Globe, Award, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t("whyChooseUs.features.quality"),
      description: t("whyChooseUs.descriptions.quality"),
      icon: Shield,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: t("whyChooseUs.features.delivery"),
      description: t("whyChooseUs.descriptions.delivery"),
      icon: Clock,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      title: t("whyChooseUs.features.global"),
      description: t("whyChooseUs.descriptions.global"),
      icon: Globe,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: t("whyChooseUs.features.expertise"),
      description: t("whyChooseUs.descriptions.expertise"),
      icon: Award,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      title: t("whyChooseUs.features.support"),
      description: t("whyChooseUs.descriptions.support"),
      icon: Headphones,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  const stats = [
    {
      number: "10000+",
      label: t("whyChooseUs.stats.productsDelivered"),
      description: t("whyChooseUs.stats.productsDelivered"),
    },
    {
      number: "100%",
      label: t("whyChooseUs.stats.positiveFeedback"),
      description: t("whyChooseUs.stats.positiveFeedback"),
    },
    {
      number: "150+",
      label: t("whyChooseUs.stats.countriesServed"),
      description: t("whyChooseUs.stats.countriesServed"),
    },
    {
      number: "10+",
      label: t("whyChooseUs.stats.yearsExperience"),
      description: t("whyChooseUs.stats.yearsExperience"),
    },
    {
      number: "3000+",
      label: t("whyChooseUs.stats.satisfiedClients"),
      description: t("whyChooseUs.stats.satisfiedClients"),
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("whyChooseUs.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("whyChooseUs.subtitle")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-card-hover transition-all duration-300 border-border/50 hover:border-primary/20"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`h-6 w-6 ${feature.color}`} />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t("whyChooseUs.trackRecord")}
            </h3>
            <p className="text-muted-foreground">
              {t("whyChooseUs.numbersSpeak")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
