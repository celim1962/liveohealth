document.addEventListener("DOMContentLoaded", async() => {

    let componentPath =window.location.pathname.endsWith("index.html")? './':'../';
    let linkPath = (
      window.location.pathname.endsWith("index.html")||
    window.location.pathname=='/')? './Content/':'./';


    await includeHTML("marquee", componentPath+"marquee.html");
    await includeHTML("header", componentPath+"header.html");
    await includeHTML("footer", componentPath+"footer.html");

    document.getElementById('home').href = componentPath + 'index.html';

    await document.querySelectorAll('.menu-item').forEach(element => {
        if(element.querySelector('a')!=null){
        element.querySelector('a').href = linkPath + element.querySelector('a').getAttribute('href').split('/').pop();
      }
    });


    let allLink = document.getElementById('linkToProd')
    Array.from(allLink.children).forEach(link=>{
      link.addEventListener('click',el=>{
        window.location.href= linkPath+ link.getAttribute('data-name')+'.html'
      })
    }) 

    await setupFooterImage(); 


        const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const icon = toggle.querySelector("i");

    toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
    });

})


async function includeHTML(id, file) {
    const res = await fetch(file);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
}

function setupFooterImage() {
  const img = document.getElementById("qrCodeImg");
  if (!img) return console.error("❌ 找不到 qrCodeImg");

  const imgUrl = window.location.pathname.endsWith("index.html")
    ? "./img/qrcode.jpg"
    : "../img/qrcode.jpg";

  img.src = imgUrl;
}
