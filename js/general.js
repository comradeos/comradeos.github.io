function readFile(file) {
    fetch(file)
        .then(response => response.text())
        .then(textString => {
            document.getElementById('header').innerHTML = textString;
        });
}

// readFile('./test.html');