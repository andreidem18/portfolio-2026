import { SVGAttributes } from "react";

export interface Tech {
  name: string;
  icon: (props: SVGAttributes<SVGSVGElement>) => React.JSX.Element;
  color: string;
}
