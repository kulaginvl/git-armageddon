import React from 'react';
import DistructionBlock from '../../components/DistructionBlock/index';

import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearDistr } from '../../redux/actions/distriction';
import Button from '../../components/Button';

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

  const handleClearDistrict = () => {
    if (window.confirm('Вы действительно хотите отправить бригаду?')) {
      setTimeout(() => {
        dispatch(clearDistr());
        alert(
          'Спасательная бригада им. Брюса Уиллиса вылетела на следующие астеройды: ' +
            `${blocks.map((obj) => obj.name)}`,
        );
      }, 2000);
    }
  };

  console.log(
    blocks.map((obj) => obj.name),
    'cart',
  );

  return (
    <div>
      {blocks.length > 0 ? (
        <div>
          {blocks.map((obj) => (
            <DistructionBlock
              id={obj.id}
              key={obj.id}
              name={obj.name}
              dang={obj.is_potentially_hazardous_asteroid}
              onRemove={onRemoveItem}
            />
          ))}
          <Button onClick={handleClearDistrict}>
            <span>Заказ бригады им. Брюса Уиллиса</span>
          </Button>
        </div>
      ) : (
        <div>
          <h1>Пусто</h1>
        </div>
      )}
    </div>
  );
}

export default DistructionList;
