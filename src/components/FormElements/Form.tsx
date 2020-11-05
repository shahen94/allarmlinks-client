import React, { FC } from 'react';

interface Props {
  children: JSX.Element[] | JSX.Element;
  onSubmit: () => void;
  className?: string;
}

const Form: FC<Props> = ({ children, onSubmit, className }) => {
  return (
    <form
      onSubmit={onSubmit}
      className={className}
      autoComplete="off"
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: 16,
        gap: 10,
      }}
    >
      {children}
    </form>
  );
};

export default Form;
