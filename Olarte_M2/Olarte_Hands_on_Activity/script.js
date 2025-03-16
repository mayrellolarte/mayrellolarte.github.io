function getFortune() {
    const fortunes = [
        "You will have a great surprise soon!",
        "Be careful of unexpected opportunities.",
        "Someone close to you has good news.",
        "Trust in your abilities, and success will come.",
        "A new adventure is on the horizon!",
        "Something you lost will soon be found."
    ];
    
    let userQuestion = document.getElementById("userQuestion").value.trim();
    if (!userQuestion) {
        document.getElementById("fortune").textContent = "Please enter a question!";
        return;
    }
    
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    document.getElementById("fortune").textContent = fortunes[randomIndex];
}