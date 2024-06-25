function addItem() {
    // Get input values
    var customerName = document.getElementById("customer-name").value;
    var dealerName = document.getElementById("dealer-name").value;
    var itemName = document.getElementById("item-description").value;
    var itemPrice = parseFloat(document.getElementById("item-price").value);
    var itemQuantity = parseInt(document.getElementById("item-quantity").value);

    // Calculate total for this item
    var itemTotal = itemPrice * itemQuantity;

    // Update invoice details
    document.getElementById("invoice-customer-name").textContent = customerName;
    document.getElementById("invoice-dealer-name").textContent = dealerName;
    document.getElementById("invoice-date-time").textContent = getCurrentDateTime();

    // Create a new row in the invoice table
    var newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${document.getElementById("invoice-items").rows.length + 1}</td>
        <td>${itemName}</td>
        <td>$${itemPrice.toFixed(2)}</td>
        <td>${itemQuantity}</td>
        <td class="text-end">$${itemTotal.toFixed(2)}</td>
    `;

    // Append the new row to the invoice table body
    document.getElementById("invoice-items").appendChild(newRow);

    // Update total amount
    updateTotal(itemTotal);
}

function getCurrentDateTime() {
    var now = new Date();
    var dateTimeString = now.toLocaleString('en-US', { timeZone: 'UTC' });
    return dateTimeString;
}

function updateTotal(itemTotal) {
    var currentTotal = parseFloat(document.getElementById("total-amount").innerHTML.replace("$", ""));
    var newTotal = currentTotal + itemTotal;
    document.getElementById("total-amount").innerHTML = `$${newTotal.toFixed(2)}`;
}

function printInvoice() {
    var printContents = document.getElementById("invoice-details-container").innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}
