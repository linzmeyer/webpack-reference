import style from './index.css';
import Component from "../../components/Component.js";

console.log('¡Hola!');
console.log('adios');
console.log('word');

// Checking env
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

document.body.append(Component());
