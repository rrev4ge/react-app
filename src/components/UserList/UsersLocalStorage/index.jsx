import React from 'react';
import FormSubmitter from '../../forms/FormSubmitter';

export function renderUsersButton(userArray, title) {
  return (
    <FormSubmitter>
      {(onSubmit) => (
        <button onClick={() => onSubmit(userArray)}>{title}</button>
      )}
    </FormSubmitter>
  );
}
