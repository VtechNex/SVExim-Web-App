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

import pumpImage from "@/assets/product-pump.jpg";
import generatorImage from "@/assets/product-generator.jpg";
import valvesImage from "@/assets/product-valves.jpg";
import heatExchangerImage from "@/assets/product-heat-exchanger.jpg";
import propulsionImage from "@/assets/product-propulsion.jpg";
import compressorImage from "@/assets/product-compressor.jpg";

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [showQuoteForm, setShowQuoteForm] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const handleQuoteClick = (product) => {
    setSelectedProduct(product);
    setShowQuoteForm(true);
  };

  // Product data mapped to translation keys
  const products = [
    {
      id: 1,
      name: t("featuredProducts.products.centrifugalPump"),
      category: t("featuredProducts.categories.industrialPumps"),
      image: pumpImage,
      specs: "Flow Rate: 500 GPM | Head: 200 ft | Material: SS316",
      price: t("common.requestQuote"),
      featured: true,
      rating: 4.9,
    },
    {
      id: 2,
      name: t("featuredProducts.products.marineGenerator"),
      category: t("featuredProducts.categories.powerGeneration"),
      image: generatorImage,
      specs: "Power: 250 KVA | RPM: 1500 | Fuel: Diesel",
      price: t("common.requestQuote"),
      featured: true,
      rating: 4.8,
    },
    {
      id: 3,
      name: t("featuredProducts.products.ballValves"),
      category: t("featuredProducts.categories.valvesControls"),
      image: valvesImage,
      specs: "Size: 2-12 inches | Pressure: 600 PSI | Material: SS304",
      price: t("common.requestQuote"),
      featured: false,
      rating: 4.7,
    },
    {
      id: 4,
      name: t("featuredProducts.products.heatExchanger"),
      category: t("featuredProducts.categories.processEquipment"),
      image: heatExchangerImage,
      specs: "Capacity: 500 kW | Tubes: Copper | Design: Shell & Tube",
      price: t("common.requestQuote"),
      featured: true,
      rating: 4.9,
    },
    {
      id: 5,
      name: t("featuredProducts.products.propulsionSystem"),
      category: t("featuredProducts.categories.marineEquipment"),
      image: propulsionImage,
      specs: "Power: 1000 HP | Shaft: Stainless Steel | Propeller: 4-blade",
      price: t("common.requestQuote"),
      featured: false,
      rating: 4.8,
    },
    {
      id: 6,
      name: t("featuredProducts.products.airCompressor"),
      category: t("featuredProducts.categories.compressors"),
      image: compressorImage,
      specs: "Capacity: 500 CFM | Pressure: 175 PSI | Motor: 50 HP",
      price: t("common.requestQuote"),
      featured: false,
      rating: 4.6,
    },
  ];

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
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {product.featured && (
                    <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                      {t("common.inStock")}
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
      <Dialog open={showQuoteForm} onOpenChange={setShowQuoteForm}>
        <DialogContent className="bg-white text-black rounded-xl max-w-md w-full p-5 border border-blue-200 shadow-xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-blue-700">
              {t("quoteForm.title")}
            </DialogTitle>
          </DialogHeader>

          <form className="space-y-4 mt-3">
            {/* Product */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                {t("quoteForm.form.product")}
              </label>
              <input
                type="text"
                value={selectedProduct?.name || ""}
                readOnly
                className="w-full h-10 px-3 border border-gray-300 rounded-lg bg-gray-100"
              />
            </div>

            {/* Full Name */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                {t("quoteForm.form.fullName")}
              </label>
              <input
                type="text"
                className="w-full h-10 px-3 border border-gray-300 rounded-lg"
                placeholder={t("quoteForm.form.placeholders.fullName")}
              />
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                {t("quoteForm.form.email")}
              </label>
              <input
                type="email"
                className="w-full h-10 px-3 border border-gray-300 rounded-lg"
                placeholder={t("quoteForm.form.placeholders.email")}
              />
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                {t("quoteForm.form.phone")}
              </label>
              <input
                type="text"
                className="w-full h-10 px-3 border border-gray-300 rounded-lg"
                placeholder={t("quoteForm.form.placeholders.phone")}
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
              />
            </div>

            {/* Budget */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                {t("quoteForm.form.budget")}
              </label>
              <select className="w-full h-10 px-3 border border-gray-300 rounded-lg">
                <option>{t("quoteForm.form.budgetOptions.select")}</option>
                <option>{t("quoteForm.form.budgetOptions.range1")}</option>
                <option>{t("quoteForm.form.budgetOptions.range2")}</option>
                <option>{t("quoteForm.form.budgetOptions.range3")}</option>
                <option>{t("quoteForm.form.budgetOptions.range4")}</option>
              </select>
            </div>

            {/* Message */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                {t("quoteForm.form.message")}
              </label>
              <textarea
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder={t("quoteForm.form.placeholders.message")}
              ></textarea>
            </div>

            {/* Submit */}
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-base">
              {t("common.submit")}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FeaturedProducts;
