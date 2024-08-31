//your JS code here. If required.
 function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        // Async function to handle the form submission and display the text after delay
        async function displayTextAfterDelay() {
            // Retrieve user input
            const text = document.getElementById('text').value;
            const delayTime = parseInt(document.getElementById('delay').value, 10);

            // Await the specified delay
            await delay(delayTime);

            // Display the text in the output div
            document.getElementById('output').innerText = text;
        }

        // Event listener for the button click
        document.getElementById('btn').addEventListener('click', displayTextAfterDelay);
   