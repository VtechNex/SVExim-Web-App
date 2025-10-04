import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Award } from "lucide-react";

const Certifications = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-primary">Certifications</h1>
          <p className="text-muted-foreground mt-1">
            Manage product certifications and compliance documents.
          </p>
        </div>
        <Button className="gap-2 bg-secondary hover:bg-secondary/90">
          <Plus className="h-4 w-4" />
          Add Certification
        </Button>
      </div>

      <Card>
        <CardContent className="flex items-center justify-center h-64">
          <div className="text-center">
            <Award className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No certifications yet. Add your first certification to get started.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Certifications;
