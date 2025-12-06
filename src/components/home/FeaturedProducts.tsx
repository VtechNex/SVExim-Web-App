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

import { useTranslation } from "react-i18next";

import PRODUCTS from '@/services/products';
import QUOTES from '@/services/quotes';

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [products, setProducts] = React.useState([]);
  const [openQuote, setOpenQuote] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [startQuote, setStartQuote] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    budget: "",
    message: ""
  });

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      location: "",
      budget: "",
      message: ""
    });
  };

  React.useEffect(() => {
    const fetchProducts = async () => {
      const response = await PRODUCTS.GET(1, 6);

      if (response.status !== 200) {
        console.error('Error while fetching products', response);
        setProducts([]);
        return;
      }

      const fetchedItems = response.data.items || [];
      setProducts(fetchedItems);
    };

    fetchProducts();
  }, []);

  const handleQuoteClick = (product) => {
    resetForm();
    setSelectedProduct(product);
    setOpenQuote(true);
  };

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    setStartQuote(true);
    const pid = selectedProduct.id;
    const quote = { ...form, product: pid };
    const response = await QUOTES.MAKE(quote);

    if (response.status !== 201) {
      alert('Something went wrong! Try again later.');
      setStartQuote(false);
      return;
    }

    resetForm();
    setOpenQuote(false);
    setSelectedProduct(null);
    setStartQuote(false);
  };

  return (
    <>
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("featuredProducts.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("featuredProducts.subtitle")}
            </p>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-card-hover transition-all duration-300 cursor-pointer overflow-hidden border-border/50 hover:border-primary/20"
              >
                <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                  {product.images?.[0] ? (
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="text-gray-400 text-4xl">📦</div>
                  )}

                  {/* Rating */}
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
                        {product.title}
                      </h3>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between pt-2">
                      <div className="text-sm font-medium text-primary">
                        {product.price}
                      </div>

                      <Button
                        variant="default"
                        size="sm"
                        onClick={() => handleQuoteClick(product)}
                      >
                        {t("common.requestQuote")}
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Products */}
          <div className="text-center">
            <Button
              variant="default"
              size="lg"
              className="group"
              onClick={() => navigate("/products")}
            >
              {t("featuredProducts.viewAllProducts")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Quote Dialog */}
      <Dialog open={openQuote} onOpenChange={setOpenQuote}>
        <DialogContent className="bg-white text-black rounded-xl max-w-md w-full p-5 border border-blue-200 shadow-xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-blue-700">
              {t("quoteForm.title")}
            </DialogTitle>
          </DialogHeader>

          <form className="space-y-4 mt-3" onSubmit={(e) => handleQuoteSubmit(e)}>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                {t("quoteForm.form.product")}
              </label>
              <input
                type="text"
                value={selectedProduct?.title || ""}
                readOnly
                className="w-full h-10 px-3 border border-gray-300 rounded-lg bg-gray-100"
                disabled={startQuote}
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                {t("quoteForm.form.fullName")}
              </label>
              <input
                type="text"
                className="w-full h-10 px-3 border border-gray-300 rounded-lg"
                placeholder={t("quoteForm.form.placeholders.fullName")}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                disabled={startQuote}
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                {t("quoteForm.form.email")}
              </label>
              <input
                type="email"
                className="w-full h-10 px-3 border border-gray-300 rounded-lg"
                placeholder={t("quoteForm.form.placeholders.email")}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                disabled={startQuote}
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                {t("quoteForm.form.phone")}
              </label>
              <input
                type="text"
                className="w-full h-10 px-3 border border-gray-300 rounded-lg"
                placeholder={t("quoteForm.form.placeholders.phone")}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                disabled={startQuote}
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                {t("quoteForm.form.location")}
              </label>
              <input
                type="text"
                className="w-full h-10 px-3 border border-gray-300 rounded-lg"
                placeholder={t("quoteForm.form.placeholders.location")}
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                disabled={startQuote}
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                {t("quoteForm.form.budget")}
              </label>
              <select
                className="w-full h-10 px-3 border border-gray-300 rounded-lg"
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                disabled={startQuote}
              >
                <option>{t("quoteForm.form.budgetOptions.select")}</option>
                <option>{t("quoteForm.form.budgetOptions.range1")}</option>
                <option>{t("quoteForm.form.budgetOptions.range2")}</option>
                <option>{t("quoteForm.form.budgetOptions.range3")}</option>
                <option>{t("quoteForm.form.budgetOptions.range4")}</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                {t("quoteForm.form.message")}
              </label>
              <textarea
                disabled={startQuote}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder={t("quoteForm.form.placeholders.message")}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <Button
              disabled={startQuote}
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-base"
            >
              {t("common.submit")}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FeaturedProducts;
