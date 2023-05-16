import { ImSpinner8 } from 'react-icons/im';
import { css, styled } from 'styled-components';

export const flexCustom = (
  flexDirection = 'row',
  alignItems = 'center',
  justifyContent = 'center',
) => css`
  display: flex;
  flex-direction: ${flexDirection};
  align-items: ${alignItems};
  justify-content: ${justifyContent};
`;

export const Spinner = styled(ImSpinner8)`
  color: ${({ theme }) => theme.color.gray[800]};
  font-size: 20px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
