// Variável global para rastrear o item selecionado
let selectedMenuItem = null;

// Inicializando o editor quando o DOM for totalmente carregado
document.addEventListener('DOMContentLoaded', () => {
  initializeHeaderEditor();
  
  // Inicializando outros editores 
  initializeMenuEditor();
  initializeGalleryEditor();
  initializeFormEditor();
  initializeFooterEditor();
});

/**
 * Inicializando a funcionalidade de edição do header
 */
function initializeHeaderEditor() {
  // Adicionando escutadores de eventos aos itens
  document.getElementById('btn-add-logo').addEventListener('click', addHeaderLogo);
  document.getElementById('btn-add-item').addEventListener('click', addMenuItem);
  document.getElementById('btn-change-style-item').addEventListener('click', applyStyleToSelectedItem);
  
  const menuList = document.getElementById('list-items-header-preview');
  menuList.addEventListener('click', handleMenuListClick);
}

/**
 * Adicionando a logo ao header
 */
function addHeaderLogo() {
  const logoInput = document.getElementById('input-logo');
  const logoPreview = document.getElementById('logo-header-preview');
  const file = logoInput.files[0];

  if (!file) {
    alert('Por favor, selecione um arquivo de imagem.');
    return;
  }

  // Validando o tipo da imagem
  if (!file.type.match('image.*')) {
    alert('Por favor, selecione um arquivo de imagem válido (JPEG, PNG, etc.).');
    return;
  }

  // Criando uma url temporária da imagem
  const tempUrl = URL.createObjectURL(file);
  logoPreview.src = tempUrl;
  logoPreview.alt = 'Logo da Empresa';

  logoPreview.onload = () => {
    URL.revokeObjectURL(tempUrl);
    logoPreview.style.display = 'block';
  };
}

/**
 * Adicionando um novo item ao header
 */
function addMenuItem() {
  const inputField = document.getElementById('text-item');
  const inputText = inputField.value.trim();

  if (inputText === '') {
    alert('Por favor, digite um texto para o item do menu.');
    inputField.focus();
    return;
  }

  const menuList = document.getElementById('list-items-header-preview');
  
  // Limitar o numero de items do menu em 6 
  if (menuList.children.length >= 6) {
    alert('Número máximo de itens do menu atingido (6 itens).');
    return;
  }

  const newItem = createMenuItemElement(inputText);
  menuList.appendChild(newItem);
  inputField.value = '';
  inputField.focus();
}

/**
 * Criando, deletando e editando um item de menu
 */
function createMenuItemElement(text) {
  const listItem = document.createElement('li');
  listItem.className = 'list-item';
  listItem.tabIndex = 0;

  // Criando um parágrafo editável
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  paragraph.contentEditable = true;
  paragraph.setAttribute('role', 'textbox');
  paragraph.setAttribute('aria-label', 'Editar texto do menu');

  // armazenando o texto original caso a edição não tiver nada no final
  let originalText = text;

  paragraph.addEventListener('focus', () => {
    originalText = paragraph.textContent;
    if (selectedMenuItem) selectedMenuItem.classList.remove('selected');
    selectedMenuItem = listItem;
    selectedMenuItem.classList.add('selected');
  });

  paragraph.addEventListener('blur', () => {
    if (paragraph.textContent.trim() === '') {
      paragraph.textContent = originalText;
    }
  });

  // Criando botão de deletar
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '×';
  deleteButton.className = 'close-btn';
  deleteButton.setAttribute('aria-label', 'Remover item');
  deleteButton.title = 'Remover item';

  // Criando botão de editar
  const editButton = document.createElement('button');
  editButton.className = 'edit-button';
  editButton.setAttribute('aria-label', 'Editar item');
  editButton.title = 'Editar item';

  const editIcon = document.createElement('img');
  editIcon.src = '../assets/pencil.png';
  editIcon.className = 'icon-edit-btn';
  editIcon.alt = 'Ícone de edição';

  editButton.appendChild(editIcon);

  // Colocando os elementos no item
  listItem.appendChild(paragraph);
  listItem.appendChild(deleteButton);
  listItem.appendChild(editButton);

  return listItem;
}

/**
 * Manipulando cliques na lista de itens do menu
 */
function handleMenuListClick(event) {
  const target = event.target;

  // Manipulando botão de deletar
  if (target.classList.contains('close-btn')) {
    const item = target.parentElement;
    if (selectedMenuItem === item) selectedMenuItem = null;
    item.remove();
  } 


  else if (target.tagName === 'P') {
    if (selectedMenuItem) selectedMenuItem.classList.remove('selected');
    selectedMenuItem = target.parentElement;
    selectedMenuItem.classList.add('selected');
  }
}

/**
 * Aplicando estilo ao item selecionado
 */
