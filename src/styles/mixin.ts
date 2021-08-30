import { css } from 'styled-components';

// interface IflexInfo {
//   justify: string;
//   items: string;
//   direction: string;
// }

const flexSet = (justify: string, items: string, direction: string) => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${items};
  flex-direction: ${direction};
`;
const mixin = { flexSet };
export default mixin;
