import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Loading = styled(ActivityIndicator).attrs({
  color: theme.colors.main
})`
  flex: 1;
`;