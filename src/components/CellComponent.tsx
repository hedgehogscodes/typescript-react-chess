import * as React from 'react';
import { Cell } from '../models/Cell';

interface CellProps {
  cell: Cell
}

const СellComponent: React.FC<CellProps> = ({cell}) => {
  return(
    <div className={['cell', cell.color].join(' ')}>

    </div>
  ) ;
};

export default СellComponent;
