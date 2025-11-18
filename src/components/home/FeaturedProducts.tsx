import * as React from "react";
import { Star, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import pumpImage from "@/assets/product-pump.jpg";
import generatorImage from "@/assets/product-generator.jpg";
import valvesImage from "@/assets/product-valves.jpg";
import heatExchangerImage from "@/assets/product-heat-exchanger.jpg";
import propulsionImage from "@/assets/product-propulsion.jpg";
import compressorImage from "@/assets/product-compressor.jpg";

const FeaturedProducts = () => {
  const navigate = useNavigate();

  // 👉 Dialog + selected product state
  const [showQuoteForm, setShowQuoteForm] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  // 👉 When request quote clicked
  const handleQuoteClick = (product) => {
    setSelectedProduct(product);
    setShowQuoteForm(true);
  };

  const products = [
    {
      id: 1,
      name: "Centrifugal Industrial Pump",
      category: "Industrial Pumps",
      image: pumpImage,
      specs: "Flow Rate: 500 GPM | Head: 200 ft | Material: SS316",
      price: "Request Quote",
      featured: true,
      rating: 4.9,
    },
    {
      id: 2,
      name: "Marine Diesel Generator Set",
      category: "Power Generation",
      image: generatorImage,
      specs: "Power: 250 KVA | RPM: 1500 | Fuel: Diesel",
      price: "Request Quote",
      featured: true,
      rating: 4.8,
    },
    {
      id: 3,
      name: "Industrial Ball Valve Set",
      category: "Valves & Controls",
      image: valvesImage,
      specs: "Size: 2-12 inches | Pressure: 600 PSI | Material: SS304",
      price: "Request Quote",
      featured: false,
      rating: 4.7,
    },
    {
      id: 4,
      name: "Heat Exchanger Unit",
      category: "Process Equipment",
      image: heatExchangerImage,
      specs: "Capacity: 500 kW | Tubes: Copper | Design: Shell & Tube",
      price: "Request Quote",
      featured: true,
      rating: 4.9,
    },
    {
      id: 5,
      name: "Marine Propulsion System",
      category: "Marine Equipment",
      image: propulsionImage,
      specs: "Power: 1000 HP | Shaft: Stainless Steel | Propeller: 4-blade",
      price: "Request Quote",
      featured: false,
      rating: 4.8,
    },
    {
      id: 6,
      name: "Industrial Air Compressor",
      category: "Compressors",
      image: compressorImage,
      specs: "Capacity: 500 CFM | Pressure: 175 PSI | Motor: 50 HP",
      price: "Request Quote",
      featured: false,
      rating: 4.6,
    },
  ];

  return (
    <>
      {/* ⭐ Main Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our best-selling industrial and marine equipment, trusted by clients worldwide
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-card-hover transition-all duration-300 cursor-pointer overflow-hidden border-border/50 hover:border-primary/20"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.featured && (
                    <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute top-3 right-3 flex items-center space-x-1 bg-white/90 rounded-full px-2 py-1">
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-medium">{product.rating}</span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {product.category}
                      </Badge>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      {product.specs}
                    </p>

                    <div className="flex items-center justify-between pt-2">
                      <div className="text-sm font-medium text-primary">
                        {product.price}
                      </div>

                      {/* 👉 Request Quote button */}
                      <Button
                        variant="default"
                        size="sm"
                        onClick={() => handleQuoteClick(product)}
                      >
                        Request Quote
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Button
              variant="default"
              size="lg"
              className="group"
              onClick={() => navigate("/products")}
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* ⭐ QUOTE FORM DIALOG */}
      <Dialog open={showQuoteForm} onOpenChange={setShowQuoteForm}>
        <DialogContent
          className="
            bg-white text-black rounded-xl 
            max-w-md w-full 
            p-5 border border-blue-200 shadow-xl
            max-h-[80vh]
            overflow-y-auto
          "
        >
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-blue-700">
              Get a Quote
            </DialogTitle>
          </DialogHeader>

          <form className="space-y-4 mt-3">
            {/* Product Name (auto-filled) */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Product</label>
              <input
                type="text"
                value={selectedProduct?.name || ""}
                readOnly
                className="w-full h-10 px-3 border border-gray-300 rounded-lg bg-gray-100"
              />
            </div>

            {/* Full Name */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                className="w-full h-10 px-3 border border-gray-300 rounded-lg"
                placeholder="Enter full name"
              />
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full h-10 px-3 border border-gray-300 rounded-lg"
                placeholder="example@mail.com"
              />
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Phone</label>
              <input
                type="text"
                className="w-full h-10 px-3 border border-gray-300 rounded-lg"
                placeholder="+91 9876543210"
              />
            </div>

            {/* Location */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                className="w-full h-10 px-3 border border-gray-300 rounded-lg"
                placeholder="City, Country"
              />
            </div>

            {/* Budget */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Budget Range</label>
              <select className="w-full h-10 px-3 border border-gray-300 rounded-lg">
                <option>Select budget</option>
                <option>$1,000 - $5,000</option>
                <option>$5,000 - $10,000</option>
                <option>$10,000 - $50,000</option>
                <option>$50,000+</option>
              </select>
            </div>

            {/* Message */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Message / Details</label>
              <textarea
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="Describe your requirements..."
              ></textarea>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-base"
            >
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FeaturedProducts;
