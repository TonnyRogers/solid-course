import { Router } from 'express';
import path from 'path';
import Reader from './Reader';

const route = Router();

interface DataProps {
    name: string;
    cpf: string;
    email: string;
}

route.get('/', async (req,res) => {
    const reader = new Reader();

    const directory = path.resolve(`${__dirname}`,'../');

    reader.setDirectory(`${directory}/public`);
    reader.setFile('dados.txt');

    const filesTXT = await reader.readFile();
    const fileTXTArray : DataProps[] = filesTXT ? filesTXT : [];
    
    reader.setFile('dados.csv');
    const filesCSV = await reader.readFile(); 
    const fileCSVArray : DataProps[] = filesCSV ? filesCSV : [];   

    const mixed= [...fileTXTArray,...fileCSVArray];


    return res.json(mixed);
});

export default route;