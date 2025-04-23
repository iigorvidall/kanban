document.querySelectorAll('.kanban-card').forEach(card => {
    card.addEventListener('dragstart', e => {
      e.currentTarget.classList.add('dragging');
    });
  
    card.addEventListener('dragend', e => {
      e.currentTarget.classList.remove('dragging');
    });
  });
  
  document.querySelectorAll('.kanban-cards').forEach(column => {
    column.addEventListener('dragover', e => {
      e.preventDefault();
      e.currentTarget.classList.add('cards-hover');
    });
  
    column.addEventListener('dragleave', e => {
      e.currentTarget.classList.remove('cards-hover');
    });
  
    column.addEventListener('drop', e => {
      e.currentTarget.classList.remove('cards-hover');
      const dragCard = document.querySelector('.kanban-card.dragging');
console.log('dragCard no drop:', dragCard);
if (dragCard) {
  e.currentTarget.appendChild(dragCard);
}

    });
  });

  //---------------

  const modalCard = document.getElementById('modalCard');

  //Para cada botão encontrado, executa uma função, onde 'button' é o elemento atual.
  document.querySelectorAll('.add_card').forEach(button => {
    button.addEventListener('click', () => {

      //Seleciona o ancestral kanban-column mais proximo
      const column = button.closest('.kanban-column');
      modalCard.showModal()

      //Botão para fechar modal
      const fecharModal = document.getElementById('fecharModal');
      fecharModal.addEventListener('click', () => {
          modalCard.close();
  })
  })
  });

  const inserirModal = document.getElementById('inserirModal');
  inserirModal.addEventListener('click', () => {
    
    let dadosTarefa = document.getElementById('inputTarefa').value;
    let dadosPrioridade = document.getElementById('dropDown_prioridade').value;
    let dadosEstado = document.getElementById('dropDown_estado').value;
    let dadosPrioridadeCSS = '';

    if (dadosPrioridade == 'low') {
      dadosPrioridadeNovo = 'baixa prioridade';
    } if (dadosPrioridade == 'medium') {
      dadosPrioridadeNovo = 'média prioridade';
    } if (dadosPrioridade == 'high'){
      dadosPrioridadeNovo = 'alta prioridade';
    } {
    }


    function limparInputs() {
      document.getElementById('inputTarefa').value = '';
      document.getElementById('dropDown_prioridade').value = 'low';
      document.getElementById('dropDown_estado').value = 'pendente';
    }

    switch (dadosEstado) {
      case 'pendente':
        inserirCard('.kanban1_pendente');
        break;
      case 'front-end':
        inserirCard('.kanban2 .kanban-cards');
        break;
      case 'back-end':
        inserirCard('.kanban3 .kanban-cards');
        break;
      case 'teste':
        inserirCard('.kanban4 .kanban-cards');
        break;
      case 'concluido':
        inserirCard('.kanban5 .kanban-cards');
        break;
      default:
        console.warn("Estado desconhecido:", dadosEstado);
        break;
    }
    
    function inserirCard(selector) {
      const cardsInsert = document.querySelector(selector);
      cardsInsert.insertAdjacentHTML("beforeend", `
        <div class="kanban-card" draggable="true">
          <div class="badge ${dadosPrioridade}">
            <span>${dadosPrioridadeNovo}</span>
          </div>
          <p class="card-title">${dadosTarefa}</p>
          <div class="card-infos">
            <div class="card-icons">
              <p><i class="fa-solid fa-comment"></i> 1</p>
              <p><i class="fa-solid fa-paperclip"></i> 1</p>
            </div>
            <div class="user">
              <img src="https://github.com/iigorvidall.png" alt="Perfil de Igor Vidal">
            </div>
          </div>
        </div>
      `);
    
      document.querySelectorAll('.kanban-card').forEach(card => {
        card.addEventListener('dragstart', e => {
          e.currentTarget.classList.add('dragging');
        });
        card.addEventListener('dragend', e => {
          e.currentTarget.classList.remove('dragging');
        });
      });
      adicionarEventoRemover();
      modalCard.close();
      limparInputs();
    }
})

function adicionarEventoRemover() {
  document.querySelectorAll('.btn-remover').forEach(button => {
    button.addEventListener('click', (e) => {
      const card = e.target.closest('.kanban-card');
      if (card) {
        card.remove();
      }
    });
  });
}

adicionarEventoRemover();

function debounce(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}



document.addEventListener("DOMContentLoaded", () => {
  const kanban = document.querySelector("main.kanban");

  const htmlSalvo = localStorage.getItem("kanbanHTML");
  if (htmlSalvo) {
    kanban.innerHTML = htmlSalvo;

    // 🔁 Reatribui eventos de drag nos cards restaurados
    document.querySelectorAll('.kanban-card').forEach(card => {
      card.addEventListener('dragstart', e => {
        e.currentTarget.classList.add('dragging');
      });
      card.addEventListener('dragend', e => {
        e.currentTarget.classList.remove('dragging');
      });
    });

    // 🔁 Reatribui evento de remoção nos botões de lixeira
    adicionarEventoRemover();
  }

  // 🔁 Debounce para evitar salvar o tempo todo
  function debounce(func, delay) {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(func, delay);
    };
  }

  const salvarKanbanHTML = debounce(() => {
    localStorage.setItem("kanbanHTML", kanban.innerHTML);
  }, 500);

  // 🔍 Observa alterações no DOM para salvar automaticamente
  const observer = new MutationObserver(() => {
    salvarKanbanHTML();
  });

  observer.observe(kanban, {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true
  });
});
