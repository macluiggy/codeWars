export class God{
    /**
     * @returns Human[]
     */
      static create(){
        // code
        let Adam = new Man(true, 'woman')
        let Eva = new Woman(false, 'man')
        return [Adam, Eva]
      }
}

export class Human {
    _tall: boolean
    constructor(tall: boolean) {
        this._tall = tall
    }
}
export class Man extends Human {
    _likes: 'woman' | 'man';
    constructor(tall: boolean, likes: 'woman' | 'man') {
        super(tall);
        this._likes = likes
    }
}
export class Woman extends Human {
    _likes: 'woman' | 'man';
    constructor(tall: boolean, likes: 'woman' | 'man') {
        super(tall);
        this._likes = likes
    }
}