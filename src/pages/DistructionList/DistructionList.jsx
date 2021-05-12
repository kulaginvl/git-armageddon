import React from 'react';
import DistructionBlock from '../../components/DistructionBlock/index';

import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../redux/actions/distriction';

function DistructionList() {
  const dispatch = useDispatch();

  const { items } = useSelector(({ distriction }) => distriction);

  const blocks = Object.keys(items).map((key) => {
    return items[key][0];
  });

  const onRemoveItem = (id) => {
    if (window.confirm('Вы действительно хотите удалить?')) {
      dispatch(removeItem(id));
    }
  };

  console.log(blocks, 'cart');

  return (
    <div>
      {blocks &&
        blocks.map((obj) => (
          <DistructionBlock
            id={obj.id}
            name={obj.name}
            dang={obj.is_potentially_hazardous_asteroid}
            onRemove={onRemoveItem}
          />
        ))}
    </div>
  );
}

export default DistructionList;
