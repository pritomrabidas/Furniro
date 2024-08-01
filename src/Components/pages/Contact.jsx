import Banner from "../Contact/Banner";
import ContactDetails from "../Contact/ContactDetails";
import ContactHeading from "../Contact/ContactHeading";

const Contact = () => {
  return (
    <section>
      <Banner/>
      <div className="container m-auto">
        <ContactHeading/>
        <ContactDetails/>
      </div>
    </section>
  );
};

export default Contact;
