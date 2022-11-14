import colors from 'colors'; 
import { inquirerMenu,
         pausa,
         leerInput } from './helpers/inquirer.js';
//import { Tarea } from './models/tarea.js';
import {Tareas} from './models/tareas.js';
 
 

console.clear();


const main = async() =>{
    console.log('Hola Mundo');
    
    let opt = '';
    const tareas = new Tareas();
    
    do{
          opt = await inquirerMenu();

        switch (opt) {
            case '1':
                // crear opcion
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc)
                
            break;

            case '2':
                console.log(tareas._listado);
                break;
                
        }



          //console.log({opt});
        // const tareas = new Tareas();
        // const tarea = new Tarea('Comprar comida');
        // console.log(tareas);
        
 
        await pausa();

    } while(opt !== '0')

 
}

main();