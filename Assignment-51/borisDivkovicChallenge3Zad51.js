/*
    3.  
        Palindrome prime je prosti broj koji je također i palindrom. Na primjer, 131 je
        palindrome prime, kao i brojevi 313 i 757. Napisati metodu koja ispisuje
        prvih 100 palindrome prime brojeva, 10 brojeva po liniji.
*/
primePalindromeWrite();

function primePalindromeWrite(){
    let primePalindromeCounter = 0, n = 0;
    while(primePalindromeCounter < 100){
        if(isPrimePalindrome(n)){
            primePalindromeCounter++;
            if(primePalindromeCounter % 10 == 0){
                console.log();
            }
        }
        n++;
    }
}


function isPrimePalindrome(n){
    let factorsNum = 0;
    for(let i = 1; i <= n; i++){
        if(n % i == 0){
            factorsNum++; // provjera preko broja faktora
        }
    }
    if(factorsNum == 2){
        let newStr = '';
        n = String(n); // da bih izbjegao brdo matematike, najbolje je broj pretvoriti u string.
        k = n.length;  // duzina broja pretvorenog u string
        for(let j = k - 1; j >= 0; j--){
            newStr += n[j];
        }
        if(newStr === n){
            process.stdout.write(`${n}\t`);
            return 1;
        }
    }
}