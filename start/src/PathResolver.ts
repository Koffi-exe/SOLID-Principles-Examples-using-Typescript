import path from 'path'

export class PathResolver{
    constructor(private baseDir: string){}

    getFilePath(id:number):string{
        return path.join(__dirname, this.baseDir, `${id}.txt`)
    
    }
}