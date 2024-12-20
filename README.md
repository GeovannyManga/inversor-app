
```markdown
# Inversor App

Este es un proyecto de aplicación móvil desarrollado con **React Native** que permite visualizar y filtrar una lista de acciones en tiempo real. La aplicación incluye un sistema de filtrado por precio (de menor a mayor y mayor a menor) y una interfaz interactiva con botones para navegar entre pantallas.

## Requisitos de la Aplicación

- **React Native**: Para la creación de la aplicación móvil.
- **React Navigation**: Para la navegación entre pantallas.
- **Jest**: Para pruebas unitarias y de integración.
- **React Testing Library**: Para la prueba de componentes.

## Instalación y Configuración

### 1. Clonar el Repositorio

Primero, clona el repositorio en tu máquina local:

```bash
git clone https://github.com/GeovannyManga/inversor-app.git
cd inversor-app
```

### 2. Instalar las Dependencias

Si usas **npm**:

```bash
npm install
```


### 3. Configuración del Entorno de Desarrollo

Este proyecto utiliza **React Navigation**, por lo que debes asegurarte de tener las dependencias correctas instaladas.

Para instalar las dependencias necesarias para React Navigation y las animaciones:

```bash
npm install @react-navigation/native @react-navigation/stack
npm install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context
```

Si estás utilizando **Expo**, puedes instalar las dependencias de manera automática con el siguiente comando:

```bash
expo install @react-navigation/native @react-navigation/stack react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context
```

### 4. Configuración de Jest (para pruebas)

Para ejecutar las pruebas unitarias, asegúrate de tener **Jest** y **React Testing Library** instalados:

```bash
npm install --save-dev jest @testing-library/react-native
```

Configura **Jest** en tu `package.json` para que busque los archivos de prueba correctamente. Asegúrate de que tu archivo `package.json` tenga algo similar a esto:

```json
{
  "scripts": {
    "test": "jest"
  },
  "jest": {
    "preset": "react-native",
    "testMatch": [
      "**/?(*.)+(spec|test).[tj]s?(x)",
      "**/__tests__/**/*.[jt]s?(x)"
    ]
  }
}
```

### 5. Ejecutar la Aplicación

Después de instalar las dependencias, puedes ejecutar la aplicación de la siguiente manera:

Si usas **Expo**:

```bash
expo start
```

Si usas **React Native CLI**:

```bash
npx react-native run-android  # Para Android
npx react-native run-ios      # Para iOS
```

### 6. Ejecutar las Pruebas

Para ejecutar las pruebas unitarias con Jest, utiliza el siguiente comando:

```bash
npm test
```

Esto ejecutará Jest y realizará las pruebas configuradas en el proyecto.

## Decisiones Tomadas Durante el Desarrollo

### 1. Uso de Datos Ficticios

Limpicidad por cuestiones de tiempo

### 2. Navegación

Se utilizó **React Navigation** para gestionar la navegación entre las pantallas de la aplicación. Esto facilita la creación de una interfaz interactiva y fluida. Se configuró un **Stack Navigator** para gestionar las pantallas de la lista de acciones y los detalles de una acción en particular.

### 3. Filtrado de Datos

Se implementó un sistema de filtrado básico que permite ordenar las acciones de **menor a mayor precio** y de **mayor a menor precio**. Los usuarios pueden ver el listado de acciones ordenado según sus preferencias, lo que facilita la comparación de precios de diferentes activos.

### 4. Pruebas Unitarias

Se implementaron pruebas unitarias utilizando **Jest** y **React Testing Library** para garantizar que los componentes y el sistema de filtrado funcionen correctamente. Las pruebas aseguran que los datos se muestran correctamente y que la funcionalidad de ordenación funciona como se espera.

## Requisitos Implementados

1. **Visualización de Acciones**: Se muestra una lista de acciones con el nombre, precio y cambio diario.
2. **Filtrado por Precio**: Se permite ordenar las acciones de menor a mayor y de mayor a menor según el precio.
3. **Navegación**: El usuario puede navegar entre la pantalla de lista y la pantalla de detalles de cada acción.
4. **Pruebas Unitarias**: Se realizaron pruebas para verificar que la visualización y el filtrado de datos funcionan correctamente.


