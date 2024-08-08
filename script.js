const feedbackBtn = document.getElementById('feedbackBtn');

feedbackBtn.addEventListener('click', () => {
    const feedbackInput = document.getElementById('feedbackArea');
    const feedback = feedbackInput.value;
    alert(`Muito obrigado pelo seu Feedback 😊!

        ${feedback}

Nós da GDT sempre buscamos melhorar mais e mais 🚀.`);
});