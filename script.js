const API_KEY = "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"; // Replace with your API key

document.getElementById("interpretBtn").addEventListener("click", async function() {
    let dream = document.getElementById("dreamInput").value;
    if (!dream) {
        alert("Please enter a dream.");
        return;
    }

    document.getElementById("result").innerText = "Interpreting your dream...";

    try {
        let response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo", 
                messages: [{role: "user", content: `Interpret this dream: ${dream}`}],
                max_tokens: 200
            })
        });

        let data = await response.json();
        document.getElementById("result").innerText = data.choices[0].message.content;
    } catch (error) {
        document.getElementById("result").innerText = "Error: Unable to interpret the dream.";
    }
});
