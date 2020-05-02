## Metodología y decisiones de diseño

La metodología que he escogido ha sido BEM (Block Element Modifier). La razón es ya que me parece una metodología bastante
simple e intuitiva. Otra razón es que yo estoy acostumbrado a usar la librería de Bootstrap la cual está basada en BEM.

Esta vez los ficheros de estilos los he simplificado bastante. Tenemos únicamente 3 ficheros. El primero y
principal `main.scss` encargado de cargar librerías como `Bootstrap` y `FontAwesome`. Para esta importación uso el
@import.

El fichero `_variables.scss` donde sobrescribo variables usada en el theme de Bootstrap. Estas variables son principalmente
para la barra de navegación y para el footer. Principalmente he sobrescrito dos variables: $dark para el color de fondo
del footer y navegación y $navbar-dark-hover-color para el hover de la navegación superior.

El último fichero de estilos es el `layouts/_home.scss` donde tengo los estilos globales y los grid.

## Dependencias

* FontAwesome: Hemos introducido las fuentes para el timeline.
* Jquery: Como requisito para usar Bootstrap es necesario instalar esta librería. Me he encontrado
un único problema con las versiones, ya que la 3.5 tiene un bug y he tenido que instalar la 3.4.1.
* Bootstrap: Librería de componentes usada por la plataforma Twitter.
