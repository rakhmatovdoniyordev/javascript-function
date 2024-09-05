{
    // 1-masala
    function foo(n){
        if(n <= 2006) return `Yoshingiz 18 dan katta`
        else return `Yoshingiz 18 dan kichik`
    }

    console.log(foo(2004));
}

{
    //2-masala
    function foo(n){
        if(n >= 0) return `Kiritilgan ${n} soni musbat`
        else return `Kiritilgan ${n} soni manfiy`
    }

    console.log(foo(4));
}

{
    //3-masala
    function foo(a, b, c){
        let musbat = 0
        if(a >= 0) musbat++
        if(b >= 0) musbat++
        if(c >= 0) musbat++
        return musbat
    }

    console.log(foo(2, -6, 9));
}

{
    //4-masala
    function foo(n){
        if(n % 2 == 0) return `${n} soni juft son`
        else return `${n} soni toq son`
    }

    console.log(foo(3));
    console.log(foo(6));
}

{
    //5-masala
    function foo(n){
        if(n % 2 == 0) return n/2
        else return n*2
    }

    console.log(foo(7));
    console.log(foo(6));
}

{
    //6-masala
    function foo(n){
        if(n > 0) return n+1
        else if(n == 0) return n = 10
        else return n - 2
    }

    console.log(foo(-4));
}

{
    //7-masala
    function foo(a, b){
        if(a > b) return `Kattasi ${a}, Kichigi ${b}`
        else return `Kattasi ${b}, Kichigi ${a}`
    }

    console.log(foo(23, 14));
}

{
    //8-masala
    function foo(n){
        if(n >= 0 && n % 2 == 0) return n + 1
        else return n
    }

    console.log(foo(8));
    console.log(foo(7));
    console.log(foo(-6));
}

{
    //9-masala
    function foo(a, b){
        if(a > b) return a * 10
        else return b * 10
    }

    console.log(foo(5, 8));
}

{
    //10-masala
    function foo(a, b, c){
        let toq = 0
        let juft = 0
        if(a % 2 == 0) juft++
        else  toq++
        if(b % 2 == 0)  juft++
        else  toq++
        if(c % 2 == 0)  juft++
        else  toq++

        return `Kiritilgan sonlardan ${juft} tasi juft va ${toq} tasi toq `
    }

    console.log(foo(7, 8, 3));
}



{
    //qo'shimcha
    //Butun son berilgan. Agar berilgan son musbat bo'lsa 1 ga oshirilsin, aks holda o'zgartirilmasin. Hosil bo'lgan sonni ekranga chiqaruvchi programma tuzilsin.
    function foo(n){
        if(n >= 0) return n + 1
        else return n
    }
    console.log(foo(3));
}

{
    //qo'shimcha
    //A va B sonlari berilgan. Agar o'zgaruvchilar o'zaro teng bo'lmasa, A va B O'zgaruvchilari ularning yig'indisini o'zlashtirsin. Agar teng bo'lsa, 0 ni o'zlashtirsin.
    function foo(a, b){
        if(a !== b) return a = b = a + b
        else return a = b = 0
    }
    console.log(foo(3, 7));
}

{
    //qo'shimcha
    //A va B haqiqiy sonlar berilgan. shu sonlarni shunday o'zgartirish kerakki, A son kichik B son katta bo'lsin.
    function foo(a, b){
        if(a > b){
            let temp = a
            a = b
            b = temp
        }
        return `${b} soni ${a} sonidn katta`
    }
    console.log(foo(3, 1));
}

{
    //qo'shimcha
    //Uchta son berilgan. Shu sonlarni kichigini aniqlovchi programma tuzilsin.
    function foo(a, b, c){
        let min = a
        if(b < min) min = b
        if(c < min) min = c
        return `${a}, ${b} va ${c} sonlar orasida eng kichigi ${min} soni`

    }
    console.log(foo(9, 5, 4));
}