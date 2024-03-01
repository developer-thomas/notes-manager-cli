const fs = require("node:fs");
const path = require("node:path");
const process = require("node:process");
const readLine = require("node:readline");

const rl = readLine.Interface({ input: process.stdin, output: process.stdout, terminal: false });
function selectedOption(option) {
  switch (option) {
    case "1":
      console.log(`==========================================\n`);
      createNewNote();
      break;
    case "2":
      listNotes();
      console.log(`==========================================\n`);
      rl.close();
      break;
    case "3":
      selectNoteToRead();
      console.log(`==========================================\n`);
      break;
    case "4":
      selectToDelete();
      console.log(`==========================================\n`);
      break;
    default:
      console.log("Opção inválida");
      break;
  }
  return option;
}

// Função que capta os parâmetros do usuário para criar um arquivo
function createNewNote() {
  let fileName = "";
  let fileContent = "";

  rl.question("Digite o nome do arquivo com extensão: (ex: arquivo.txt)\n", (answerFileName) => {
    fileName = answerFileName;
    rl.question("Digite o conteúdo do arquivo:\n", (answerFileContent) => {
      fileContent = answerFileContent;
      createNote(fileName, fileContent);
      rl.close();
    });
  });
}

// vai ser chamada dentro de createNewNote
function createNote(filePath, fileContent) {
  fs.writeFile(filePath, fileContent, "utf-8", (err) => {
    if (err) {
      console.log("Erro ao criar arquivo:", err.message);
    } else {
      console.log("Arquivo criado com sucesso!");
    }
  });
}

function listNotes() {
  fs.readdir(__dirname, (err, arquivos) => {
    if (err) {
      console.log("Erro ao listar arquivos:", err);
    } else {
      console.log("Arquivos no diretório:");
      arquivos.forEach((arquivos) => {
        console.log(arquivos);
      });
      console.log("==========================================");
    }
  });
}

function selectNoteToRead() {
  let noteName = "";
  listNotes();

  rl.question("Escreva o nome do arquivo a ser lido\n", (answer) => {
    noteName = answer;
    readNote(answer);
    rl.close();
  });
}

function readNote(fileName) {
  fs.readFile(fileName, "utf-8", (err, data) => {
    if (err) {
      console.log("Erro ao ler arquivo", err.message);
    } else {
      console.log(data);
    }
  });
}

function selectToDelete() {
  let fileToDelete = "";
  listNotes();
  rl.question("Escreva o nome do arquivo a ser excluído", (answer) => {
    fileToDelete = answer;
    deleteNote(answer);
    rl.close();
  });
}

function deleteNote(fileName) {
  fs.unlink(fileName, (err) => {
    if (err) {
      console.log("Não foi possível excluir o arquivo", err.message);
    }
    console.log("Arquivo excluído com sucesso!");
  });
}

function askFilePath(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(selectedOption(answer));
    });
  });
}

function initialInteraction() {
  askFilePath("Selecione a opção desejada:\n1.Nova nota\n2.Listar notas\n3.Ler uma nota\n4.Excluir uma nota\n");
}

initialInteraction();
