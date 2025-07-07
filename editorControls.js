/////////////////////////////////////
// Controle de editores individuais
/////////////////////////////////////

// Funções de renderização exportadas
export function renderHeader() {
    const headerBgColor = document.getElementById('header-bg-color').value;
    const headerTextColor = document.getElementById('header-text-color').value;
    const headerTitle = document.getElementById('header-title').value;
    const headerSubtitle = document.getElementById('header-subtitle').value;
    const headerAlign = document.getElementById('header-align').value;

    const generatedHeader = document.getElementById('generated-header');
    generatedHeader.style.backgroundColor = headerBgColor;
    generatedHeader.style.color = headerTextColor;
    generatedHeader.style.textAlign = headerAlign;
    generatedHeader.innerHTML = `<h1>${headerTitle}</h1><p>${headerSubtitle}</p>`;
}

export function renderMenu() {
    const menuBgColor = document.getElementById('menu-bg-color').value;
    const menuItemsColor = document.getElementById('menu-item-color').value;
    const menuHoverColor = document.getElementById('menu-hover-color').value;
    const menuFontSize = document.getElementById('menu-item-font-size').value;
    const menuItemSpacing = document.getElementById('menu-item-spacing').value;
    const menuAlign = document.getElementById('menu-align').value;

    document.getElementById('menu-item-font-size-value').textContent = `${menuFontSize}px`;
    document.getElementById('menu-item-spacing-value').textContent = `${menuItemSpacing}px`;

    const generatedMenu = document.getElementById('generated-menu');
    const menuList = document.getElementById('menu-list');

    generatedMenu.style.backgroundColor = menuBgColor;
    menuList.style.justifyContent = menuAlign;
    menuList.style.gap = `${menuItemSpacing}px`;

    const menuItems = menuList.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.style.color = menuItemsColor;
        item.style.fontSize = `${menuFontSize}px`;
        item.onmouseover = () => item.style.color = menuHoverColor;
        item.onmouseout = () => item.style.color = menuItemsColor;
    });
}

export function renderGallery() {
    const gallerySpacing = document.getElementById('gallery-spacing').value;
    const galleryAlign = document.getElementById('gallery-align').value;
    const cardBgColor = document.getElementById('card-bg-color').value;
    const cardBorderColor = document.getElementById('card-border-color').value;
    const cardBorderRadius = document.getElementById('card-border-radius').value;
    const cardWidth = document.getElementById('card-width').value;
    const cardHeight = document.getElementById('card-height').value;
    const cardTextBgColor = document.getElementById('card-text-bg-color').value;
    const cardTextColor = document.getElementById('card-text-color').value;
    const cardTextFontSize = document.getElementById('card-text-font-size').value;

    document.getElementById('gallery-spacing-value').textContent = `${gallerySpacing}px`;
    document.getElementById('card-border-radius-value').textContent = `${cardBorderRadius}px`;
    document.getElementById('card-width-value').textContent = `${cardWidth}px`;
    document.getElementById('card-height-value').textContent = `${cardHeight}px`;
    document.getElementById('card-text-font-size-value').textContent = `${cardTextFontSize}px`;

    const galleryContainer = document.getElementById('gallery-container');
    galleryContainer.style.gap = `${gallerySpacing}px`;
    galleryContainer.style.justifyContent = galleryAlign;

    const galleryCards = galleryContainer.querySelectorAll('.gallery-card');
    galleryCards.forEach(card => {
        card.style.backgroundColor = cardBgColor;
        card.style.borderColor = cardBorderColor;
        card.style.borderRadius = `${cardBorderRadius}px`;
        card.style.width = `${cardWidth}px`;
        card.style.height = `${cardHeight}px`;

        const textDiv = card.querySelector('.card-text-content');
        if (textDiv) {
            textDiv.style.backgroundColor = cardTextBgColor;
            textDiv.style.color = cardTextColor;
            textDiv.style.fontSize = `${cardTextFontSize}px`;
        }
    });
}