function applyStyleToSelectedItem() {
  if (!selectedMenuItem) {
    alert('Por favor, clique em um item do menu para estilizá-lo.');
    return;
  }

  // Pegando os estilos do item selecionado
  const fontColor = document.getElementById('color-item').value;
  const backgroundColor = document.getElementById('bg-item').value;
  const borderColor = document.getElementById('border-color-item').value;
  const borderRadius = document.getElementById('border-radius-item').value;
  const fontSize = document.getElementById('font-size-item').value;

  // Aplicando estilos 
  selectedMenuItem.style.color = fontColor;
  selectedMenuItem.style.backgroundColor = backgroundColor;
  selectedMenuItem.style.border = `1px solid ${borderColor}`;
  selectedMenuItem.style.borderRadius = `${borderRadius}px`;
  selectedMenuItem.style.fontSize = `${fontSize}px`;
  selectedMenuItem.style.padding = '8px 12px';
}

/* ========== Funções do Editor do Menu ========== */

function initializeMenuEditor() {
  document.getElementById('upload-imagem').addEventListener('change', handleTopImageUpload);
}


function handleTopImageUpload(e) {
  const reader = new FileReader();
  reader.onload = function(event) {
    const imgElement = document.getElementById('imagem-topo');
    imgElement.src = event.target.result;
    imgElement.style.display = 'block';
  };
  
  if (e.target.files[0]) {
    // Validar tipo da imagem
    if (!e.target.files[0].type.match('image.*')) {
      alert('Por favor, selecione um arquivo de imagem válido.');
      return;
    }
    reader.readAsDataURL(e.target.files[0]);
  }
}

/**
 * Adicionar novo item ao menu
 */
function adicionarItem() {
  const texto = document.getElementById('novo-item-texto').value.trim();
  const imagemInput = document.getElementById('novo-item-imagem');

  if (texto === '') {
    alert('Por favor, digite um texto para o item do menu.');
    return;
  }

  const menu = document.getElementById('menu');
  
  // Limitar numeros de itens em 8
  if (menu.children.length >= 8) {
    alert('Número máximo de itens do menu atingido (8 itens).');
    return;
  }

  const item = document.createElement('div');
  item.className = 'menu-item';

  // Manipular imagem
  if (imagemInput.files[0]) {
    // Validar tipo da imagem
    if (!imagemInput.files[0].type.match('image.*')) {
      alert('Por favor, selecione um arquivo de imagem válido.');
      return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
      const img = document.createElement('img');
      img.src = event.target.result;
      img.alt = texto;
      item.appendChild(img);

      adicionarTexto(item, texto);
      menu.appendChild(item);
      atualizarEstilo();
    };
    reader.readAsDataURL(imagemInput.files[0]);
  } else {
    adicionarTexto(item, texto);
    menu.appendChild(item);
    atualizarEstilo();
  }

  // Limpar inputs
  document.getElementById('novo-item-texto').value = '';
  document.getElementById('novo-item-imagem').value = '';
}

/**
 * Adicionar texto ao item do menu
 */
function adicionarTexto(item, texto) {
  const span = document.createElement('span');
  span.contentEditable = true;
  span.textContent = texto;
  span.setAttribute('role', 'textbox');
  item.appendChild(span);
}

/**
 * Remover o ultimo item do menu
 */
function removerUltimoItem() {
  const menu = document.getElementById('menu');
  if (menu.lastChild) {
    menu.removeChild(menu.lastChild);
  } else {
    alert('Não há itens para remover.');
  }
}

/**
 * Atualizar estilos dos itens e do menu
 */
function atualizarEstilo() {
  const menuBg = document.getElementById('menu-bg-color').value;
  const itemBg = document.getElementById('item-bg-color').value;
  const textColor = document.getElementById('text-color').value;
  const fontSize = document.getElementById('font-size').value + 'px';
  const gap = document.getElementById('gap').value + 'px';
  const borderRadius = document.getElementById('border-radius').value + 'px';

  const menu = document.getElementById('menu');
  menu.style.backgroundColor = menuBg;
  menu.style.gap = gap;

  const itens = menu.querySelectorAll('.menu-item');
  itens.forEach(item => {
    item.style.backgroundColor = itemBg;
    item.style.color = textColor;
    item.style.fontSize = fontSize;
    item.style.borderRadius = borderRadius;
  });
}

/* ========== Funções do editor da Galeria ========== */

function initializeGalleryEditor() {
  // Caso a galeria precisar de algum código para ser carregado na inicialização antes, colocar aqui.
}

/**
 * Adicionar um novo card a galeria
 */
