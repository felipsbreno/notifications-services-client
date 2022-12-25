import React, { FormEvent } from 'react';

interface FormContainerProps {
  children: React.ReactNode;
  handleSubmit: (event: FormEvent) => void;
}

export default function FormContainer({
  handleSubmit,
  children,
}: FormContainerProps) {
  return <form onSubmit={handleSubmit}>{children}</form>;
}