export function renderForm() {
    const formTitle = document.getElementById('form-title').value;
    const formDescription = document.getElementById('form-description').value;
    const formBgColor = document.getElementById('form-bg-color').value;
    const formTextColor = document.getElementById('form-text-color').value;
    const formBorderColor = document.getElementById('form-border-color').value;
    const formBorderRadius = document.getElementById('form-border-radius').value;
    const formButtonBgColor = document.getElementById('form-button-bg-color').value;
    const formButtonTextColor = document.getElementById('form-button-text-color').value;

    document.getElementById('form-border-radius-value').textContent = `${formBorderRadius}px`;

    const formContainer = document.getElementById('form-container');
    formContainer.style.backgroundColor = formBgColor;
    formContainer.style.color = formTextColor;
    formContainer.style.borderColor = formBorderColor;
    formContainer.style.borderRadius = `${formBorderRadius}px`;

    // Garante que o título (h2) exista e atualiza seu conteúdo
    let formTitleElement = formContainer.querySelector('h2');
    if (!formTitleElement) {
        formTitleElement = document.createElement('h2');
        formContainer.prepend(formTitleElement); // Adiciona no início do contêiner
    }
    formTitleElement.textContent = formTitle;

    // Garante que a descrição (p) exista e atualiza seu conteúdo
    let formDescriptionElement = formContainer.querySelector('p');
    if (!formDescriptionElement) {
        formDescriptionElement = document.createElement('p');
        // Adiciona após o h2 se ele existir, caso contrário, no início
        if (formTitleElement.nextElementSibling) {
            formTitleElement.after(formDescriptionElement);
        } else {
            formContainer.prepend(formDescriptionElement);
        }
    }
    formDescriptionElement.textContent = formDescription;

    // Garante que o botão de submit exista e atualiza seus estilos
    let submitButton = formContainer.querySelector('.form-submit-btn');
    if (!submitButton) {
        submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.className = 'form-submit-btn';
        submitButton.textContent = 'Enviar';
        formContainer.appendChild(submitButton); // Adiciona no final
    }
    submitButton.style.backgroundColor = formButtonBgColor;
    submitButton.style.color = formButtonTextColor;
}

export function renderFooter() {
    const footerText = document.getElementById('footer-text').value;
    const footerFontSize = document.getElementById('footer-font-size').value;
    const footerTextColor = document.getElementById('footer-text-color').value;
    const footerBgColor = document.getElementById('footer-bg-color').value;
    const footerAlign = document.getElementById('footer-align').value;

    document.getElementById('footer-font-size-value').textContent = `${footerFontSize}px`;

    const generatedFooter = document.getElementById('generated-footer');
    generatedFooter.textContent = footerText;
    generatedFooter.style.fontSize = `${footerFontSize}px`;
    generatedFooter.style.color = footerTextColor;
    generatedFooter.style.backgroundColor = footerBgColor;
    generatedFooter.style.textAlign = footerAlign;
}

// Funções de gerenciamento de itens (Menu, Galeria, Formulário)

