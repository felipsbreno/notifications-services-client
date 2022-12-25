import { FormEvent, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { Add, FormatPaint } from '@mui/icons-material';
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
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import FormContainer from '../components/FormContainer';

import { ButtonToCreateNotification, Item, Wrapper } from '../styles/style';

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

const HeaderApp = ({ onOpenForm }: HeaderActionsProps) => (
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
          onClick={onOpenForm}
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

const DialogComponent = (props: DialogActionsProps) => {
  const { open, handleClose } = props;
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [recipientId, setRecipientId] = useState('');

  const generateUUID = () => {
    setRecipientId(uuidV4());
  };

  const cleanupUUID = () => {
    setRecipientId('');
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
            autoFocus
            margin="dense"
            id="content"
            label="Content"
            type="text"
            fullWidth
            variant="outlined"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="Category"
            type="text"
            fullWidth
            variant="outlined"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="recipientId"
            label="RecipientId"
            type="text"
            fullWidth
            variant="outlined"
            value={recipientId}
            InputProps={{
              endAdornment: (
                <Button onClick={cleanupUUID}>
                  <Tooltip title={'Limpar UUID'}>
                    <FormatPaint />
                  </Tooltip>
                </Button>
              ),
            }}
          />
          <Button onClick={generateUUID}>Gerar UUID</Button>

          <DialogActions>
            <Button type="submit" fullWidth color="primary">
              Enviar
            </Button>
            <Button onClick={handleClose} fullWidth>
              Fechar
            </Button>
          </DialogActions>
        </FormContainer>
      </DialogContent>
    </Dialog>
  );
};
