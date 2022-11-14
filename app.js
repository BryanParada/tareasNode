import colors from 'colors'; 
import { guardarDB } from './helpers/guardarArchivo.js';
import { inquirerMenu,
         pausa,
         leerInput } from './helpers/inquirer.js';
//import { Tarea } from './models/tarea.js';
import {Tareas} from './models/tareas.js';
 
 

console.clear();


const main = async() =>{
    
    let opt = '';
    const tareas = new Tareas();
    
    do{
          //imprimir el menu
          opt = await inquirerMenu();

        switch (opt) {
            case '1':
                // crear opcion
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc)
                
            break;

            case '2':
                console.log(tareas.listadoArray);
                break;
                
        }

         //guardarDB( tareas.listadoArray )



          //console.log({opt});
        // const tareas = new Tareas();
        // const tarea = new Tarea('Comprar comida');
        // console.log(tareas);
        
 
        await pausa();

    } while(opt !== '0')

 
}

main();