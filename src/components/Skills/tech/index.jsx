import {
  DiCss3Full,
  DiGit,
  DiHtml5,
  DiJavascript1,
  DiReact,
} from "react-icons/di";
import {
  SiBootstrap,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import BoxContainerStack from "../boxContainerStack";

export default function Techs() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 pb-12">
      <BoxContainerStack>
        <SiTailwindcss />
      </BoxContainerStack>
      <BoxContainerStack>
        <TbBrandReactNative />
      </BoxContainerStack>
      <BoxContainerStack>
        <DiCss3Full />
      </BoxContainerStack>
      <BoxContainerStack>
        <SiTypescript />
      </BoxContainerStack>
      <BoxContainerStack>
        <SiBootstrap />
      </BoxContainerStack>
      <BoxContainerStack>
        <DiHtml5 />
      </BoxContainerStack>
      <BoxContainerStack>
        <SiFirebase />
      </BoxContainerStack>
      <BoxContainerStack>
        <DiGit />
      </BoxContainerStack>
      <BoxContainerStack>
        <DiReact />
      </BoxContainerStack>
      <BoxContainerStack>
        <DiJavascript1 />
      </BoxContainerStack>
    </div>
  );
}
