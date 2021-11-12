export const likes = (a : string[]) : string => {
    // TODO
    let result;
    switch (a.length) {
        case 0:
            result = 'no one likes this';
            break
        case 1: 
            result = `${a[0]} likes this`;
            break
        case 2:
            result = `${a[0]} and ${a[1]} like this`
            break
        case 3:
            result = `${a[0]}, ${a[1]} and ${a[2]} like this`
            break
        default:
            result = `${a[0]}, ${a[1]} and ${a.slice(2).length} others like this`
            break
    }
    return result
}

console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
