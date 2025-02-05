document.getElementById("interpretBtn").addEventListener("click", async function() {
    let dream = document.getElementById("dreamInput").value;
    if (!dream) {
        alert("Please enter a dream.");
        return;
    }

    let response = await fetch(`https://free.chatai.com/interpret?text=${encodeURIComponent(dream)}`);
    let data = await response.json();

    document.getElementById("result").innerText = data.interpretation || "Sorry, could not interpret your dream.";
});

