import * as THREE from "three";
export const paintingsData = [
  //frontal
  {
    url: "/imagenes/principal/frontal/logo-fmat.webp",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(0, 0, -7.1),
    info: `<h1 class="text-center text-3xl">Facultad de Matemáticas</h1>`,
  },
  {
    url: "/imagenes/principal/frontal/mision-fmat.webp",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(5, 0, -7.1),
    info: `<h1 class="text-center text-3xl">Misión de la Facultad de Matemáticas</h1>`,
  },
  {
    url: "/imagenes/principal/frontal/vision-fmat.webp",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(-5, 0, -7.1),
    info: `<h1 class="text-center text-3xl">Visión de la Facultad de Matemáticas</h1>`,
  },
  //Trasero
  {
    url: "/imagenes/principal/trasera/historia-fmat.png",
    w: 10,
    h: 5,
    p: new THREE.Vector3(0, 0, 7.1),
    info: `<h1 class="text-center text-3xl">Historia de la Facultad de Matemáticas</h1>`,
  },
  //Laterales collage
  {
    url: "/imagenes/principal/laterales/collage-01.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(15.2, 0, 4.5),
    r: [0, Math.PI / 2, 0],
    info: `<h1 class="text-center text-3xl">Momentos FMAT</h1>`,
  },
  {
    url: "/imagenes/principal/laterales/collage-02.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(-15.2, 0, -4.5),
    r: [0, Math.PI / 2, 0],
    info: `<h1 class="text-center text-3xl">Momentos FMAT</h1>`,
  },
  //LCC
  {
    url: "/imagenes/LCC/plan.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(19, 0, -7.8),
    info: `<h1 class="text-center text-3xl">Plan de Estudios Licenciatura en Ciencias de la Computación</h1>`,
  },
  {
    url: "/imagenes/LCC/objetivo-LCC.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(15, 0, -27),
    info: `<h1 class="text-center text-3xl">Objetivo de la Licenciatura en Ciencias de la Computación</h1>`,
  },
  {
    url: "/imagenes/LCC/perfil-ingreso-LCC.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(10, 0, -27),
    info: `<h1 class="text-center text-3xl">Perfil de Ingreso a la Licenciatura en Ciencias de la Computación</h1>`,
  },
  {
    url: "/imagenes/LCC/perfil-egreso-LCC.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(20, 0, -27),
    info: `<h1 class="text-center text-3xl">Perfil de Egreso de la Licenciatura en Ciencias de la Computación</h1>`,
  },
  {
    url: "/imagenes/LCC/grafo.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(22, 0, -17.5),
    r: [0, Math.PI / 2, 0],
    info: `
      <h1 class="text-center text-4xl mb-5">Algoritmo de Dijkstra</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Matemáticas Discretas</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Segundo Semestre</p>
      <p class="text-xl text-white">El algoritmo de Dijkstra, también llamado algoritmo de caminos mínimos, es un algoritmo para la determinación del camino más corto dado un vértice origen al resto de los vértices en un grafo con pesos en cada arista.</p>
    `,
  },
  {
    url: "/imagenes/LCC/pilas-colas.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(22, 0, -12.5),
    r: [0, Math.PI / 2, 0],
    info: `
      <h1 class="text-center text-4xl mb-5">Pilas y Colas</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Estructuras de Datos</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Tercer Semestre</p>
      <p class="text-xl text-white">Las pilas y colas son estructuras de datos fundamentales en programación. Una pila sigue el principio LIFO (Last In, First Out), donde el último elemento insertado es el primero en salir. Una cola, en cambio, sigue el principio FIFO (First In, First Out), donde el primer elemento ingresado es el primero en salir.</p>
    `,
  },
  {
    url: "/imagenes/LCC/complejidades.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(22, 0, -22.5),
    r: [0, Math.PI / 2, 0],
    info: `
      <h1 class="text-center text-4xl mb-5">Las Complejidades Temporales</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Análisis de Algoritmos</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Cuarto Semestre</p>
      <p class="mb-3 text-xl text-white">En análisis de algoritmos, uno de los conceptos fundamentales es la complejidad temporal de un algoritmo, que mide el tiempo que tarda en ejecutarse en función del tamaño de la entrada. Una fórmula común es la notación Big-O (O(n)), que describe el comportamiento asintótico del algoritmo. <br/> Por ejemplo:</p>
      <ul class="text-xl text-white mb-3">
        <li>O(1): Tiempo constante.</li>
        <li>O(n): Tiempo lineal.</li>
        <li>O(n<sup>2</sup>): Tiempo cuadrático.</li>
      </ul>
      <p class="text-xl text-white">Estas notaciones ayudan a evaluar y comparar la eficiencia de diferentes algoritmos según el crecimiento de su tiempo de ejecución con respecto al tamaño de los datos de entrada.</p>
    `,
  },
  {
    url: "/imagenes/LCC/modelo.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(8, 0, -17.5),
    r: [0, Math.PI / 2, 0],
    info: `
      <h1 class="text-center text-4xl mb-5">Modelado y Animación</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Gráficas por Computadoras</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Noveno Semestre</p>
      <p class="text-xl text-white">En la materia de Gráficas por Computadora, se estudian técnicas para crear y manipular imágenes 3D, incluyendo modelado, transformaciones geométricas, renderizado, programación de shaders, iluminación, algoritmos de rasterización e interactividad. Combina teoría matemática y programación para generar gráficos digitales realistas y eficientes, aplicados en simulaciones y videojuegos.</p>
    `,
  },
  {
    url: "/imagenes/LCC/reinas.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(8, 0, -12.5),
    r: [0, Math.PI / 2, 0],
    info: `
      <h1 class="text-center text-4xl mb-5">Problema de las 8 Reinas</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Inteligencia Artificial</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Noveno Semestre</p>
      <p class="text-xl text-white">El objetivo del problema de las 8 reinas es colocar 8 reinas en un tablero de ajedrez de 8x8 de manera que ninguna de ellas se ataque entre sí. Es decir, no puede haber dos reinas en la misma fila, columna o diagonal. Los algoritmos genéticos permiten explorar una amplia variedad de soluciones posibles, especialmente en problemas complejos como el de las 8 reinas, donde los métodos de búsqueda exhaustiva (fuerza bruta) pueden ser costosos computacionalmente.</p>
    `,
  },
  {
    url: "/imagenes/LCC/euler.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(8, 0, -22.5),
    r: [0, Math.PI / 2, 0],
    info: `
      <h1 class="text-center text-4xl mb-5">Aproximaciones con Euler</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Cómputo Científico</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Octavo Semestre</p>
      <p class="text-xl text-white">El método de Euler es un método numérico utilizado para resolver ecuaciones diferenciales ordinarias. Aproxima la solución de una ecuación diferencial utilizando un valor inicial y un paso de tiempo. Se calcula el valor de la solución en el siguiente paso sumando el producto de la derivada en el punto actual por el paso de tiempo. Es sencillo y eficiente, pero puede ser inexacto, especialmente con pasos de tiempo grandes. Se usa principalmente cuando no es posible obtener soluciones exactas y se requiere una aproximación rápida.
      </p>
    `,
  },
  //LA
  {
    url: "/imagenes/LA/plan.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(15.8, 0, 4.25),
    r: [0, Math.PI / 2, 0],
    info: `<h1 class="text-center text-3xl">Plan de Estudios Licenciatura en Actuaria</h1>`,
  },
  {
    url: "/imagenes/LA/objetivo-LA.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(32, 0, 0),
    r: [0, Math.PI / 2, 0],
    info: `<h1 class="text-center text-3xl">Objetivo de la Licenciatura en Actuaria</h1>`,
  },
  {
    url: "/imagenes/LA/perfil-ingreso-LA.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(32, 0, 5),
    r: [0, Math.PI / 2, 0],
    info: `<h1 class="text-center text-3xl">Perfil de Ingreso a la Licenciatura en Actuaria</h1>`,
  },
  {
    url: "/imagenes/LA/perfil-egreso-LA.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(32, 0, -5),
    r: [0, Math.PI / 2, 0],
    info: `<h1 class="text-center text-3xl">Perfil de Egreso de la Licenciatura en Actuaria</h1>`,
  },
  {
    url: "/imagenes/LA/ARIMA.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(24, 0, 7),
    info: `
      <h1 class="text-center text-4xl mb-5">Serie ARIMA</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Series de Tiempo</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Octavo Semestre</p>
      <p class="text-xl text-white">La serie ARIMA 
      (Autoregressive Integrated Moving Average) es un modelo estadístico usado para      analizar y predecir datos temporales. Combina componentes autoregresivos (AR),      diferencias integradas (I) para estacionarizar la serie, y de media móvil (MA)    para modelar errores. Es útil en economía, finanzas y actuaría para identificar      tendencias y patrones.</p>
    `,
  },
  {
    url: "/imagenes/LA/chevychef.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(29, 0, 7),
    info: `
      <h1 class="text-center text-4xl mb-5">Desigualdad de Chebyshev</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Probabilidad</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Tercer Semestre</p>
      <p class="text-xl text-white">La desigualdad de Chebyshev es un resultado que ofrece una cota inferior a la probabilidad de que el valor de una variable aleatoria con varianza finita esté a una cierta distancia de su esperanza matemática.</p>
    `,
  },
  {
    url: "/imagenes/LA/multivariable.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(19, 0, 7),
    info: `
      <h1 class="text-center text-4xl mb-5">Ecuación de la regresión lineal múltiple.</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Regresión Lineal</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Quinto Semestre</p>
      <p class="text-xl text-white">Es una extensión de la regresión lineal simple que permite modelar la relación entre una variable dependiente (como un costo o prima esperada en el ámbito actuarial) y múltiples variables independientes (como factores de riesgo o características del asegurado).
      En actuaría, es ampliamente utilizada para construir modelos de tarifas, análisis de riesgos, y predicción de siniestros en seguros.</p>
    `,
  },
  {
    url: "/imagenes/LA/PIB.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(19, 0, -7),
    info: `
      <h1 class="text-center text-4xl mb-5">Ecuación del PIB</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Macroeconomia</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Cuarto Semestre</p>
      <p class="text-xl text-white">La ecuación del PIB mide el valor total de los bienes y servicios producidos en un país durante un período. Refleja la actividad económica al sumar el consumo, inversión, gasto público y el saldo neto entre exportaciones e importaciones, siendo clave para evaluar crecimiento y estabilidad económica.</p>
    `,
  },
  {
    url: "/imagenes/LA/tasa-crecimiento.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(24, 0, -7),
    info: `
      <h1 class="text-center text-4xl mb-5">Tasa de Crecimiento Poblacional</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Demografia</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Sexto Semestre</p>
      <p class="text-xl text-white">La tasa de crecimiento poblacional, que mide el cambio porcentual en la población durante un período.</p>
      <ul class="text-xl text-white mb-3">
      <li>r: Tasa de crecimiento (%)</li>
      <li>Pt : Población en el tiempo final.</li>
      <li>P0 : Población en el tiempo inicial.</li>
      </ul>
      <p class="text-xl text-white">
      Esta fórmula ayuda a analizar dinámicas poblacionales y su impacto en recursos y políticas.
      </p>
    `,
  },
  {
    url: "/imagenes/LA/funcion-supervivencia.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(29, 0, -7),
    info: `
      <h1 class="text-center text-4xl mb-5">Funcion de Supervivencia</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Análisis de Supervivencia</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Septimo Semestre</p>
      <p class="text-xl text-white">La función de supervivencia mide la probabilidad de que un individuo o sistema sobreviva más allá de un tiempo específico(t). <br/> Calculada como
      S(t)=1-F(t), complementa la función de distribución acumulativa. Es fundamental en estudios de tiempo hasta eventos, como fallos o muertes.</p>
    `,
  },
  //LEM

  {
    url: "/imagenes/LEM/objetivo-LEM.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(-15, 0, 27),
    info: `<h1 class="text-center text-3xl">Objetivo de la Licenciatura en Ensenañaza de las Matemáticas</h1>`,
  },
  ,
  {
    url: "/imagenes/LEM/perfil-ingreso-LEM.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(-10, 0, 27),
    info: `<h1 class="text-center text-3xl">Perfil de Ingreso a la Licenciatura en Ensenañaza de las Matemáticas</h1>`,
  },
  {
    url: "/imagenes/LEM/perfil-egreso-LEM.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(-20, 0, 27),
    info: `<h1 class="text-center text-3xl">Perfil de Egreso de la Licenciatura en Ensenañaza de las Matemáticas</h1>`,
  },
  {
    url: "/imagenes/LEM/pitagoras.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(-22, 0, 17.5),
    r: [0, Math.PI / 2, 0],
    info: `
      <h1 class="text-center text-4xl mb-5">Teorema de Pitágoras</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Geometría Euclidiana</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Primer Semestre</p>
      <p class="text-xl text-white">En un triángulo rectángulo, el cuadrado de la longitud de la hipotenusa (el lado opuesto al ángulo recto) es igual a la suma de los cuadrados de las longitudes de los otros dos lados. Este teorema es fundamental en geometría y sirve como base para muchos otros conceptos, como la distancia entre dos puntos en el plano cartesiano. Es esencial para enseñar cómo se relacionan los elementos básicos de la geometría plana.</p>
    `,
  },
  {
    url: "/imagenes/LEM/programacion-especifica.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(-22, 0, 12.5),
    r: [0, Math.PI / 2, 0],
    info: `
      <h1 class="text-center text-4xl mb-5">Programación + Matemáticas</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Programación Específica</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Cuarto Semestre</p>
      <p class="text-xl text-white">La materia de Programación Específica en la licenciatura de Enseñanzas de las Matemáticas se enfoca en el desarrollo de habilidades de programación orientadas a la resolución de problemas matemáticos y a la creación de herramientas que faciliten la enseñanza de conceptos matemáticos. La materia tiene un enfoque práctico y está dirigida a ayudar a los futuros docentes a utilizar la programación como una herramienta para ilustrar, modelar y resolver situaciones matemáticas, tanto a nivel teórico como aplicado.</p>
    `,
  },
  {
    url: "/imagenes/LEM/softwares-educativos.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(-22, 0, 22.5),
    r: [0, Math.PI / 2, 0],
    info: `
      <h1 class="text-center text-4xl mb-5">Softwares Educativos.</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Informática Educativa</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Tercer Semestre</p>
      <p class="mb-3 text-xl text-white">La materia de Informática Educativa se enfoca en el uso de las tecnologías de la información y la comunicación (TIC) para mejorar los procesos de enseñanza-aprendizaje en las matemáticas. Los conceptos fundamentales que se abordan en esta materia incluyen el uso de software educativo, herramientas digitales, y metodologías para integrar la informática en la enseñanza de las matemáticas.</p>
    `,
  },
  {
    url: "/imagenes/LEM/modelo.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(-8, 0, 17.5),
    r: [0, Math.PI / 2, 0],
    info: `
      <h1 class="text-center text-4xl mb-5">Enseña Jugando</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Laboratorio Didáctico</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Sexto Semestre</p>
      <p class="text-xl text-white">La materia de Laboratorio Didáctico se enfoca en la experimentación y aplicación práctica de las herramientas y métodos pedagógicos para la enseñanza de las matemáticas. Esta materia tiene un enfoque práctico, permitiendo a los futuros docentes crear, probar y evaluar recursos didácticos de manera activa.</p>
    `,
  },
  {
    url: "/imagenes/LEM/paradigma-educativo.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(-8, 0, 12.5),
    r: [0, Math.PI / 2, 0],
    info: `
      <h1 class="text-center text-4xl mb-5">Matemáticas Aumentadas</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Paradigmas educativos</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Tercer Semestre</p>
      <p class="text-xl text-white">En la materia de Paradigmas Educativos el enfoque principal está en el estudio de los diferentes modelos y enfoques de enseñanza y aprendizaje que se utilizan en la educación matemática. Esta materia aborda cómo los paradigmas educativos influyen en la forma en que se enseñan y aprenden las matemáticas, con el objetivo de ofrecer a los futuros maestros herramientas para adoptar enfoques adecuados a las necesidades de sus estudiantes.</p>
      <ul class="text-xl text-white mb-3">
        <li>Paradigma tradicional.</li>
        <li>Enfoque constructivista.</li>
        <li>Paradigma sociocultural.</li>
        <li>Enfoque tecnológico y digital.</li>
        <li>Aprendizaje colaborativo.</li>
      </ul>
    `,
  },
  {
    url: "/imagenes/LEM/mate-aumentadas.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(-8, 0, 22.5),
    r: [0, Math.PI / 2, 0],
    info: `
      <h1 class="text-center text-4xl mb-5">Cálculos con Softwares</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Didáctica	del Cálculo</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Cuarto Semestre</p>
      <p class="text-xl text-white">En la materia de Didáctica del Cálculo el enfoque fundamental está en enseñar cómo impartir el conocimiento del cálculo (diferencial, integral, entre otros) de manera efectiva, comprendiendo tanto la teoría matemática como las mejores estrategias pedagógicas para facilitar su aprendizaje en estudiantes de diversos niveles educativos. Se abordan los métodos de enseñanza más adecuados para conceptos abstractos y complejos del cálculo, buscando siempre que los estudiantes logren una comprensión profunda y funcional.
      </p>
    `,
  },
  //LM
  {
    url: "/imagenes/LM/plan.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(-15.8, 0, -4.25),
    r: [0, Math.PI / 2, 0],
    info: `<h1 class="text-center text-3xl">Plan de Estudios Licenciatura en Matemáticas</h1>`,
  },
  {
    url: "/imagenes/LM/objetivo-LM.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(-32, 0, 0),
    r: [0, Math.PI / 2, 0],
    info: `<h1 class="text-center text-3xl">Objetivo de la Licenciatura en Matemáticas</h1>`,
  },
  {
    url: "/imagenes/LM/perfil-ingreso-LM.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(-32, 0, -5),
    r: [0, Math.PI / 2, 0],
    info: `<h1 class="text-center text-3xl">Perfil de Ingreso a la Licenciatura en Matemáticas</h1>`,
  },
  {
    url: "/imagenes/LM/perfil-egreso-LM.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(-32, 0, 5),
    r: [0, Math.PI / 2, 0],
    info: `<h1 class="text-center text-3xl">Perfil de Egreso de la Licenciatura en Matemáticas</h1>`,
  },
  {
    url: "/imagenes/LM/fuera-origen.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(-24, 0, -7),
    info: `
      <h1 class="text-center text-4xl mb-5">Fuera del Origen</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Geometría Analítica</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Primer Semestre</p>
      <p class="text-xl text-white">La ecuación de una circunferencia fuera del origen se expresa como
    (x - h)<sup>2</sup> + (y - k)<sup>2</sup> = r<sup>2</sup>
    (h,k) son las coordenadas del centro y
    r es el radio. Esta fórmula describe una circunferencia con centro en un punto arbitrario
      (h,k) del plano cartesiano.</p>
    `,
  },
  {
    url: "/imagenes/LM/induccion.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(-29, 0, -7),
    info: `
      <h1 class="text-center text-4xl mb-5">Inducción Matemática</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Algebra Superior</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Segundo Semestre</p>
      <p class="text-xl text-white">La inducción matemática es una técnica de demostración utilizada para probar que una proposición es verdadera para todos los números naturales. La idea es demostrar que una afirmación es cierta para el primer valor (usualmente
      n=1) y luego mostrar que si es verdadera para un número arbitrario
      n=k, entonces también lo será para el siguiente
      n=k+1.</p>
    `,
  },
  {
    url: "/imagenes/LM/eigen.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(-19, 0, -7),
    info: `
      <h1 class="text-center text-4xl mb-5">Eigenvalores y Eigenvectores</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Algebra Lineal</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Cuarto Semestre</p>
      <p class="text-xl text-white">:Los autovalores y autovectores son conceptos fundamentales en álgebra lineal. Dado un operador lineal A, un autovector v es un vector no nulo tal que A⋅v=λ⋅v, donde λ es el autovalor correspondiente. Los autovalores representan la escala de la transformación, mientras que los autovectores indican las direcciones que no cambian de dirección bajo esa transformación. Se usan en diversas aplicaciones, como en la descomposición espectral y análisis de sistemas dinámicos</p>
    `,
  },
  {
    url: "/imagenes/LM/algebra-abstracta.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(-19, 0, 7),
    info: `
      <h1 class="text-center text-4xl mb-5">Grupo Abeliano</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Álgebra Abstracta</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Sexto Semestre</p>
      <p class="text-xl text-white">Un grupo abeliano es un conjunto A junto con una operacion (*) que combina dos elementos cualesquiera a y b de A para formar otro elemento de A denotado a * b. <br/>
      Para que sea un grupo Abeliano tiene que satisfacer cuatro propiedades:</p>
      <ol class="text-xl text-white mt-3">
        <li>asociatividad: para todo a,b y c en A se cumple la ecuación (a * b) * c = a * (b*c).</li>
        <li>Elemento de identidad: Existe un elemento e en A tal que todos los elementos a en A, se cumple que e * a = a * e = a.</li>
        <li>Elemento inverso: Para cada a en A existe un elemento b tal que a * b = b * a = e donde e es el elemento identidad.</li>
        <li>Conmutividad: Para todo a,b en A a * b = b * a.</li>
      </ol>
    `,
  },
  {
    url: "/imagenes/LM/EDO.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(-24, 0, 7),
    info: `
      <h1 class="text-center text-4xl mb-5">Orden n</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Ecuaciones Diferenciales Ordinarias</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Quinto Semestre</p>
      <p class="text-xl text-white">En matemáticas, una ecuación diferencial ordinaria es la ecuación diferencial que relaciona una función desconocida de una variable independiente con sus derivadas. Es decir, una sola variable independiente, y una o más de sus derivadas respecto de tal variable.</p>
    `,
  },
  {
    url: "/imagenes/LM/teoria-medida.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(-29, 0, 7),
    info: `
      <h1 class="text-center text-4xl mb-5">Pertenecientes</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Teoría de la Medida e Integración</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Séptimo Semestre</p>
      <p class="text-xl text-white">La teoría de la medida es una rama del análisis y de la geometría que investiga las medidas, las funciones medibles y la integración. Es de importancia central en geometría, probabilidad y en estadística. Una medida aplica ciertos subconjuntos (pertenecientes a una σ-álgebra) en valores del intervalo [0, ∞].</p>
    `,
  },
  //LIS
  {
    url: "/imagenes/LIS/plan.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(19, 0, 7.8),
    info: `<h1 class="text-center text-3xl">Plan de Estudios Licenciatura en Ingeniería de Software</h1>`,
  },
  {
    url: "/imagenes/LIS/objetivo-LIS.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(15, 0, 27),
    info: `<h1 class="text-center text-3xl">Objetivo de la Licenciatura en Ingenieria de Software</h1>`,
  },
  {
    url: "/imagenes/LIS/perfil-ingreso-LIS.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(10, 0, 27),
    info: `<h1 class="text-center text-3xl">Perfil de Ingreso a la Licenciatura en Ingenieria de Software</h1>`,
  },
  {
    url: "/imagenes/LIS/perfil-egreso-LIS.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(20, 0, 27),
    info: `<h1 class="text-center text-3xl">Perfil de Egreso de la Licenciatura en Ingenieria de Software</h1>`,
  },
  {
    url: "/imagenes/LIS/POO.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(22, 0, 17.5),
    r: [0, Math.PI / 2, 0],
    info: `
      <h1 class="text-center text-4xl mb-5">Aspirante Class</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Programación Orientada a Objetos</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Tercer Semestre</p>
      <p class="text-xl text-white"> La clase, que sirve como plantilla para crear objetos. Una clase define propiedades (atributos) y comportamientos (métodos) que sus objetos pueden tener.</p>
    `,
  },
  {
    url: "/imagenes/LIS/solid.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(22, 0, 12.5),
    r: [0, Math.PI / 2, 0],
    info: `
      <h1 class="text-center text-4xl mb-5">SOLID</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Diseño de Software</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Cuarto Semestre</p>
      <p class="text-xl text-white mb-3"> Cada principio aborda un aspecto esencial del diseño orientado a objetos.</p>
      <ol class="text-xl text-white mb-2">
        <li>S: Responsabilidad única - Una clase debe tener una sola responsabilidad.</li>
        <li>O: Abierto/Cerrado - El código debe ser abierto para extensiones pero cerrado para modificaciones.</li>
        <li>L: Sustitución de Liskov - Las subclases deben sustituir a sus clases base sin alterar la funcionalidad.</li>
        <li>I: Segregación de Interfaces - Las interfaces deben ser específicas y no forzar a implementar métodos innecesarios.</li>
        <li>D: Inversión de Dependencias - Los módulos de alto nivel no deben depender de los de bajo nivel; ambos deben depender de abstracciones.</li>
      </ol>
      <p class="text-xl text-white mb-3">Estos principios aseguran un diseño robusto, fácil de escalar y adaptable a cambios futuros.</p>
    `,
  },
  {
    url: "/imagenes/LIS/MVC.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(22, 0, 22.5),
    r: [0, Math.PI / 2, 0],
    info: `
      <h1 class="text-center text-4xl mb-5">MVC</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Arquitecturas de Software</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Quinto Semestre</p>
      <p class="mb-3 text-xl text-white">:En Arquitecturas de Software a Objetos, un concepto fundamental es el Patrón de Diseño Modelo-Vista-Controlador (MVC), clave para estructurar aplicaciones orientadas a objetos. </p><br/>
      <ol class="text-xl text-white mb-2">
        <li>Modelo: Gestiona los datos y la lógica del negocio.</li>
        <li>Vista: Presenta la interfaz al usuario y refleja cambios en el modelo.</li>
        <li>Controlador: Gestiona la interacción del usuario y actualiza el modelo o la vista según sea necesario.</li>
      </ol>
      <p class="text-xl text-white">El MVC separa responsabilidades, facilitando la escalabilidad, mantenimiento y pruebas en aplicaciones complejas. Es ampliamente utilizado en frameworks modernos como Django, Angular y Spring.</p>
    `,
  },
  {
    url: "/imagenes/LIS/rest-api.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(8, 0, 17.5),
    r: [0, Math.PI / 2, 0],
    info: `
      <h1 class="text-center text-4xl mb-5">API. RESTFUL</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Desarrollo de Aplicaciones Web</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Quinto Semestre</p>
      <p class="text-xl text-white">La Arquitectura RESTful (Representational State Transfer), esencial para diseñar APIs web que interactúan con aplicaciones de manera eficiente.</p><br/>
      <ol class="text-xl text-white mb-2">
        <li>Recursos: Representan entidades de la aplicación, accesibles a través de URLs (p. ej., /users).</li>
        <li>Métodos HTTP: CRUD se implementa con GET (leer), POST (crear), PUT (actualizar), y DELETE (eliminar).</li>
        <li>Representaciones: Los recursos se intercambian en formatos como JSON o XML.</li>
        <li>Statelessness: Cada petición contiene toda la información necesaria para procesarla, simplificando la escalabilidad.</li>
      </ol>
      <p class="text-xl text-white">RESTFUL APIs son la base para conectar aplicaciones front-end con back-end en arquitecturas modernas.</p>
    `,
  },
  {
    url: "/imagenes/LIS/OSI.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(8, 0, 12.5),
    r: [0, Math.PI / 2, 0],
    info: `
      <h1 class="text-center text-4xl mb-5">OSI</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Redes y Seguridad de Computadoras</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Séptimo Semestre</p>
      <p class="text-xl text-white">El Modelo OSI (Open Systems Interconnection), que describe cómo los sistemas de comunicación digital se interconectan y garantiza interoperabilidad entre dispositivos y protocolos.</p><br/>
      <ol class="text-xl text-white mb-2">
        <li>Física: Transmisión de bits por medios físicos.</li>
        <li>Enlace de datos: Control de acceso al medio y corrección de errores.</li>
        <li>Red: Enrutamiento y direccionamiento (IP).</li>
        <li>Transporte: Gestión de conexiones y fiabilidad (TCP).</li>
        <li>Sesión: Establecimiento y gestión de sesiones.</li>
        <li>Presentación: Traducción de datos y cifrado.</li>
        <li>Aplicación: Interfaces para aplicaciones y servicios.</li>
      </ol>
      <p class="text-xl text-white">El enfoque principal es garantizar comunicaciones eficientes, confiables y seguras en redes modernas.</p>
    `,
  },
  {
    url: "/imagenes/LIS/ciclo-vida.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(8, 0, 22.5),
    r: [0, Math.PI / 2, 0],
    info: `
      <h1 class="text-center text-4xl mb-5">Ciclo de Vida del Mantenimiento de Software</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Mantenimiento de Software</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Octavo Semestre</p>
       <p class="text-xl text-white">Describe las actividades necesarias para garantizar que un sistema de software funcione correctamente y siga siendo relevante después de su implementación inicial.</p><br/>
      <ol class="text-xl text-white mb-2">
        <li>Correctivo: Solución de errores detectados.</li>
        <li>Adaptativo: Ajustes para cambios en el entorno.</li>
        <li>Perfectivo: Mejoras de rendimiento o funcionalidad.</li>
        <li>Preventivo: Modificaciones para prevenir futuros problemas.</li>
      </ol>
      <p class="text-xl text-white">El mantenimiento busca optimizar la calidad, confiabilidad y longevidad del software.</p>
    `,
  },
  //LIC
  {
    url: "/imagenes/LIC/plan.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(-19, 0, -7.8),
    info: `<h1 class="text-center text-3xl">Plan de Estudios Licenciatura en Ingeniería de Software</h1>`,
  },
  {
    url: "/imagenes/LIC/objetivo-LIC.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(-15, 0, -27),
    info: `<h1 class="text-center text-3xl">Objetivo de la Licenciatura en Ingeniería en Computación</h1>`,
  },
  {
    url: "/imagenes/LIC/perfil-ingreso-LIC.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(-10, 0, -27),
    info: `<h1 class="text-center text-3xl">Perfil de Ingreso a la Licenciatura en Ingeniería en Computación</h1>`,
  },
  {
    url: "/imagenes/LIC/perfil-egreso-LIC.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(-20, 0, -27),
    info: `<h1 class="text-center text-3xl">Perfil de Egreso de la Licenciatura en Ingeniería en Computación</h1>`,
  },
  {
    url: "/imagenes/LIC/fundamentos.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(-22, 0, -17.5),
    r: [0, Math.PI / 2, 0],
    info: `
      <h1 class="text-center text-4xl mb-5">Estructuras de Control</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Fundamentos de Programación</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Primer Semestre</p>
      <p class="text-xl text-white">  Las estructuras de control son bloques fundamentales en programación que dirigen el flujo de ejecución del código. Se dividen en secuenciales, condicionales (como if-else o switch) y repetitivas (como for o while). Permiten tomar decisiones, ejecutar instrucciones condicionalmente y repetir acciones según criterios definidos.</p>
    `,
  },
  {
    url: "/imagenes/LIC/segunda-ley.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(-22, 0, -12.5),
    r: [0, Math.PI / 2, 0],
    info: `
      <h1 class="text-center text-4xl mb-5">Segunda Ley de Newton</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Física</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Tercer Semestre</p>
      <p class="text-xl text-white"> La Segunda Ley de Newton establece que la aceleración (a) de un objeto es directamente proporcional a la fuerza neta (F) que actúa sobre él e inversamente proporcional a su masa (m).
      Este concepto es fundamental en Física para analizar el movimiento y las fuerzas en sistemas mecánicos, esenciales en aplicaciones de ingeniería.</p>
    `,
  },
  {
    url: "/imagenes/LIC/electricidad-magnetismo.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(-22, 0, -22.5),
    r: [0, Math.PI / 2, 0],
    info: `
      <h1 class="text-center text-4xl mb-5">Electricidad y Magnetismo</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Ley de Coulomb</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Cuarto Semestre</p>
      <p class="mb-3 text-xl text-white">Un concepto fundamental en Electricidad y Magnetismo es la Ley de Coulomb, que describe la fuerza eléctrica entre dos cargas puntuales. La fórmula es:</p>
      <p class="px-3 py-2 mx-auto lg font-medium text-center w-max text-white bg-orange-700 rounded-lg mb-2">F = ke*(|q1q2|/r2)</p>
      <ul class="text-xl text-white mb-3">
        <li>F = Fuerza entre las cargas (N)</li>
        <li>ke = Constante de Coulomb</li>
        <li>q1q2 = Magnitudes de las cargas (C)</li>
        <li>r = Distancia entre las cargas (m)</li>
      </ul>
      <p class="text-xl text-white">La ley explica cómo interactúan las cargas eléctricas dependiendo de su magnitud y separación. Es esencial para comprender los campos eléctricos y sus aplicaciones.</p>
    `,
  },
  {
    url: "/imagenes/LIC/ley-k.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(-8, 0, -17.5),
    r: [0, Math.PI / 2, 0],
    info: `
      <h1 class="text-center text-4xl mb-5">Ley de Voltajes de Kirchhoff</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Circuitos Electrónicos</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Quinto Semestre</p>
      <p class="text-xl text-white">En cualquier lazo cerrado de un circuito, la suma de las diferencias de potencial (voltajes) es igual a cero. Esto permite analizar y resolver circuitos complejos al establecer ecuaciones basadas en los voltajes de cada componente dentro del lazo.</p>
    `,
  },
  {
    url: "/imagenes/LIC/ciclo-trabajo.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(-8, 0, -12.5),
    r: [0, Math.PI / 2, 0],
    info: `
      <h1 class="text-center text-4xl mb-5">Duty Cycle</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Sistemas Embebidos</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Séptimo Semestre</p>
      <p class="text-xl text-white">El Ciclo de Trabajo (Duty Cycle), se utiliza en el control de dispositivos a través de modulación por ancho de pulso (PWM). El ciclo de trabajo representa el porcentaje de tiempo durante el cual una señal está activa en un período completo. Es crucial para el control de sistemas embebidos, como el ajuste de la velocidad de motores, la intensidad de LEDs, y el manejo de dispositivos electrónicos. Los sistemas embebidos utilizan PWM para controlar dispositivos de manera eficiente y precisa, optimizando el consumo de energía.</p>
    `,
  },
  {
    url: "/imagenes/LIC/transformada-z.png",
    w: 3.5,
    h: 2,
    p: new THREE.Vector3(-8, 0, -22.5),
    r: [0, Math.PI / 2, 0],
    info: `
      <h1 class="text-center text-4xl mb-5">Z</h1>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Control Digital</p>
      <p class="px-3 py-2 lg font-medium text-center w-max text-white bg-blue-700 rounded-lg mb-2">Octavo Semestre</p>
      <p class="mb-3 text-xl text-white">La transformada Z permite analizar sistemas de control digitales representados por ecuaciones diferenciales o diferencias, ayudando a determinar la estabilidad y el comportamiento del sistema. Es fundamental en controladores discretos como los PID digitales.</p>
      <p class="px-3 py-2 mx-auto lg font-medium text-center w-max text-white bg-orange-700 rounded-lg mb-2">F = ke*(|q1q2|/r2)</p>
      <ul class="text-xl text-white mb-3">
        <li>x[n]: señal discreta en el tiempo.</li>
        <li>z: variable compleja que representa el dominio transformado.</li>
        <li>X(z): representación de la señal en el dominio Z.</li>
      </ul>
    `,
  },
];
