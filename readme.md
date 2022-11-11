# Projeto
**Aluno:** Junio Ferreira de Almeida  
**Nome:** BigList - Gestão de produtos em estoque

Esta aplicação tem o objetivo de catalogar os produtos em estoque de um mercado e atrelar a cada produto uma categoria com um determinada cor, facilitando assim sua exibição. Além disso ele também fornece recursos adicionais como relatório de inventário em estoque, ordenação da lista em exibição e filtro de produtos.

## Aplicação
Este aplicatvo é divido em 2 telas principais que estão relacionadas abaixo:

### Itens
Esta primeira tela é composta por vários recuros conforme é possível verificar nas imagens abaixo:

|**Categorias**|**Produtos**|
|----------|--------|
|![Tela de Categorias](https://github.com/junioalmeida/big-list/blob/master/assets/readme-images/screen-categories.jpeg?raw=true)|![Tela de Produtos](https://github.com/junioalmeida/big-list/blob/master/assets/readme-images/screen-products.jpeg?raw=true)|

Existem dois sub-menus que permitem ao usuário navegar entre produtos e categorias. Dependendo da opção selecionada, alguns botões podem ou não ser habilitados ou se comportarem de forma diferente. Abaixo segue uma pequena descrição sobre cada enumeração da tela de categorias:

1. **Ordenação:** Ordena a lista que está em exibição conforme as opções disponíveis.
    - Opções categorias: Ordem alfabética | Categorias de maior valor
    - Opções produtos: Ordem alfabética | Vencimento de produtos | Produtos com maior estoque | Categoria de Produtos  
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

Já na tela de produtos, existem alguns outros detalhes enumerados:

1. **Cor:** A cor do produto será diferente, variando de acordo com a cor da sua categoria.
2. **Texto:** O texto em exibição dos produtos é formado no seguinte padrão: "$nome - $quantidade_em_estoque" 
3. **Filtrar:** Quando na tela de produtos, o usuário consegue aplicar algumas opções de filtros disponíveis.

Caso alguma das duas listas esteja vazia, no momento da sua exibição será exibida uma imagem com esta informação, como abaixo:  

![Lista vazia](https://github.com/junioalmeida/big-list/blob/master/assets/readme-images/screen-empty.jpeg?raw=true)

### Relatório
Esta segunda tela é composta por um relatório de inventário de estoque por categoria, mostrando o valor total do estoque e a quantidade de itens.

![Tela de Relatório](https://github.com/junioalmeida/big-list/blob/master/assets/readme-images/screen-report.jpeg?raw=true)

1. **Tabela:** Mostra as categorias cadastradas juntamente com a quantidade de produtos e o valor total da categoria. Além disso, na última linha também efetua a soma total da tabela. As categorias aqui apresentadas estão ordenadas em ordem decrescente por valor total.
2. **Tab Relatório:** Exibe a tela de relatório

### Login
Existe também uma terceira tela, a de Login, que apenas será exibida caso o dispositivo possua autenticação local. Está é uma tela básica que possui um botão para login e o título da aplicação.

![Tela de Login](https://github.com/junioalmeida/big-list/blob/master/assets/readme-images/screen-login.jpeg?raw=true)

### Filtrar
Exibe as opções de filtros para produtos. Após selecionar o desejado é só clicar no botão verde de confirmar. É possível selecionar apenas uma opção nesta tela.

![Tela de Filtragem](https://github.com/junioalmeida/big-list/blob/master/assets/readme-images/screen-filter.jpeg?raw=true)

### Ordenar
Exibe as opções de ordenação para produtos ou categorias. Após selecionar o desejado é só clicar no botão verde de confirmar. É possível selecionar apenas uma opção nesta tela.

|**Categorias**|**Produtos**|
|----------|--------|
|![Tela de Ordenação 1](https://github.com/junioalmeida/big-list/blob/master/assets/readme-images/screen-sort-category.jpeg?raw=true)|![Tela de Ordenação 2](https://github.com/junioalmeida/big-list/blob/master/assets/readme-images/screen-sort-product.jpeg?raw=true)|

### Adicionar
Exibe a tela de novo item conforme o sub menu selecionado para que seja adicionado uma nova categoria ou produto.

|**Categoria**|**Produto**|
|---------|-------|
|![Tela de Inserção 1](https://github.com/junioalmeida/big-list/blob/master/assets/readme-images/screen-new-category.jpeg?raw=true)|![Tela de Inserção 2](https://github.com/junioalmeida/big-list/blob/master/assets/readme-images/screen-new-product.jpeg?raw=true)|

### Alterar
Exibe a tela de alteração do item clicado, aqui é possível alterar o item ou excluí-lo. Caso seja uma categoria, no momento da exclusão, o sistema irá informar que a exclusão de uma categoria implica na exclusão de todos os produtos associados à categoria, após confirmar a exclusão a categoria e seus produtos associados serão excluídos.

|**Categoria**|**Produto**|
|---------|-------|
|![Tela de Edição 1](https://github.com/junioalmeida/big-list/blob/master/assets/readme-images/screen-edit-category.jpeg?raw=true)|![Tela de Edição 2](https://github.com/junioalmeida/big-list/blob/master/assets/readme-images/screen-edit-product.jpeg?raw=true)|

### Diferenças entre plataformas
Alguns dos componentes utilizados neste projeto não funcionam corretamente no IOS, sendo assim, foram desenvolvidas formas de contornar este problema. Basicamente são dois os components que são incompatíveis com o IOS, o DropDownPicker e o DateTimePickerAndroid. Assim, foram criadas diferentes abordagens para estes dois casos, são elas:

#### DropDownPicker
Este componente necessita de alterar uma propriedade CSS denominada zIndex, contudo, o IOS ainda não oferece suporte para esta operação, sendo assim, foi aproveitado um componente de seleção utilizado para a seleção da ordenação e filtragem, apenas efetuando alguns ajustes, de modo a torna-lo dinâmico, segue exemplo da diferença entre as plataformas:

|**Android**|**IOS**|
|---------|-------|
|![Seleção android](https://github.com/junioalmeida/big-list/blob/master/assets/readme-images/screen-custom-selection-android.jpeg?raw=true)|![Seleção IOS](https://github.com/junioalmeida/big-list/blob/master/assets/readme-images/screen-custom-selection-ios.jpeg?raw=true)|

#### DateTimePickerAndroid
Este componente foi desenvolvido especificamente para android e, apesar de existirem outros componentes de calendários para IOS, optei por seguir apenas como texto livre, validando o padrão de inserção da data, sempre sendo no formado DD/MM/YYYY. Caso não esteja neste formato, a borda do campo será colorida de vermelho, igualmente outras validações existentes em outros campos.

|**Android**|**IOS**|
|---------|-------|
|![Data android](https://github.com/junioalmeida/big-list/blob/master/assets/readme-images/screen-date-android.jpeg?raw=true)|![Data IOS](https://github.com/junioalmeida/big-list/blob/master/assets/readme-images/screen-date-ios.jpeg?raw=true)|

### Validações
Há também algumas validações nos inputs de modo a não permitir a inserção de valores inválidos. Segue abaixo essas validações:

1.**Nome:** O nome da categoria e/ou produto devem ter, no mínimo, 2 caracteres.  
2.**Cor, Categoria:** A cor e a categoria são obrigatórios para os cadastros, cada qual com o seu campo.  
3.**Preço e Qtde Estoque:** Não podem ser vazios, porém aceitam o valor 0.  
4.**Data de Vencimento:** A data de vencimento pode ser omitida conforme a necessidade do produto.

## Tipos de dados
Esta aplicação possui duas entidades relevantes que se relacionam, Categoria e Produto. Cada entidade possui seus próprios campos e também há um relacionamento de 1/n de Categoria para Produto. Abaixo segue um resumo dos campos que existem em cada entidade:

1. **Categoria**
    - *Id:* id | Inteiro -> Código incremental e oculto, salvo através do AsyncStorage
    - *Nome:* name | String  
    - *Cor:* color | Enum com valores pré-definidos (Azul, Rosa, Verde, Vermelho, Amarelo, Preto, Roxo)  
3. **Produtos**
    - *Id:* id | Inteiro -> Código incremental e oculto, salvo através do AsyncStorage
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
