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
import { useTranslation } from "react-i18next";

import PRODUCTS from '@/services/products';
import QUOTES from '@/services/quotes';

const Products = () => {
  const { t } = useTranslation();
  // handled from backend data
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState(null);

  // used for filters
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [condition, setCondition] = useState("");
  const [status, setStatus] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("");

  // used for quote
  const [openQuote, setOpenQuote] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [startQuote, setStartQuote] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    budget: "",
    message: ""
  });

  const resetForm = () => {
    setForm ({
      name: "",
      email: "",
      phone: "",
      location: "",
      budget: "",
      message: ""
    })
  }

  const handleQuoteClick = (product) => {
    resetForm();
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

  const handleLoadMore = async () => {
    if (!pagination) return;

    const nextPage = pagination.page + 1;

    const response = await PRODUCTS.GET(nextPage, pagination.limit);

    if (response.status === 200) {
      setProducts(prev => [...prev, ...response.data.items]);
      setPagination(response.data.pagination);
    }
  };

  const handleApplyFilters = async () => {
    const response = await PRODUCTS.GET(1, 20, searchText, {
      category,
      brand,
      condition,
      status,
      minPrice,
      maxPrice,
      sort,
    });
    
    if (response.status !== 200) {
      alert("Failed to fetch products.");
      return;
    }

    setProducts(response.data.items);
    setPagination(response.data.pagination);
  };

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    setStartQuote(true);
    const pid = selectedProduct.id;
    const quote = { ...form, product: pid }
    const response = await QUOTES.MAKE(quote);
    if (response.status !== 201) {
      alert('Something went wrong! Try again after some time.')
      setStartQuote(false);
      return;
    }

    resetForm();
    setOpenQuote(false);
    setSelectedProduct(null);
    setStartQuote(false);
  }

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

        {/* Filters Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">

          <div className="lg:col-span-3">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="pl-10"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
          </div>

          {/* Category */}
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((c) => (
                <SelectItem key={c} value={c.toLowerCase()}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Brand */}
          <Select value={brand} onValueChange={setBrand}>
            <SelectTrigger>
              <SelectValue placeholder="Brand" />
            </SelectTrigger>
            <SelectContent>
              {brands.map((b) => (
                <SelectItem key={b} value={b.toLowerCase()}>
                  {b}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Condition */}
          <Select value={condition} onValueChange={setCondition}>
            <SelectTrigger>
              <SelectValue placeholder="Condition" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="used">Used</SelectItem>
              <SelectItem value="refurbished">Refurbished</SelectItem>
            </SelectContent>
          </Select>

          {/* Status */}
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger>
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="in-stock">In Stock</SelectItem>
              <SelectItem value="out-of-stock">Out of Stock</SelectItem>
            </SelectContent>
          </Select>

          {/* Min Price */}
          <Input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Min Price"
          />

          {/* Max Price */}
          <Input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Max Price"
          />

          {/* Sort */}
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
            </SelectContent>
          </Select>

          {/* Apply Filters Button */}
          <Button
            className="w-full sm:w-auto bg-primary text-primary-foreground"
            onClick={handleApplyFilters}
          >
            Apply Filters
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products?.map((product) => (
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
          {(pagination?.page < pagination?.totalPages) ? (
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

          <form className="space-y-4 mt-3" onSubmit={(e)=>handleQuoteSubmit(e)}>
            {/* Product Name */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Product</label>
              <Input
                value={selectedProduct?.title || ""}
                readOnly
                className="bg-gray-100"
                onChange={(e)=>setSelectedProduct({...selectedProduct, title: e.target.value})}
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
                value={form.name}
                onChange={(e)=>setForm({...form, name: e.target.value})}
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
                value={form.email}
                onChange={(e)=>setForm({...form, email: e.target.value})}
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
                value={form.phone}
                onChange={(e)=>setForm({...form, phone: e.target.value})}
              />
            </div>

            {/* Location */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                {t("quoteForm.form.location")}
              </label>
              <input
                type="text"
                className="w-full h-10 px-3 border border-gray-300 rounded-lg"
                placeholder={t("quoteForm.form.placeholders.location")}
                value={form.location}
                onChange={(e)=>setForm({...form, location: e.target.value})}
              />
            </div>

            {/* Budget */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                {t("quoteForm.form.budget")}
              </label>
              <select className="w-full h-10 px-3 border border-gray-300 rounded-lg"
                value={form.budget}
                onChange={(e)=>setForm({...form, budget: e.target.value})}>
                <option>{t("quoteForm.form.budgetOptions.select")}</option>
                <option>{t("quoteForm.form.budgetOptions.range1")}</option>
                <option>{t("quoteForm.form.budgetOptions.range2")}</option>
                <option>{t("quoteForm.form.budgetOptions.range3")}</option>
                <option>{t("quoteForm.form.budgetOptions.range4")}</option>
              </select>
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
                value={form.message}
                onChange={(e)=>setForm({...form, message: e.target.value})}
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
