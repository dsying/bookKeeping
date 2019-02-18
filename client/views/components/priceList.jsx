import PropTypes from 'prop-types'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PriceList = ({ items, onModify, onDelete }) => (
  <ul className="list-group list-group-flush">
    {
        items.map(item => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
            <span className="col-1">
              <FontAwesomeIcon
                mask={['far', 'circle']}
                icon="plane"
                style={{
                  backgroundColor: '#007bff', padding: '5px', fontSize: '30px', color: '#fff', borderRadius: '5px',
                }}
              />
            </span>
            <span className="col-5">{item.title}</span>
            <span className="col-2 font-weight-bold">
              {
                item.category.type === 'income' ? '+' : '-'
              }
              {item.price}
            </span>
            <span className="col-2">{item.date}</span>
            <a className="col-1" onClick={() => onModify(item.id)}>
              <FontAwesomeIcon
                mask={['far', 'circle']}
                icon="edit"
                style={{
                  backgroundColor: '#28a745', padding: '5px', fontSize: '30px', color: '#fff', borderRadius: '50%', width: '40px', height: '40px',
                }}
              />
            </a>
            <a className="col-1" onClick={() => onDelete(item.id)}>
              <FontAwesomeIcon
                mask={['far', 'circle']}
                icon="trash-alt"
                style={{
                  backgroundColor: '#dc3545', padding: '5px', fontSize: '30px', color: '#fff', borderRadius: '50%', width: '40px', height: '40px',
                }}
              />
            </a>
          </li>
        ))
      }
  </ul>
)

PriceList.propTypes = {
  items: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onModify: PropTypes.func.isRequired,
}

export default PriceList
