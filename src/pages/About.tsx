import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Users,
  Globe,
  Target,
  Eye,
  Heart,
  CheckCircle,
  Calendar
} from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  // ---- Milestones: correctly map object with sorted years ----
  const milestoneKeys = Object.keys(t("about.milestones", { returnObjects: true }))
    .sort(); // ensures order: 2005, 2008, 2012, 2016, 2020, 2024

  const milestones = milestoneKeys.map((year) =>
    t(`about.milestones.${year}`, { returnObjects: true })
  );

  // ---- Values List ----
  const values = [
    {
      title: t("about.valuesList.quality.title"),
      description: t("about.valuesList.quality.description"),
      icon: Award,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: t("about.valuesList.customer.title"),
      description: t("about.valuesList.customer.description"),
      icon: Heart,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      title: t("about.valuesList.innovation.title"),
      description: t("about.valuesList.innovation.description"),
      icon: Target,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: t("about.valuesList.integrity.title"),
      description: t("about.valuesList.integrity.description"),
      icon: CheckCircle,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("about.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("about.subtitle")}
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">{t("about.ourStory")}</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t("about.storyContent.p1")}</p>
              <p>{t("about.storyContent.p2")}</p>
              <p>{t("about.storyContent.p3")}</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Mission */}
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {t("about.mission")}
                    </h3>
                    <p className="text-muted-foreground">{t("about.missionContent")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="border-accent/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Eye className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {t("about.vision")}
                    </h3>
                    <p className="text-muted-foreground">{t("about.visionContent")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {t("about.ourJourney")}
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border"></div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <Card className="hover:shadow-card transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-2 mb-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <Badge variant="outline">{milestone.year}</Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-primary rounded-full border-4 border-background">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {t("about.values")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-card-hover transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-16 h-16 ${value.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`h-8 w-8 ${value.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
