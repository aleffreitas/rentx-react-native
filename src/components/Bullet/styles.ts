import styled, { css } from 'styled-components/native';

interface ContainerProps {
  active: boolean;
}

export const Container = styled.View<ContainerProps>`
  ${({ theme, active }) => css`
    background-color: ${active ? theme.colors.title : theme.colors.shape};
  `}
  width: 6px;
  height: 6px;
  margin-left: 8px;
  border-radius: 3px;
`;