import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { motion } from "framer-motion"

function Home() {
    return (
        <div className="w-full h-[calc(100vh-2rem)] px-7 pb-7 text-white">
            <div className="w-full h-full flex justify-center bg-gradient-to-b to-black-primary from-gray-primary rounded-xl">
                <div className="text-center justify-center gap-10 flex flex-col md:flex-row-reverse flex-1 p-9 md:px-28">
                    <motion.div
                        animate={{ scale: [0.8, 1], opacity: [0.1, 1], }}
                        transition={{ duration: 0.8 }}

                        className="flex justify-center items-center h-80 md:h-full w-full bg-gradient-to-b to-gray-primary from-gray-secundary rounded-sm p-6 md:p-12 md:w-1/2">
                        <div className="flex-1 flex flex-wrap h-full w-full relative">
                            <img className="object-cover absolute inset-0 w-full h-full rounded-sm" alt="Foto do desenvolvedor" src="public/banco.jpg" />
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ scale: [0.8, 1], opacity: [0.1, 1], }}
                        transition={{ duration: 0.8 }}

                        className="flex flex-col items-center justify-center md:items-start text-center md:text-left gap-5  md:w-1/2 ">
                        <div className="mb-9">
                            <h1 className="font-bold text-2xl md:text-4xl">EROS HILGEMBERG</h1>
                            <h2 className="font-bold">Desenvolvedor Full Stack</h2>
                        </div>
                        <div className="flex justify-center md:justify-start gap-3 mb-28">
                            <a href="https://www.linkedin.com/in/eros-hilgemberg-9917832b3/" target="_blank"><LinkedinLogo size={32} /></a>
                            <a href="https://www.instagram.com/eroshilgemberg/" target="_blank"><InstagramLogo size={32} /></a>
                            <a href="https://github.com/Eros-Hilgemberg" target="_blank"><GithubLogo size={32} /></a>
                        </div>
                        <div className=" flex w-full md:w-2/3">
                            <a className="bg-blue-primary w-full hover:bg-blue-secundary md:p-3 text-center p-2 rounded-sm" target="_blank" href="https://api.whatsapp.com/send/?phone=5542999658013&text=%22Ola%22&type=phone_number&app_absent=0">Vamos Conversar?</a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div >
    )
}

export default Home