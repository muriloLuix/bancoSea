// Adiciona um ouvinte de evento para o clique na etiqueta de arquivo personalizada
document.querySelector('.custom-file-label').addEventListener('click', function() {
    // Quando a etiqueta de arquivo personalizada é clicada, aciona um clique no elemento de entrada de arquivo oculto
    document.querySelector('#fileInput').click();
});

// Adiciona um ouvinte de evento para o evento change (mudança) no elemento de entrada de arquivo
document.querySelector('#fileInput').addEventListener('change', function() {
    // Obtém a referência para o elemento de exibição de informações do arquivo
    const fileInfo = document.querySelector('#fileInfo');

    // Verifica se o elemento de entrada de arquivo contém arquivos selecionados
    if (this.files && this.files.length > 0) {
        // Se houver arquivos selecionados, exibe o nome do primeiro arquivo selecionado
        fileInfo.textContent = `Arquivo anexado: ${this.files[0].name}`;
    } else {
        // Se nenhum arquivo estiver selecionado, limpa o conteúdo do elemento de exibição de informações do arquivo
        fileInfo.textContent = '';
    }
});
