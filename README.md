# Gerenciador de Notas

Um simples gerenciador de notas onde você pode criar, listar, ler e excluir notas através do terminal.

## Funcionalidades

- **Criar Nota:** Permite criar um novo arquivo de nota com um nome e conteúdo definidos pelo usuário.
- **Listar Notas:** Lista todos os arquivos de nota presentes no diretório.
- **Ler Nota:** Permite ao usuário ler o conteúdo de uma nota específica selecionada pelo nome do arquivo.
- **Excluir Nota:** Permite excluir uma nota específica selecionada pelo nome do arquivo.

## Requisitos

- Node.js instalado no sistema.

## Como usar

1. Clone ou baixe este repositório para sua máquina local.
2. Abra um terminal na pasta do projeto.
3. Execute `node nome_do_arquivo.js`, substituindo `nome_do_arquivo.js` pelo nome do arquivo onde está o código do gerenciador de notas.
4. Siga as instruções apresentadas no terminal para interagir com o gerenciador de notas.

## Estrutura do Projeto

- **`nome_do_arquivo.js`:** Contém o código fonte do gerenciador de notas.
- **`README.md`:** Este arquivo, contendo informações sobre o projeto.

## Exemplo de Uso

### Criar Nota

````
Selecione a opção desejada:

1.Nova nota
2.Listar notas
3.Ler uma nota
4.Excluir uma nota

> 1

Digite o nome do arquivo com extensão: (ex: arquivo.txt)

> minha_nota.txt

Digite o conteúdo do arquivo:

> Esta é a minha primeira nota!

Arquivo criado com sucesso!
````

### Listar Notas

````
Selecione a opção desejada:

1.Nova nota
2.Listar notas
3.Ler uma nota
4.Excluir uma nota

> 2

Arquivos no diretório:
minha_nota.txt

````

### Ler Nota

````
Selecione a opção desejada:

1.Nova nota
2.Listar notas
3.Ler uma nota
4.Excluir uma nota

> 3

Arquivos no diretório:
minha_nota.txt
==========================================
Escreva o nome do arquivo a ser lido

> minha_nota.txt

Esta é a minha primeira nota!
````

### Excluir Nota

````
Selecione a opção desejada:

1.Nova nota
2.Listar notas
3.Ler uma nota
4.Excluir uma nota

> 4

Arquivos no diretório:
minha_nota.txt
==========================================

Escreva o nome do arquivo a ser excluído

> minha_nota.txt

Arquivo excluído com sucesso!
````

## Autor

Thomas Edson

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).



