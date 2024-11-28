import { RiReactjsLine } from "react-icons/ri";
import { FaPython, FaJava, FaAws, FaDocker } from "react-icons/fa";
import { SiDjango, SiPostgresql, SiMicrosoftsqlserver, SiMicrosoftexcel, SiPowerbi } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y: -10 },
    animate: {
        y :[10, -10], 
        transition: {
            duration: duration, 
            ease: "linear",
            repeat: Infinity, 
            repeatType:"reverse"
        }
    },
});


const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">Technologies</h1>
            <motion.div 
            whileInView={{ opacity: 1, x: 0 }} 
            initial={{ opacity: 0, x: -100 }} 
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                variants={iconVariants (5)}
                initial="initial" 
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                    <span className="mt-2 text-center text-lg text-white">React</span>
                </motion.div>
                <motion.div 
                variants={iconVariants (2)}
                initial="initial" 
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
                    <FaPython className="text-7xl text-yellow-500" />
                    <span className="mt-2 text-center text-lg text-white">Python</span>
                </motion.div>
                <motion.div
                variants={iconVariants (5)}
                initial="initial" 
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
                    <FaJava className="text-7xl text-orange-500" />
                    <span className="mt-2 text-center text-lg text-white">Java</span>
                </motion.div>
                <motion.div 
                variants={iconVariants (2)}
                initial="initial" 
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
                    <FaAws className="text-7xl text-orange-400" />
                    <span className="mt-2 text-center text-lg text-white">AWS</span>
                </motion.div>
                <motion.div 
                variants={iconVariants (5)}
                initial="initial" 
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
                    <SiDjango className="text-7xl text-green-500" />
                    <span className="mt-2 text-center text-lg text-white">Django</span>
                </motion.div>
                <motion.div
                variants={iconVariants (2)}
                initial="initial" 
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
                    <SiPostgresql className="text-7xl text-blue-500" />
                    <span className="mt-2 text-center text-lg text-white">PostgreSQL</span>
                </motion.div>
                <motion.div 
                variants={iconVariants (2)}
                initial="initial" 
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
                    <SiMicrosoftsqlserver className="text-7xl text-red-500" />
                    <span className="mt-2 text-center text-lg text-white">SQL Server</span>
                </motion.div>
                <motion.div
                variants={iconVariants (5)}
                initial="initial" 
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
                    <SiMicrosoftexcel className="text-7xl text-green-400" />
                    <span className="mt-2 text-center text-lg text-white">Excel</span>
                </motion.div>
                <motion.div
                variants={iconVariants (2)}
                initial="initial" 
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
                    <SiPowerbi className="text-7xl text-yellow-400" />
                    <span className="mt-2 text-center text-lg text-white">Power BI</span>
                </motion.div>
                <motion.div
                variants={iconVariants (5)}
                initial="initial" 
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
                    <FaDocker className="text-7xl text-blue-400" />
                    <span className="mt-2 text-center text-lg text-white">Docker</span>
                </motion.div>
            </motion.div>
        </div>
    );
};


export default Technologies;
