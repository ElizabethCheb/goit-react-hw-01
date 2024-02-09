// TransactionHistory.jsx

import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css'; // імпортуйте ваші стилі

const TransactionHistory = ({ items }) => {
  return (
    <div className={styles.transactionHistory}>
      <table>
        <thead>
          <tr>
            <th className={styles.typeColumn}>Type</th>
            <th className={styles.amountColumn}>Amount</th>
            <th className={styles.currencyColumn}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td className={styles.typeColumn}>{type}</td>
              <td className={styles.amountColumn}>{amount}</td>
              <td className={styles.currencyColumn}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
