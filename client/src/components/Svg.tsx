import { ReactSVG } from 'react-svg';
import styled from '@emotion/styled';

const StyledReactSVG = styled(ReactSVG as any)<{ styles?: string }>`
  ${(props) => props.styles}
`;

const Svg = ({ src, styles }: { src: string; styles?: string }) => {
  return <StyledReactSVG src={src} styles={styles} />;
};

export default Svg;
