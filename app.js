import colors from 'colors'; 
import { inquirerMenu } from './helpers/inquirer.js';
 

console.clear();


const main = async() =>{
    console.log('Hola Mundo');
    
    let opt = '';
    
    do{
        opt = await inquirerMenu();
        console.log({opt});
 


    } while(opt !== '0')

 
}

main();