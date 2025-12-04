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
import { Search, Filter, Star, ArrowRight, CheckCircle, Package } from "lucide-react";

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
import PRODUCTS from '@/services/products';

const Products = () => {
  // --------------------------
  //  QUOTE POPUP STATES
  // --------------------------
  const [openQuote, setOpenQuote] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState(null);

  const handleQuoteClick = (product) => {
    setSelectedProduct(product);
    setOpenQuote(true);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await PRODUCTS.GET();

      if (response.status !== 200) {
        console.error('Error while fetching products', response);
        setProducts([]);
        return;
      }

      const fetchedItems = response.data.items || [];
      const pagination = response.data.pagination;

      // Store products
      setProducts(prev => {
        const existingIds = new Set(prev.map(p => p.id));
        const uniqueNewItems = fetchedItems.filter(item => !existingIds.has(item.id));
        return [...prev, ...uniqueNewItems];
      });

      // Store pagination (if you want to use for load more)
      setPagination(pagination);
    };

    fetchProducts();
  }, []);

  // --------------------------
  //  FILTER STATES
  // --------------------------
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all categories");
  const [selectedBrand, setSelectedBrand] = useState("all brands");
  const [visibleProducts, setVisibleProducts] = useState(20);

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
  const filteredProducts = products?.filter((product) => {
    const matchesSearchTerm =
      product?.title.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
      product?.category?.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
      product?.brand?.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
      product?.specs?.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
      product?.description?.toLowerCase().includes(searchTerm.toLowerCase().trim());

    const matchesCategory =
      selectedCategory === "all categories" ||
      product?.category?.toLowerCase() === selectedCategory;

    const matchesBrand =
      selectedBrand === "all brands" ||
      product?.brand?.toLowerCase() === selectedBrand;

    return matchesSearchTerm && matchesCategory && matchesBrand;
  });

  const productsToShow = filteredProducts?.slice(0, visibleProducts);

  const handleLoadMore = async () => {
    if (!pagination) return;

    const nextPage = pagination.page + 1;

    const response = await PRODUCTS.GET(nextPage, pagination.limit);

    if (response.status === 200) {
      setProducts(prev => [...prev, ...response.data.items]);
      setPagination(response.data.pagination);
      setVisibleProducts(visibleProducts + 20);
    }
  };

  useEffect(() => {
    setVisibleProducts(20);
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
          {productsToShow?.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-card-hover transition-all duration-300 cursor-pointer overflow-hidden border-border/50 hover:border-primary/20"
            >
              <div className="relative overflow-hidden">
                {product.images ? (
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <Package className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 text-secondary" />
                  )}

                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {product.brand}
                  </Badge>
                  {product.quantity > 0 ? (
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
                      {product.title}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <div className="text-sm font-medium text-primary">
                    </div>

                    {/* BLUE BUTTON FOR BOTH: Request Quote & Notify Me */}
                    <Button
                      variant="default"
                      size="sm"
                      className="group/btn"
                      onClick={() => handleQuoteClick(product)}
                    >
                      Request Quote
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
          {(pagination.page < pagination.totalPages) ? (
            <Button variant="outline" size="lg" onClick={handleLoadMore}>
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
                value={selectedProduct?.title || ""}
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
