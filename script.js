function romain(str) { // easy
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        N: 500,
        M: 1000
    }   

    let prev = 0
    let result = 0

    for(let i = str.length - 1; i >= 0; i--) {
        let curr = map[str[i]]

        if(curr < prev) {
            result -= curr
        } else {
            result += curr
        }

        
        prev = curr
        for(let item in map){
            if(Object.keys(item) === str){
                result += item + str
            }
        }
    }

    console.log(result);

    return result
}

romain("IV") // 4
romain("II") // 2
romain("IX") // 9
romain("MCMXCVI") // 1996