import { CalendarDays, MapPin, MapPinned, Phone } from "lucide-react";
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
    <Section id="contact" className="flex flex-wrap mb-5 gap-3 justify-center">
      <Card className="basis-full md:basis-2/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarDays className="inline" /> Hours
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Open <u>Tuesdays through Saturdays by appointment</u>. Closed
            Sundays, Mondays, National/Provincial Holidays, Nov. 11th.
          </p>
        </CardContent>
      </Card>

      <Card className="basis-full md:basis-2/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="inline" /> Contact
          </CardTitle>
        </CardHeader>
        <CardContent>
          Phone: <a href="tel:(226)-998-3025">(226)-998-3025</a>
        </CardContent>
      </Card>

      <Card className="basis-full md:basis-3/5">
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

      <div className="mb-5">
        <h2></h2>
      </div>
      <div className="mb-5 mx-3">
        <p></p>
      </div>
    </Section>
  );
}

export default Contact;
