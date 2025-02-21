import { CSSProperties } from "react";

/** Propsの型定義 */
interface PropsType {
  style?: CSSProperties;
  color?: string;
}

/**
 * NOTE: ListSvg
 * => リスト表示 の SVG_Icon
 */
const ROGIX_LOGO = (props: PropsType) => {
  return (
    <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" style={props.style ? props.style : undefined}>
      <g mask="url(#mask0_1235_3833)" id="rogixlogo" data-name="rogixlogo">
        <path d="M94.69,471.04v40.96h-31.4V0h74.39v428.03c0,10.24-4.1,18.43-10.92,24.58h11.6v59.39h-32.08v-40.96h-11.6ZM103.56,441.69c1.36,0,2.05-2.05,2.05-3.41V29.35h-10.92v412.33h8.87Z" fill={props.color ? props.color : "#8C8C8C"} />
        <path d="M148.6,33.45c0-20.48,11.6-33.45,33.44-33.45h40.95v478.55c0,20.48-11.6,33.45-33.44,33.45h-40.95V33.45ZM188.87,482.64c1.36,0,2.05-2.05,2.05-4.1V29.35h-8.19c-1.36,0-2.73,2.05-2.73,4.1v449.19h8.87Z" fill={props.color ? props.color : "#8C8C8C"} />
        <path d="M232.54,512V33.45c0-20.48,12.29-33.45,33.44-33.45h40.95v30.04h-38.9c-2.73,0-4.1,2.05-4.1,4.1v448.51h10.92V40.96h32.08v471.04h-74.39Z" fill={props.color ? props.color : "#8C8C8C"} />
        <path d="M317.85,512V0h33.44v512h-33.44Z" fill={props.color ? props.color : "#8C8C8C"} />
        <path d="M393.6,512h-31.4v-58.03c0-9.56,4.1-17.75,10.92-23.89h-10.92V0h31.4v417.11h8.87c1.36,0,2.05-2.05,2.05-3.41V0h32.08v404.82c0,10.24-4.09,19.11-11.6,25.26h11.6v81.92h-32.08v-65.54h-8.19c-1.36,0-2.73,1.37-2.73,3.41v62.12Z" fill={props.color ? props.color : "#8C8C8C"} />
      </g>
    </svg>
  );
};

export default ROGIX_LOGO;
