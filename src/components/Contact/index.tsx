import { CalendarDays, MapPinned, Phone } from "lucide-react";
import Section from "../Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Contact() {
  return (
    <Section className="flex flex-wrap mb-5 gap-3 justify-center">
      <Card id="hours" className="basis-full md:basis-2/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarDays className="inline" /> Hours
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <p>Open Tuesdays through Saturdays by appointment.</p>
          <p>
            Closed Sundays, Mondays, National/Provincial Holidays, Nov. 11th.
          </p>
        </CardContent>
      </Card>

      <Card id="contact" className="basis-full md:basis-2/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="inline" /> Contact
          </CardTitle>
        </CardHeader>
        <CardContent>
          Phone: <a href="tel:(226)-998-3025">(226)-998-3025</a>
        </CardContent>
      </Card>

      <Card id="location" className="basis-full md:basis-3/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPinned className="inline" /> Location
          </CardTitle>
          <CardDescription>Located in Mt. Brydges Ontario</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3 justify-center">
            21775 Adelaide Road, Mt. Brydges, ON, N0L 1W0
            <img src="/img/map2.png" height="400px" width="auto" />
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}

export default Contact;
