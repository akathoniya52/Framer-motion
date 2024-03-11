"use client";
import { motion, useScroll } from "framer-motion";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const sqaureContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

const svgIconVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(252, 211, 77, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(252, 211, 77, 1)",
  },
};

export default function Home() {
  const { scrollYProgress: completionProgress } = useScroll();
  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
      <motion.section
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 p-10 gap-10"
      >
        {/* first */}
        <motion.div
          variants={sqaureContainerVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center
         gap-10"
        >
          <motion.div
            className="w-20 h-20 bg-stone-100 rounded-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            // animate={{ opacity: 1, y: 0,scale: [1, 2, 2, 1] }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          ></motion.div>
          <motion.div
            className="w-20 h-20 bg-stone-100 rounded-full"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeIn", delay: 0.2 }}
          ></motion.div>
        </motion.div>
        {/* second  */}
        <motion.div
          variants={sqaureContainerVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center
         gap-10"
        >
          <motion.div
            className="h-1/3 w-1/3 shadow-md bg-rose-400"
            animate={{
              scale: [1, 2, 2, 1],
              rotate: [0, 90, 90, 0],
              borderRadius: ["10%", "10%", "50%", "10%"],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: 2,
              repeatDelay: 1,
            }}
          ></motion.div>
        </motion.div>
        {/* third for button */}
        <motion.div
          variants={sqaureContainerVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center
         gap-10"
        >
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#d1d5db",
              color: "black",
            }}
            transition={{
              bounceDamping: 10,
              bounceStiffness: 600,
            }}
            className="bg-emerald-600 w-1/2  py-4 rounded-lg text-2xl text-gray-100 tracking-wide"
          >
            Click me
          </motion.button>
        </motion.div>

        {/* fourth drag */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
            },
          }}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center
         gap-10"
        >
          <motion.div
            className="w-1/3 h-1/3 bg-orange-500 rounded-3xl cursor-grab"
            drag
            dragConstraints={{
              top: -125,
              right: 125,
              bottom: 125,
              left: -125,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          ></motion.div>
        </motion.div>

        {/* fiveth scrollbar */}
        <motion.div
          variants={sqaureContainerVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center
         gap-10"
        >
          <motion.div className="w-40 aspect-square bg-gray-50/20 rounded-xl">
            <motion.div
              className="w-full bg-gray-400 rounded-xl h-full origin-bottom"
              style={{ scaleY: completionProgress }}
            />
          </motion.div>
        </motion.div>
        {/* six animation svg */}
        {/* <motion.div
          variants={sqaureContainerVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center
         gap-10"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-1/2 stroke-amber-500 stroke-[0.5]"
          >
            <motion.path
              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              variants={svgIconVariants}
              initial="hidden"
              animate="visible"
              transition={{
                default: {
                  duration: 2,
                  ease: "easeInOut",
                  delay: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                },
                fill: {
                  duration: 2,
                  ease: "easeIn",
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                },
              }}
            />
          </motion.svg>
        </motion.div> */}
        <motion.div
          variants={sqaureContainerVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-1/2 stroke-amber-500 stroke-[0.5]"
          >
            <motion.path
              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              variants={svgIconVariants}
              initial="hidden"
              animate="visible"
              transition={{
                default: {
                  duration: 2,
                  ease: "easeInOut",
                  delay: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                },
                fill: {
                  duration: 2,
                  ease: "easeIn",
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                },
              }}
            />
          </motion.svg>
        </motion.div>
        {/* <motion.div
          variants={sqaureContainerVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center
         gap-10"
        ></motion.div> */}
      </motion.section>
    </div>
  );
}
