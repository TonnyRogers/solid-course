import File from './File';
import csv from 'csv-parser';
import fs from 'fs';

interface DataProps {
    name: string;
    cpf: string;
    email: string;
}

class Csv extends File{
    constructor() {
        super()
        this.data = [];
    }
    
    public async read(path: string): Promise<DataProps[]> {
        return new Promise((resolve,reject) => {
            fs.createReadStream(path)
            .pipe(csv({ separator: ';' }))
            .on('data', (row) => {
                this.setData(row);
            }).on('end', () => {
                resolve(this.data);
            }).on('error', () => {
                reject;
            });
        })
    }
}

export default Csv;