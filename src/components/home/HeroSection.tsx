import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Globe, Shield } from "lucide-react";
import heroImage from "@/assets/hero-industrial-equipment.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import productPump from "@/assets/product-pump.jpg";
import productGenerator from "@/assets/product-generator.jpg";
import productValves from "@/assets/product-valves.jpg";
import productHeatExchanger from "@/assets/product-heat-exchanger.jpg";
import productPropulsion from "@/assets/product-propulsion.jpg";
import productCompressor from "@/assets/product-compressor.jpg";

const HeroSection = () => {
  const carouselImages = [
    { src: productPump, alt: "Industrial Pumps" },
    { src: productGenerator, alt: "Power Generators" },
    { src: productValves, alt: "Industrial Valves" },
    { src: productHeatExchanger, alt: "Heat Exchangers" },
    { src: productPropulsion, alt: "Marine Propulsion" },
    { src: productCompressor, alt: "Air Compressors" },
  ];

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay Behind Content */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Industrial &{" "}
                <span className="text-primary">Marine Equipment</span>{" "}
                Excellence
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Trusted supplier of premium industrial and marine equipment serving global clients with quality, reliability, and exceptional service since 2005.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="lg"
                className="group bg-primary text-white hover:bg-primary/90 shadow-lg"
              >
                Get Quote Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                View Products
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-2 mx-auto">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">19+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-2 mx-auto">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-primary">50+</div>
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

            {/* Carousel */}
            <div className="pt-12">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 2000,
                  }),
                ]}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {carouselImages.map((image, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                      <div className="relative overflow-hidden rounded-xl shadow hover:shadow-xl transition-shadow duration-300">
                        <img src={image.src} alt={image.alt} className="w-full h-40 object-cover" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
