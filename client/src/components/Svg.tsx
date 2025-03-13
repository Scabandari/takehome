import { ReactSVG } from 'react-svg';

const Svg = ({ src, styles }: { src: string; styles: string }) => {
  return <ReactSVG src={src} />;
};

export default Svg;
