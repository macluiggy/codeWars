class God{
    /**
     * @returns Human[]
     */
      static create(){
        // code
      }
}

class Human {
    _tall: boolean
    constructor(tall: boolean) {
        this._tall = tall
    }
}
class Man extends Human {
    _likes: 'woman' | 'man';
    constructor(tall: boolean, likes: 'woman' | 'man') {
        super(tall);
        this._likes = likes
    }
}