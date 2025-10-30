async function includeHTML(id, file) {
    const res = await fetch(file);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
}

document.addEventListener("DOMContentLoaded", async() => {

    let componentPath =window.location.pathname.endsWith("index.html")? './':'../';
    let linkPath = window.location.pathname.endsWith("index.html")? './Content/':'./';


    await includeHTML("marquee", componentPath+"marquee.html");
    await includeHTML("header", componentPath+"header.html");
    await includeHTML("footer", componentPath+"footer.html");

    document.getElementById('home').href = componentPath + 'index.html';

    await document.querySelectorAll('.menu-item').forEach(element => {
      element.querySelector('a').href = linkPath + element.querySelector('a').getAttribute('href').split('/').pop();
    });

    


    await setupFooterImage(); 


})


function setupFooterImage() {
  const img = document.getElementById("qrCodeImg");
  if (!img) return console.error("❌ 找不到 qrCodeImg");

  const imgUrl = window.location.pathname.endsWith("index.html")
    ? "./img/qrcode.jpg"
    : "../img/qrcode.jpg";

  img.src = imgUrl;
}
