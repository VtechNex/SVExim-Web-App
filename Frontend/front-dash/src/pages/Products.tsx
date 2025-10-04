import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Package, Edit, Trash } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const initialProducts = [
  {
    id: 1,
    name: "Marine Diesel Engine",
    brand: "Caterpillar",
    category: "Engines",
    price: "$45,000",
    status: "New",
    statusColor: "bg-accent",
    description: "High-performance marine diesel engine for commercial use.",
  },
  {
    id: 2,
    name: "Ship Navigation System",
    brand: "Furuno",
    category: "Electronics",
    price: "$12,500",
    status: "Refurbished",
    statusColor: "bg-success",
    description: "Advanced navigation system for maritime vessels.",
  },
];

const Products = () => {
  const [products, setProducts] = useState(initialProducts);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    brand: "",
    category: "",
    price: "",
    status: "New",
    statusColor: "bg-accent",
    description: "",
  });
  const [isEditMode, setIsEditMode] = useState(false);

  const resetForm = () => {
    setFormData({
      id: null,
      name: "",
      brand: "",
      category: "",
      price: "",
      status: "New",
      statusColor: "bg-accent",
      description: "",
    });
    setIsEditMode(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = () => {
    resetForm();
    setIsDialogOpen(true);
  };

  const handleEditProduct = (product) => {
    setFormData(product);
    setIsEditMode(true);
    setIsDialogOpen(true);
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.brand ||
      !formData.category ||
      !formData.price
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    if (isEditMode) {
      setProducts(
        products.map((p) => (p.id === formData.id ? formData : p))
      );
    } else {
      const newProduct = {
        ...formData,
        id: products.length ? Math.max(...products.map((p) => p.id)) + 1 : 1,
      };
      setProducts([...products, newProduct]);
    }
    setIsDialogOpen(false);
    resetForm();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-primary">
            PRODUCTS MANAGEMENT
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage your marine and industrial product inventory
          </p>
        </div>
        <Button
          className="gap-2 bg-success hover:bg-success/90 text-success-foreground"
          onClick={handleAddProduct}
        >
          <Plus className="h-4 w-4" />
          Add Product
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card
            key={product.id}
            className="border-2 border-dashed border-border relative"
          >
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-32 w-32 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Package className="h-16 w-16 text-secondary" />
                </div>
                <div className="space-y-2 w-full">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-primary text-lg">
                      {product.name}
                    </h3>
                    <Badge className={`${product.statusColor} text-white`}>
                      {product.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {product.brand} • {product.category}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>
                  <p className="text-2xl font-bold text-secondary">
                    {product.price}
                  </p>
                </div>
                <div className="flex justify-center space-x-4 mt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditProduct(product)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {isEditMode ? "Edit Product" : "Add Product"}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="brand">Brand</Label>
              <Input
                id="brand"
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="status">Status</Label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={(e) => {
                  const status = e.target.value;
                  const statusColor =
                    status === "New" ? "bg-accent" : "bg-success";
                  setFormData((prev) => ({
                    ...prev,
                    status,
                    statusColor,
                  }));
                }}
                className="w-full border border-gray-300 rounded px-2 py-1"
              >
                <option value="New">New</option>
                <option value="Refurbished">Refurbished</option>
              </select>
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-primary text-white">
                {isEditMode ? "Update" : "Add"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Products;
