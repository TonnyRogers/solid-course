import File from './File';
import csv from 'csv-parser';
import fs from 'fs';

interface DataProps {
    name: string;
    cpf: string;
    email: string;
}

class Txt extends File{
    constructor() {
        super()
        this.data = [];
    }

    public async read(path: string): Promise<DataProps[]> {
        return new Promise((resolve,reject) => {
            fs.readFile(path,{ encoding: 'utf-8'},(err, data) => {
                if (err) {
                    reject
                    throw err
                };

                const lines = data.split(/\r?\n/);
                lines.forEach((line) => {
                    const strCPF = line.slice(0,11);
                    const strName = line.slice(11,41);
                    const strEmail = line.slice(41,91);

                    this.setData({ 
                        Nome: strName, 
                        CPF: strCPF, 
                        Email: strEmail 
                    });
                });   
                   
                resolve(this.data)
            });
        })
    }
}

export default Txt;