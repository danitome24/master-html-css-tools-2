## Instalación de Tailwind

La primera acción fue instalar `Tailwind` en nuestro proyecto usando la comanda `npm install tailwind`,
una vez hecho esto en el fichero `src/styles/main.scss` añadí las directivas

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

para poder usar la librería en el proyecto. El siguiente paso fue crear el fichero
`tailwind.config.js` en la raíz donde configuré los colores que he usado dentro del proyecto. He
añadido como extensión `gray` del theme el color del fondo de la barra de navegación y del footer.

## Pantallas recreadas

He recreado las pantallas: índice y miembros.

### Indice

Para el indice he usado el componente de navegación de Tailwind como base y simplemente he ido
modificando los colores, la anchura (`w-full`). En el apartado de la cabecera (la imagen de
las sillas con el grid) he tenido que usar el CSS que creé en la anterior PEC. Según vi por
el repositorio de Github no había forma de recrearlo usando estilos de Tailwind.

El footer lo he dividido en dos partes: La primera con el Grid de Tailwind usando dos columnas (una
para el `Quienes somos` y otra para el `Donde vernos`) y otra con el `Flex` de Tailwind. Para los
iconos del footer he seguido usando FontAwesome.

## Miembros

Tanto la barra de navegación y el footer son el mismo en el índice como en esta página.
La diferencia en esta página está en el flex grid que he usado. He usado un flex grid basado en 3
columnas para pantallas más grandes y 2 columnas para pantallas mas pequeñas (portátil). También
he cogido el componente de Tailwind de `Card` para incrustarle la foto y el nombre del miembro.

### Componentes

He extraído 3 componentes con el tag `@apply`. Los tres componentes los he definido en el fichero
`src/styles/main.scss`.

* El primer componente está basado en el link de navegación. El único problema que he tenido es que
el estilo `lg:inline-block` no se puede poner y en su contra hay que usar:

```
@screen lg{}
```

* El segundo componente es para el Header de la Card de miembros.
* El último componente es para los iconos sociales del footer.
