import { SiGithub, SiVercel, SiVisualstudiocode } from "react-icons/si";
import BoxContainerStack from "../boxContainerStack";

export default function Tools() {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pb-12">
      <BoxContainerStack>
      <SiVisualstudiocode />
      </BoxContainerStack>
      <BoxContainerStack>
      <SiGithub />
      </BoxContainerStack>
      <BoxContainerStack>
      <SiVercel />
      </BoxContainerStack>
      
    </div>
    </div>
  )
}
