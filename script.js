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
