import { ServiceCard } from "../components";
import { services } from "../constants";

const Services = () => {
  return (
    <section className="flex flex-wrap justify-center gap-9 max-container">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
