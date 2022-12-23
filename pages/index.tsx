import { Add } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Grid,
  Paper,
  Container,
  Button,
} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
  fontSize: 24,
}));

const Wrapper = styled('div')(({}) => ({
  marginTop: 60,
}));

const ButtonToCreateNotification = styled(Button)(({}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  span: {
    fontSize: 16,
  },
}));

export default function Home() {
  return (
    <>
      <HeaderApp />

      <Wrapper>
        <CardNotificationRender />
      </Wrapper>
    </>
  );
}

const CardNotificationRender = () => (
  <Container maxWidth="lg">
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>Total de Notificações: </Item>
          <Item>400</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Total de Notificações Criadas: </Item>
          <Item>100</Item>
        </Grid>
      </Grid>
    </Box>
  </Container>
);

const HeaderApp = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Notifications Service Client
        </Typography>

        <ButtonToCreateNotification
          aria-label="Criar um notificação"
          size="large"
          color="inherit"
        >
          <Add />
          <Typography variant="h6" component="span">
            Criar uma notificação
          </Typography>
        </ButtonToCreateNotification>
      </Toolbar>
    </AppBar>
  </Box>
);

const FormCreateNotification = () => {};
