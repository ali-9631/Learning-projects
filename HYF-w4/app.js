const {
  transactions,
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
  getTransactionsByDateRange1,
  getTransactionsByDateRange2,
  getTransactionsByMonth,
  getAverageExpensePerCategory,
  removeTransactionById,
  findConsecutiveExpensiveMonths,
} = require('./finance');

const newTransaction1 = {
  id: 42,
  type: 'expense',
  category: 'transport',
  amount: 50,
  description: 'Train ticket',
  date: '2026-11-21',
};

const newTransaction2 = {
  id: 43,
  type: 'income',
  category: 'salary',
  amount: 2000,
  description: 'Salary',
  date: '2026-11-22',
};

addTransaction(newTransaction1);
addTransaction(newTransaction2);

//printAllTransactions();
//printSummary();

//console.log(findConsecutiveExpensiveMonths(400));
//console.log(removeTransactionById(8));
//console.log(getAverageExpensePerCategory());
//console.log(getTransactionsByMonth());
//console.dir(getTransactionsByMonth(), { depth: null });
//console.log(getTransactionsByDateRange1('2026-11-01', '2026-11-25'));
//console.log(getTransactionsByDateRange2('2026-11-01', '2026-11-25'));
//console.log(getTransactionsByCategory('housing'));
//console.log(filterTransactionsAbove(1000));
//console.log(getTransactionsAbove(500));
//console.log(increaseIncomeWithLoop());
//console.log(increaseIncomeWithMap());
//console.log(reduceTotalExpenses());
//console.log(getExpenseAverage());
