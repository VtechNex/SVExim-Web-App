import { useState } from "react";
import { Button } from "../ui/button";
import { ArrowRight, Award, Globe, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/hero-industrial-equipment.jpg";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-brand-light to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {t("hero.title")}
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                {t("hero.subtitle")}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="default"
                    size="lg"
                    className="group bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    {t("hero.getQuoteNow")}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </DialogTrigger>

                <DialogContent className="bg-white text-black rounded-xl max-w-md w-full p-5 border border-blue-200 shadow-xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-semibold text-blue-700">
                      {t("common.getQuote")}
                    </DialogTitle>
                  </DialogHeader>

                  <form className="space-y-4 mt-3">
                    {/* Full Name */}
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">
                        {t("contact.form.fullName")}
                      </label>
                      <input
                        type="text"
                        className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder={t("contact.form.placeholders.fullName")}
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">
                        {t("contact.form.email")}
                      </label>
                      <input
                        type="email"
                        className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder={t("contact.form.placeholders.email")}
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">
                        {t("contact.form.phone")}
                      </label>
                      <input
                        type="text"
                        className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder={t("contact.form.placeholders.phone")}
                      />
                    </div>

                    {/* Location */}
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">
                        {t("quoteForm.form.location")}
                      </label>
                      <input
                        type="text"
                        className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder={t("quoteForm.form.placeholders.location")}
                      />
                    </div>

                    {/* Budget */}
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">
                        {t("quoteForm.form.budget")}
                      </label>
                      <select className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
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
                        {t("quoteForm.form.message")}
                      </label>
                      <textarea
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder={t("quoteForm.form.placeholders.message")}
                      ></textarea>
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-base"
                    >
                      {t("common.submit")}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigate("/products")}
              >
                {t("common.viewProducts")}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-2 mx-auto">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-700">
                  20+
                </div>
                <div className="text-sm text-muted-foreground">
                  {t("hero.stats.yearsExperience")}
                </div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-2 mx-auto">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-700">
                  50+
                </div>
                <div className="text-sm text-muted-foreground">
                  {t("hero.stats.countriesServed")}
                </div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-2 mx-auto">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-700">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">
                  {t("hero.stats.qualityAssured")}
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-hero">
              <img
                src={heroImage}
                alt={t("hero.title")}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/10"></div>
            </div>

            <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-200 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-300 rounded-full blur-xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
