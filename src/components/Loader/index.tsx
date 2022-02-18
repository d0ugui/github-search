import React from 'react';
import ReactDOM from 'react-dom';

import { Overlay } from './styles';

export const Loader: React.FC= ({}) => {
  return ReactDOM.createPortal(
    <Overlay>
      <div className="loader" />
    </Overlay>,
    document.getElementById('loader-root') as HTMLDivElement,
  );
}