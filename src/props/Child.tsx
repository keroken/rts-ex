import React from 'react';

interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = (props: ChildProps) => {
  return (
    <div style={{ color: props.color }} onClick={props.onClick}>
      {props.color}
    </div>
  );
};

export const ChildWithDest = ({ color, onClick }: ChildProps) => {
  return (
    <div style={{ color: color }} onClick={onClick}>
      {color}
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div style={{ color: color }} onClick={onClick}>
      {children}
    </div>
  );
};

