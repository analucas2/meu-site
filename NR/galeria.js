const imagens = [
  { src: "https://i.pinimg.com/736x/45/59/c7/4559c79d3bf01b7c760eb91efbe5b9e4.jpg", titulo: "", desc: "encontros de alma nem sempre ao sobre casais." },
  { src: "https://i.pinimg.com/736x/05/18/70/051870959ef8c4574433a5de1cf8692f.jpg", titulo: "", desc: "o amor não precisa ser sem cor" },
  { src: "zxzx.jpeg", titulo: "", desc: "família é o..." },
  { src: "mae.jpeg", titulo: "", desc: "coração fora do peito" },
  { src: "https://i.pinimg.com/736x/d7/06/71/d706713e2259fc244454162a45887b6f.jpg", titulo: "", desc: "expressar a alma em forma de amor só faz sentido contigo" },
  { src: "https://i.pinimg.com/736x/fb/3a/94/fb3a9452d9c09dcd7846316d15842dad.jpg", titulo: "", desc: "o audiovisual salva vidas." },
  { src: "https://i.pinimg.com/736x/54/b2/22/54b2227c6363a4211935280442e58a46.jpg", titulo: "", desc: "e aos animais desejo amor, joaquina te ama." },
  { src: "https://i.pinimg.com/736x/15/87/81/158781486c1d7fa1a1293791eb550857.jpg", titulo: "", desc: "rir é um ato de resistência." },
  { src: "https://i.pinimg.com/736x/99/0e/fb/990efb13e136e12fe884d6984b2bf0bc.jpg", titulo: "", desc: "minha alma agradece a existencia da sua,obrigada." }
];

const faixa = document.getElementById("faixa");

imagens.forEach((img) => {
  const div = document.createElement("div");
  div.classList.add("item");

  div.innerHTML = `
    <img src="${img.src}" alt="${img.titulo}">
    <p><strong>${img.titulo}</strong><br>${img.desc}</p>
    <a href="trajetoria.html">Conheça sua história</a>
  `;

 
  const imagemTag = div.querySelector("img");
  imagemTag.style.width = "250px";
  imagemTag.style.height = "250px";
  imagemTag.style.objectFit = "cover";
  imagemTag.style.borderRadius = "12px";

  faixa.appendChild(div);
});

document.querySelector(".seta.esquerda").onclick = () => {
  faixa.scrollBy({ left: -320, behavior: 'smooth' });
};

document.querySelector(".seta.direita").onclick = () => {
  faixa.scrollBy({ left: 320, behavior: 'smooth' });
};
