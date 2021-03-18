import File from './File';

class Reader {
    #directory: string;
    #file: string;

    constructor() {
        this.#directory = '';
        this.#file = '';
    }

    public getDirectory(){
        return this.#directory;
    }

    public setDirectory(directory: string) {
        this.#directory = directory;
    }

    public getFile(){
        return this.#file;
    }

    public setFile(file: string) {
        this.#file = file;
    }

    public async readFile () {
        const file = new File();
        const path = `${this.#directory}/${this.#file}`;

        let result;

        const ext = this.#file.split('.');

        switch (ext[1]) {
            case 'txt':
                return result = await file.readTXT(path);
                break;

            case 'csv':
                return result = await file.readCSV(path);
                break;
        
            default:
                break;
        }
    }
}

export default Reader;