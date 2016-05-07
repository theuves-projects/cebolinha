# [`Cebolinha`](http://npm.im/cebolinha)

> *Trocar o “R” pelo “L”.*

![](https://raw.githubusercontent.com/theuves/cebolinha/master/cebolinha.png)

## Instalação

```
$ npm install --save cebolinha
```

## Uso

```js
var cebolinha = require('cebolinha');
```

**Exemplos:**

```js
cebolinha('Olá, Programadores!'); //=> 'Olá, Ploglamadoles!'
```

Cebolinha não fala errado quando a letra *R* é a última da palavra seguida de uma vogal:

```js
cebolinha('Comer'); //=> 'Comer'
cebolinha('Dormir'); //=> 'Dormir'
```

Quando o *R* é seguido por *L*, vira *U*:

```js
cebolinha('Carlos'); //=> 'Caulos'
cebolinha('Parlamento'); //=> 'Paulamento'
```

## Licença

[MIT](http://theuves.mit-license.org/)
