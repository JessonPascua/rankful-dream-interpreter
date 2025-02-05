document.getElementById("interpretBtn").addEventListener("click", function() {
    let dream = document.getElementById("dreamInput").value;
    if (!dream) {
        alert("Please enter a dream.");
        return;
    }

    let chatGPTUrl = `https://chat.openai.com/?prompt=${encodeURIComponent("Interpret this dream: " + dream)}`;
    
    window.open(chatGPTUrl, "_blank");
});
