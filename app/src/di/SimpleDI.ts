
interface ClassConstructor<T> {
    new(): T;
}

export class SimpleDI{

    private static _instance : SimpleDI;

    public static get Instance (): SimpleDI  {
        if(!this._instance)
            this._instance = new SimpleDI();
        return this._instance;
    }

    private di =  [];

    public register<T>(name : string, value : T){
        // var name = (value as any).constructor.name;
        this.di[name] = value;
    }

    public resolve<T>(name: string) : T{
        return this.di[name] as T;
    }
}