import Link from 'next/link';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Grid,
  Paper,
  Container,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { GitHub } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Wrapper = styled('div')(({}) => ({
  marginTop: 60,
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
          <Item>Item 1</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Item 1</Item>
        </Grid>
      </Grid>
    </Box>
  </Container>
);

const HeaderApp = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Notifications Service Client
        </Typography>

        <IconButton size="large" color="inherit">
          <Link href="https://github.com/" target="_blank">
            <GitHub />
          </Link>
        </IconButton>
      </Toolbar>
    </AppBar>
  </Box>
);
