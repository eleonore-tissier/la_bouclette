// Purpose: Include header and footer in all pages

fetch("utils/header.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("nav").innerHTML = data;
    });

fetch("utils/footer.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("footer").innerHTML = data;
    });

fetch("utils/aside-bar.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("aside").innerHTML = data;
    });