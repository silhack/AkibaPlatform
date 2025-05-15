import { services } from "../../data/data";
import CardService from "./CardService";

const SectionService = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-16 bg-white">
      <h2 className="text-normal-orange text-center text-lg font-bold md:text-2xl uppercase">
        Découvrez les prestations que nous offrons à nos clients.
      </h2>
      <div className="flex flex-col gap-6">
        {services.map((service, index) => (
          <CardService key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default SectionService;
