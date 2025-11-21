import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

// Dialog Components
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navigation = [
    { name: t("header.navigation.home"), href: "/" },
    { name: t("header.navigation.products"), href: "/products" },
    { name: t("header.navigation.about"), href: "/about" },
    { name: t("header.navigation.contact"), href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-brand-light py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">
                {t("header.contactInfo.phone")}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">
                {t("header.contactInfo.email")}
              </span>
            </div>
          </div>
          <div className="hidden md:block text-muted-foreground">
            {t("header.contactInfo.servingSince")}
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">SV</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">
                {t("common.companyName")}
              </h1>
              <p className="text-xs text-muted-foreground">
                {t("common.companyTagline")}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Desktop Get Quote */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default" size="sm">
                  {t("common.getQuote")}
                </Button>
              </DialogTrigger>

              <DialogContent className="bg-white text-black rounded-xl max-w-md w-full p-5 border border-blue-200 shadow-xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-xl font-semibold text-blue-700">
                    {t("quoteForm.title")}
                  </DialogTitle>
                </DialogHeader>

                {/* FORM */}
                <form className="space-y-4 mt-3">

                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
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
                    <label className="block text-sm font-medium text-gray-700">
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
                    <label className="block text-sm font-medium text-gray-700">
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
                    <label className="block text-sm font-medium text-gray-700">
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
                    <label className="block text-sm font-medium text-gray-700">
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
                    <label className="block text-sm font-medium text-gray-700">
                      {t("quoteForm.form.message")}
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      placeholder={t("quoteForm.form.placeholders.message")}
                    ></textarea>
                  </div>

                  <Button className="w-full bg-blue-600 text-white py-2.5 rounded-lg">
                    {t("common.submit")}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-muted"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-base font-medium transition-colors duration-200 ${
                    isActive(item.href) ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Get Quote */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default" size="sm" className="self-start">
                    {t("common.getQuote")}
                  </Button>
                </DialogTrigger>

                <DialogContent className="bg-white text-black rounded-xl max-w-md w-full p-5 border border-blue-200 shadow-xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-semibold text-blue-700">
                      {t("quoteForm.title")}
                    </DialogTitle>
                  </DialogHeader>

                  <form className="space-y-4 mt-3">
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">
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
                      <label className="block text-sm font-medium text-gray-700">
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
                      <label className="block text-sm font-medium text-gray-700">
                        {t("quoteForm.form.phone")}
                      </label>
                      <input
                        type="text"
                        className="w-full h-10 px-3 border border-gray-300 rounded-lg"
                        placeholder={t("quoteForm.form.placeholders.phone")}
                      />
                    </div>

                    <Button className="w-full bg-blue-600 text-white py-2.5 rounded-lg">
                      {t("common.submit")}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
