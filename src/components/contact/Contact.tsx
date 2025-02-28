import Section from "../Section";

function Contact() {
  return (
    <Section id="contact">
      <div className="mb-5">
        <h2>Located in Mt. Brydges Ontario</h2>
      </div>
      <div className="mb-5 mx-3">
        <p>
          Open Tuesdays through Saturdays by appointment. Closed Sundays,
          Mondays, National/Provincial Holidays, Nov. 11th. John's Tack Repair
          Service
        </p>
      </div>
      <div className="mb-5 mx-3">21775 Adelaide Road</div>
      <div className="flex justify-center">
        <img src="/img/map2.png" height="400px" width="auto" />
      </div>
    </Section>
  );
}

export default Contact;
