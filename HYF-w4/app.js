const {
  addTransaction,
  getTotalIncome,
  getTotalExpenses,
  reduceTotalExpenses,
  getBalance,
  getTransactionsByCategory,
  getLargestExpense,
  getNumberOfExpenses,
  getTransactionsAbove,
  filterTransactionsAbove,
  getExpenseAverage,
  increaseIncomeWithLoop,
  increaseIncomeWithMap,
  printAllTransactions,
  printSummary,
} = require('./finance');

const newTransaction1 = {
  id: 6,
  type: 'expense',
  category: 'transport',
  amount: 50,
  description: 'Train ticket',
  date: '2026-02-05',
};

const newTransaction2 = {
  id: 7,
  type: 'income',
  category: 'salary',
  amount: 2000,
  description: 'Salary',
  date: '2026-03-01',
};

const newTransaction3 = {
  id: 8,
  type: 'expense',
  category: 'health',
  amount: 20000,
  description: 'Hospital',
  date: '2026-04-01',
};

addTransaction(newTransaction1);
addTransaction(newTransaction2);
//addTransaction(newTransaction3);

printAllTransactions();
printSummary();

//console.log(getTransactionsByCategory('housing'));
//console.log(getTransactionsAbove(500));
//console.log(reduceTotalExpenses());
//console.log(getExpenseAverage());
//console.log(increaseIncomeWithLoop());
//console.log(increaseIncomeWithMap());
//console.log(filterTransactionsAbove(1000));
