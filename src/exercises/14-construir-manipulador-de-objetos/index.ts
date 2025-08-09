

export class ObjectManipulator<T = {}> {

    constructor(protected obj: T) {}

    public set<K extends string, V>(key: K, value: V): ObjectManipulator<T & { [P in K]: V }> {
        return new ObjectManipulator({...this.obj as any, [key]: value});
    }

    public get<K extends keyof T>(key: K): T[K] {
        return this.obj[key];
    }

    public delete<K extends keyof T>(key: K): ObjectManipulator<Omit<T, K>> {
        const newObj = {...this.obj as any};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject(): T {
        return this.obj;
    }
}
