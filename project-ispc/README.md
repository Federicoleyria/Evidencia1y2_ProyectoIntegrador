# Proyecto React - Nombre del Proyecto

Este es un proyecto realizado con **React.js**. Permite buscar productos, ver estadísticas y aplicar filtros en tiempo real utilizando Tailwind CSS y Axios.

##  Cómo clonar y correr el proyecto

### 1. Clonar el repositorio

Abrí tu terminal y ejecutá:

```bash
git clone https://github.com/Federicoleyria/Evidencia1y2_ProyectoIntegrador.git

Entra en el proyecto
cd PROYECTO-REACT-ISPC/project-ispc
```

### 2. Instalar las dependencias

```bash

npm install

```

### 3. Levantar el proyecto en modo desarrollo

```bash

npm run dev

```

## Evidencia N2

###  Estadísticas agregadas
En la interfaz se muestran estadísticas dinámicas basadas en los productos filtrados:

Suma total de los precios, con dos decimales

Promedio de precios, con dos decimales

Estas estadísticas se actualizan automáticamente a medida que se realiza una búsqueda.

### División del código en componentes
El proyecto se organizó utilizando componentes reutilizables de React para mantener el código más limpio y modular:

App.jsx
Es el componente principal. Maneja la lógica de búsqueda, filtrado de productos y el estado general.

Stats.jsx
Componente que recibe por props las estadísticas (total, mínimo, máximo, suma y promedio) y las muestra en pantalla.

Productos.jsx
Componente separado para separar la lista de productos renderizados y la condicion si no se encuentra producto.

## Capturas

![](https://github.com/Federicoleyria/Evidencia1y2_ProyectoIntegrador/blob/main/project-ispc/capturas/Img1.png)![](https://github.com/Federicoleyria/Evidencia1y2_ProyectoIntegrador/blob/main/project-ispc/capturas/Img2.png)