function calculateInstallment() {
    const amount = parseFloat(document.getElementById('amount').value);
    const phone = document.getElementById('phone').value;

    // Ensure amount is valid
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    // Adding tax
    const kokoTaxRate = 0.13;
    const totalWithTax = amount + (amount * kokoTaxRate);
    const installment = totalWithTax / 3; // 3 installments

    // Show installment details inside #result
    document.getElementById('result').innerHTML = `
        <p><strong>TOTAL WITH KOKO CHARGE:</strong> LKR. ${totalWithTax.toFixed(2)}</p>
        <p><strong>3 Monthly Payments</strong></p>
        <p>1 MONTH PAYMENT: LKR. ${installment.toFixed(2)}</p>
        <p>2 MONTH PAYMENT: LKR. ${installment.toFixed(2)}</p>
        <p>3 MONTH PAYMENT: LKR. ${installment.toFixed(2)}</p>
    `;

    // Show installment details div
    document.getElementById('installment-details').style.display = 'block';

    // Show checkout button
    document.getElementById('checkout').style.display = 'block';
}

function sendOrderDetails() {
    const amount = parseFloat(document.getElementById('amount').value);
    const phone = document.getElementById('phone').value;

    // Ensure the amount is valid and Koko Number is provided
    if (isNaN(amount) || amount <= 0 || !phone) {
        alert("Please fill in all fields before proceeding.");
        return;
    }

    // Adding tax
    const kokoTaxRate = 0.14;
    const totalWithTax = amount + (amount * kokoTaxRate);
    const installment = totalWithTax / 3;

    // Construct the WhatsApp message
    const message = `
        Order Details:
        Total Amount: LKR. ${totalWithTax.toFixed(2)}
        3 Monthly Payments:
        Payment 1: LKR. ${installment.toFixed(2)}
        Payment 2: LKR. ${installment.toFixed(2)}
        Payment 3: LKR. ${installment.toFixed(2)}
        Koko Number: ${phone}
    `;
    
    // Encode the message to make sure special characters are handled properly
    const encodedMessage = encodeURIComponent(message.trim());

    // WhatsApp link to send the message
    const whatsappLink = `https://wa.me/94750284359?text=${encodedMessage}`;

    // Open the WhatsApp link in a new tab
    window.open(whatsappLink, '_blank');
}
