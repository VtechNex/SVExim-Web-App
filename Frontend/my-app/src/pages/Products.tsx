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
import { Search, Filter, Star, ArrowRight } from "lucide-react";

 
 import pumpImage from "@/assets/product-pump.jpg";
 import generatorImage from "@/assets/product-generator.jpg";
 import valvesImage from "@/assets/product-valves.jpg";
 import heatExchangerImage from "@/assets/product-heat-exchanger.jpg";
 import propulsionImage from "@/assets/product-propulsion.jpg";
 import compressorImage from "@/assets/product-compressor.jpg";

const Products = () => {
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
  ];

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

        {/* Search and Filters */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-3">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search products..." 
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex gap-4 lg:justify-end">
            <Select>
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
            <Select>
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

        {/* Results Summary */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-border">
          <p className="text-muted-foreground">
            Showing {allProducts.length} products
          </p>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProducts.map((product) => (
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
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
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="group/btn"
                      disabled={!product.inStock}
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
          <Button variant="outline" size="lg">
            Load More Products
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
