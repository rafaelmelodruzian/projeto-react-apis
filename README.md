# PokéDex App

O PokéDex App é uma aplicação web desenvolvida em React que permite aos usuários explorar uma lista de Pokémons, adicionar e remover Pokémons de sua Pokédex pessoal e visualizar detalhes avançados sobre cada Pokémon. A aplicação utiliza uma arquitetura em camadas para garantir a organização e a manutenção do código. Com uma interface intuitiva e responsiva, os usuários podem capturar seus Pokémons favoritos e armazená-los na localStorage do navegador. 
# Endereço de hospedagem: https://pokedex-rafael-druzian.surge.sh/list


# Características

Lista de Pokémons com informações básicas.
Captura e remoção de Pokémons da Pokédex pessoal.
Visualização de detalhes avançados, como estatísticas de base e movimentos.
Utilização da Context API para compartilhar o estado global da Pokédex entre os componentes.
Estilização dos componentes com Styled Components.


# Tecnologias Utilizadas

React.js: biblioteca JavaScript para construção da interface de usuário.
React Router: para navegação e roteamento dentro da aplicação.
Axios: para realizar requisições HTTP à API de Pokémons.
Context API: para compartilhar o estado global da Pokédex entre os componentes.
Styled Components: para estilização dos componentes utilizando CSS-in-JS.
JavaScript: Linguagem de programação utilizada para a lógica e interatividade do aplicativo.
HTML: Linguagem de marcação que define a estrutura da aplicação web. 


# Estrutura do Projeto

O projeto está organizado em diferentes páginas, cada uma com um propósito específico. As principais pastas são:
- /components: contém os componentes reutilizáveis utilizados em diferentes páginas.
- /pages: contém as páginas principais do aplicativo, como a lista de Pokémons, detalhes do Pokémon e Pokédex pessoal.
- /routes: contém o arquivo router.js responsável por definir as rotas da aplicação.
- /constants: contém constantes utilizadas em diferentes partes do aplicativo, como a URL base da API e as imagens dos Pokémons.