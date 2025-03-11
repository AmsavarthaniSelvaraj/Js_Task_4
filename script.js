function sortString(order) {
        let inputElement = document.getElementById("input");
        let outputElement = document.getElementById("para");

        let words = inputElement.value.trim().split(" "); 
        
        if (words.length !== 2) {
            outputElement.innerText = "Please enter exactly two words!";
            return;
        }
        words.sort((a, b) => a[0].localeCompare(b[0]));

        if (order === 'desc') {
            words.reverse();
        }

        outputElement.innerText = words.join(" ");
    }

    