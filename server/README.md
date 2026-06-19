## Backend (A parte inteligente)
Para esta parte logica da aplicação, decidi utilizar as seguintes ferramentas:
- Node.js com Express: A base que processa as informações e serve os dados do catálogo.

- CORS: Garante que a comunicação entre o site e o servidor ocorra com segurança.

- UUID: Cria identificadores únicos para cada produto, evitando erros de busca.

- Gerenciamento de Imagens: As fotos dos produtos são armazenadas em uma pasta dedicada para garantir o carregamento otimizado.

## 💡 Sobre a arquitetura
O servidor foi estruturado para ser leve e escalável, utilizando o Express para definir rotas claras de acesso aos dados. A configuração de CORS e as ferramentas de manipulação de caminhos garantem que a integração com o frontend ocorra de maneira estável e segura.