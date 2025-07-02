export class CacheManager{

    private cache: Record<number, string> ={}


    has(id: number){
        return this.cache.hasOwnProperty(id)
    }

    get(id:number):string{
        return this.cache[id]
    }

    set(id:number, message:string):void{
        this.cache[id]= message
    }

    checkCache():Record<number, string>{
        return this.cache
    }
}