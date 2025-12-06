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
import { Search, Star, ArrowRight, CheckCircle, Package } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "react-i18next";

import PRODUCTS from "@/services/products";
import QUOTES from "@/services/quotes";

const Products = () => {
  const { t } = useTranslation();

  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState(null);

  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [condition, setCondition] = useState("");
  const [status, setStatus] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("");

  const [openQuote, setOpenQuote] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [submittingQuote, setSubmittingQuote] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    budget: "",
    message: ""
  });

  const resetForm = () =>
    setForm({
      name: "",
      email: "",
      phone: "",
      location: "",
      budget: "",
      message: ""
    });

  const handleQuoteClick = (product) => {
    resetForm();
    setSelectedProduct(product);
    setOpenQuote(true);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await PRODUCTS.GET();
        if (response.status === 200) {
          const items = response.data.items || [];
          const paginationData = response.data.pagination;
          setProducts((prev) => {
            const existingIds = new Set(prev.map((p) => p.id));
            const uniqueItems = items.filter((item) => !existingIds.has(item.id));
            return [...prev, ...uniqueItems];
          });
          setPagination(paginationData);
        } else {
          console.error("Error fetching products", response);
        }
      } catch (err) {
        console.error(err);
      }
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

  const brands = ["All Brands", "SV Premium", "SV Marine", "SV Industrial", "SV Process"];

  const handleLoadMore = async () => {
    if (!pagination) return;

    const nextPage = pagination.page + 1;
    const response = await PRODUCTS.GET(nextPage, pagination.limit);

    if (response.status === 200) {
      setProducts((prev) => [...prev, ...response.data.items]);
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
      sort
    });

    if (response.status === 200) {
      setProducts(response.data.items);
      setPagination(response.data.pagination);
    } else {
      alert("Failed to fetch products.");
    }
  };

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    setSubmittingQuote(true);

    try {
      const quote = { ...form, product: selectedProduct.id };
      const response = await QUOTES.MAKE(quote);

      if (response.status === 201) {
        resetForm();
        setOpenQuote(false);
        setSelectedProduct(null);
      } else {
        alert("Something went wrong, try again later.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to submit quote.");
    } finally {
      setSubmittingQuote(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold">{t("Our Products")}</h1>
          <p className="text-xl text-muted-foreground">
            {t("Comprehensive range of industrial and marine equipment")}
          </p>
        </div>

        {/* FILTERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
          <div className="lg:col-span-3 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={t("Search products...")}
              className="pl-10"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>

          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger>
              <SelectValue placeholder={t("Category")} />
            </SelectTrigger>
            <SelectContent>
              {categories.map((c) => (
                <SelectItem key={c} value={c.toLowerCase()}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={brand} onValueChange={setBrand}>
            <SelectTrigger>
              <SelectValue placeholder={t("Brand")} />
            </SelectTrigger>
            <SelectContent>
              {brands.map((b) => (
                <SelectItem key={b} value={b.toLowerCase()}>
                  {b}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={condition} onValueChange={setCondition}>
            <SelectTrigger>
              <SelectValue placeholder={t("Condition")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">{t("New")}</SelectItem>
              <SelectItem value="used">{t("Used")}</SelectItem>
              <SelectItem value="refurbished">{t("Refurbished")}</SelectItem>
            </SelectContent>
          </Select>

          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger>
              <SelectValue placeholder={t("Status")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="in-stock">{t("In Stock")}</SelectItem>
              <SelectItem value="out-of-stock">{t("Out of Stock")}</SelectItem>
            </SelectContent>
          </Select>

          <Input
            type="number"
            placeholder={t("Min Price")}
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <Input
            type="number"
            placeholder={t("Max Price")}
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />

          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger>
              <SelectValue placeholder={t("Sort By")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price-asc">{t("Price: Low to High")}</SelectItem>
              <SelectItem value="price-desc">{t("Price: High to Low")}</SelectItem>
              <SelectItem value="latest">{t("Latest")}</SelectItem>
              <SelectItem value="oldest">{t("Oldest")}</SelectItem>
            </SelectContent>
          </Select>

          <Button className="w-full" onClick={handleApplyFilters}>
            {t("Apply Filters")}
          </Button>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-card-hover transition-all duration-300 overflow-hidden border-border/50 hover:border-primary/20 min-h-[450px]"
            >
              <div className="relative overflow-hidden h-64 bg-gray-100 flex items-center justify-center">
                {product.images?.length > 0 ? (
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 ease-in-out transform hover:scale-110"
                  />
                ) : (
                  <Package className="w-20 h-20 text-secondary" />
                )}

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {product.brand}
                  </Badge>
                  {product.quantity > 0 ? (
                    <Badge className="bg-green-500 text-white text-xs">{t("In Stock")}</Badge>
                  ) : (
                    <Badge variant="destructive" className="text-xs">
                      {t("Out of Stock")}
                    </Badge>
                  )}
                </div>

                {/* Rating */}
                <div className="absolute top-3 right-3 flex items-center space-x-1 bg-white/90 rounded-full px-2 py-1">
                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                  <span className="text-xs font-medium">{product.rating}</span>
                </div>
              </div>

              <CardContent className="p-7 space-y-5">
                <Badge variant="outline" className="text-xs">
                  {product.category}
                </Badge>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>

                <Button
                  variant="default"
                  size="sm"
                  onClick={() => handleQuoteClick(product)}
                  className="group/btn"
                >
                  {t("Request Quote")}
                  <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* LOAD MORE */}
        <div className="text-center mt-12">
          {pagination?.page < pagination?.totalPages ? (
            <Button variant="outline" size="lg" onClick={handleLoadMore}>
              {t("Load More Products")}
            </Button>
          ) : (
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>{t("No more products to load")}</span>
            </div>
          )}
        </div>
      </main>

      <Footer />

      {/* QUOTE MODAL */}
      <Dialog open={openQuote} onOpenChange={setOpenQuote}>
        <DialogContent className="bg-white text-black rounded-xl max-w-md w-full p-5 max-h-[80vh] overflow-y-auto border border-blue-200 shadow-xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-blue-700">{t("Get a Quote")}</DialogTitle>
            <DialogDescription className="text-gray-600">
              {t("Fill in your details and we will contact you soon.")}
            </DialogDescription>
          </DialogHeader>

          <form className="space-y-4 mt-3" onSubmit={handleQuoteSubmit}>
            <Input value={selectedProduct?.title || ""} readOnly className="bg-gray-100" />
            <Input
              type="text"
              placeholder={t("Full Name")}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <Input
              type="email"
              placeholder="example@mail.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <Input
              type="text"
              placeholder="+91 9876543210"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <Input
              type="text"
              placeholder={t("Location")}
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
            />
            <Input
              type="text"
              placeholder={t("Budget Range")}
              value={form.budget}
              onChange={(e) => setForm({ ...form, budget: e.target.value })}
            />
            <Textarea
              rows={3}
              placeholder={t("Describe your requirements...")}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base py-2.5 rounded-lg"
              disabled={submittingQuote}
            >
              {submittingQuote ? t("Submitting...") : t("Submit")}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Products;
