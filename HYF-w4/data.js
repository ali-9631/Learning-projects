const transactions = [
  {
    id: 1,
    type: 'income',
    category: 'salary',
    amount: 2000,
    description: 'Salary',
    date: '2026-01-15',
  },
  {
    id: 2,
    type: 'expense',
    category: 'food',
    amount: 100,
    description: 'Groceries',
    date: '2026-01-20',
  },
  {
    id: 3,
    type: 'expense',
    category: 'housing',
    amount: 800,
    description: 'Rent',
    date: '2026-02-01',
  },
  {
    id: 4,
    type: 'income',
    category: 'side-income',
    amount: 100,
    description: 'Freelance',
    date: '2026-02-02',
  },
  {
    id: 5,
    type: 'expense',
    category: 'housing',
    amount: 60,
    description: 'Utilities',
    date: '2026-02-01',
  },
];

module.exports = {
  transactions,
};
