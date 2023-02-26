import styled from '@emotion/styled';
import {
  Box, BoxProps, Container, ContainerProps,
} from '@mui/material';

const PageLoginContainer = styled(Container)<ContainerProps>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '100%',
  height: '100vh',
  backgroundColor: '#ECECED',
}));

const LoginContainer = styled(Box)<BoxProps>(() => ({
  background: 'white',
  'border-radius': '10px',
  'box-shadow': '0 0 5px 0px gainsboro',
  padding: '25px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

export {
  PageLoginContainer,
  LoginContainer,
};
