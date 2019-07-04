# curso-programacion-fullstack

Ejercicios y prácticas del curso fullstack 2019

***
## \# 03/07/2019

9. **Ejercicio:**
    - 9.1:  
            - Plantear la clase Auto de la forma en que se vió en la clase → especificando variables internas y métodos.  
            - Implementar en TypeScript.
<<<<<<< HEAD
        
=======
         
>>>>>>> f5c3a5672dba4c36c0dd594c07047c12fd31e2df
    - 9.2:  
            - Plantear la clase Monitor.  
            - Implementar en TypeScript.

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
