import csv from 'csv-parser';
import fs from 'fs';

interface DataProps {
    name: string;
    cpf: string;
    email: string;
}

interface CSVDataProps {
    Nome: string;
    CPF: string;
    Email: string;
}

class File {

    #data: DataProps[];

    constructor() {
        this.#data = [];
    }

    public setData(row: CSVDataProps): void {
        this.#data.push({ 
            name: row.Nome,
            cpf: row.CPF, 
            email: row.Email 
        });
    }
    
    public async readCSV(path: string): Promise<DataProps[]> {
        return new Promise((resolve,reject) => {
            fs.createReadStream(path)
            .pipe(csv({ separator: ';' }))
            .on('data', (row) => {
                this.setData(row);
            }).on('end', () => {
                resolve(this.#data);
            }).on('error', () => {
                reject;
            });
        })
    }

    public async readTXT(path: string): Promise<DataProps[]> {
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
                   
                resolve(this.#data)
            });
        })
    }
}

export default File;