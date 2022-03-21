import style from './index.css';
import component from "../../components/Component.js";
import BaseURL from "../../components/BaseURL/BaseURL.js";
import { baseURL } from '../../config/config';

console.log('¡Hola!');
console.log('adios');
console.log('word');

document.body.append(component());
document.head.append( BaseURL( baseURL ) );
