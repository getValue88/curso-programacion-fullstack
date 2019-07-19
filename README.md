# curso-programacion-fullstack

Ejercicios y prácticas del curso fullstack 2019

***
## \# 17/07/2019

16. **Ejercicio:**
    - Implementar el diagrama: https://prnt.sc/ogybru
    - Puede que esté incompleto.
    - Agregar lo que crean necesario.

17. **Ejercicio:**
    - Elegir tres ejercicios realizados anteriormente de los fuera de clase y plantear el diagrama de clase.

18. **Ejercicio:**
    - Plantear un diagrama de clase con los siguientes requisitos e implementar:

        - Herencia.
        - Composición.
        - Variables protected.
    
              task: npm run ej18

## \# 15/07/2019

14. **Ejercicio:**
    - Implementar las clases y métodos que se muestran: http://prntscr.com/ofvx1o
    - Agregar variables/métodos adicionales.
    - Implementar cada clase en un archivo diferente. 

15. **Ejercicio:**
    - Implementar Registro Automotor visto anteriormente, pero agregando soporte de motos y camiones usando herencia.
    - Definir tarea NPM para compilar y correr los archivos necesarios
    
          task: npm run ej15

## \# 12/07/2019

12. **Ejercicio:**
    - Armar una base de datos de libros.
    - Hacer el planteo de las clases necesaria.
    - Implementar la clase Libro.
    - Implementar la clase GestorLibros → debe soportar insertar/consultar/modificar/eliminar libros (la entrada de información por teclado).
    - Luego incorporar en donde se crea necesario un mecanismo para leer libros desde un archivo de texto
         
        Resolución:  

          Implementación de 3 clases:
           - Book:
             --> Estado: Title, Author, Year.
             --> Metodos: getter y setter para cada variable de estado.
           - Libreria:
             --> Estado: Arreglo de Book(s).
             --> Metodos: 
                   showBooks() --> Muestra la lista de libros por consola.
                   addBook() --> Agrega un libro a la lista.
                   searchByTitle(par?:string) --> Solicita el titulo del libro por medio de readline-sync. En caso de encontrarlo devuelve un objeto:Book.
                      Parametro opcional:
                         "u" --> actualizar datos del libro buscado.
                         "d" --> eliminar de la lista el libro buscado.
           - txtToBookArr:
             --> Estado: rutaTxt, separatorRows, separadorCols.
             --> Metodos:
                   returnBookArr() --> Procesa el archivo de texto y devuelve un arreglo de Book(s).

13. **Ejercicio:**
    - Iniciar un proyecto NPM.
    - Elegir una librería en https://www.npmjs.com/ e incorporarla en el proyecto.
    - Modelar una clase con composiciones, que utilice dicha librería.
    - Definir tarea NPM para compilar y correr los archivos necesarios.
    
          task : npm run ej13  --> Compila todos los archivos .ts y ejecuta main.js
         
         Resolución:
         
         - Librerias utilizadas: colors
        
          Implementación de 2 clases:
            - Calc:
              --> Estado: valorUno, valorDos, resultado (valorUno+valorDos), formato:Format
              --> Metodos: 
                    getResult() --> devuelve el resultado de la operacion. :number
                    getFormatedResult() --> imprime en consola el resultado de la operacion aplicando formato por medio de la clase Format
            - Format:
              --> Estado: value:number, format:string.
              --> Metodos:
                    private setNegative(),setPositive(),setZero() --> dan formato a la variable de estado format al crear una instancia de la clase dependiendo si el value es positivo, negativo o cero.
                    public getValue() --> devuelve format:string.

## \# 03/07/2019

9. **Ejercicio:**
    - 9.1:  
            - Plantear la clase Auto de la forma en que se vió en la clase → especificando variables internas y métodos.  
            - Implementar en TypeScript.
         
    - 9.2:  
            - Plantear la clase Monitor.  
            - Implementar en TypeScript.

10. **Ejercicio:**
    - Usando la clase Auto: Implementar la clase RegistroAutomotor con métodos para consultar por un auto en un listado, borrar, actualizar y dar de alta.
    - Partir de función ya implementada para leer archivos.

11. **Ejercicio:**
    - Implementar la clase Matriz. En vez de consultar los valores con los corchetes, se debe hacer (desde afuera) a través de un método → get(x, y).

## \# 01/07/2019

4. **Ejercicio:**
    - Implementar una función que sume los elementos de un arreglo.
    - Forzar algún tipo de error a modo de ejemplificación.
    
