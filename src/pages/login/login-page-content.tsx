import { Box, TextField, Button } from '@mui/material';
import { PageLoginContainer, LoginContainer } from './styles/login-style';
import { useLoginPageContext } from './login-page-context';

const LoginPageContent = (): JSX.Element => {
  const { isLoading, credentials } = useLoginPageContext();

  return (
    <PageLoginContainer>
      <LoginContainer width='40%'>
        <Box
          sx={{
            width: '80%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '30px',
          }}
          component='form'
        // onSubmit={ }
        >
          <TextField
            margin='normal'
            fullWidth
            label='E-mail'
            type='email'
          />
          <TextField
            margin='normal'
            fullWidth
            label='Senha'
            type='password'
          />
          <Button
            fullWidth
            variant='contained'
            type='submit'
            sx={{ mt: 2, mb: 2 }}
          >
            Entrar
          </Button>
        </Box>
      </LoginContainer>
    </PageLoginContainer>
  );
};

export { LoginPageContent };
