import React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { FormatPaint } from '@mui/icons-material';
import { TextField as TextFieldComponent } from '@mui/material';

interface TextFieldProps {
  id: string;
  value: string;
  label: string;
  hasEndAdornment?: boolean;
  cleanupUUID?: () => void;
  onChange?: (e: any) => void;
}

export default function TextField(props: TextFieldProps, ...rest: any[]) {
  const { value, label, id, onChange, cleanupUUID, hasEndAdornment } = props;
  return (
    <TextFieldComponent
      id={id}
      type="text"
      variant="outlined"
      margin="dense"
      label={label}
      autoFocus
      fullWidth
      value={value}
      onChange={onChange}
      InputProps={{
        endAdornment: hasEndAdornment && (
          <Button onClick={cleanupUUID}>
            <Tooltip title={'Limpar UUID'}>
              <FormatPaint />
            </Tooltip>
          </Button>
        ),
      }}
      {...rest}
    />
  );
}
