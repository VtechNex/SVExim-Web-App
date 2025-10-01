import { Button } from "../ui/button";
import { ArrowRight, Award, Globe, Shield } from "lucide-react";
import heroImage from "../../assets/hero-industrial-equipment.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-brand-light to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Industrial &{" "}
                <span className="text-primary">Marine Equipment</span>{" "}
                Excellence
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Trusted supplier of premium industrial and marine equipment serving global clients with quality, reliability, and exceptional service since 2005.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" className="group">
                Get Quote Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="secondary" size="lg">
                View Products
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-2 mx-auto">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-2 mx-auto">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-2 mx-auto">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Quality Assured</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-hero">
              <img
                src={heroImage}
                alt="Industrial and Marine Equipment"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/10"></div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;