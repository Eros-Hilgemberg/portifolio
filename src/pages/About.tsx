import { Link } from "react-router-dom"
import Card from "../components/Card"
import { motion } from "framer-motion"

const cards = [
    {
        title: "Java Script",
        description: "Linguagem essencial para desenvolvimento web, criando interatividade e funcionalidades dinâmicas em front-end e back-end.",
        image: "/logos/js.png"
    },
    {
        title: "React.js",
        description: "Biblioteca JavaScript para construção de interfaces de usuário dinâmicas e eficientes, com foco em componentes reutilizáveis.",
        image: "/logos/react.svg"
    },
    {
        title: "TypeScript",
        description: "Superset do JavaScript que adiciona tipagem estática, garantindo maior segurança e escalabilidade no código.",
        image: "/logos/ts.svg"

    },
    {
        title: "Tailwind CSS",
        description: "Um framework CSS utilitário repleto de classes que podem ser compostas para construir qualquer design, diretamente em sua marcação.",
        image: "/logos/tailwindcss.svg"
    },
    {
        title: "PHP",
        description: "Uma linguagem de script popular de uso geral que é especialmente adequada para desenvolvimento web. Rápido, flexível e pragmático.",
        image: "/logos/php.svg"
    },
    {
        title: "laravel",
        description: "Um framework PHP com um ecossistema robusto, o Laravel tem soluções elegantes para os recursos comuns necessários a todos os aplicativos da web modernos.",
        image: "/logos/laravel.svg"
    }
]
function About() {


    return (
        <div className="flex-1 flex flex-col px-7 pb-7 md:mx-28 text-white ">
            <div className="md:flex md:flex-row md:justify-between bg-gradient-to-b to-black-primary from-gray-primary rounded-xl p-8">
                <div className="flex flex-col  md:w-1/2 ">
                    <div><h1 className="font-bold text-2xl md:text-4xl mb-6 md:mb-0">Sobre</h1></div>
                    <motion.div
                        animate={{ scale: [0.8, 1], opacity: [0.1, 1], }}
                        transition={{ duration: 0.8 }}

                        className="flex-1 flex flex-col gap-6 md:pt-14 md:pb-24 md:text-lg">
                        <div className="flex flex-1 bg-black-secundary border-2 border-gray-primary rounded-sm p-3 text-justify justify-center items-center md:p-6">
                            <p className="">Desenvolvedor Full Stack e Web Designer com experiência em front-end e back-end, criando aplicações web dinâmicas e responsivas.
                                Domínio de tecnologias como JavaScript (React, TypeScript), PHP, bancos de dados SQL, entre outras.</p>
                        </div>
                        <div className="flex flex-1 bg-black-secundary border-2 border-gray-primary rounded-sm p-3 text-justify justify-center items-center md:p-6">
                            <p className="">
                                Apaixonado por design intuitivo e experiência do usuário, combinando funcionalidade e estética para soluções
                                digitais eficientes. Formado em Análise e Desenvolvimento de Sistemas.
                            </p>
                        </div>
                    </motion.div>

                </div>
                <motion.div
                    animate={{ scale: [0.8, 1], opacity: [0.1, 1], }}
                    transition={{ duration: 0.8 }} className="flex justify-center items-center h-80 md:h-full w-full rounded-sm p-6 md:p-24 md:w-2/5 ">
                    <div className="w-full h-full md:aspect-square relative">
                        <img className="object-cover w-full h-full rounded-sm" alt="Foto do desenvolvedor" src="/praia.jpg" />
                    </div>
                </motion.div>
            </div>
            <div className="flex flex-col  md:gap-24 bg-gradient-to-b to-gray-primary from-black-primary rounded-xl p-8">
                <div className="text-center"><h1 className="font-bold text-xl md:text-3xl mb-6 md:mb-0">Skills</h1></div>
                <div className="flex flex-col gap-9">
                    {cards.map((card, index) => (
                        <Card key={index} title={card.title} description={card.description} image={card.image} />
                    ))}
                </div>
            </div>
            <motion.div
                whileInView={{ scale: [0.8, 1], opacity: [0.1, 1], }}
                transition={{ duration: 0.8 }} className=" flex w-full md:items-center justify-center mt-10">
                <Link to={"/projects"} className="bg-blue-primary w-full md:w-2/3 hover:bg-blue-secundary md:p-3 text-center p-2 rounded-sm" >Conheça meus projetos</Link>
            </motion.div>
        </div>
    )
}

export default About