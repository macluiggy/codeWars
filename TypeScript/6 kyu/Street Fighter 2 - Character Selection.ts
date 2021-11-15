/*
1. hay que crear un contador tanto para los elementos del array padre, estos solo podran ser 0 y 1
2. lo mismo para el de los array hijos, estos pueden ser de 0 a 5 en ambos
3. creamos una forma para que cada direccion signifique un aumento o disminucion en la posicion, ya sea del arr padre o la delos hijos
4. mapeamos por el array de posiciones
4.1 llamamos a la posicion actual
*/

export function streetFighterSelection1(fighters: Array<string[]>, position: number[], moves: string[]) {
    let [rl, ud] = position
    interface Move {
        right: () => void;
        left(): void;
        ud: () => void;
        down: () => void;
    }
    // let moveOptions: Move = {
    //     right: () => {
    //         rl = rl === 5 ? 0 : rl+1
    //     },
    //     left: ():void => {
    //         rl = rl === 0 ? 5 : rl-1
    //     },
    //     up: () => {
    //         ud = ud === 0 ? ud : ud-1
    //     },
    //     down: () => {
    //         ud = ud === 1 ? ud : ud+1
    //     },
    // }
    let moveOptions = (move: string) => {
        switch (move) {
            case 'right':
                rl = rl === 5 ? 0 : rl+1
                break;
            case 'left':
                rl = rl === 0 ? 5 : rl-1;
                break
            case 'up':
                ud = ud === 0 ? ud : ud-1
                break
            case 'down':
                ud = ud === 1 ? ud : ud+1
                break
            default:
                break;
        }
    }
    let hoveredFighter = moves.map((move) => {
        moveOptions(move)
        console.log(moveOptions[move]);
        
        return fighters[ud][rl]
    })
    console.log(hoveredFighter);
    
    return hoveredFighter;
}

export function streetFighterSelection(fighters: Array<string[]>, position: number[], moves: string[]): string[] {
    let [rl, ud] = position
    let moveOptions = (move: string) => {
        switch (move) {
            case 'right':
                rl = rl === 5 ? 0 : rl+1
                break;
            case 'left':
                rl = rl === 0 ? 5 : rl-1;
                break
            case 'up':
                ud = ud === 0 ? ud : ud-1
                break
            case 'down':
                ud = ud === 1 ? ud : ud+1
                break
            default:
                break;
        }
    }
    let hoveredFighter = moves.map((move: string): string => {
        moveOptions(move)
        return fighters[ud][rl]
    })
    return hoveredFighter;
}
let fighters = [
	["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
	["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];
let moves = ['up', 'left', 'right', 'left', 'left']
streetFighterSelection(fighters, [0,0], moves)
// let arr = [1, 2]
// let [x, y] = arr
// console.log(x, y);
// x+=1
// y+=1
// console.log(x, y);