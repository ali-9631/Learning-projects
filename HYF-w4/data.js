const transactions = [
  // November 2025
  {
    id: 1,
    type: 'income',
    category: 'salary',
    amount: 2000,
    description: 'Salary',
    date: '2025-11-01',
  },
  {
    id: 2,
    type: 'expense',
    category: 'food',
    amount: 180,
    description: 'Groceries',
    date: '2025-11-10',
  },
  {
    id: 3,
    type: 'expense',
    category: 'transport',
    amount: 50,
    description: 'Train ticket',
    date: '2025-11-20',
  },

  // December 2025
  {
    id: 4,
    type: 'expense',
    category: 'housing',
    amount: 800,
    description: 'Rent',
    date: '2025-12-01',
  },
  {
    id: 5,
    type: 'expense',
    category: 'housing',
    amount: 60,
    description: 'Utilities',
    date: '2025-12-02',
  },
  {
    id: 6,
    type: 'expense',
    category: 'food',
    amount: 100,
    description: 'Restaurant',
    date: '2025-12-05',
  },
  {
    id: 7,
    type: 'expense',
    category: 'transport',
    amount: 40,
    description: 'Bus ticket',
    date: '2025-12-08',
  },
  {
    id: 8,
    type: 'income',
    category: 'side-income',
    amount: 300,
    description: 'Freelance',
    date: '2025-12-10',
  },

  // January 2026
  {
    id: 9,
    type: 'income',
    category: 'salary',
    amount: 2000,
    description: 'Salary',
    date: '2026-01-01',
  },
  {
    id: 10,
    type: 'expense',
    category: 'food',
    amount: 220,
    description: 'Groceries',
    date: '2026-01-10',
  },
  {
    id: 11,
    type: 'expense',
    category: 'entertainment',
    amount: 120,
    description: 'Cinema',
    date: '2026-01-20',
  },

  // February 2026
  {
    id: 12,
    type: 'income',
    category: 'salary',
    amount: 2000,
    description: 'Salary',
    date: '2026-02-01',
  },
  {
    id: 13,
    type: 'expense',
    category: 'housing',
    amount: 800,
    description: 'Rent',
    date: '2026-02-02',
  },
  {
    id: 14,
    type: 'expense',
    category: 'health',
    amount: 150,
    description: 'Dentist',
    date: '2026-02-15',
  },

  // March 2026
  {
    id: 15,
    type: 'income',
    category: 'salary',
    amount: 2000,
    description: 'Salary',
    date: '2026-03-01',
  },
  {
    id: 16,
    type: 'expense',
    category: 'food',
    amount: 250,
    description: 'Groceries',
    date: '2026-03-05',
  },
  {
    id: 17,
    type: 'expense',
    category: 'transport',
    amount: 80,
    description: 'Monthly transport',
    date: '2026-03-15',
  },

  // April 2026
  {
    id: 18,
    type: 'income',
    category: 'salary',
    amount: 2000,
    description: 'Salary',
    date: '2026-04-01',
  },
  {
    id: 19,
    type: 'expense',
    category: 'housing',
    amount: 800,
    description: 'Rent',
    date: '2026-04-02',
  },
  {
    id: 20,
    type: 'expense',
    category: 'health',
    amount: 1200,
    description: 'Hospital',
    date: '2026-04-10',
  },

  // May 2026
  {
    id: 21,
    type: 'income',
    category: 'salary',
    amount: 2000,
    description: 'Salary',
    date: '2026-05-01',
  },
  {
    id: 22,
    type: 'expense',
    category: 'food',
    amount: 300,
    description: 'Groceries',
    date: '2026-05-05',
  },
  {
    id: 23,
    type: 'expense',
    category: 'entertainment',
    amount: 150,
    description: 'Concert tickets',
    date: '2026-05-15',
  },

  // June 2026
  {
    id: 24,
    type: 'income',
    category: 'salary',
    amount: 2000,
    description: 'Salary',
    date: '2026-06-01',
  },
  {
    id: 25,
    type: 'expense',
    category: 'housing',
    amount: 800,
    description: 'Rent',
    date: '2026-06-02',
  },
  {
    id: 26,
    type: 'expense',
    category: 'travel',
    amount: 900,
    description: 'Weekend trip',
    date: '2026-06-18',
  },

  // July 2026
  {
    id: 27,
    type: 'income',
    category: 'salary',
    amount: 2000,
    description: 'Salary',
    date: '2026-07-01',
  },
  {
    id: 28,
    type: 'income',
    category: 'side-income',
    amount: 400,
    description: 'Freelance project',
    date: '2026-07-10',
  },
  {
    id: 29,
    type: 'expense',
    category: 'food',
    amount: 350,
    description: 'Groceries',
    date: '2026-07-15',
  },

  // August 2026
  {
    id: 30,
    type: 'income',
    category: 'salary',
    amount: 2000,
    description: 'Salary',
    date: '2026-08-01',
  },
  {
    id: 31,
    type: 'expense',
    category: 'housing',
    amount: 800,
    description: 'Rent',
    date: '2026-08-02',
  },
  {
    id: 32,
    type: 'expense',
    category: 'shopping',
    amount: 600,
    description: 'New laptop',
    date: '2026-08-20',
  },

  // September 2026
  {
    id: 33,
    type: 'income',
    category: 'salary',
    amount: 2000,
    description: 'Salary',
    date: '2026-09-01',
  },
  {
    id: 34,
    type: 'expense',
    category: 'food',
    amount: 280,
    description: 'Groceries',
    date: '2026-09-05',
  },
  {
    id: 35,
    type: 'expense',
    category: 'transport',
    amount: 100,
    description: 'Car maintenance',
    date: '2026-09-15',
  },

  // October 2026
  {
    id: 36,
    type: 'income',
    category: 'salary',
    amount: 2000,
    description: 'Salary',
    date: '2026-10-01',
  },
  {
    id: 37,
    type: 'expense',
    category: 'housing',
    amount: 800,
    description: 'Rent',
    date: '2026-10-02',
  },
  {
    id: 38,
    type: 'expense',
    category: 'health',
    amount: 700,
    description: 'Dental treatment',
    date: '2026-10-12',
  },

  // November 2026
  {
    id: 39,
    type: 'income',
    category: 'salary',
    amount: 2000,
    description: 'Salary',
    date: '2026-11-01',
  },
  {
    id: 40,
    type: 'expense',
    category: 'food',
    amount: 320,
    description: 'Groceries',
    date: '2026-11-05',
  },
  {
    id: 41,
    type: 'expense',
    category: 'shopping',
    amount: 1200,
    description: 'New furniture',
    date: '2026-11-20',
  },
];

module.exports = {
  transactions,
};
