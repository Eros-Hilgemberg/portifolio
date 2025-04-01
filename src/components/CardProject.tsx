import { motion } from "framer-motion";

type CardProps = {
  title: string;
  description: string;
  image: string;
};
function CardProject({ title, description, image }: CardProps) {
  return (
    <motion.div
      whileInView={{ scale: [0.8, 1], opacity: [0.1, 1] }}
      transition={{ duration: 0.8 }}
      className="flex flex-col p-3 gap-2  md:gap-3 border-2 flex-1/2 h-60 md:h-80 rounded-xl md:flex-none md:w-1/4 border-gray-secundary"
    >
      <div
        className="h-2/3 rounded-xl"
        style={{
          background: `url(${image})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="flex flex-col text-sm md:text-lg rounded-sm 1/3">
        <h3 className="font-bold  uppercase text-sm md:text-lg">{title}</h3>
        <p className="">{description}</p>
      </div>
    </motion.div>
  );
}

export default CardProject;