5. **Ejercicio:**
    - Partir de los ejercicios de NPM:
    - Adaptar la forma de importar librerías a TS.
    - Agregar tipos a las variables y funciones.
          
6. **Ejercicio:**
    - Partir de cero:
    - Definir funciones (con todos los tipos necesarios) para hacer lo siguiente:
    - Agregar tipos a las variables y funciones.
    - Cargar un listado de palabras (por esta vez, usar el arreglo como variable global).
    - Insertar/eliminar/buscar/actualizar una palabra del listado.
    - Agregar que la lista de palabras esté ordenada permanentemente (ayudarse con filminas de ordenamiento).

         Resolución:
    
          - Librerias utilizadas: readline-sync.
          - Implementación de función que permite al usuario ingresar valores y guardarlos a un arreglo. La carga termina cuando se introduce un valor vacio.
          - Implementación de un menu que ofrece al usuario 5 opciones (1- Agregar datos al arreglo; 2- Eliminar datos del arreglo según índice; 3- Buscar por nombre, en caso de ser encontrado devuelve el índice del valor; 4- Modificar el valor de un determinado índice; 5- Finalizar el programa).
          - Después de cada modificacion, el arreglo se ordena alfabeticamente ascendente y se imprime en pantalla.
          - El menu se ejecuta despues de cada operación.

7. **Ejercicio:**
    - Iniciar proyecto NPM en carpeta nueva.
    - Descargar las librerías necesarias.
    - Cargar un listado de nombres a partir de un archivo de texto.
    - Cargar un listado de colegios a partir de otro archivo de texto.
    - A partir de ambos listados, saber en qué colegio va a votar una determinada persona.

         Resolución:
    
          - Librerias utilizadas: fs, readline-sync.
          - Guardar en dos strings la información de ambos archivos de texto respectivamente.
          - Separar los valores de cada string almacenandolos en arreglos y ordenandolos alfabeticamente.
          - Implementacion de menú con tres opciones. (1- Buscar por nombre: En caso de encontrarlo, imprime en consola el lugar donde debe votar la persona buscada, de lo contrario vuelve a ejecutar el menú; 2- Buscar por índice: Imprime la lista completa en consola y permite seleccionar el índice. En caso de ser válido imprime en consola el lugar de votación, de lo contrario vuelve a ejecutar el menú; 3- Finalizar el programa).
          - El criterio para asignar lugar de votación es según la primer letra del apellido de cada persona de la lista.

8. **Ejercicio:**
    - Crear proyecto NPM
    - Implementar sistema para cargar matrices a partir de archivo de texto.
    - Cargar un listado de nombres a partir de un archivo de texto.

         Resolución:
    
          - Librerias utilizadas: fs.
          - Implementación de función que recibe tres strings como parametros (ruta del .txt, separador 1, separador 2) y devuelve una matriz de números.
    
          
## \# 28/06/2019

1. **Ejercicio:**
    - Crear un proyecto.
    - Crear dos archivos con funcionalidades diferentes.
    - Definir las tareas asociadas y ejecutarlas.

         Resolución:
    
          - 1.1:
              npm run funcion_uno : imprime en consola un texto de prueba.
          - 1.2:
              Librerias utilizadas: readline-sync.
              npm run funcion_dos : Solicita al usuario el ingreso de su nombre por consola y posteriormente lo saluda.
    
2. **Ejercicio:**
    - Crear un proyecto NPM.
    - Buscar en la página alguna dependencia e instalarla (ademas de readline-sync).
    - Desarrollar alguna funcionalidad que utilice la dependencia instalada.
    - Crear dos archivos con funcionalidades diferentes (cada uno utilizando una libreria diferente sin contar readline-sync).
    - Definir las tareas asociadas y ejecutarlas.
    
         Resolución:
    
          - 2.1:
              Librerias utilizadas: one-liner-joke.
              npm run joke : Imprime en consola una broma al azar.
          - 2.2:
              Librerias utilizadas: asciichart.
              npm run chart : Imprime en consola un grafico ascii predeterminado.
    
3. **Ejercicio:**
    - Crear una función y ejecutarla por medio de tareas enviandole parametros por linea de comandos.
    
         Resolución:
    
          - Función que suma dos valores recibidos como argumento e imprime el resultado en consola.
          - Tareas de prueba:
              npm run sumar1 : 4 + 6
              npm run sumar2 : 2.5 + 7.2
              npm run sumar3 : -4 + 2.2

***

**Francisco Corti.**
fc_pincharrata@hotmail.com.ar
