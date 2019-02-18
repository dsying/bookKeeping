import React from 'react';
import PriceList from './components/priceList';
import 'bootstrap/dist/css/bootstrap.min.css'

const items = [
  {
    id: 1,
    title: '去云南旅游',
    price: 400,
    date: '2019-02-15',
    category: {
      id: '1',
      name: '旅行',
      type: 'outcome',
      iconName: 'IosPlaneOutline',
    },
  },
  {
    id: 2,
    title: '去云南旅游',
    price: 400,
    date: '2019-02-15',
    category: {
      id: '1',
      name: '旅行',
      type: 'income',
      iconName: 'IosPlaneOutline',
    },
  },
]
const App = () => (
  <div>
    <PriceList items={items} onModify={id => alert(id)} onDelete={id => alert(id)} />
  </div>
)

export default App
