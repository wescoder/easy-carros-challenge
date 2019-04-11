# Easy Carros Challenge

## Rodando o projeto

Para rodar o projeto você precisará:

- [] Criar um arquivo `.env` na raiz do projeto segunido o modelo em [`.env.schema`](./.env.schema)
- [] Instalar as dependências via `npm install`
- [] Iniciar o servidor local via `npm start` (isso irá iniciar a API também)

## Editando o projeto

Para desenvolver localmente no projeto você deverá:

- [] Criar um arquivo `.editorconfig` seguindo o modelo em [`.editorconfig-recommended`](./.editorconfig-recommended)
- [] Criar a pasta de configuração do vscode seguindo o modelo em `.vscode-recommended`
- [] Ao invés de apenas iniciar o projeto com `npm start` você pode usar o comando `npm run dev` ou usar `npm start` e em outro terminal rodar `npm run opn` para ter uma instância nova do chrome sem o perfil de usuário da sua máquina afim de ter um ambiente limpo para debuggar o projeto.

## Sobre o estado do desafio

### Disclaimer

No momento atual o projeto está incompleto e não atende aos requisitos [mencionados no desafio](./Challenge.md)

### Escolha de tecnologias e ferramentas

Todas as tecnologias inclusas nesse projetos são ferramentas que possuo conhecimento profundo ou tive contato préviamente.
Algumas features utilizadas são novidades que resolvi incluir para tornar o desafio mais agradável de desenvolver. Como por exemplo o uso de `hooks` do React.

A arquitetura escolhida para o projeto foi construída do zero seguindo os conhecimentos de projetos que construí ao logo da carreira.

### A falta de tempo

Meu momento atual de carreira está um bocado caótico incluindo a saída da empresa atual que por si só está consumindo mais de mim do que naturalmente visto que a empresa atual necessita que eu finalize diversas tarefas antes da minha saída, já que com minha saída o time de desenvolvimento será diluído e o trabalho será repassado para terceiros.

Estou em uma rotina muito pesada com várias propostas de trabalho, testes e entrevistas e devido à isso não pude dar à este projeto a atenção devida.
Em outro cenário onde eu tivesse maior disponibilidade para executar o teste no prazo solicitado eu poderia concluílo e adicionar boas features.

### Para a análise

Espero que o código mesmo incompleto seja suficiente para analisar um pouco das minhas habilidades como desenvolvedor e mostre um pouco do processo de desenvolivmento que passo no dia a dia.

Por esse projeto estar incompleto vale mencionar que em meu [github](https://github.com/wescoder) existem outros projetos que podem mostrar mais das minhas habilidades caso possa auxiliar nesta análise.

[https://github.com/TavernLab/tavern-web/tree/develop](https://github.com/TavernLab/tavern-web/tree/develop)
[https://github.com/wescoder/ingresse-backend-dev/tree/develop](https://github.com/wescoder/ingresse-backend-dev/tree/develop)
[https://github.com/wescoder/todo-concore-web](https://github.com/wescoder/todo-concore-web)
[https://github.com/wescoder/ze-delivery/tree/develop](https://github.com/wescoder/ze-delivery/tree/develop)

## Contributing

### DevTools

You can use the following filter for the network tab in order to filter some commonly unwanted requests:

`-sockjs-node/info -websocket -method:OPTIONS -.hot-update.json`

You can use the following filter for the console tab in order to filter some commonly unwanted logs:

`-hmr -wds`
