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

//Filter by category, using a loop
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

//Extra: Filter above amount, using a loop
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

//Extra: return a new array with a 20% increase applied to every income amount, using map()
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

//Bonus: Search transactions by date range using slice()
function getTransactionsByDateRange1(startDate, endDate) {
  const startIndex = transactions.findIndex(
    (transaction) => transaction.date >= startDate,
  );

  const endIndex = transactions.findIndex(
    (transaction) => transaction.date > endDate,
  );

  return transactions.slice(
    startIndex,
    endIndex === -1 ? transactions.length : endIndex,
  );
}

//Extra: Search transactions by date range using filter()
function getTransactionsByDateRange2(startDate, endDate) {
  return transactions.filter(
    (transaction) =>
      transaction.date >= startDate && transaction.date <= endDate,
  );
}

//Bonus: Group transactions by month using nested objects
function getTransactionsByMonth() {
  const groupedTransactions = {};

  for (const transaction of transactions) {
    const month = transaction.date.slice(0, 7);

    if (!groupedTransactions[month]) {
      groupedTransactions[month] = {
        income: [],
        expenses: [],
      };
    }

    if (transaction.type === 'income') {
      groupedTransactions[month].income.push(transaction);
    } else {
      groupedTransactions[month].expenses.push(transaction);
    }
  }

  return groupedTransactions;
}

//Bonus: Calculate average expense per category
function getAverageExpensePerCategory() {
  const categoryTotals = {};

  for (const transaction of transactions) {
    if (transaction.type === 'expense') {
      const category = transaction.category;

      if (!categoryTotals[category]) {
        categoryTotals[category] = {
          total: 0,
          count: 0,
        };
      }

      categoryTotals[category].total += transaction.amount;
      categoryTotals[category].count++;
    }
  }

  const categoryAverages = {};

  for (const category in categoryTotals) {
    categoryAverages[category] =
      categoryTotals[category].total / categoryTotals[category].count;
  }

  return categoryAverages;
}

//Bonus: Add ability to remove transactions by id
function removeTransactionById(id) {
  const index = transactions.findIndex((transaction) => transaction.id === id);

  if (index === -1) {
    return false;
  }

  transactions.splice(index, 1);

  return true;
}

//Bonus: Create a function that finds consecutive expensive months (use while loop)
function findConsecutiveExpensiveMonths(threshold) {
  const monthlyExpenses = {};

  // Calculate total expenses per month
  for (const transaction of transactions) {
    if (transaction.type === 'expense') {
      const month = transaction.date.slice(0, 7);

      if (!monthlyExpenses[month]) {
        monthlyExpenses[month] = 0;
      }

      monthlyExpenses[month] += transaction.amount;
    }
  }

  const months = Object.keys(monthlyExpenses).sort();

  const result = [];
  let currentGroup = [];
  let i = 0;

  while (i < months.length) {
    const month = months[i];
    const total = monthlyExpenses[month];

    if (total > threshold) {
      // Check whether this month follows the previous month
      if (currentGroup.length > 0) {
        const previousMonth = currentGroup[currentGroup.length - 1].month;

        const previousDate = new Date(`${previousMonth}-01`);
        const currentDate = new Date(`${month}-01`);

        const isConsecutive =
          (currentDate.getFullYear() === previousDate.getFullYear() &&
            currentDate.getMonth() === previousDate.getMonth() + 1) ||
          (currentDate.getFullYear() === previousDate.getFullYear() + 1 &&
            previousDate.getMonth() === 11 &&
            currentDate.getMonth() === 0);

        if (!isConsecutive) {
          if (currentGroup.length >= 2) {
            result.push(currentGroup);
          }

          currentGroup = [];
        }
      }

      currentGroup.push({
        month,
        totalExpenses: total,
      });
    } else {
      if (currentGroup.length >= 2) {
        result.push(currentGroup);
      }

      currentGroup = [];
    }

    i++;
  }

  // Don't forget the final group
  if (currentGroup.length >= 2) {
    result.push(currentGroup);
  }

  return result;
}

module.exports = {
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
};
