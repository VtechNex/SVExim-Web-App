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

const HeroSection = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-brand-light to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Industrial &{" "}
                <span className="text-primary">Marine Equipment</span>{" "}
                Excellence
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Trusted supplier of premium industrial and marine equipment
                serving global clients with quality, reliability, and exceptional
                service since 2005.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Open Form Popup */}
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="default"
                    size="lg"
                    className="group bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Get Quote Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </DialogTrigger>

                {/* Popup Form */}
                <DialogContent
                  className="
    bg-white text-black rounded-xl 
    max-w-md w-full 
    p-5 border border-blue-200 shadow-xl

    max-h-[80vh]  /* LIMIT HEIGHT */
    overflow-y-auto  /* ENABLE SCROLL IF CONTENT TOO BIG */
  "
                >
                  <DialogHeader>
                    <DialogTitle className="text-xl font-semibold text-blue-700">
                      Get a Quote
                    </DialogTitle>
                  </DialogHeader>

                  <form className="space-y-4 mt-3">
                    {/* Full Name */}
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter full name"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="example@mail.com"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Phone
                      </label>
                      <input
                        type="text"
                        className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="+91 9876543210"
                      />
                    </div>

                    {/* Location */}
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Location
                      </label>
                      <input
                        type="text"
                        className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="City, Country"
                      />
                    </div>

                    {/* Budget */}
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Budget Range
                      </label>
                      <select className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                        <option>Select budget</option>
                        <option>$1,000 - $5,000</option>
                        <option>$5,000 - $10,000</option>
                        <option>$10,000 - $50,000</option>
                        <option>$50,000+</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Message / Details
                      </label>
                      <textarea
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Describe your requirements..."
                      ></textarea>
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-base"
                    >
                      Submit
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>

              {/* Other Button */}
              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigate("/products")}
              >
                View Products
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-2 mx-auto">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-700">10+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-2 mx-auto">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-700">150+</div>
                <div className="text-sm text-muted-foreground">
                  Countries Served
                </div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-2 mx-auto">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-700">100%</div>
                <div className="text-sm text-muted-foreground">
                  Quality Assured
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-hero">
              <img
                src={heroImage}
                alt="Industrial and Marine Equipment"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/10"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-200 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-300 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
