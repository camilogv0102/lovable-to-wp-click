import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Check } from "lucide-react";

const BeforeAfter = () => {
  const beforeItems = [
    "Manually rebuilding every page",
    "Moving blocks by hand",
    "Fixing responsive layout",
    "Organizing assets",
    "Spending hours or hiring someone",
  ];

  const afterItems = [
    "Export",
    "Upload",
    "Publish",
    "Done in 5 minutes",
  ];

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            The difference is huge.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-destructive/50 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <X className="w-6 h-6 text-destructive" />
                Before
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {beforeItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/50 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Check className="w-6 h-6 text-primary" />
                After
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {afterItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
