import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "How We Built a Scalable Product Strategy",
      excerpt:
        "Learn how our development process helps companies turn ideas into powerful digital products.",
      author: "Admin",
      date: "Jan 12, 2025",
      category: "Technology",
    },
    {
      id: 2,
      title: "The Future of Web Development",
      excerpt:
        "A detailed look at modern frameworks, performance trends, and the future of web applications.",
      author: "John Doe",
      date: "Feb 5, 2025",
      category: "Development",
    },
    {
      id: 3,
      title: "Why UI/UX Matters for Your Business",
      excerpt:
        "Discover why businesses that invest in UI/UX outperform competitors and build stronger customer trust.",
      author: "Sarah",
      date: "Mar 1, 2025",
      category: "Design",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Latest articles, insights, and updates from our team.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="hover:shadow-card-hover transition-all duration-300"
            >
              <CardContent className="p-6 space-y-4">
                {/* Category */}
                <Badge variant="outline" className="text-xs">
                  {post.category}
                </Badge>

                {/* Title */}
                <h2 className="text-xl font-semibold text-foreground">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {post.excerpt}
                </p>

                {/* Metadata */}
                <div className="flex items-center justify-between text-muted-foreground text-xs pt-2">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>

                {/* Read More */}
                <div className="pt-4 flex justify-end">
                  <a
                    href={`/blog/${post.id}`}
                    className="flex items-center text-primary hover:underline hover:opacity-75 transition"
                  >
                    Read More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
