import { motion } from "framer-motion";
import Section from "..";
import layer1 from "../../../assets/parallax/layer1.png";
import layer2 from "../../../assets/parallax/layer2.png";
import layer3 from "../../../assets/parallax/layer3.png";
import layer4 from "../../../assets/parallax/layer4.png";
import layer5 from "../../../assets/parallax/layer5.png";
import layer6 from "../../../assets/parallax/layer6.png";

const layers = [layer1, layer2, layer3, layer4, layer5, layer6];

export default function Parallax() {
  return (
    <Section id="Parallax">
      <div className="w-full h-full relative flex flex-col justify-center items-center bg-gradient-to-t to-Parallax_Primario from-Parallax_Secundario dark:to-Parallax_Dark_Primario dark:from-Parallax_Dark_Secundario">
        <motion.div>
          <h3 className="text-7xl font-semibold">Habilidades</h3>
        </motion.div>
        <div className="h-1/2"></div>

        {layers.map((layer, index) => (
          <img
            key={index}
            src={layer}
            alt={`layer ${index + 1}`}
            className="bg-cover bg-bottom h-full w-full absolute"
          />
        ))}
      </div>
    </Section>
  );
}
