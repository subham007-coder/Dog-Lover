let btn = document.querySelector("#clickForResult");

let result = document.querySelector("#res")

let url = "https://dog.ceo/api/breeds/image/random";

async function getRquest(){
    try {
        let res = await axios(url);
        console.log(res.data.message
            );
        result.innerHTML += `${res.data.message} <br> <br>`;
    } catch (err) {
        console.log(`Error is ${err}`);
        result.innerHTML = `<h1>Page Not Found</h1>${err}`;
    }
}

btn.addEventListener("click", () => {
    getRquest();
})