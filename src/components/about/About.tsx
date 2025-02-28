import Section from "@/components/Section";
import Images from "./Images";

function About() {
  return (
    <Section id="about">
      <div className="mb-5">
        <h2>Local Tack Repair and Leather Work</h2>
      </div>
      <div className="mb-5 mx-3">
        <ul className="flex flex-col gap-3 mb-5">
          <li>
            Repairs to Horse Harnesses, Bridles, Halters, Saddles and more.
          </li>
          <li>
            Leather halters, British/Canadian Cavalry style bridles made on
            site.
          </li>
          <li>Leather belts and sheaths made to your specifications.</li>
          <li>
            Premium quality replacement horse blanket leg straps in stock.
          </li>
        </ul>
        <div className="mb-5">
          <Images />
        </div>
        <div>
          <p>Payment cash or E-Transfer. No Debit or Credit Cards accepted.</p>
        </div>
      </div>
    </Section>
  );
}

export default About;
