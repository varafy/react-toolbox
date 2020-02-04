import { themr } from '@varafy/react-css-themr';
import { CHIP } from '../identifiers';
import { chipFactory } from './Chip';
import { Avatar } from '../avatar';
import theme from './theme.module.css';

const Chip = chipFactory(Avatar);
const ThemedChip = themr(CHIP, theme)(Chip);

export default ThemedChip;
export { ThemedChip as Chip };
