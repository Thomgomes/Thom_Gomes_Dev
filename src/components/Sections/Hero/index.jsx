import Section from "..";
import ThomGif from "../../../assets/ThomGif.gif";
import { RiScrollToBottomLine } from "react-icons/ri";
import Button from "../../Buttons/Button";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const TextHeroVariants = {
  initial: {
    opacity: 0,
    x: -500,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButtom: {
    opacity: 0,
    y: 15,
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatDelay: 0.3,
    },
  },
};
const SliderHeroVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-1000%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 100,
    },
  },
};
const ImgVariants = {
  initial: {
    scale: 0.6,
    opacity: 0,
    x: 500
  },
  animate: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.3,
    },
  },
};

const handleClick = (e, targetId) => {
  e.preventDefault();
  const target = document.getElementById(targetId);
  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
    });
  }
};

export default function HeroSection() {
  return (
    <Section id="Inicio">
      <div className="relative h-full flex justify-center">
        <div className="m-auto h-full flex flex-row items-center justify-between container mx-6 pt-6">
          <motion.div
            className="flex flex-col gap-10"
            variants={TextHeroVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h2
              className="tracking-[6px] text-3xl font-semibold"
              variants={TextHeroVariants}
            >
              Thom Gomes
            </motion.h2>
            <motion.h1
              className="text-7xl font-bold"
              variants={TextHeroVariants}
            >
              Desenvolvedor Web
            </motion.h1>
            <motion.div
              className="flex flex-row gap-5"
              variants={TextHeroVariants}
            >
              <motion.a
                href="#Projetos"
                variants={TextHeroVariants}
                onClick={(e) => handleClick(e, "Projetos")}
              >
                <Button>Veja meus ultimos Projetos</Button>
              </motion.a>
              <motion.a
                href="#Contato"
                variants={TextHeroVariants}
                onClick={(e) => handleClick(e, "Contato")}
              >
                <Button>Contate-me</Button>
              </motion.a>
            </motion.div>
            <motion.a
              href="#Parallax"
              variants={TextHeroVariants}
              animate="scrollButtom"
              onClick={(e) => handleClick(e, "Parallax")}
            >
              <RiScrollToBottomLine className="ml-12 text-6xl" />
            </motion.a>
          </motion.div>
          <div>
            <Tilt
              className="w-80 h-80"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              tiltReverse={true}
              glareMaxOpacity={false}
            >
              <motion.img
                variants={ImgVariants} // Adicionando os variants
                initial="initial" // Estado inicial
                animate="animate" // Estado animado
                className="rounded-full w-full h-full object-cover border-4 border-quasePreto dark:border-Branco"
                src={ThomGif}
                alt="Descrição da imagem de Thom"
                style={{ opacity: 1 }} // Garantindo opacidade total
              />
            </Tilt>
          </div>
        </div>
        <motion.span
          className="absolute text-[60vh] bottom-[-120px] whitespace-nowrap opacity-10 font-bold w-full pointer-events-none"
          variants={SliderHeroVariants}
          initial="initial"
          animate="animate"
        >
          Thom Gomes Desenvolvedor Web Thom Gomes Desenvolvedor Web Thom Gomes
          Desenvolvedor Web
        </motion.span>
        <div className="w-full absolute h-2 bg-outra_Secundario bottom-0 left-0 rounded-t-lg"></div>
      </div>
    </Section>
  );
}
