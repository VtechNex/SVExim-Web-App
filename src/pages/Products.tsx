import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Search, Filter, Star, ArrowRight, CheckCircle } from "lucide-react";

// Dialog
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";

import { Textarea } from "@/components/ui/textarea";

import pumpImage from "@/assets/product-pump.jpg";
import generatorImage from "@/assets/product-generator.jpg";
import valvesImage from "@/assets/product-valves.jpg";
import heatExchangerImage from "@/assets/product-heat-exchanger.jpg";
import propulsionImage from "@/assets/product-propulsion.jpg";
import compressorImage from "@/assets/product-compressor.jpg";

const Products = () => {
  // --------------------------
  //  QUOTE POPUP STATES
  // --------------------------
  const [openQuote, setOpenQuote] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleQuoteClick = (product) => {
    setSelectedProduct(product);
    setOpenQuote(true);
  };

  // --------------------------
  //  PRODUCT LIST
  // --------------------------
  const allProducts = [
    {
      id: 1,
      name: "Centrifugal Industrial Pump",
      category: "Industrial Pumps",
      brand: "SV Premium",
      image: pumpImage,
      specs: "Flow Rate: 500 GPM | Head: 200 ft | Material: SS316",
      rating: 4.9,
      inStock: true,
    },
    {
      id: 2,
      name: "Marine Diesel Generator Set",
      category: "Power Generation",
      brand: "SV Marine",
      image: generatorImage,
      specs: "Power: 250 KVA | RPM: 1500 | Fuel: Diesel",
      rating: 4.8,
      inStock: true,
    },
    {
      id: 3,
      name: "Industrial Ball Valve Set",
      category: "Valves & Controls",
      brand: "SV Industrial",
      image: valvesImage,
      specs: "Size: 2-12 inches | Pressure: 600 PSI | Material: SS304",
      rating: 4.7,
      inStock: true,
    },
    {
      id: 4,
      name: "Heat Exchanger Unit",
      category: "Process Equipment",
      brand: "SV Process",
      image: heatExchangerImage,
      specs: "Capacity: 500 kW | Tubes: Copper | Design: Shell & Tube",
      rating: 4.9,
      inStock: false,
    },
    {
      id: 5,
      name: "Marine Propulsion System",
      category: "Marine Equipment",
      brand: "SV Marine",
      image: propulsionImage,
      specs: "Power: 1000 HP | Shaft: Stainless Steel | Propeller: 4-blade",
      rating: 4.8,
      inStock: true,
    },
    {
      id: 6,
      name: "Industrial Air Compressor",
      category: "Compressors",
      brand: "SV Industrial",
      image: compressorImage,
      specs: "Capacity: 500 CFM | Pressure: 175 PSI | Motor: 50 HP",
      rating: 4.6,
      inStock: true,
    },
    {
      id: 7,
      name: "High-Pressure Industrial Pump",
      category: "Industrial Pumps",
      brand: "SV Premium",
      image: pumpImage,
      specs: "Flow Rate: 750 GPM | Head: 300 ft | Material: SS316",
      rating: 4.8,
      inStock: true,
    },
    {
      id: 8,
      name: "Gas Turbine Generator",
      category: "Power Generation",
      brand: "SV Marine",
      image: generatorImage,
      specs: "Power: 500 KVA | RPM: 1800 | Fuel: Natural Gas",
      rating: 4.7,
      inStock: false,
    },
    {
      id: 9,
      name: "Gate Valve Assembly",
      category: "Valves & Controls",
      brand: "SV Industrial",
      image: valvesImage,
      specs: "Size: 4-24 inches | Pressure: 800 PSI | Material: Carbon Steel",
      rating: 4.6,
      inStock: true,
    },
    {
      id: 10,
      name: "Plate Heat Exchanger",
      category: "Process Equipment",
      brand: "SV Process",
      image: heatExchangerImage,
      specs: "Capacity: 750 kW | Plates: Stainless Steel | Design: Plate & Frame",
      rating: 4.8,
      inStock: true,
    },
    {
      id: 11,
      name: "Azimuth Thruster System",
      category: "Marine Equipment",
      brand: "SV Marine",
      image: propulsionImage,
      specs: "Power: 1500 HP | Shaft: Stainless Steel | Propeller: 5-blade",
      rating: 4.9,
      inStock: true,
    },
    {
      id: 12,
      name: "Rotary Screw Compressor",
      category: "Compressors",
      brand: "SV Industrial",
      image: compressorImage,
      specs: "Capacity: 750 CFM | Pressure: 200 PSI | Motor: 75 HP",
      rating: 4.7,
      inStock: true,
    },
    {
      id: 13,
      name: "Submersible Pump System",
      category: "Industrial Pumps",
      brand: "SV Premium",
      image: pumpImage,
      specs: "Flow Rate: 300 GPM | Head: 150 ft | Material: Cast Iron",
      rating: 4.5,
      inStock: true,
    },
    {
      id: 14,
      name: "Emergency Generator Set",
      category: "Power Generation",
      brand: "SV Marine",
      image: generatorImage,
      specs: "Power: 100 KVA | RPM: 1500 | Fuel: Diesel",
      rating: 4.6,
      inStock: true,
    },
    {
      id: 15,
      name: "Control Valve Package",
      category: "Valves & Controls",
      brand: "SV Industrial",
      image: valvesImage,
      specs: "Size: 1-6 inches | Pressure: 400 PSI | Material: SS316",
      rating: 4.8,
      inStock: false,
    },
    {
      id: 16,
      name: "Spiral Heat Exchanger",
      category: "Process Equipment",
      brand: "SV Process",
      image: heatExchangerImage,
      specs: "Capacity: 300 kW | Tubes: Copper | Design: Spiral",
      rating: 4.7,
      inStock: true,
    },
    {
      id: 17,
      name: "Bow Thruster Unit",
      category: "Marine Equipment",
      brand: "SV Marine",
      image: propulsionImage,
      specs: "Power: 800 HP | Shaft: Stainless Steel | Propeller: 4-blade",
      rating: 4.8,
      inStock: true,
    },
    {
      id: 18,
      name: "Centrifugal Compressor",
      category: "Compressors",
      brand: "SV Industrial",
      image: compressorImage,
      specs: "Capacity: 1000 CFM | Pressure: 150 PSI | Motor: 100 HP",
      rating: 4.9,
      inStock: true,
    },
    {
      id: 19,
      name: "Diaphragm Pump",
      category: "Industrial Pumps",
      brand: "SV Premium",
      image: pumpImage,
      specs: "Flow Rate: 200 GPM | Head: 100 ft | Material: PVDF",
      rating: 4.4,
      inStock: true,
    },
    {
      id: 20,
      name: "Solar Generator System",
      category: "Power Generation",
      brand: "SV Marine",
      image: generatorImage,
      specs: "Power: 50 KVA | RPM: Variable | Fuel: Solar",
      rating: 4.5,
      inStock: true,
    },
    {
      id: 21,
      name: "Check Valve Series",
      category: "Valves & Controls",
      brand: "SV Industrial",
      image: valvesImage,
      specs: "Size: 0.5-4 inches | Pressure: 300 PSI | Material: Brass",
      rating: 4.6,
      inStock: true,
    },
    {
      id: 22,
      name: "Air-Cooled Heat Exchanger",
      category: "Process Equipment",
      brand: "SV Process",
      image: heatExchangerImage,
      specs: "Capacity: 400 kW | Fins: Aluminum | Design: Air Cooled",
      rating: 4.8,
      inStock: false,
    },
    {
      id: 23,
      name: "Tunnel Thruster",
      category: "Marine Equipment",
      brand: "SV Marine",
      image: propulsionImage,
      specs: "Power: 600 HP | Shaft: Stainless Steel | Propeller: 3-blade",
      rating: 4.7,
      inStock: true,
    },
    {
      id: 24,
      name: "Reciprocating Compressor",
      category: "Compressors",
      brand: "SV Industrial",
      image: compressorImage,
      specs: "Capacity: 300 CFM | Pressure: 300 PSI | Motor: 40 HP",
      rating: 4.5,
      inStock: true,
    },
    {
      id: 25,
      name: "Gear Pump Unit",
      category: "Industrial Pumps",
      brand: "SV Premium",
      image: pumpImage,
      specs: "Flow Rate: 100 GPM | Head: 250 ft | Material: Cast Steel",
      rating: 4.7,
      inStock: true,
    },
    {
      id: 26,
      name: "Wind Turbine Generator",
      category: "Power Generation",
      brand: "SV Marine",
      image: generatorImage,
      specs: "Power: 200 KVA | RPM: Variable | Fuel: Wind",
      rating: 4.6,
      inStock: true,
    },
    {
      id: 27,
      name: "Pressure Relief Valve",
      category: "Valves & Controls",
      brand: "SV Industrial",
      image: valvesImage,
      specs: "Size: 2-8 inches | Pressure: 1000 PSI | Material: Alloy Steel",
      rating: 4.9,
      inStock: true,
    },
    {
      id: 28,
      name: "Finned Tube Heat Exchanger",
      category: "Process Equipment",
      brand: "SV Process",
      image: heatExchangerImage,
      specs: "Capacity: 600 kW | Tubes: Carbon Steel | Design: Finned Tube",
      rating: 4.7,
      inStock: true,
    },
    {
      id: 29,
      name: "Controllable Pitch Propeller",
      category: "Marine Equipment",
      brand: "SV Marine",
      image: propulsionImage,
      specs: "Power: 2000 HP | Shaft: Stainless Steel | Propeller: CPP",
      rating: 4.9,
      inStock: false,
    },
    {
      id: 30,
      name: "Oil-Free Compressor",
      category: "Compressors",
      brand: "SV Industrial",
      image: compressorImage,
      specs: "Capacity: 600 CFM | Pressure: 125 PSI | Motor: 60 HP",
      rating: 4.8,
      inStock: true,
    },
  ];

  // --------------------------
  //  FILTER STATES
  // --------------------------
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all categories");
  const [selectedBrand, setSelectedBrand] = useState("all brands");
  const [visibleProducts, setVisibleProducts] = useState(8);

  const categories = [
    "All Categories",
    "Industrial Pumps",
    "Power Generation",
    "Valves & Controls",
    "Process Equipment",
    "Marine Equipment",
    "Compressors"
  ];

  const brands = [
    "All Brands",
    "SV Premium",
    "SV Marine",
    "SV Industrial",
    "SV Process"
  ];

  // Filters
  const filteredProducts = allProducts.filter((product) => {
    const matchesSearchTerm =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.specs.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all categories" ||
      product.category.toLowerCase() === selectedCategory;

    const matchesBrand =
      selectedBrand === "all brands" ||
      product.brand.toLowerCase() === selectedBrand;

    return matchesSearchTerm && matchesCategory && matchesBrand;
  });

  const productsToShow = filteredProducts.slice(0, visibleProducts);

  const loadMore = () => {
    setVisibleProducts((prev) => Math.min(prev + 8, filteredProducts.length));
  };

  useEffect(() => {
    setVisibleProducts(8);
  }, [searchTerm, selectedCategory, selectedBrand]);

  // ----------------------------------------------------
  //               UI STARTS HERE
  // ----------------------------------------------------
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Products</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive range of industrial and marine equipment
          </p>
        </div>

        {/* Search + Filters */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-3">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="flex gap-4 lg:justify-end">
            <Select
              onValueChange={(value) => setSelectedCategory(value)}
              value={selectedCategory}
            >
              <SelectTrigger className="w-full lg:w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category.toLowerCase()}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              onValueChange={(value) => setSelectedBrand(value)}
              value={selectedBrand}
            >
              <SelectTrigger className="w-full lg:w-32">
                <SelectValue placeholder="Brand" />
              </SelectTrigger>
              <SelectContent>
                {brands.map((brand) => (
                  <SelectItem key={brand} value={brand.toLowerCase()}>
                    {brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsToShow.map((product) => (
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

                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {product.brand}
                  </Badge>
                  {product.inStock ? (
                    <Badge className="bg-green-500 text-white text-xs">
                      In Stock
                    </Badge>
                  ) : (
                    <Badge variant="destructive" className="text-xs">
                      Out of Stock
                    </Badge>
                  )}
                </div>

                <div className="absolute top-3 right-3 flex items-center space-x-1 bg-white/90 rounded-full px-2 py-1">
                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                  <span className="text-xs font-medium">{product.rating}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <Badge variant="outline" className="mb-2 text-xs">
                      {product.category}
                    </Badge>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.specs}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <div className="text-sm font-medium text-primary">
                      Request Quote
                    </div>

                    {/* BLUE BUTTON FOR BOTH: Request Quote & Notify Me */}
                    <Button
                      variant="default"
                      size="sm"
                      className="group/btn"
                      disabled={!product.inStock}
                      onClick={() => handleQuoteClick(product)}
                    >
                      {product.inStock ? "Request Quote" : "Notify Me"}
                      <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          {visibleProducts < filteredProducts.length ? (
            <Button variant="outline" size="lg" onClick={loadMore}>
              Load More Products
            </Button>
          ) : (
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>No more products to load</span>
            </div>
          )}
        </div>
      </main>

      <Footer />

      {/* ----------------------------------------------------
                     REQUEST QUOTE  MODAL
      ---------------------------------------------------- */}
      <Dialog open={openQuote} onOpenChange={setOpenQuote}>
        <DialogContent className="bg-white text-black rounded-xl max-w-md w-full p-5 max-h-[80vh] overflow-y-auto border border-blue-200 shadow-xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-blue-700">
              Get a Quote
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              Fill in your details and we will contact you soon.
            </DialogDescription>
          </DialogHeader>

          <form className="space-y-4 mt-3">
            {/* Product Name */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Product</label>
              <Input
                value={selectedProduct?.name || ""}
                readOnly
                className="bg-gray-100"
              />
            </div>

            {/* Full Name */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <Input
                type="text"
                placeholder="Enter full name"
                className="border-gray-300"
              />
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                type="email"
                placeholder="example@mail.com"
                className="border-gray-300"
              />
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <Input
                type="text"
                placeholder="+91 9876543210"
                className="border-gray-300"
              />
            </div>

            {/* Message */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Message / Details
              </label>
              <Textarea
                rows={3}
                placeholder="Describe your requirements..."
                className="border-gray-300"
              />
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-base">
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Products;
