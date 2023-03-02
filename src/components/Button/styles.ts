import styled from "styled-components";
import { ColorsPrimary80 } from '../../styles/js/colors'

export const Container = styled.button`
  width: 250px;
  height: 50px;

  margin: 20px;

  background: ${ColorsPrimary80};

  border: 13px solid ${({ theme }) => theme.colors.neutral['80']};
  /* ou */
  /* border: 13px solid var(--colors-neutral-80); */
`;