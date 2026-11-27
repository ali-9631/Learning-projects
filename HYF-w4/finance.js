const { transactions } = require('./data');

//Add new transaction
function addTransaction(newTransaction) {
  transactions.push(newTransaction);
}

//Sum all income
function getTotalIncome() {
  let totalIncome = 0;

  for (const { type, amount } of transactions) {
    if (type === 'income') {
      totalIncome += amount;
    }
  }

  return totalIncome;
}

//Sum all expenses
function getTotalExpenses() {
  let totalExpenses = 0;

  for (const { type, amount } of transactions) {
    if (type === 'expense') {
      totalExpenses += amount;
    }
  }

  return totalExpenses;
}

//Sum all expenses, using reduce()
function reduceTotalExpenses() {
  return transactions.reduce((total, transaction) => {
    if (transaction.type === 'expense') {
      return total + transaction.amount;
    }

    return total;
  }, 0);
}

//Calculate Balance
function getBalance() {
  return getTotalIncome() - getTotalExpenses();
}

//Filter by category
function getTransactionsByCategory(category) {
  const filteredTransactions = [];

  for (const transaction of transactions) {
    if (transaction.category === category) {
      filteredTransactions.push(transaction);
    }
  }

  return filteredTransactions;
}

//Find highest expense amount
function getLargestExpense() {
  let largestExpense = null;

  for (const transaction of transactions) {
    if (
      transaction.type === 'expense' &&
      (largestExpense === null || transaction.amount > largestExpense.amount)
    ) {
      largestExpense = transaction;
    }
  }

  return largestExpense;
}

//Extra: number of expenses
function getNumberOfExpenses() {
  let number = 0;

  for (const { type } of transactions) {
    if (type === 'expense') {
      number++;
    }
  }

  return number;
}

//Extra: Filter above amount
function getTransactionsAbove(amount) {
  let filtered = [];

  for (const transaction of transactions) {
    if (transaction.amount > amount) {
      filtered.push(transaction);
    }
  }
  return filtered;
}

//Extra: Filter above amount, using filter()
function filterTransactionsAbove(amount) {
  return transactions.filter((transaction) => transaction.amount > amount);
}

//Extra: Average expense amount
function getExpenseAverage() {
  const numberOfExpenses = getNumberOfExpenses();

  if (numberOfExpenses === 0) {
    return 0;
  }

  return getTotalExpenses() / numberOfExpenses;
}

//Extra: return a new array with a 10% increase applied to every income amount
function increaseIncomeWithLoop() {
  let increased = [];

  for (const transaction of transactions) {
    if (transaction.type === 'income') {
      const newTransaction = {
        ...transaction,
        amount: transaction.amount * 1.1,
      };
      increased.push(newTransaction);
    } else {
      increased.push({ ...transaction });
    }
  }

  return increased;
}

//Extra: returns a new array with a 20% increase applied to every income amount, using map()
function increaseIncomeWithMap() {
  return transactions.map((transaction) => {
    if (transaction.type === 'income') {
      return {
        ...transaction,
        amount: transaction.amount * 1.2,
      };
    }

    return { ...transaction };
  });
}

//Display all transaction with formatting
const chalk = require('chalk');

function printAllTransactions() {
  console.log(chalk.bold('💰 PERSONAL FINANCE TRACKER 💰'));
  console.log('\nAll Transactions:');

  for (const transaction of transactions) {
    const type = transaction.type.toUpperCase();

    const amount =
      transaction.type === 'income'
        ? chalk.green(`€${transaction.amount}`)
        : chalk.red(`€${transaction.amount}`);

    const category = chalk.yellow(transaction.category);

    console.log(
      `${transaction.id}. [${type}] ${transaction.description} - ${amount} (${category})`,
    );
  }
}

//Summary report
function printSummary() {
  const income = getTotalIncome();
  const expenses = getTotalExpenses();
  const balance = getBalance();
  const largestExpense = getLargestExpense();
  const numberOfTransactions = transactions.length;

  console.log('\n' + chalk.bold('📊 FINANCIAL SUMMARY'));

  console.log(chalk.bold(`Total Income: ${chalk.green(`€${income}`)}`));

  console.log(chalk.bold(`Total Expenses: ${chalk.red(`€${expenses}`)}`));

  const coloredBalance =
    balance >= 0 ? chalk.cyan(`€${balance}`) : chalk.red(`€${balance}`);

  console.log(chalk.bold(`Balance: ${coloredBalance}`));

  console.log(chalk.bold(`\nNumber of Transactions: ${numberOfTransactions}`));

  if (largestExpense !== null) {
    console.log(
      chalk.bold(
        `Largest Expense: €${largestExpense.amount} - ${largestExpense.description}`,
      ),
    );
  } else {
    console.log('Largest Expense: No expenses found');
  }
}

module.exports = {
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
};
