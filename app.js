import colors from 'colors'; 
import { guardarDB, leerDB } from './helpers/guardarArchivo.js';
import { inquirerMenu,
         pausa,
         leerInput } from './helpers/inquirer.js';
//import { Tarea } from './models/tarea.js';
import {Tareas} from './models/tareas.js';
 
 

console.clear();


const main = async() =>{
    
    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB) {   // cargarTareas 
        tareas.cargarTareasFromArray(tareasDB);
    }  

    do{
          //imprimir el menu
          opt = await inquirerMenu();
        // Se analiza que opcion se tomó del menú
        switch (opt) {
            case '1':
               // Lee descripcion y la mete en desc
                const desc = await leerInput('Descripción: ');
                // Se ejecuta la funcion crearTarea y se le da el valor de desc.
                tareas.crearTarea(desc);
                
            break;

            case '2':
                console.log(tareas.listadoArr);
                break;
                
        }

         guardarDB( tareas.listadoArr )



          //console.log({opt});
        // const tareas = new Tareas();
        // const tarea = new Tarea('Comprar comida');
        // console.log(tareas);
        
 
        await pausa();

    } while(opt !== '0');

 
}

main();