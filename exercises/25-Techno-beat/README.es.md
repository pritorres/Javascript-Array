# `25` Ritmo Tecno

Estás trabajando con un DJ y él necesita un programa que pueda crear ritmos para sus canciones.

## 📝 Instrucciones:

1. Crear una función `lyricsGenerator` que recibe un arreglo. El arreglo enviado a la función será algo como así:
```js
[0,0,1,1,0,0,0] 
```
2. Por cada `0`, agrégale al string '`Boom'`.

3. Por cada `1`, agrégale al string `'Drop the base'`.

### Restricciones:

1. Si encuentra sel número Uno (1) tres veces seguidas, TAMBIÉN debe AGREGARSE a la cadena "¡¡¡Break the base!!!"

### Resultado esperado de la función:

Un string que debe estar compuesto por Boom o Drop the base o !!!Break the base!!!

### Resultado esperado:

```md
Boom Boom Drop the base Drop the base Boom Boom Boom
Boom Boom Drop the base Drop the base Drop the base !!!Break the base!!! Boom Boom Boom
Boom Boom Boom
Drop the base Boom Drop the base
Drop the base Drop the base Drop the base !!!Break the base!!!
```

### :bulb: Pista:

+ Recuerda usar variables auxiliares