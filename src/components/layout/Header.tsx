import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

// Import Dialog components
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

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
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
              <span className="text-muted-foreground">+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">info@svexim.com</span>
            </div>
          </div>
          <div className="hidden md:block text-muted-foreground">
            Serving Industrial & Marine Equipment Since 2005
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
              <h1 className="text-xl font-bold text-primary">SV Exim</h1>
              <p className="text-xs text-muted-foreground">Industrial & Marine Equipment</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
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

            {/* ➤ Desktop Get Quote Button with Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default" size="sm">
                  Get Quote
                </Button>
              </DialogTrigger>

              <DialogContent className="bg-white text-black rounded-xl max-w-md w-full p-5 border border-blue-200 shadow-xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-xl font-semibold text-blue-700">
                    Get a Quote
                  </DialogTitle>
                </DialogHeader>

                {/* FORM */}
                <form className="space-y-4 mt-3">
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter full name"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="example@mail.com"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="text"
                      className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="+91 9876543210"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                      type="text"
                      className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="City, Country"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Budget Range</label>
                    <select className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                      <option>Select budget</option>
                      <option>$1,000 - $5,000</option>
                      <option>$5,000 - $10,000</option>
                      <option>$10,000 - $50,000</option>
                      <option>$50,000+</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Message / Details</label>
                    <textarea
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Describe your requirements..."
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-base"
                  >
                    Submit
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
                  key={item.name}
                  to={item.href}
                  className={`text-base font-medium transition-colors duration-200 ${
                    isActive(item.href) ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile: Get Quote Button + Dialog */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default" size="sm" className="self-start">
                    Get Quote
                  </Button>
                </DialogTrigger>

                {/* Same form reused */}
                <DialogContent className="bg-white text-black rounded-xl max-w-md w-full p-5 border border-blue-200 shadow-xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-semibold text-blue-700">
                      Get a Quote
                    </DialogTitle>
                  </DialogHeader>

                  <form className="space-y-4 mt-3">
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">Full Name</label>
                      <input
                        type="text"
                        className="w-full h-10 px-3 border border-gray-300 rounded-lg"
                        placeholder="Enter full name"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        className="w-full h-10 px-3 border border-gray-300 rounded-lg"
                        placeholder="example@mail.com"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">Phone</label>
                      <input
                        type="text"
                        className="w-full h-10 px-3 border border-gray-300 rounded-lg"
                        placeholder="+91 9876543210"
                      />
                    </div>

                    {/* Submit */}
                    <Button className="w-full bg-blue-600 text-white py-2.5 rounded-lg">
                      Submit
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
