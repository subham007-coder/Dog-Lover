let btn = document.querySelector("#clickForResult");

let result = document.querySelector("#res")

let url = "https://dog.ceo/api/breeds/image/random";

async function getRquest() {
    try {
        let res = await axios(url);
        console.log(res.data.message);
        return res.data.message;
    } catch (err) {
        console.log(`Error is ${err}`);
        result.innerHTML = `<h1>Page Not Found</h1>${err}`;
    }
}

btn.addEventListener("click", async () => {
    let link = await getRquest();

    result.setAttribute("src", link);
})