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

const About = () => {
  const milestones = [
    { year: "2005", title: "Company Founded", description: "Started as a small industrial equipment supplier in Bhavnagar" },
    { year: "2008", title: "Marine Division", description: "Expanded into marine equipment and offshore solutions" },
    { year: "2012", title: "International Expansion", description: "Started serving clients in Middle East and Southeast Asia" },
    { year: "2016", title: "Service Division Launch", description: "Introduced dedicated maintenance, repair, and on-site inspection services" },
    { year: "2020", title: "Digital Transformation", description: "Launched online platform and digital customer service" },
    { year: "2024", title: "Global Reach", description: "Now serving 50+ countries with 5000+ successful deliveries" },
  ];

  const values = [
    {
      title: "Quality First",
      description: "Every product undergoes rigorous testing and meets international standards",
      icon: Award,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Customer Focus",
      description: "Building long-term relationships through exceptional service and support",
      icon: Heart,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      title: "Innovation",
      description: "Continuously adopting new technologies and improving our processes",
      icon: Target,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Integrity",
      description: "Transparent business practices and honest communication with all stakeholders",
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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About SV Exim</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For nearly two decades, we've been the trusted partner for industrial and marine equipment,
            serving clients worldwide with unwavering commitment to quality and excellence.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2005 in the industrial hub of Bhavnagar, Gujarat, SV Exim began as a vision to provide
                high-quality industrial equipment to the growing manufacturing sector in India. What started as a
                small operation has grown into a globally recognized supplier of industrial and marine equipment.
              </p>
              <p>
                Our journey has been marked by continuous growth, strategic expansion, and an unwavering commitment
                to customer satisfaction. Today, we serve clients across 50+ countries, from small-scale operations
                to large multinational corporations.
              </p>
              <p>
                With over 5000 successful deliveries and a customer satisfaction rate of 99.8%, we've built our
                reputation on quality products, reliable service, and technical expertise that our clients can depend on.
              </p>
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
                    <h3 className="text-lg font-semibold text-foreground mb-2">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To provide world-class industrial and marine equipment solutions that enable our
                      clients to achieve operational excellence and sustainable growth.
                    </p>
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
                    <h3 className="text-lg font-semibold text-foreground mb-2">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To be the global leader in industrial and marine equipment supply, known for
                      innovation, reliability, and exceptional customer partnerships.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="hover:shadow-card transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-2 mb-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <Badge variant="outline">{milestone.year}</Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground text-sm">{milestone.description}</p>
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

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-card-hover transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 ${value.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-8 w-8 ${value.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
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
