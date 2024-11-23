// script.js
document.addEventListener('DOMContentLoaded', () => {
    const factText = document.getElementById('fact-text');
    const generateBtn = document.getElementById('generate-btn');

    // Array of random facts
    const facts = [
        "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after just 38 minutes.",
        "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
        "The first oranges weren't orange; they were green.",
        "A day on Venus is longer than its year.",
        "The average person spends 6 months of their lifetime waiting for red lights to turn green."
    ];

    // Function to generate random fact
    function generateFact() {
        const randomIndex = Math.floor(Math.random() * facts.length);
        factText.textContent = facts[randomIndex];
    }

    // Add click event listener to button
    generateBtn.addEventListener('click', generateFact);
});