function adicionarCard() {
  const inputImg = document.getElementById('imagem-card');
  const inputTexto = document.getElementById('texto-card').value.trim();

  if (inputTexto === '') {
    alert('Por favor, digite uma descrição para o card.');
    return;
  }

  const galeria = document.getElementById('galeria');
  
  // Limitar o número de cards em 12
  if (galeria.children.length >= 12) {
    alert('Número máximo de cards atingido (12 cards).');
    return;
  }

  const card = document.createElement('div');
  card.className = 'card';

  if (inputImg.files[0]) {
    // Validar o tipo da imagem
    if (!inputImg.files[0].type.match('image.*')) {
      alert('Por favor, selecione um arquivo de imagem válido.');
      return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
      const img = document.createElement('img');
      img.src = event.target.result;
      img.alt = inputTexto;
      card.appendChild(img);
      adicionarDescricao(card, inputTexto);
      galeria.appendChild(card);
      atualizarEstiloCards();
    };
    reader.readAsDataURL(inputImg.files[0]);
  } else {
    adicionarDescricao(card, inputTexto);
    galeria.appendChild(card);
    atualizarEstiloCards();
  }

  // limpar os inputs
  document.getElementById('imagem-card').value = '';
  document.getElementById('texto-card').value = '';
}

/**
 * Adicionar uma descrição ao card da galeria
 */
function adicionarDescricao(card, texto) {
  const p = document.createElement('p');
  p.textContent = texto;
  p.contentEditable = true;
  p.setAttribute('role', 'textbox');
  card.appendChild(p);
}

/**
 * Remover o último card
 */
function removerUltimoCard() {
  const galeria = document.getElementById('galeria');
  if (galeria.lastChild) {
    galeria.removeChild(galeria.lastChild);
  } else {
    alert('Não há cards para remover.');
  }
}

/**
 * Atualizar os estilos da galeria
 */
function atualizarEstiloCards() {
  const bg = document.getElementById('card-bg-color').value;
  const textColor = document.getElementById('card-text-color').value;
  const fontSize = document.getElementById('card-font-size').value + 'px';
  const radius = document.getElementById('card-border-radius').value + 'px';
  const gap = document.getElementById('card-gap').value + 'px';

  const galeria = document.getElementById('galeria');
  galeria.style.gap = gap;

  const cards = galeria.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.backgroundColor = bg;
    card.style.color = textColor;
    card.style.fontSize = fontSize;
    card.style.borderRadius = radius;
  });
}

/* ========== Funções do Editor do Formulário ========== */

/**
 * Inicializar a funcionalidade do Editor do Formulário
 */
function initializeFormEditor() {
  // Configurar o escutador do título
  document.getElementById('form-title').addEventListener('input', () => {
    const title = document.getElementById('form-title').value || 'Título do Formulário';
    document.getElementById('form-preview-title').textContent = title;
  });
}

/**
 * Adicionar um novo campo ao formulário
 */
function adicionarCampo() {
  const tipo = document.getElementById('field-type').value;
  const labelText = document.getElementById('field-label').value.trim();

  if (labelText === '') {
    alert('Por favor, digite um label para o campo.');
    return;
  }

  const formFields = document.getElementById('form-fields');
  
  // Limit number of fields to 10
  if (formFields.children.length >= 10) {
    alert('Número máximo de campos atingido (10 campos).');
    return;
  }

  const fieldWrapper = document.createElement('div');
  fieldWrapper.className = 'form-item';

  const label = document.createElement('label');
  label.textContent = labelText || tipo;
  label.contentEditable = true;
  label.setAttribute('role', 'textbox');

  let input;
  if (tipo === 'select') {
    input = document.createElement('select');
    const opt = document.createElement('option');
    opt.textContent = 'Opção 1';
    input.appendChild(opt);
    
    // Adicionar uma segunda opção por padrão
    const opt2 = document.createElement('option');
    opt2.textContent = 'Opção 2';
    input.appendChild(opt2);
  } else if (tipo === 'radio') {
    const radioGroup = document.createElement('div');
    radioGroup.className = 'radio-group';
    
    // Criar duas opções de campo ratio por padrão
    for (let i = 1; i <= 2; i++) {
      const radioWrapper = document.createElement('div');
      
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'radio-' + Math.random().toString(36).substr(2, 5);
      radio.id = radio.name + '-' + i;
      
      const radioLabel = document.createElement('label');
      radioLabel.textContent = `Opção ${i}`;
      radioLabel.htmlFor = radio.id;
      radioLabel.contentEditable = true;
      radioLabel.setAttribute('role', 'textbox');
      
      radioWrapper.appendChild(radio);
      radioWrapper.appendChild(radioLabel);
      radioGroup.appendChild(radioWrapper);
    }
    
    input = radioGroup;
  } else {
    input = document.createElement('input');
    input.type = tipo;
    input.placeholder = `Digite ${labelText.toLowerCase()}`;
  }

  fieldWrapper.appendChild(label);
  fieldWrapper.appendChild(input);
  formFields.appendChild(fieldWrapper);

  atualizarEstiloFormulario();
}

/**
 * Remover o último campo do formulário
 */
