import { Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Body = styled('body')(({}) => ({
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  backgroundColor: '#95ded7',
  fontFamily: 'Roboto, sans-serif',
}));

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
  fontSize: 24,
}));

export const Wrapper = styled('div')(({}) => ({
  marginTop: 60,
}));

export const ButtonToCreateNotification = styled(Button)(({}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  span: {
    fontSize: 16,
  },
}));
