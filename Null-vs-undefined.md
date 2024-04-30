# [Javascript] – null vs undefined



Para empezar podemos ver que una función javascript puede perfectamente devolver undefined. Para una demostración rápida me voy a basar en el REPL que tiene Node.js:

```javascript
> (function(){})()
undefined
> (function(){})() == null
true
> 
> (function(){})() == undefined
true
> (function(){})() === undefined
true
> (function(){})() === null
```

Lo cierto es que es práctica común y errónea usar código como el siguiente para comprobar p.ej. si una variable (o propiedad) ha sido definida o un parámetro ha sido pasado:

```javascript
if (login == null) { }
```

Esta simple línea contiene dos errores que se anulan uno al otro:

- El primer es usar null en lugar de undefined.
- El segundo es usar la comparación coercitiva (==) en lugar de la comparación estricta (===).
- El código correcto debería ser:

```javascript
if (login === undefined) { }
```


En javascript se usa `undefined` para indicar que algo no existe. Que no exista no significa que no tenga valor. Para indicar que algo existe pero no tiene valor se usa `null`. Piensa p. ej. que en javascript los argumentos de las funciones son opcionales: si quien llama a la función omite el argumento, este toma el valor de undefined. Pero a lo mejor quien nos llama a la función nos ha pasado el argumento pero sin valor: entonces será null. Lo mismo ocurre con las propiedades de los objetos, que en javascript como buen lenguaje dinámico pueden existir o no sobre la marcha.

El problema es que `undefined !== null `pero `undefined==null` y esa es la causa de toda la confusión. Cuando hacemos `if (x == null)` la **comparación coercitiva** intenta hacer conversiones de tipos y puede convertir entre el tipo `undefined` a `null`.

Realmente la comparación coercitiva (==) es una herramienta poderosísima y debería usarse con mucho cuidado. Por norma general deberías usar siempre === (y su contrario !==) para comparar. De esta manera te evitarías muchos errores y comportamientos extraños. Y echar mano del doble igual solo cuando es estrictamente necesario.
