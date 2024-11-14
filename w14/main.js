function renderPhotos(photos) {
    photos.forEach((img) => {
        const imgEl = document.createElement("img");
        imgEl.setAttribute("src", img.thumbnailUrl);
        document.getElementById("output").appendChild(imgEl);
    });
}

async function getPhotos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos')
        const data = await response.json();
        if (response.status === 200) {
            console.log('Success', data)
        } else {
            console.log('Server Error', data.error.message)
        }
    } catch (error) {
        console.log('Error', error)
    }
}

async function start() {
    getPhotos()
}

function onSuccess(photos) {
    renderPhotos(photos)
}

function onError(error) {
    console.log('Error:', error )
}

start();