document.addEventListener('DOMContentLoaded', () => {
    // Menu
    const addMenuItemBtn = document.getElementById('add-menu-item-btn');
    const menuItemsList = document.getElementById('menu-items-list');
    const generatedMenuList = document.getElementById('menu-list');

    if (addMenuItemBtn) {
        addMenuItemBtn.addEventListener('click', () => {
            const itemCount = menuItemsList.children.length + 1;
            const itemId = `menu-item-${itemCount}`;

            const itemDiv = document.createElement('div');
            itemDiv.className = 'editor-item-control';
            itemDiv.innerHTML = `
                <label for="menu-item-text-${itemCount}">Texto do Item ${itemCount}:</label>
                <input type="text" id="menu-item-text-${itemCount}" value="Item ${itemCount}">
                <label for="menu-item-link-${itemCount}">Link do Item ${itemCount}:</label>
                <input type="text" id="menu-item-link-${itemCount}" value="#item${itemCount}">
                <button class="delete-item-btn action-button" data-item-id="${itemId}">Remover</button>
            `;
            menuItemsList.appendChild(itemDiv);

            const generatedItem = document.createElement('a');
            generatedItem.className = 'menu-item';
            generatedItem.href = `#item${itemCount}`;
            generatedItem.textContent = `Item ${itemCount}`;
            generatedItem.id = itemId;
            generatedMenuList.appendChild(generatedItem);

            itemDiv.querySelector(`#menu-item-text-${itemCount}`).addEventListener('input', (e) => {
                generatedItem.textContent = e.target.value;
                renderMenu();
            });
            itemDiv.querySelector(`#menu-item-link-${itemCount}`).addEventListener('input', (e) => {
                generatedItem.href = e.target.value;
                renderMenu();
            });

            itemDiv.querySelector('.delete-item-btn').addEventListener('click', (e) => {
                itemDiv.remove();
                generatedItem.remove();
                renderMenu();
            });
            renderMenu();
        });
    }

    // Galeria
    const addGalleryItemBtn = document.getElementById('add-gallery-item-btn');
    const galleryItemsList = document.getElementById('gallery-items-list');
    const generatedGalleryContainer = document.getElementById('gallery-container');

    if (addGalleryItemBtn) {
        addGalleryItemBtn.addEventListener('click', () => {
            const itemCount = galleryItemsList.children.length + 1;
            const itemId = `gallery-item-${itemCount}`;

            const itemDiv = document.createElement('div');
            itemDiv.className = 'editor-item-control';
            itemDiv.innerHTML = `
                <label for="gallery-img-src-${itemCount}">URL da Imagem ${itemCount}:</label>
                <input type="text" id="gallery-img-src-${itemCount}" value="https://via.placeholder.com/200x150?text=Imagem${itemCount}">
                <label for="gallery-img-alt-${itemCount}">Texto Alternativo ${itemCount}:</label>
                <input type="text" id="gallery-img-alt-${itemCount}" value="Descrição da Imagem ${itemCount}">
                <label for="gallery-text-${itemCount}">Texto do Card ${itemCount}:</label>
                <textarea id="gallery-text-${itemCount}">Texto descritivo da imagem ${itemCount}.</textarea>
                <button class="delete-item-btn action-button" data-item-id="${itemId}">Remover</button>
            `;
            galleryItemsList.appendChild(itemDiv);

            const generatedCard = document.createElement('div');
            generatedCard.className = 'gallery-card';
            generatedCard.id = itemId;
            generatedCard.innerHTML = `
                <img src="https://via.placeholder.com/200x150?text=Imagem${itemCount}" alt="Descrição da Imagem ${itemCount}">
                <div class="card-text-content">Texto descritivo da imagem ${itemCount}.</div>
            `;
            generatedGalleryContainer.appendChild(generatedCard);

            itemDiv.querySelector(`#gallery-img-src-${itemCount}`).addEventListener('input', (e) => {
                generatedCard.querySelector('img').src = e.target.value;
                renderGallery();
            });
            itemDiv.querySelector(`#gallery-img-alt-${itemCount}`).addEventListener('input', (e) => {
                generatedCard.querySelector('img').alt = e.target.value;
                renderGallery();
            });
            itemDiv.querySelector(`#gallery-text-${itemCount}`).addEventListener('input', (e) => {
                generatedCard.querySelector('.card-text-content').textContent = e.target.value;
                renderGallery();
            });

            itemDiv.querySelector('.delete-item-btn').addEventListener('click', () => {
                itemDiv.remove();
                generatedCard.remove();
                renderGallery();
            });
            renderGallery();
        });
    }

    // Formulário
    const addFormFieldBtn = document.getElementById('add-form-field-btn');
    const formFieldsList = document.getElementById('form-fields-list');
    const generatedFormContainer = document.getElementById('form-container');

    if (addFormFieldBtn) {
        addFormFieldBtn.addEventListener('click', () => {
            const fieldCount = formFieldsList.children.length + 1;
            const fieldId = `form-field-${fieldCount}`;

            const fieldDiv = document.createElement('div');
            fieldDiv.className = 'editor-item-control';
            fieldDiv.innerHTML = `
                <label for="form-field-label-${fieldCount}">Rótulo do Campo ${fieldCount}:</label>
                <input type="text" id="form-field-label-${fieldCount}" value="Campo ${fieldCount}">
                <label for="form-field-type-${fieldCount}">Tipo do Campo ${fieldCount}:</label>
                <select id="form-field-type-${fieldCount}">
                    <option value="text">Texto</option>
                    <option value="email">Email</option>
                    <option value="textarea">Área de Texto</option>
                    <option value="checkbox">Checkbox</option>
                    <option value="radio">Radio</option>
                </select>
                <button class="delete-item-btn action-button" data-item-id="${fieldId}">Remover</button>
            `;
            formFieldsList.appendChild(fieldDiv);

            const generatedFieldDiv = document.createElement('div');
            generatedFieldDiv.className = 'form-field';
            generatedFieldDiv.id = fieldId;
            const labelElement = document.createElement('label');
            labelElement.textContent = `Campo ${fieldCount}:`;
            generatedFieldDiv.appendChild(labelElement);

            let inputElement;
            const fieldTypeSelect = fieldDiv.querySelector(`#form-field-type-${fieldCount}`);
            
            const appendFieldInput = (type) => {
                // Remove o input/textarea/radio/checkbox existente antes de adicionar um novo
                if (inputElement && generatedFieldDiv.contains(inputElement)) {
                    generatedFieldDiv.removeChild(inputElement);
                    // Se for checkbox/radio, pode ter um span extra
                    const existingSpan = generatedFieldDiv.querySelector('span');
                    if (existingSpan) generatedFieldDiv.removeChild(existingSpan);
                }
                
                if (type === 'textarea') {
                    inputElement = document.createElement('textarea');
                } else if (type === 'checkbox') {
                    inputElement = document.createElement('input');
                    inputElement.type = 'checkbox';
                    inputElement.id = `input-${fieldId}`;
                    const span = document.createElement('span');
                    span.textContent = `Opção ${fieldCount}`;
                    generatedFieldDiv.appendChild(inputElement);
                    generatedFieldDiv.appendChild(span);
                    return;
                } else if (type === 'radio') {
                    inputElement = document.createElement('input');
                    inputElement.type = 'radio';
                    inputElement.name = `radio-group-${fieldCount}`; // Garante que apenas um radio possa ser selecionado por grupo
                    inputElement.id = `input-${fieldId}`;
                    const span = document.createElement('span');
                    span.textContent = `Opção ${fieldCount}`;
                    generatedFieldDiv.appendChild(inputElement);
                    generatedFieldDiv.appendChild(span);
                    return;
                } else {
                    inputElement = document.createElement('input');
                    inputElement.type = type;
                }
                inputElement.id = `input-${fieldId}`;
                generatedFieldDiv.appendChild(inputElement);
            };

            appendFieldInput(fieldTypeSelect.value); // Initial append

            // O generatedFormContainer já tem o botão de submit.
            // Para adicionar novos campos *acima* do botão de submit,
            // precisamos inseri-los antes do botão.
            const submitButton = generatedFormContainer.querySelector('.form-submit-btn');
            if (submitButton) {
                generatedFormContainer.insertBefore(generatedFieldDiv, submitButton);
            } else {
                generatedFormContainer.appendChild(generatedFieldDiv);
            }

            fieldDiv.querySelector(`#form-field-label-${fieldCount}`).addEventListener('input', (e) => {
                labelElement.textContent = `${e.target.value}:`;
                renderForm();
            });

            fieldTypeSelect.addEventListener('change', (e) => {
                appendFieldInput(e.target.value);
                renderForm();
            });

            fieldDiv.querySelector('.delete-item-btn').addEventListener('click', () => {
                fieldDiv.remove();
                generatedFieldDiv.remove();
                renderForm();
            });

            renderForm();
        });

        // O botão de submit padrão é adicionado/atualizado na renderForm, 
        // então não precisamos adicioná-lo aqui no 'DOMContentLoaded' novamente.
        // A lógica do renderForm já o garante.
    }

    // Configura listeners para os campos de controle
    document.getElementById('header-bg-color').addEventListener('input', renderHeader);
    document.getElementById('header-text-color').addEventListener('input', renderHeader);
    document.getElementById('header-title').addEventListener('input', renderHeader);
    document.getElementById('header-subtitle').addEventListener('input', renderHeader);
    document.getElementById('header-align').addEventListener('change', renderHeader);

    document.getElementById('menu-bg-color').addEventListener('input', renderMenu);
    document.getElementById('menu-item-color').addEventListener('input', renderMenu);
    document.getElementById('menu-hover-color').addEventListener('input', renderMenu);
    document.getElementById('menu-item-font-size').addEventListener('input', renderMenu);
    document.getElementById('menu-item-spacing').addEventListener('input', renderMenu);
    document.getElementById('menu-align').addEventListener('change', renderMenu);

    document.getElementById('gallery-spacing').addEventListener('input', renderGallery);
    document.getElementById('gallery-align').addEventListener('change', renderGallery);
    document.getElementById('card-bg-color').addEventListener('input', renderGallery);
    document.getElementById('card-border-color').addEventListener('input', renderGallery);
    document.getElementById('card-border-radius').addEventListener('input', renderGallery);
    document.getElementById('card-width').addEventListener('input', renderGallery);
    document.getElementById('card-height').addEventListener('input', renderGallery);
    document.getElementById('card-text-bg-color').addEventListener('input', renderGallery);
    document.getElementById('card-text-color').addEventListener('input', renderGallery);
    document.getElementById('card-text-font-size').addEventListener('input', renderGallery);

    document.getElementById('form-title').addEventListener('input', renderForm); // Já tem no main.js, mas mantido aqui para clareza
    document.getElementById('form-description').addEventListener('input', renderForm); // Já tem no main.js, mas mantido aqui para clareza
    document.getElementById('form-bg-color').addEventListener('input', renderForm);
    document.getElementById('form-text-color').addEventListener('input', renderForm);
    document.getElementById('form-border-color').addEventListener('input', renderForm);
    document.getElementById('form-border-radius').addEventListener('input', renderForm);
    document.getElementById('form-button-bg-color').addEventListener('input', renderForm);
    document.getElementById('form-button-text-color').addEventListener('input', renderForm);

    // Initial render for all sections
    renderHeader();
    renderMenu();
    renderGallery();
    renderForm();
    renderFooter();

    /////////////////////////////////////
    // API Interativa (FIPE)
    /////////////////////////////////////
    const fetchFipeDataBtn = document.getElementById('fetch-fipe-data-btn');
    const fipeBrandCodeInput = document.getElementById('fipe-brand-code');
    const fipeModelCodeInput = document.getElementById('fipe-model-code');
    const fipeYearCodeInput = document.getElementById('fipe-year-code');
    const fipeResultStatus = document.getElementById('fipe-result-status');
    const interactiveApiContainer = document.getElementById('interactive-api-container');

    if (fetchFipeDataBtn) {
        fetchFipeDataBtn.addEventListener('click', async () => {
            const brandCode = fipeBrandCodeInput.value;
            const modelCode = fipeModelCodeInput.value;
            const yearCode = fipeYearCodeInput.value;

            if (!brandCode || !modelCode || !yearCode) {
                fipeResultStatus.textContent = 'Por favor, preencha todos os campos da FIPE.';
                fipeResultStatus.className = 'status-message error show';
                setTimeout(() => fipeResultStatus.className = 'status-message', 3000);
                return;
            }

            fipeResultStatus.textContent = 'Consultando FIPE...';
            fipeResultStatus.className = 'status-message success show'; // Use success for loading

            try {
                // Exemplo de API FIPE (usando BrasilAPI para simplificar)
                const apiUrl = `https://brasilapi.com.br/api/fipe/v1/carros/marcas/${brandCode}/modelos/${modelCode}/anos/${yearCode}`;
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Erro ao consultar FIPE: ${response.status} ${response.statusText} - ${errorText}`);
                }

                const data = await response.json();

                interactiveApiContainer.innerHTML = `
                    <h3>Dados da Tabela FIPE</h3>
                    <div class="api-data-card">
                        <p><strong>Marca:</strong> ${data.marca}</p>
                        <p><strong>Modelo:</strong> ${data.modelo}</p>
                        <p><strong>Ano Modelo:</strong> ${data.anoModelo}</p>
                        <p><strong>Combustível:</strong> ${data.combustivel}</p>
                        <p><strong>Valor:</strong> ${data.valor}</p>
                        <p><strong>Mês de Referência:</strong> ${data.mesReferencia}</p>
                    </div>
                `;
                fipeResultStatus.textContent = 'Dados da FIPE carregados com sucesso!';
                fipeResultStatus.className = 'status-message success show';
            } catch (error) {
                console.error('Erro ao buscar dados da FIPE:', error);
                interactiveApiContainer.innerHTML = `
                    <h3>Erro ao carregar dados da FIPE</h3>
                    <p>Não foi possível obter os dados. Verifique os códigos informados ou tente novamente mais tarde.</p>
                    <p>Detalhes do erro: ${error.message}</p>
                `;
                fipeResultStatus.textContent = 'Erro ao carregar dados da FIPE.';
                fipeResultStatus.className = 'status-message error show';
            } finally {
                setTimeout(() => fipeResultStatus.className = 'status-message', 3000);
            }
        });
    }

    /////////////////////////////////////
    // Dados de APIs (Promise.all)
    /////////////////////////////////////
    const fetchAllApisBtn = document.getElementById('fetch-all-apis-btn');
    const allApisResultStatus = document.getElementById('all-apis-result-status');
    const dataApisContainer = document.getElementById('data-apis-container');

    if (fetchAllApisBtn) {
        fetchAllApisBtn.addEventListener('click', async () => {
            allApisResultStatus.textContent = 'Carregando dados de múltiplas APIs...';
            allApisResultStatus.className = 'status-message success show';

            const apiRequests = [
                fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json()),
                fetch('https://swapi.dev/api/people/1/').then(res => res.json()),
                fetch('https://api.coindesk.com/v1/bpi/currentprice.json').then(res => res.json()) // Exemplo de outra API pública
            ];

            try {
                const [postData, swapiData, coinDeskData] = await Promise.all(apiRequests);

                dataApisContainer.innerHTML = `
                    <h3>Dados de Múltiplas APIs</h3>
                    <div class="api-data-card">
                        <h4>Dados do JSONPlaceholder (Post 1)</h4>
                        <p><strong>Título:</strong> ${postData.title}</p>
                        <p><strong>Corpo:</strong> ${postData.body}</p>
                    </div>
                    <div class="api-data-card">
                        <h4>Dados do SWAPI (Luke Skywalker)</h4>
                        <p><strong>Nome:</strong> ${swapiData.name}</p>
                        <p><strong>Altura:</strong> ${swapiData.height} cm</p>
                        <p><strong>Gênero:</strong> ${swapiData.gender}</p>
                    </div>
                    <div class="api-data-card">
                        <h4>Dados do CoinDesk (Preço do Bitcoin)</h4>
                        <p><strong>Moeda:</strong> Bitcoin</p>
                        <p><strong>Preço (USD):</strong> ${coinDeskData.bpi.USD.rate}</p>
                        <p><strong>Atualizado:</strong> ${coinDeskData.time.updated}</p>
                    </div>
                `;
                allApisResultStatus.textContent = 'Dados das APIs carregados com sucesso!';
                allApisResultStatus.className = 'status-message success show';
            } catch (error) {
                console.error('Erro ao buscar dados de múltiplas APIs:', error);
                dataApisContainer.innerHTML = `
                    <h3>Erro ao carregar dados das APIs</h3>
                    <p>Não foi possível obter os dados de uma ou mais APIs. Tente novamente mais tarde.</p>
                    <p>Detalhes do erro: ${error.message}</p>
                `;
                allApisResultStatus.textContent = 'Erro ao carregar dados das APIs.';
                allApisResultStatus.className = 'status-message error show';
            } finally {
                setTimeout(() => allApisResultStatus.className = 'status-message', 3000);
            }
        });
    }
});