document.addEventListener('DOMContentLoaded', () => {
    const budgetList = document.getElementById('budget-list');
    const saveBtn = document.getElementById('saveBtn');
    const nameInput = document.getElementById('name');
    const incomeInput = document.getElementById('income');
    const expensesInput = document.getElementById('expenses');
    const categorySelect = document.getElementById('category');

    let budgets = JSON.parse(localStorage.getItem('budgets')) || [];
    let editIndex = null;

    // Formato de moneda
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
        }).format(value);
    };

    function displayBudgets() {
        budgetList.innerHTML = '';
        budgets.forEach((budget, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="category">${budget.category}</div>
                <h4>${budget.name}</h4>
                <p>Ingresos: ${formatCurrency(budget.income)}</p>
                <p>Gastos: ${formatCurrency(budget.expenses)}</p>
                <button class="edit-btn" data-index="${index}">Editar</button>
                <button class="delete-btn" data-index="${index}">Eliminar</button>
            `;
            budgetList.appendChild(li);
        });

        // Añadir eventos de eliminar y editar
        const editBtns = document.querySelectorAll('.edit-btn');
        const deleteBtns = document.querySelectorAll('.delete-btn');

        editBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                const budget = budgets[index];
                nameInput.value = budget.name;
                incomeInput.value = budget.income;
                expensesInput.value = budget.expenses;
                categorySelect.value = budget.category;
                saveBtn.textContent = 'Actualizar Presupuesto';
                editIndex = index;
            });
        });

        deleteBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                budgets.splice(index, 1);
                localStorage.setItem('budgets', JSON.stringify(budgets));
                displayBudgets();
            });
        });
    }

    saveBtn.addEventListener('click', () => {
        const name = nameInput.value.trim();
        const income = parseFloat(incomeInput.value.replace(/[^\d.-]/g, ''));
        const expenses = parseFloat(expensesInput.value.replace(/[^\d.-]/g, ''));
        const category = categorySelect.value;

        if (!name || isNaN(income) || isNaN(expenses)) {
            alert('Por favor, llena todos los campos correctamente.');
            return;
        }

        const newBudget = { name, income, expenses, category };

        if (editIndex === null) {
            budgets.push(newBudget);
        } else {
            budgets[editIndex] = newBudget;
            editIndex = null;
            saveBtn.textContent = 'Guardar Presupuesto';
        }

        localStorage.setItem('budgets', JSON.stringify(budgets));
        displayBudgets();
        nameInput.value = '';
        incomeInput.value = '';
        expensesInput.value = '';
        categorySelect.value = 'hogar';
    });

    displayBudgets();
});
