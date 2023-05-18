//Dinamik olarak eleent oluşturmak
const cardBody = document.querySelectorAll(".card-body") [1];


const link = document.createElement("a");
link.id = "WebSite";
link.className = "btn btn-dark btn-sm mt-3";
link.href = "https://www.google.com.tr/?hl=tr";
link.target = "_blank";
link.innerHTML = "Google";

cardBody.appendChild(link);

console.log(link);