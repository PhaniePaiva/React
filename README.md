# React JS
é uma biblioteca JavaScript para construção de interfaces de usuário.

### Create React App
<code>
    npx create-react-app my-app <br>
    cd my-app <br>
    npm start
</code>


#
#### OBS: Create React App não lida com lógica de backend nem banco de dados. Por trás, Babel e Webpack estão sendo utilizados, mas não é necessário saber nada sobre eles.
#

# O que é JSX?
É uma extensão de sintaxe para JavaScript recomendada a ser utilizada para descrever como a UI deve aparecer.

# Por que JSX?
O React não requer o uso do JSX. Porém, a maioria das pessoas acha prático como uma ajuda visual quando se está trabalhando com uma UI dentro do código em JavaScript. Ele permite ao React mostrar mensagens mais úteis de erro e aviso.


#
#### OBS: JSX também pode ser uma expressão que se transformam em chamadas normais de funções que retornam objetos podendo ser utlizads em condições if e laços for.
#
# Renderizando Elementos
OBS: Na prática, a maioria dos aplicativos React usam o <code>ReactDOM.render()</code> apenas uma única vez ele é o responsável por atualizar o DOM para exibir os elementos React.

#
# Componentes e Props
Conceitualmente, componentes são como funções JavaScript. Eles aceitam entradas arbitrárias (chamadas “props”) e retornam elementos React que descrevem o que deve aparecer na tela.

<ul>
<li><strong>Componentes de Função:</strong> é um componente React válido ao argumento de objeto “props” (que significa propriedades) com dados e retorna o elemento React. </li>
<li>Você também pode usar uma classe ES6 para definir um componente.</li>
</ul>

#
#### OBS: Componentes permitem você dividir a UI em partes independentes, reutilizáveis e pensar em cada parte isoladamente.
#

<strong>Props são Somente Leitura:</strong> Independente se você declarar um componente como uma função ou uma classe, ele nunca deve modificar seus próprios props.

<code>
function sum(a, b) {</br>
  return a + b;</br>
}
</code>

#

Tais funções são chamadas “puras” porque elas não tentam alterar suas entradas e sempre retornam o mesmo resultado para as mesmas entradas.



