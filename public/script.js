const utc = document.querySelector("#utc");
const unix = document.querySelector("#unix");
const text = document.querySelector("#text");

 
(async () => {
    try {
        const resp = await fetch("http://127.0.0.1:3000/api/");
        const data = await resp.json();
        const utcD = new Date(data.utc).toLocaleDateString().replace(/\//g, '-')
        utc.innerText = `${data.host}/api/${utcD}`;
        unix.innerText = `${data.host}/api/${data.unix}`;
        text.innerText = `{"unix": ${data.unix}, "utc":"${data.utc}"}`
        utc.setAttribute('href', `http://127.0.0.1:3000/api/${utcD}`);
        unix.setAttribute('href', `http://127.0.0.1:3000/api/${data.unix}`);
         
    } catch (error) {
        console.error(error.message)
    }

})();

 