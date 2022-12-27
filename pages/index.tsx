import { FormEvent, useState, Fragment } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { Add } from '@mui/icons-material';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import FormContainer from '../components/FormContainer';
import TextField from '../components/TextField';

import { ButtonToCreateNotification, Item, Wrapper } from '../styles/style';
import { GetStaticProps } from 'next';

interface HeaderActionsProps {
  onOpenForm?: () => void;
}

interface DialogActionsProps {
  open?: boolean;
  handleClose?: () => void;
}

export default function Home() {
  const [openDialog, setOpenDialog] = useState(false);

  const openDialogForm = () => setOpenDialog(true);
  const closeDialogForm = () => setOpenDialog(false);

  return (
    <Fragment>
      <HeaderApp onOpenForm={openDialogForm} />
      <Wrapper>
        <CardNotificationRender />
      </Wrapper>
      <DialogComponent open={openDialog} handleClose={closeDialogForm} />
    </Fragment>
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

const HeaderApp = ({ onOpenForm }: HeaderActionsProps) => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Typography
          variant="h6"
          color="deeppink"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Gerenciar Notificações
        </Typography>

        <ButtonToCreateNotification
          aria-label="Criar um notificação"
          size="medium"
          variant="contained"
          onClick={onOpenForm}
        >
          <Add />
          Criar Notificação
        </ButtonToCreateNotification>
      </Toolbar>
    </AppBar>
  </Box>
);

const DialogComponent = (props: DialogActionsProps) => {
  const { open, handleClose } = props;
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [recipientId, setRecipientId] = useState('');

  const generateUUID = () => {
    setRecipientId && setRecipientId(uuidV4());
  };

  const cleanupUUID = () => {
    setRecipientId && setRecipientId('');
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <Dialog open={Boolean(open)} onClose={handleClose}>
      <DialogTitle>Vamos criar uma notificação ?</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ color: '#000', marginBottom: 2 }}>
          Para criar um notificação, insira os dados abaixo.
        </DialogContentText>
        <FormContainer handleSubmit={handleSubmit}>
          <TextField
            id="content"
            label="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <TextField
            id="category"
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <TextField
            id="recipientId"
            label="RecipientId"
            value={recipientId}
            hasEndAdornment
            cleanupUUID={cleanupUUID}
          />
          <Button onClick={generateUUID}>Gerar UUID</Button>

          <DialogActions>
            <Button fullWidth type="submit" variant="contained" color="success">
              Enviar
            </Button>
            <Button
              fullWidth
              variant="contained"
              onClick={handleClose}
              color="error"
            >
              Fechar
            </Button>
          </DialogActions>
        </FormContainer>
      </DialogContent>
    </Dialog>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
