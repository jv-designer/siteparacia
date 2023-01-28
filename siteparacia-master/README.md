# CT - Cia de Talentos 

<div align="center">
<a href= ""><img  src="http://whatsrel.com.br/wp-content/uploads/2019/09/Cia-de-talentos-1080.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0"></a>
</div>
<a href="https://www.inteli.edu.br/"><p align="center">Logo Oficial da Cia de Talentos</p></a>

# Protótipo de Upload de arquivos para Cia de Talentos

## 🏍️ Protótipo para o Time de Employee Branding da CT


## 🥇 Autor: 

- <a href="https://www.linkedin.com/in/felipe-sampaio-silva">Felipe Sampaio</a> 

## 📝 Descrição

A finalidade da aplicação é realizar o upload de arquivos e armazenar em um banco de dados e em um servidor, para que a CT tenha acesso fácil a esses documentos.

Os documentos serão enviados pelos clientes da CT. 

Os arquivos são aramzenados dentro do banco de dados do MongoDB

<p align="center">
<a href= "https://github.com/"><img src="https://github.com/felipesampaiosilva/sitecia/blob/main/Frontend/img/login.png?raw=true" alt="" border="0">Tela de Login</a>
</p>

<p align="center">
<a href= "https://github.com/"><img src="https://github.com/felipesampaiosilva/sitecia/blob/main/Frontend/img/home.png?raw=true" alt="" border="0">Tela Principal</a>
</p>

## 📁 Estrutura de pastas

📁 siteparacia <br>
  &emsp;| 📁 Frontend --> pasta com as telas do projeto<br>
  &emsp;&emsp;|--> <a href="Frontend\img">img</a> <br>
  &emsp;&emsp;|--> <a href="Frontend\login">login</a> <br>
  &emsp;&emsp;|--> <a href="Frontend\main">main</a> <br>
  &emsp;&emsp;|--> <a href="Frontend\style">style</a> <br>
  
 &emsp;| 📁 src --> pasta com arquivos do backend<br>
  &emsp;&emsp;|--> <a href="src\config">config</a> <br>
  &emsp;&emsp;|--> <a href="src\models">models</a> <br>
  &emsp;&emsp;|--> <a href="src\index.js">index.js</a> <br>
  &emsp;&emsp;|--> <a href="src\routes.js">routes.js</a> <br>
  
  
  &emsp;| 📁 tmp --> pasta local que armazena os uploads<br>
  &emsp;&emsp;|--> 📁 <a href="tmp\uploads">uploads</a> <br>

  
  &emsp;|--> <a href="package-lock.json">package-lock.json</a> <br>
  
  &emsp;|--> <a href="package.json">package.json</a> <br>
  
  &emsp;|--> <a href="README.md">README.md</a> <br>
  
 


## 💻 Configuração para desenvolvimento

<h3> Instalação </h3> 

Aqui encontram-se todas as instruções necessárias para a instalação de todos os programas, bibliotecas e ferramentas imprescindíveis para a configuração do ambiente de desenvolvimento.

1.  Baixar e instalar o node.js:  [https://nodejs.org/pt-br/](https://nodejs.org/pt-br/) (versão 16.15.1 LTS)
2. Clone o repositório em questão.
3.  No modo administrador, abra o "prompt de comando" ou o "terminal" e, após,  abra a pasta raíz do repositório clonado e digite o segundo comando:

```sh
npm i
```

Isso instalará todas as dependências definidas no arquivo <b>package.json</b> que são necessárias para rodar o projeto. Agora o projeto já está pronto para ser modificado. Caso ainda deseje iniciar a aplicação, digite o comando abaixo no terminal:

```sh
nodemon src/index.js
```
5. Agora você pode acessar a aplicação inserindo o link http://localhost:3001/ + a rota dele dentro do routes.js, ou realizar as requisições através do aplicativo Insomnia.

<p align="center">
<a href= "https://github.com/"><img src="https://github.com/felipesampaiosilva/sitecia/blob/main/Frontend/img/list.png?raw=true" alt="" border="0">Listagem de Projetos através do Insomnia</a>
</p>

## Problema encontrado


O problema encontrado foi um erro no momento de subir os arquivos para serem hospedados em um servidor Amazon S3, esse no momento de hospedar, aparece o seguinte erro: Region is missing.

<p align="center">
<a href= "https://github.com/"><img src="https://github.com/felipesampaiosilva/sitecia/blob/main/Frontend/img/erro.png?raw=true" alt="" border="0">Erro encontrado</a>
</p>

## 🎓 Referências

As referências utilizadas no projeto foram todas através de materiais e demandas da cia de talentos

