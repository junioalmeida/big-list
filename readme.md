# Projeto
**Aluno:** Junio Ferreira de Almeida  
**Nome:** BigList - Gestão de produtos em estoque

Esta aplicação tem o objetivo de catalogar os produtos em estoque de um mercado e atrelar a cada produto uma categoria com um determinada cor, facilitando assim sua exibição. Além disso ele também fornece recursos adicionais como relatório de inventário em estoque, ordenação da lista em exibição e filtro de produtos.

## Aplicação
Este aplicatvo é divido em 2 telas principais que estão relacionadas abaixo:

### Itens
Esta primeira tela é composta por vários recuros conforme é possível verificar na imagem abaixo:

![Tela de Itens](./readme-images/screen-itens.png)
Abaixo segue uma pequena descrição sobre cada enumeração:

1. **Ordenação:** Ordena a lista que está em exibição conforme as opções disponíveis.
    - Opções categorias: Ordem alfabética | Categorias de maior valor
    - Opções produtos: Ordem alfabética | Vencimento de produtos | Produtos com maior estoque  
*OBS: é possível selecionar apenas 1 critério para ordenação.*

2. **Categorias:** Exibe as categorias cadastradas no sistema e, quando selecionada, bloqueia o botão de filtrar.  
3. **Produtos:** Exibe os produtos cadastrados e, quando selecionada, habilita o botão de filtrar.  
4. **Filtrar:** Filtra os produtos de acordo com os seguintes critérios disponíveis:
    - Produtos vencidos
    - Produtos vencidos ao vencimento (1 semana)
    - Produtos sem estoque  
*OBS: é possível selecionar apenas 1 critério para filtragem.*
6. **Novo item:** Botão que permite adicionar um novo item de acordo com o sub menu atual (Categorias ou Produtos).  
6. **Lista em exibição:** Refe-se a lista que está sendo exibida, esta lista será manipulada através das opções anteriores.  
7. **Tab Itens:** Exibe a tela de itens

### Relatório
Esta segunda tela é composta por um simples relatório de inventário de estoque por categoria, mostrando o valor total do estoque e a quantidade de itens.

![Tela de Relatório](./readme-images/screen-report.png)

1. **Tabela:** Mostra as categorias cadastradas juntamente com a quantidade de produtos e o valor total da categoria. Além disso, na última linha também efetua a soma total da tabela.
2. **Tab Relatório:** Exibe a tela de relatório

### Filtrar
Exibe as opções de filtros para produtos. Após selecionar o desejado é só clicar no botão verde de confirmar. É possível selecionar apenas uma opção nesta tela 

![Tela de Filtragem](./readme-images/screen-filter.png)

### Ordenar
Exibe as opções de ordenação para produtos ou categorias. Após selecionar o desejado é só clicar no botão verde de confirmar. É possível selecionar apenas uma opção nesta tela 

|**Categorias**|**Produtos**|
|----------|--------|
|![Tela de Ordenação 1](./readme-images/screen-sort-category.png)|![Tela de Ordenação 2](./readme-images/screen-sort-product.png)|

### Adicionar
Exibe a tela de novo item conforme o sub menu selecionado para que seja adicionado uma nova categoria ou produto.

|**Categoria**|**Produto**|
|---------|-------|
|![Tela de Inserção 1](./readme-images/screen-new-category.png)|![Tela de Inserção 2](./readme-images/screen-new-product.png)|

### Alterar
Exibe a tela de alteração do item clicado, aqui é possível alterar o item ou excluí-lo. Caso seja uma categoria, no momento da exclusão, o sistema irá informar que a exclusão de uma categoria implica na exclusão de todos os produtos associados à categoria, após confirmar a exclusão a categoria e seus produtos associados serão excluídos.

|**Categoria**|**Produto**|
|---------|-------|
|![Tela de Inserção 1](./readme-images/screen-edit-category.png)|![Tela de Inserção 2](./readme-images/screen-edit-product.png)|

### Validações
Há também algumas validações nos inputs de modo a não permitir a inserção de valores inválidos. Segue abaixo essas validações:

1.**Nome:** O nome da categoria e/ou produto devem ter, no mínimo, 3 caracteres.  
2.**Cor, Categoria:** A cor e a categoria são obrigatórios para os cadastros, cada qual com o seu campo.  
3.**Preço e Qtde Estoque:** Não podem ser vazios, porém aceitam o valor 0.  
4.**Data de Vencimento:** A data de vencimento pode ser omitida conforme a necessidade do produto.

## Tipos de dados
Esta aplicação possui duas entidades relevantes que se relacionam, Categoria e Produto. Cada entidade possui seus próprios campos e também há um relacionamento de 1/n de Categoria para Produto. Abaixo segue um resumo dos campos que existem em cada entidade:

1. **Categoria**
    - *Id:* id | Inteiro -> Código incremental e oculto, salvo no localStorage
    - *Nome:* name | String  
    - *Cor:* color | Enum com valores pré-definidos (Azul, Rosa, Verde, Vermelho, Amarelo, Preto, Roxo)  
3. **Produtos**
    - *Id:* id | Inteiro -> Código incremental e oculto, salvo no localStorage
    - *Nome:* name | String
    - *Preço:* price | Float
    - *Vencimento:* valid | Date
    - *Qtde Estoque:* stored | Inteiro
    - *Categoria:* codCategory | Inteiro -> Relacionamento com id da categoria.

# Respostas
1. A aplicação é original e não uma cópia da aplicação de um colega ou de uma aplicação já existente?
    - *Resp:* Sim
3. A aplicação tem pelo menos duas interfaces (telas ou páginas) independentes?
    - *Resp:* Sim
5. A aplicação armazena e usa de forma relevante dados complexos (mais de um atributo)?
    - *Resp:* Sim
7. A aplicação possui um manifesto para instalação no dispositivo do usuário?
    - *Resp:* Sim
9. A aplicação possui um service worker que permite o funcionamento off-line?
    - *Resp:* Sim
10. O código da minha aplicação possui comentários explicando cada operação?
    - *Resp:* Não. De acordo com as melhores práticas do Clean Code o uso de comentários deve ser evitado nas aplicações, logo nem todos os aspectos foram documentados apenas uma documentação antes de cada função que permite saber seu objeivo.
11. A aplicação está funcionando corretamente?
    - *Resp:* Sim
12. A aplicação está completa?
    - *Resp:* Sim