import React from 'react';
import TextInput from '../atoms/TextInput';
import FileInput from '../atoms/FileInput';
import SelectInput from '../atoms/SelectInput';

const FormField = ({ type, ...props }) => {
  switch (type) {
    case 'text':
      return <TextInput {...props} />;
    case 'file':
      return <FileInput {...props} />;
    case 'select':
      return <SelectInput {...props} />;
    default:
      return null;
  }
};

export default FormField;