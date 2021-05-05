import React from 'react';
import DistructionBlock from '../../components/DistructionBlock/index';

import { useSelector } from 'react-redux';

function DistructionList() {
  const { items } = useSelector(({ distriction }) => distriction);

  const blocks = Object.keys(items).map((key) => {
    return items[key][0];
  });

  console.log(blocks, 'cart');

  return (
    <div>
      {blocks &&
        blocks.map((obj) => (
          <DistructionBlock name={obj.name} dang={obj.is_potentially_hazardous_asteroid} />
        ))}
    </div>
  );
}

export default DistructionList;
