import { motion } from "framer-motion"

type CardProps = {
    title: string;
    description: string;
    image: string;
}

function Card({ title, description, image }: CardProps) {
    return (
        <motion.div
            whileInView={{ scale: [0.8, 1], opacity: [0.1, 1], }}
            transition={{ duration: 0.8 }} className="md:px-8">
            < div className="grid grid-cols-5 gap-3 md:grid-cols-8">
                <div className="col-span-1 flex items-center">
                    <img className="flex flex-1" src={image} alt="Logo java script" />
                </div>
                <div className="col-span-4 md:col-span-6 md:col-start-3 flex flex-col text-base md:text-lg bg-black-secundary border-2 border-gray-primary rounded-sm p-4 gap-2 md:p-6">
                    <h3 className="font-bold text-center text-lg md:text-xl md:text-start">{title}</h3>
                    <p className="text-justify">{description}</p>
                </div>
            </div >
        </motion.div>

    )
}

export default Card