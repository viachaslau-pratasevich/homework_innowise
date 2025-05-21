// Store expenses in an array
let expenses = [];

// DOM elements
const categoryInput = document.getElementById('category');
const amountInput = document.getElementById('amount');
const addExpenseBtn = document.getElementById('add-expense');
const expensesBody = document.getElementById('expenses-body');
const calculateBtn = document.getElementById('calculate-btn');
const totalExpensesElement = document.getElementById('total-expenses');
const averageDailyElement = document.getElementById('average-daily');
const topExpensesElement = document.getElementById('top-expenses');

// Sample data for testing
const sampleData = [
    { category: 'Groceries', amount: 15000 },
    { category: 'Rent', amount: 40000 },
    { category: 'Transportation', amount: 5000 },
    { category: 'Entertainment', amount: 10000 },
    { category: 'Communication', amount: 2000 },
    { category: 'Gym', amount: 3000 }
];

// Load sample data (can be removed in production)
function loadSampleData() {
    expenses = [...sampleData];
    updateExpenseTable();
}

// Add event listeners
addExpenseBtn.addEventListener('click', addExpense);
calculateBtn.addEventListener('click', calculateExpenses);

// Add a new expense
function addExpense() {
    const category = categoryInput.value.trim();
    const amount = parseFloat(amountInput.value);
    
    if (category === '' || isNaN(amount) || amount <= 0) {
        alert('Please enter valid category and amount');
        return;
    }
    
    expenses.push({ category, amount });
    
    // Clear inputs
    categoryInput.value = '';
    amountInput.value = '';
    
    // Update the table
    updateExpenseTable();
}

// Update the expense table
function updateExpenseTable() {
    // Clear the current table
    expensesBody.innerHTML = '';
    
    // Add each expense to the table
    expenses.forEach((expense, index) => {
        const row = document.createElement('tr');
        
        const categoryCell = document.createElement('td');
        categoryCell.textContent = expense.category;
        
        const amountCell = document.createElement('td');
        amountCell.textContent = formatCurrency(expense.amount);
        
        const actionCell = document.createElement('td');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => {
            deleteExpense(index);
        });
        
        actionCell.appendChild(deleteBtn);
        
        row.appendChild(categoryCell);
        row.appendChild(amountCell);
        row.appendChild(actionCell);
        
        expensesBody.appendChild(row);
    });
}

// Delete an expense
function deleteExpense(index) {
    expenses.splice(index, 1);
    updateExpenseTable();
}

// Calculate and display expense statistics
function calculateExpenses() {
    if (expenses.length === 0) {
        alert('Please add some expenses first');
        return;
    }
    
    // Calculate total expenses
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    
    // Calculate average daily expense (assuming 30 days per month)
    const averageDaily = total / 30;
    
    // Find top 3 largest expenses
    const sortedExpenses = [...expenses].sort((a, b) => b.amount - a.amount);
    const top3 = sortedExpenses.slice(0, 3);
    
    // Display results
    totalExpensesElement.textContent = formatCurrency(total);
    averageDailyElement.textContent = formatCurrency(averageDaily);
    
    // Display top 3 expenses
    topExpensesElement.innerHTML = '';
    top3.forEach(expense => {
        const listItem = document.createElement('li');
        listItem.textContent = `${expense.category}: ${formatCurrency(expense.amount)}`;
        topExpensesElement.appendChild(listItem);
    });
}

// Format currency
function formatCurrency(amount) {
    return '$' + amount.toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    });
}

// Initialize the app with sample data for demonstration
document.addEventListener('DOMContentLoaded', loadSampleData); 