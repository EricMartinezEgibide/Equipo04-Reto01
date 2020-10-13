# NUE APP

# 1. ¿Qué es NUE APP?
NUE APP es una aplicación web multiplataforma basada en html, css y JavaScript para la gestión de usuarios y avisos. La aplicación fue concebida inicialmente para la empresa Aeronautics Engines S.A, pero al tratarse de código abierto siéntase libre de utilizarla como desee.

  - Compatible con dispositivos de distintos tamaños.
  - Compatible con los navegadores más utilizados.
  - Compatible con todos sistemas operativos. (Menos los basados en texto)
 
  Puede ejecutar una demostración aquí:

| Versión | Enlace |
| ------ | ------ |
| DEMO 1.0 | [https://nue-reto01.netlify.app/html/index.html](https://nue-reto01.netlify.app/html/index.html) |


# 2. Instalación y puesta en marcha

  1. Descargue la última versión disponible de la App desde la rama "main" del repositorio. [Click aquí](https://www.github.com/EricMartinezEgibide/Equipo04-Reto01/tree/main)
  2. Inserte los archivos en su servidor.
  3. Ejecute el index ubicado en "/html/index.html"

### Primer inicio de sesión

 Si ha descargado e integrado correctamente la app en su servidor, se le abrirá la interfaz de inicio de sesión. (Vea la imágen inferior)

[![pic](https://i.imgur.com/OC6s0VK.png)]()

#### **A modo de seguridad siempre que no haya ningún usuario registrado en el sistema, la app procederá a crear uno nuevo llamado admin, de ésta manera evitamos perder el acceso a la app tras una configuración poco afortunada.**

Sus credenciales son las siguientes (Sin las comillas):

#### Usuario: "admin"
#### Contraseña: "admin"

Recomendamos el cambio inmediato de la contraseña de "admin", o en su defecto su completa eliminación una vez haya logrado acceder a la app.

# 3. Navegación por la app
La interfaz es bastante simple y por lo tanto intuitiva, disponemos de una cabecera que nos acompañará en todas las páginas de la misma, ésta consta de los siguientes elementos:

- Nombre de la compañía: Es un pequeño logo de AERONAUTICS ENGINES S.A. No obstante es probable que desee cambialo por el suyo, si es así, no tiene más que acceder a su etiqueta y remplazar el texto por el nuevo.
- Inicio: Abrirá el menú principal de la app, se trata de un lugar perfecto para colocar normativas, directrices a seguir o descargos de responsabilidad.
- Usuario: Abrirá el formulario de usuarios. (Véase el apartado centrado en la gestión de usuarios.)
- Avisos: Abrirá el formulario de avisos. (Véase el apartado centrado en la gestión de avisos.)

# 4. Gestión de usuarios

### Estructura
La interfaz de gestión de usuarios está dividida en dos secciones:
- Formulario
- Lista de datos

#### Formulario
Se tratan de los campos de los que consta todo usuario:

```sh
Nombre
Primer apellido
Segundo apellido
Contraseña
```
Seguramente se habrá percatado de que no exite el campo nick; ésto se debe a que el nick se generará de manera automática uniendo las iniciales del usuario y haciendo uso de la fecha actual. De ésta manera queda compensado el hecho de no disponer de una base de datos MySQL ya que la app empleará el nick como una PK.

#### Lista de datos
Aquí podrá ver un listado de todos los usuarios registrados en la app, junto a cada registro hay dos botones que servirán para la eliminación y modificación de los mismos. (Para su utilización véase el siguiente paso "Acciones de usuarios")


[![pic](https://i.imgur.com/QkCzA2E.png)]()

### Acciones de usuarios: Creación, eliminación y modificación

- Creación: Para la creación de un nuevo usuario tan solo deberá de rellenar los campos del formulario y pulsar en el botón de "Enviar datos". De haber rellenado de manera satisfactoria todos los campos un aviso emergerá del navegador informándole de que la acción ha sido efectuada correctamente. Para comprobarlo de manera manual simplemente mire si en la lista se ha añadido un nuevo registro.
- Eliminación: Borrar un registro es tan sencillo como pulsar el botón con el símbolo de la "x" que corresponda a la fila que desea eliminar. Instantáneamente el usuario quedará eliminado de la base de datos.
-  Modificación: Consta de varios breves pasos, en primer lugar hacemos click en el botón con el símbolo del lápiz sobre la fila que deseemos editar, tras ésto podremos regresar al formulario donde los campos se habrán autorellenado con la información del usuario en cuestión, y por último editamos los campos que deseemos y le damos al botón de "Enviar datos". (Si queremos anular la modificación deberemos de dejar los campos tal y como estaban.)

##### Estos son los iconos de edición y eliminación respectivamente.
[![pic](https://i.imgur.com/gT5DFMG.png)]()

# 5. Gestión de avisos

### Estructura
La estructura guarda una gran similitud con el página destinada a la gestión de usuarios, así que si se ha leído y/o utilizado esa interfaz, le recomiendo encarecidamente que comience a utilizar la app y que solo se revise las siguientes líneas en caso de dar con un error.

La interfaz de gestión de avisos está dividida en dos secciones:
- Lista de datos
- Formulario

#### Formulario
Se tratan de los campos de los que consta todo aviso:

```sh
Titulo
Descipción
Importancia
```
Al igual que en el caso de los usuarios, los avisos también esconden un atributo, se trata de la fecha en la que ha sido redactados, éste campo no puede ser editado de ninguna manera, de ésta manera evitamos fraudes.

#### Lista de datos
Aquí podrá ver un listado de todos los avisos almacenados en la app, junto a cada registro hay dos botones que servirán para la eliminación y modificación de los mismos. (Para su utilización véase el siguiente paso “Acciones de avisos”)

Cabe destacar que los elementos de la tabla están ordenados en base a su importancia.

[![pic](https://i.imgur.com/gz3kCVj.png)]()


### Acciones de avisos: Creación, eliminación y modificación
- Creación: Para la creación de un nuevo aviso tan solo deberá de rellenar los campos del formulario y pulsar en el botón de “Enviar datos”. De haber rellenado de manera satisfactoria todos los campos una alerta emergerá del navegador informándole de que la acción ha sido efectuada correctamente. Para comprobarlo de manera manual simplemente mire si en la lista se ha añadido un nuevo registro.
- Eliminación: Borrar un registro es tan sencillo como pulsar el botón con el símbolo de la "x" que corresponda a la fila que desea eliminar. Instantáneamente el usuario quedará eliminado de la base de datos.
- Modificación: Consta de varios breves pasos, en primer lugar hacemos click en el botón con el símbolo del lápiz sobre la fila que deseemos editar, tras ésto podremos regresar al formulario donde los campos se habrán autorellenado con la información del aviso en cuestión, y por último editamos los campos que deseemos y le damos al botón de “Enviar datos”. (Si queremos anular la modificación deberemos de dejar los campos tal y como estaban.)

##### Estos son los iconos de edición y eliminación respectivamente.
[![pic](https://i.imgur.com/gT5DFMG.png)]()

# 6. Código abierto!
¿Quiere realizar mejoras en el código?, ¡adelante!, pero si logra mejorar la app no se olvide de proponer un "Pull request" para que podamos valorar la posibilidad de unir su código con el nuestro.

 