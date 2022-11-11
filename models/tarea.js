//const { v4: uuidv4} = require('uuid');
//import { v4 as uuidv4 } from 'uuid';

import { customAlphabet } from 'nanoid';


const nanoid = customAlphabet('ABCDEF1234567890', 12);
 
export class Tarea{

    id = '';
    desc = '';
    completadoEn = null;

    constructor( desc) {
        this.id = nanoid();
        this.desc = desc;
        this.completadoEn = null;
    }

}
 