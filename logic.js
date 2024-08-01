const apiKey = "lMa4HCwcNr1aiVmcmDr923MER8tMlqjP4rZgLuO4";

async function fetchData() {
    try {
        const response = await fetch("https://9rgowe66uj.execute-api.us-east-1.amazonaws.com/prod/visitor", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": apiKey
            },
            body: JSON.stringify({ table: "visitor_table", operation: "get" })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();

        // Parse the 'body' field which is a JSON string
        const parsedBody = JSON.parse(data.body);

        // Update the visitor count in the HTML element
        document.getElementById('visitors').innerText = parsedBody.new_count;
    } catch (error) {
        console.error('Fetch error:', error);
        document.getElementById('visitors').innerText = 'Fetch error: ' + error.message;
    }
}

fetchData();
