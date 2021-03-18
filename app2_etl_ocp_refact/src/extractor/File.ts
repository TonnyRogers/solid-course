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

    data: DataProps[];

    constructor() {
        this.data = [];
    }

    public setData(row: CSVDataProps): void {
        this.data.push({ 
            name: row.Nome,
            cpf: row.CPF, 
            email: row.Email 
        });
    }
    
}

export default File;