function removerUltimoCampo() {
  const formFields = document.getElementById('form-fields');
  if (formFields.lastChild) {
    formFields.removeChild(formFields.lastChild);
  } else {
    alert('Não há campos para remover.');
  }
}

/**
 * Atualizar estilos do formulário
 */
function atualizarEstiloFormulario() {
  const bg = document.getElementById('form-bg').value;
  const border = document.getElementById('form-border').value;
  const textColor = document.getElementById('form-text').value;
  const radius = document.getElementById('form-radius').value + 'px';
  const fontSize = document.getElementById('form-font').value + 'px';

  const formPreview = document.getElementById('form-preview');
  formPreview.style.backgroundColor = bg;
  formPreview.style.border = `1px solid ${border}`;
  formPreview.style.borderRadius = radius;
  formPreview.style.color = textColor;
  formPreview.style.fontSize = fontSize;

  const items = formPreview.querySelectorAll('.form-item');
  items.forEach(item => {
    item.style.marginBottom = '15px';
  });

  const labels = formPreview.querySelectorAll('label');
  labels.forEach(label => {
    label.style.display = 'block';
    label.style.marginBottom = '8px';
    label.style.fontWeight = '500';
  });

  const inputs = formPreview.querySelectorAll('input, select');
  inputs.forEach(input => {
    input.style.padding = '8px 12px';
    input.style.border = `1px solid ${border}`;
    input.style.borderRadius = radius;
    input.style.width = '100%';
    input.style.fontSize = fontSize;
  });
}

/* ========== Funções de edição do do rodapé ========== */

/**
 * Inicializar a funcionalidade do editor do rodapé
 */
function initializeFooterEditor() {
  // Configurar o escutador do editor do footer
  document.getElementById('rodape-texto').addEventListener('input', () => {
    const texto = document.getElementById('rodape-texto').value || 'Texto do rodapé';
    document.getElementById('rodape-preview').textContent = texto;
  });
}

/**
 * Atualizar estilos do rodapé
 */
function atualizarRodape() {
  const fonte = document.getElementById('rodape-fonte').value + 'px';
  const corFonte = document.getElementById('rodape-cor-fonte').value;
  const bg = document.getElementById('rodape-bg').value;
  const align = document.getElementById('rodape-align').value;

  const rodapePreview = document.getElementById('rodape-preview');
  rodapePreview.style.fontSize = fonte;
  rodapePreview.style.color = corFonte;
  rodapePreview.style.backgroundColor = bg;
  rodapePreview.style.textAlign = align;
}

/* ========== Funções de Exportação de Código ========== */

/**
 * Gerar código HTML completo da página
 */
function gerarHTMLCompleto() {
  const previewContent = document.querySelector('#preview').innerHTML;

  const cabecalho = `<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Título da Página</title>
  <style>${extrairCSS()}</style>
</head>
<body>
`;

  const rodape = `</body>
</html>`;

  return cabecalho + processarImagens(previewContent) + rodape;
}

/**
 * Extract CSS from style elements
 * @returns {string} The combined CSS
 */
function extrairCSS() {
  // This would need to be implemented to extract all relevant CSS
  // For now returning a basic CSS reset and some styles
  return `
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: Arial, sans-serif; line-height: 1.6; }
    /* Additional styles would be extracted here */
  `;
}

/**
 * Process images in the content to data URLs
 * @param {string} content - The HTML content
 * @returns {string} The processed HTML with images as data URLs
 */
function processarImagens(content) {
  // This would need to be implemented to convert images to data URLs
  // For now returning the content as-is
  return content;
}

/**
 * Mostrar o código HTML 
 */
function mostrarCodigo() {
  const htmlFinal = gerarHTMLCompleto();
  document.getElementById('codigo-html').value = htmlFinal;
}

/**
 * Salvar o código HTML gerado no LocalStorage
 */
function salvarCodigo() {
  const htmlFinal = gerarHTMLCompleto();
  try {
    localStorage.setItem('codigoHTML', htmlFinal);
    alert('Código HTML salvo com sucesso!');
  } catch (e) {
    if (e === QUOTA_EXCEEDED_ERR) {
      alert('O espaço disponível no localStorage foi excedido.');
    } else {
      alert('Ocorreu um erro ao salvar o código.');
    }
  }
}

/**
 * Recuperar código do LocalStorage
 */
function recuperarCodigo() {
  const salvo = localStorage.getItem('codigoHTML');
  if (salvo) {
    document.getElementById('codigo-html').value = salvo;
  } else {
    alert('Nenhum código salvo encontrado.');
  }
}

/**
 * Limpar LocalStorage
 */
function limparStorage() {
  if (confirm('Tem certeza que deseja limpar todos os dados salvos?')) {
    localStorage.clear();
    alert('LocalStorage limpo com sucesso.');
  }
}