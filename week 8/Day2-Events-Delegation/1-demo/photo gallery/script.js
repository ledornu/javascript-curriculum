const btnElem = document.getElementById("loadBtn");
const gallerysection = document.getElementById("gallery-box");



//create a function to fetch the data from the api endpoint

async function loadphotos() {
    // when we don't have our data yet, we want to display  "loading"
    gallerysection.innerHTML = "<p>loading...</p>";

    try {
        const response = await fetch("https://jsonplaceholder.typeicode.com/photos");

        if(!response.ok) {
            throw new error("server error:" + response.status);
            
        }

        const photos = await response.json();
        console.log(photos);

        const gallerycard = photos.map((photos)=> {
            return `
            <div class="card">
            <h3> ${photos.albumId}. ${photos.title}</h3>
            <img src="${photos.url}" alt"">
            </div>
            `

        }).join("");

        gallerysection.innerHTML = gallerycard;
    } catch (error) {
        gallerysection.innerHTML = `<p>something went wrong: ${error.message}</p>`
    }
}

// attach event listener ton the load Gallery button
btnElem.addEventListener("click", loadphotos);