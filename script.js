function handleFormSubmit(event) {
    event.preventDefault();
    const amount = event.target.amount.value;
    const name = event.target.name.value;
    const select = event.target.select.value;
    const details = {
        'amount': amount,
        'name': name,
        'select': select
    };
    const detailstring = JSON.stringify(details);
    localStorage.setItem(amount, detailstring);

    const list = document.getElementById('expense-list');
    const item = document.createElement('li');
    item.textContent = `${amount}-${name}-${select}`;

    const deleteBtn = document.createElement('button'); // Create delete button
    deleteBtn.textContent = 'Delete expense'; // Set delete button text
    item.appendChild(deleteBtn); // Append delete button to the list item

    list.appendChild(item); // Append the list item to the expense list

    list.appendChild(item);
    const editBtn = document.createElement('button'); // Create edit button
    editBtn.textContent = 'Edit expense'; // Set edit button text
    item.appendChild(editBtn); // Append edit button to the list item

    // Delete functionality
    deleteBtn.addEventListener('click', function(event) {
        item.remove();
        localStorage.removeItem(amount);
    });
    
    // Edit functionality
    editBtn.addEventListener('click', function(event) {
        // Remove item from the list
        item.remove();
        // Remove item from local storage
        localStorage.removeItem(amount);
        // Populate the form fields with existing values
        document.getElementById('expense-amount').value = details.amount;
        document.getElementById('expense-name').value = details.name;
        document.getElementById('categorys').value = details.select;
    });

    // Clear input fields
    event.target.amount.value = '';
    event.target.name.value = '';
    event.target.select.value = '';
}

