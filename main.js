/////////////////////////////////////
// Controle de abas
/////////////////////////////////////
import * as editorControls from './editorControls.js';

function setupTabs() {
    function switchTab(activeTab) {
    // Lista de todos os editores
    const editors = [
        'header', 'menu', 'gallery', 
        'form', 'interactive-api', 'data-apis', 'footer', 'export'
    ];
    
    // Esconde todos os editores
    editors.forEach(editor => {
        const editorElement = document.getElementById(`editor-${editor}`);
        const tabElement = document.getElementById(`tab-${editor}`);
        
        if (editorElement && tabElement) {
        editorElement.style.display = 'none';
        tabElement.className = 'bg-gray-700 hover:bg-gray-600 w-1/6';
        }
    });
    
    // Mostra o editor ativo
    const activeEditor = document.getElementById(`editor-${activeTab}`);
    const activeTabElement = document.getElementById(`tab-${activeTab}`);
    
    if (activeEditor && activeTabElement) {
        activeEditor.style.display = 'block';
        activeTabElement.className = 'bg-green-700 hover:bg-green-600 w-1/6';
    }
    }

    // Configura os event listeners para cada aba
    function setupTabListeners() {
    const tabs = [
        'header', 'menu', 'gallery', 
        'form', 'interactive-api', 'data-apis', 'footer', 'export'
    ];
    
    tabs.forEach(tab => {
        const tabElement = document.getElementById(`tab-${tab}`);
        if (tabElement) {
        tabElement.addEventListener('click', () => switchTab(tab));
        }
    });

    // Ativa a aba "Cabeçalho" por padrão na carga inicial
    switchTab('header');
    }

    setupTabListeners();
}

/////////////////////////////////////
// Renderização do HTML gerado
/////////////////////////////////////

function gerarCodigoHTML() {
    const headerHtml = document.getElementById('generated-header').outerHTML;
    const menuHtml = document.getElementById('generated-menu').outerHTML;
    const galleryHtml = document.getElementById('gallery-container').outerHTML;
    const formHtml = document.getElementById('form-container').outerHTML;
    const interactiveApiHtml = document.getElementById('interactive-api-container').outerHTML;
    const dataApisHtml = document.getElementById('data-apis-container').outerHTML;
    const footerHtml = document.getElementById('generated-footer').outerHTML;

    return `<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Gerada</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.0.0/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
    <style>
        /* Estilos específicos para a página gerada */
        body { font-family: Arial, sans-serif; margin: 0; }
        .generated-header { padding: 20px; text-align: center; }
        .generated-menu { background-color: #eee; padding: 10px; }
        .menu-items { display: flex; justify-content: center; gap: 20px; }
        .menu-item { text-decoration: none; padding: 5px 10px; }
        .gallery-container { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; padding: 20px; }
        .gallery-card { border: 1px solid #ccc; padding: 10px; text-align: center; }
        .gallery-card img { max-width: 100%; height: auto; display: block; margin: 0 auto 10px; }
        .form-container { padding: 20px; max-width: 600px; margin: 20px auto; border: 1px solid #ddd; border-radius: 8px; }
        .form-container h2 { text-align: center; margin-bottom: 20px; }
        .form-field { margin-bottom: 15px; }
        .form-field label { display: block; margin-bottom: 5px; }
        .form-field input[type="text"], .form-field input[type="email"], .form-field textarea, .form-field select { width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; }
        .form-field input[type="radio"], .form-field input[type="checkbox"] { margin-right: 5px; }
        .form-submit-btn { background-color: #4CAF50; color: white; padding: 10px 15px; border: none; border-radius: 4px; cursor: pointer; display: block; width: 100%; }
        .api-container { padding: 20px; margin: 20px; border: 1px solid #eee; border-radius: 8px; }
        .api-container h3 { margin-bottom: 10px; }
        .generated-footer { padding: 20px; text-align: center; }
    </style>
</head>
<body>
    ${headerHtml}
    ${menuHtml}
    ${galleryHtml}
    ${formHtml}
    ${interactiveApiHtml}
    ${dataApisHtml}
    ${footerHtml}
</body>
</html>`;
}

function exibirCodigoGerado() {
    const codePreview = document.getElementById('code-preview');
    const statusMessage = document.getElementById('status-message');
    codePreview.textContent = gerarCodigoHTML();
    codePreview.style.display = 'block';
    
    statusMessage.textContent = 'Código HTML gerado e exibido.';
    statusMessage.className = 'status-message success show';
    setTimeout(() => statusMessage.className = 'status-message', 3000);
}

function salvarLocalStorage() {
    const htmlCode = gerarCodigoHTML();
    localStorage.setItem('savedWebsiteCode', htmlCode);
    const statusMessage = document.getElementById('status-message');
    statusMessage.textContent = 'Código salvo no armazenamento local!';
    statusMessage.className = 'status-message success show';
    setTimeout(() => statusMessage.className = 'status-message', 3000);
}

function carregarLocalStorage() {
    const savedCode = localStorage.getItem('savedWebsiteCode');
    const codePreview = document.getElementById('code-preview');
    const statusMessage = document.getElementById('status-message');

    if (savedCode) {
        codePreview.textContent = savedCode;
        codePreview.style.display = 'block';
        statusMessage.textContent = 'Código carregado do armazenamento local!';
        statusMessage.className = 'status-message success show';
    } else {
        statusMessage.textContent = 'Nenhum código salvo encontrado.';
        statusMessage.className = 'status-message error show';
    }
    setTimeout(() => statusMessage.className = 'status-message', 3000);
}

function limparLocalStorage() {
    localStorage.removeItem('savedWebsiteCode');
    const codePreview = document.getElementById('code-preview');
    const statusMessage = document.getElementById('status-message');
    codePreview.textContent = '';
    codePreview.style.display = 'none';
    statusMessage.textContent = 'Código salvo limpo!';
    statusMessage.className = 'status-message success show';
    setTimeout(() => statusMessage.className = 'status-message', 3000);
}


/////////////////////////////////////
// Inicialização
/////////////////////////////////////

// ... (código anterior) ...

document.addEventListener('DOMContentLoaded', () => {
    setupTabs();

    // Event listeners para o painel de exportação
    document.getElementById('show-code-btn').addEventListener('click', exibirCodigoGerado);
    document.getElementById('save-code-btn').addEventListener('click', salvarLocalStorage);
    document.getElementById('load-code-btn').addEventListener('click', carregarLocalStorage);
    document.getElementById('clear-code-btn').addEventListener('click', limparLocalStorage);

    // Inicializa visualizações
    editorControls.renderHeader();
    editorControls.renderMenu();
    editorControls.renderGallery();
    editorControls.renderForm(); // Já é chamado aqui, mas precisa dos listeners
    editorControls.renderFooter(); 

    // Configura listeners para o footer
    document.getElementById('footer-text').addEventListener('input', editorControls.renderFooter);
    document.getElementById('footer-font-size').addEventListener('input', editorControls.renderFooter);
    document.getElementById('footer-text-color').addEventListener('input', editorControls.renderFooter);
    document.getElementById('footer-bg-color').addEventListener('input', editorControls.renderFooter);
    document.getElementById('footer-align').addEventListener('change', editorControls.renderFooter);

    // FIX: Adicionar event listeners para o título e descrição do formulário
    document.getElementById('form-title').addEventListener('input', editorControls.renderForm);
    document.getElementById('form-description').addEventListener('input', editorControls.renderForm);
});