# README

¡Bienvenido/a! El objetivo de esta prueba técnica es poner a prueba tus conocimientos sobre el framework o stack con el que trabajamos cada día en OpositaTest y sobretodo para conocer tu forma de trabajar, así como valorar tu capacidad para resolver problemas.
Valoraremos el:

- Análisis y manejo de APIs.
- Tipado de los datos.
- Organización del código.
- Segmentación en servicios, hooks, componentes, etc.
- Conocimiento de componentes core de React Native (Text, FlatList, StyleSheet, etc.) así como su uso y manejo.
- Buenas prácticas: clean code, reutilización de código...
- Testing.
- Comprensión de la tarea.

## Detalles

Deberás construir una aplicación desde cero en la que se muestre un listado de posts determinado con la siguiente llamada a API:
`https://dummyjson.com/posts`

A partir de esta llamada, deberás construir lo siguiente:

1. La aplicación deberá mostrar el listado de posts que nos lleguen vía API (por defecto, son 30).
2. Cada post deberá mostrar un título, las tags, número de reacciones que tiene y si está marcado como favorito o no (más adelante se explicará esto).
   [Ejemplo básico](https://drive.google.com/file/d/1KO2wc0AmmjDJKqNFAWiEkDxrKqNdfPZ1/view?usp=share_link)
3. Cada post será interaccionable y al presionar sobre el elemento del mismo se abrirá una modal donde se mostrará la información detallada, como el título, descripción, tags y el número de reacciones. Además, se deberá mostrar el comentario referente al post en la modal a modo informativo. Para ello, se deberá utilizar la siguiente petición API para obtener el comentario referente a un ID del post:

```
https://dummyjson.com/posts/1/comments
```

4. Esta modal dispondrá de un botón de cerrar para poder volver a la vista anterior, además deberás introducir también un botón para que se marque un post como "favorito". Al presionar sobre este botón, se deberá indicar de alguna manera en la modal de que el post es un "favorito". Al volver a la vista anterior, se deberá reflejar de alguna manera también en el ítem.
5. En caso de que un post se haya marcado como favorito, **deberá aparecer entre los primeros del listado**.
6. **OPCIONAL**: El listado de posts podrá incluir un paginado, de forma que al llegar al final del componente, se deberán cargar los siguientes posts disponibles.
Para ello, en el API tenemos disponible la siguiente llamada:

```
https://dummyjson.com/posts?limit=60
```

Donde `limit` es el número de posts que se reciben como máximo.

### Consideraciones

- Se deberán manejar los estados de carga y error en la vista al obtener los datos.
- Se valorará crear servicios para la llamada al endpoint, así como el uso de hooks reutilizables para otras partes de la aplicación e incluso el uso de mappers.
- Si se necesita saber más acerca de la documentación del API y sus métodos, se puede consultar el siguiente [recurso](https://dummyjson.com/docs/posts).

## Requisitos de Stack

Para el desarrollo de la aplicación deberás utilizar las siguientes herramientas:

- React Native
- Unit tests (jest, react-testing-library...)
- TypeScript

### Consideraciones

- Puedes usar un Codesandbox con `react-native-web` y también crear un proyecto desde cero en React Native vanilla (usando _npx create app_ on incluso _expo_).
- Se pueden usar librerías o dependencias externas a React o React Native, pero se deberá justificar su uso.
- Puedes dedicar el tiempo necesario para realizar la prueba. La prueba deberá reflejar la manera que trabajas o te gustaría trabajar y que también refleje tus conocimientos sobre el framework (entrega código que te defina como desarrollador).
- Si tienes alguna duda, ¡consulta!
