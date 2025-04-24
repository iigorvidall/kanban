let cardsData = JSON.parse(localStorage.getItem("kanbanCards")) || [];

function salvarNoStorage() {
  localStorage.setItem("kanbanCards", JSON.stringify(cardsData));
}

function gerarID() {
  return '_' + Math.random().toString(36).substr(2, 9);
}


function inserirCard(selector, dados = null) {
  const cardsInsert = document.querySelector(selector);

  const id = dados?.id || gerarID();
  const tarefa = dados?.tarefa || document.getElementById('inputTarefa').value;
  const prioridade = dados?.prioridade || document.getElementById('dropDown_prioridade').value;
  const estado = dados?.estado || document.getElementById('dropDown_estado').value;

  let prioridadeTexto = {
    low: 'baixa prioridade',
    medium: 'média prioridade',
    high: 'alta prioridade'
  }[prioridade];

  cardsInsert.insertAdjacentHTML("beforeend", `
    <div class="kanban-card" draggable="true" data-id="${id}">
      <button class="btn-remover" title="Remover card"><i class="fa-solid fa-trash"></i></button>
      <div class="badge ${prioridade}"><span>${prioridadeTexto}</span></div>
      <p class="card-title">${tarefa}</p>
      <div class="card-infos">
        <div class="card-icons">
          <p><i class="fa-solid fa-comment"></i> 1</p>
          <p><i class="fa-solid fa-paperclip"></i> 1</p>
        </div>
        <div class="user">
          <img src="${dados?.usuarioImg || 'https://github.com/iigorvidall.png'}" alt="Perfil">
        </div>
      </div>
    </div>
  `);

  if (!dados) {
    cardsData.push({ id, tarefa, prioridade, estado });
    salvarNoStorage();
  }

  adicionarEventosDrag();
  adicionarEventoRemover();
  modalCard.close();
  limparInputs();
}

function limparInputs() {
  document.getElementById('inputTarefa').value = '';
  document.getElementById('dropDown_prioridade').value = 'low';
  document.getElementById('dropDown_estado').value = 'pendente';
}


function adicionarEventosDrag() {
  document.querySelectorAll('.kanban-card').forEach(card => {
    card.addEventListener('dragstart', e => {
      e.currentTarget.classList.add('dragging');
    });
    card.addEventListener('dragend', e => {
      e.currentTarget.classList.remove('dragging');
    });
  });
}

document.querySelectorAll('.kanban-cards').forEach(column => {
  column.addEventListener('dragover', e => {
    e.preventDefault();
    e.currentTarget.classList.add('cards-hover');
  });

  column.addEventListener('dragleave', e => {
    e.currentTarget.classList.remove('cards-hover');
  });

  column.addEventListener('drop', e => {
    e.preventDefault();
    e.currentTarget.classList.remove('cards-hover');

    const dragCard = document.querySelector('.kanban-card.dragging');
    if (dragCard) {
      e.currentTarget.appendChild(dragCard);

      const novoEstado = e.currentTarget.dataset.estado;
      const id = dragCard.dataset.id;
      const card = cardsData.find(c => c.id === id);
      if (card) {
        card.estado = novoEstado;
        salvarNoStorage();
      }
    }
  });
});


function adicionarEventoRemover() {
  document.querySelectorAll('.btn-remover').forEach(button => {
    button.addEventListener('click', (e) => {
      const card = e.target.closest('.kanban-card');
      if (card) {
        const id = card.dataset.id;
        card.remove();
        cardsData = cardsData.filter(c => c.id !== id);
        salvarNoStorage();
      }
    });
  });
}


document.querySelectorAll('.add_card').forEach(button => {
  button.addEventListener('click', () => {
    const column = button.closest('.kanban-column');
    modalCard.showModal();
    document.getElementById('fecharModal').addEventListener('click', () => {
      modalCard.close();
    });
  });
});

document.getElementById('inserirModal').addEventListener('click', () => {
  const estado = document.getElementById('dropDown_estado').value;

  const mapaEstado = {
    'pendente': '.kanban1_pendente',
    'front-end': '.kanban2 .kanban-cards',
    'back-end': '.kanban3 .kanban-cards',
    'teste': '.kanban4 .kanban-cards',
    'concluido': '.kanban5 .kanban-cards'
  };

  inserirCard(mapaEstado[estado]);
});

function carregarCardsSalvos() {
  const mapaEstado = {
    'pendente': '.kanban1_pendente',
    'front-end': '.kanban2 .kanban-cards',
    'back-end': '.kanban3 .kanban-cards',
    'teste': '.kanban4 .kanban-cards',
    'concluido': '.kanban5 .kanban-cards'
  };


  if (cardsData.length === 0) {
    const iniciais = [
      {
        id: gerarID(),
        tarefa: "Revisar metas do trimestre",
        prioridade: "high",
        estado: "pendente",
        usuarioImg: "https://github.com/VidalsHugo.png"
      },
      {
        id: gerarID(),
        tarefa: "Atualizar planilhas de orçamento",
        prioridade: "low",
        estado: "pendente",
        usuarioImg: "https://github.com/S4t8rn0.png"
      },
      {
        id: gerarID(),
        tarefa: "Organizar arquivos na nuvem",
        prioridade: "medium",
        estado: "pendente"
      },
      {
        id: gerarID(),
        tarefa: "Revisar documento do projeto",
        prioridade: "medium",
        estado: "pendente",
        usuarioImg: "https://github.com/S4t8rn0.png"
      },
      {
        id: gerarID(),
        tarefa: "Enviar e-mails pendentes",
        prioridade: "low",
        estado: "front-end"
      },
      {
        id: gerarID(),
        tarefa: "Revisar documento do projeto",
        prioridade: "low",
        estado: "front-end",
        usuarioImg: "https://github.com/VidalsHugo.png"
      },
      {
        id: gerarID(),
        tarefa: "Enviar e-mails pendentes",
        prioridade: "high",
        estado: "back-end",
        usuarioImg: "https://github.com/S4t8rn0.png"
      },
      {
        id: gerarID(),
        tarefa: "Revisar documento do projeto",
        prioridade: "high",
        estado: "teste"
      },
      {
        id: gerarID(),
        tarefa: "Agendar calls com fornecedores",
        prioridade: "medium",
        estado: "concluido",
        usuarioImg: "https://github.com/VidalsHugo.png"
      },
      {
        id: gerarID(),
        tarefa: "Revisar metas do trimestre",
        prioridade: "medium",
        estado: "concluido"
      }
    ];

    iniciais.forEach(card => {
      cardsData.push(card);
      inserirCard(mapaEstado[card.estado], card);
    });

    salvarNoStorage();
  } else {

    cardsData.forEach(card => {
      inserirCard(mapaEstado[card.estado], card);
    });
  }
}


carregarCardsSalvos();
adicionarEventosDrag();
adicionarEventoRemover();

