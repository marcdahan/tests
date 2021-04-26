let str = '6465464hkjhk ljljlj kjljklj ljkjlj ljlkj ljlk ljkjl lkjlj ljljlkj 64654d'

//method N°1 :
let arr = str.split(' ')
arr.shift()
arr.pop()
console.log(arr.join(' '))


//method N°2
for (let i = 0; i < str.length - 1; i++) {
  if (str[i] == " " )  { str = str.slice(i + 1 , str.length); break }
}

for (let i = str.length ; i >= 0 ; i--) {
  if (str[i] == " " )  { str = str.slice(0, i); break  }
}
console.log(str)