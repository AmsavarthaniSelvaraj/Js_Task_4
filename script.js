function sortString(order) {
        let inputElement = document.getElementById("input");
        let outputElement = document.getElementById("para");

        let words = inputElement.value.trim().split(" "); // Split input into words
        
        if (words.length !== 2) {
            outputElement.innerText = "Please enter exactly two words!";
            return;
        }

        // Sorting based on first letter
        words.sort((a, b) => a[0].localeCompare(b[0]));

        if (order === 'desc') {
            words.reverse();
        }

        outputElement.innerText = words.join(" ");
    }

    