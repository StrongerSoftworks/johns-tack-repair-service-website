import Section from "@/components/Section";
import Images from "./Images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function About() {
  const items = [
    {
      title: "Saddles",
      description:
        "Repairs to Horse Harnesses, Bridles, Halters, Saddles and more.",
    },
    {
      title: "On Site Service",
      description:
        "Leather halters, British/Canadian Cavalry style bridles made on site.",
    },
    {
      title: "Custom Accessories",
      description: "Leather belts and sheaths made to your specifications.",
    },
    {
      title: "Other Horse Products",
      description:
        "Premium quality replacement horse blanket leg straps in stock.",
    },
  ];

  return (
    <Section id="about">
      <div className="flex justify-center mb-5">
        <h2 className="text-3xl font-semibold uppercase">
          Local Tack Repair and Leather Work
        </h2>
      </div>
      <div className="mb-5">
        <div className="flex flex-wrap mb-5 gap-3 justify-center">
          {items.map((item) => (
            <Card className="basis-full md:basis-2/5 min-h-48">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex flex-col justify-center mb-5">
          <Images />
        </div>
        <div className="flex justify-center text-sm">
          <p>Payment cash or E-Transfer. No Debit or Credit Cards accepted.</p>
        </div>
      </div>
    </Section>
  );
}

export default About;
