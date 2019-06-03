# Tarea 6: React

## Integrantes

- Francisco Olivares
- Gabriel Valenzuela

## Instrucciones para correr el código

1. Instalar dependencias
```
    npm install
```
2. Servir el código con el comando
```
    npm run start
```

3. Dirigase a la url `http://localhost:3000/` y podrá ver la aplicación c:!

## El problema

Implementar una aplicación web sencilla utilizando el framework *react* para su desarrollo. Para esto se debía hacer uso de algunas APIs ofrecidas para esta actividad.

## La aplicación: combate de perritos

A pesar del nombre, se decidió desarrollar una aplicación bastante tierna que permitiera coleccionar tus perritos favoritos ofrecidos por la API. Sin embargo, esto no es tan sencillo ya que para capturar al perrito se le debe derrotar en un duelo de piedra, papel o tijeras. Para esto, se pueden seleccionar tus perritos favoritos para armar tus equipo y así dirigirte a la caza.

## Estructura del código

La aplicación posee su nucleo en los *reducers*, dado que son una de las característias principales de react + redux, por lo que gran parte de la lógica se encuentra en ellos (haciendo alusión a las acciones que hacen manejo de los estados). Por otra parte, se trató de aprovechar al máximo la comunicación entre los estados dentro de los componentes para realizar operaciones más complejas.