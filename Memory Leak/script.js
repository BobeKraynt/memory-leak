let memLeak = function(memory1, memory2) {
    let m1 = memory1;
    let m2 = memory2;

    for(let i = 1; i <= memory1 + memory2; i++) {
        if(m1 >= m2 && (m1 >= i)) {
            m1 -= i;
        }
        else if(m2 > m1 && m2 >= i) {
            m2 -= i; 
        }
        else {
            return [i , m1 , m2];
        }
    }
};

memLeak(8,11);