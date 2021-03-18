import File from '../src/extractor/File';
import Csv from '../src/extractor/Csv';
import Txt from '../src/extractor/Txt';

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
        const path = `${this.#directory}/${this.#file}`;
        
        let result;

        const ext = this.#file.split('.');

        switch (ext[1]) {
            case 'txt':
                const txt = new Txt();
                return result = await txt.read(path);
                break;

            case 'csv':
                const csv = new Csv();
                return result = await csv.read(path);
                break;
        
            default:
                break;
        }
    }
}

export default Reader;