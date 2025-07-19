const form = document.getElementById('form');
const nomeInput = document.getElementById('nome');
const mensagemInput = document.getElementById('mensagem');
const mensagensDiv = document.getElementById('mensagens');

let mensagens = JSON.parse(localStorage.getItem('mensagens')) || [];
let editIndex = -1;

function salvarLocalStorage() {
  localStorage.setItem('mensagens', JSON.stringify(mensagens));
}

function criarMensagemHTML(mensagemObj, index) {
  const div = document.createElement('div');
  div.className = 'mensagem';

  div.innerHTML = `
    <h3>${mensagemObj.nome}</h3>
    <p>${mensagemObj.texto.replace(/\n/g, '<br>')}</p>
    <div class="actions">
      <button title="Editar" aria-label="Editar" data-index="${index}" class="btn-editar">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 000-1.42l-2.34-2.34a1.003 1.003 0 00-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z"/>
        </svg>
      </button>
      <button title="Apagar" aria-label="Apagar" data-index="${index}" class="btn-apagar">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-4.5l-1-1z"/>
        </svg>
      </button>
    </div>
  `;

  return div;
}

function renderizarMensagens() {
  mensagensDiv.innerHTML = '';
  mensagens.forEach((msg, i) => {
    const mensagemHTML = criarMensagemHTML(msg, i);
    mensagensDiv.appendChild(mensagemHTML);
  });

  document.querySelectorAll('.btn-editar').forEach(btn => {
    btn.addEventListener('click', e => {
      const idx = e.currentTarget.dataset.index;
      editarMensagem(idx);
    });
  });

  document.querySelectorAll('.btn-apagar').forEach(btn => {
    btn.addEventListener('click', e => {
      const idx = e.currentTarget.dataset.index;
      apagarMensagem(idx);
    });
  });
}

function editarMensagem(index) {
  const msg = mensagens[index];
  nomeInput.value = msg.nome;
  mensagemInput.value = msg.texto;
  editIndex = index;
  form.querySelector('button[type="submit"]').textContent = 'Salvar';
  nomeInput.focus();
}

function apagarMensagem(index) {
  if (confirm('Tem certeza que deseja apagar esta mensagem?')) {
    mensagens.splice(index, 1);
    salvarLocalStorage();
    renderizarMensagens();
    if (editIndex === index) {
      form.reset();
      editIndex = -1;
      form.querySelector('button[type="submit"]').textContent = 'Enviar';
    }
  }
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const nome = nomeInput.value.trim();
  const texto = mensagemInput.value.trim();

  if (!nome || !texto) {
    alert('Por favor, preencha nome e mensagem.');
    return;
  }

  if (editIndex >= 0) {
    mensagens[editIndex] = { nome, texto };
    editIndex = -1;
    form.querySelector('button[type="submit"]').textContent = 'Enviar';
  } else {
    mensagens.push({ nome, texto });
  }

  salvarLocalStorage();
  renderizarMensagens();
  form.reset();
  nomeInput.focus();
});

// Ao carregar a página já mostra as mensagens salvas
renderizarMensagens();
