import fs from 'fs'
import { promises as fsp } from 'fs';

export class FileWriter{ // this was initially in the save() function

    async write(filePath:string, content:string): Promise<void>{
        await fsp.writeFile(filePath, content)
    }
}


export class FileReader{ // this was in the read function
    exists(filePath: string):boolean{
        return fs.existsSync(filePath)
    }

    read(filePath:string):string{
        return fs.readFileSync(filePath, {encoding:'ascii'})
    }
}

