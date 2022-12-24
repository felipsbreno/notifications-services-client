import React from 'react';
import { Add } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

interface HeaderActionsProps {
  onOpenForm?: () => void;
}

interface DialogActionsProps {
  open?: boolean;
  handleClose?: () => void;
}

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
  const [openDialog, setOpenDialog] = React.useState(false);

  const openDialogForm = () => setOpenDialog(!openDialog);
  const closeDialogForm = () => setOpenDialog(false);

  return (
    <>
      <HeaderApp onOpenForm={openDialogForm} />

      <Wrapper>
        <CardNotificationRender />
      </Wrapper>

      <DialogComponent open={openDialog} handleClose={closeDialogForm} />
    </>
  );
}

const CardNotificationRender = () => (
  <Container maxWidth="lg">
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>Total de Notificações: 400</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Total de Notificações Criadas: 100</Item>
        </Grid>
      </Grid>
    </Box>
  </Container>
);

const HeaderApp = (props: HeaderActionsProps) => (
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
          onClick={props.onOpenForm}
        >
          <Add />
          <Typography variant="h6" component="span">
            Criar
          </Typography>
        </ButtonToCreateNotification>
      </Toolbar>
    </AppBar>
  </Box>
);

const DialogComponent = (props: DialogActionsProps) => (
  <Dialog open={Boolean(props.open)} onClose={props.handleClose}>
    <DialogTitle>Subscribe</DialogTitle>
    <DialogContent>
      <DialogContentText>
        To subscribe to this website, please enter your email address here. We
        will send updates occasionally.
      </DialogContentText>
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="Email Address"
        type="email"
        fullWidth
        variant="standard"
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={props.handleClose}>Fechar</Button>
    </DialogActions>
  </Dialog>
);
