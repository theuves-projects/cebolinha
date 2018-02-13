# cebolinha [![Build Status](https://travis-ci.org/theuves/cebolinha.svg?branch=master)](https://travis-ci.org/theuves/cebolinha)

> *Trocar o “R” pelo “L”.*

![](https://raw.githubusercontent.com/theuves/cebolinha/master/imagens/cebolinha.png)

## Instalação

Instale-o com [NPM](https://github.com/npm/npm), via linha de comando.

```
$ npm install --save cebolinha
```

## Uso

```js
var cebolinha = require('cebolinha');
```

### Exemplos

```js
cebolinha('Olá, Programadores!'); //=> 'Olá, Ploglamadoles!'
```

Cebolinha não fala errado quando a letra “R” é a última da palavra seguida de uma vogal:

```js
cebolinha('Comer'); //=> 'Comer'
cebolinha('Dormir'); //=> 'Dormir'
```

Quando o “R” é seguido por “L”, vira “U”:

```js
cebolinha('Carlos'); //=> 'Caulos'
cebolinha('Parlamento'); //=> 'Paulamento'
```

## Quem é Cebolinha?

> Cebolinha é um personagem de histórias em quadrinhos e tirinhas, criado em 1960 por Mauricio de Sousa.

Veja mais informações na [Wikipédia](https://pt.wikipedia.org/wiki/Cebolinha_(personagem)).

## Licença

MIT &copy; [Matheus Alves](https://github.com/theuves)
