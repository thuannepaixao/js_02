/**
 * IF and ELSE
 * 
 * 
let temperature = 37

// if(temperature >= 37) {
//   console.log('Febre')
// } else {
//   console.log('Saudável')
// }

let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature) {
  console.log('Febre alta')
} else if(mediumTemperature) {
  console.log('Febre moderada')
} else {
  console.log('Saudável')
}
 */

/**
 * SWITCH
 * 
 * 
let expression = 'a'

switch (expression) {
  case 'a':
    // codigo
    console.log('a')
    break
  case 'b':
    // codigo para expression b
    console.log('b')
    break
  default:
    console.log('default')
    break
}

function calculate(number1, operator, number2) {
  let result = 0

  switch (operator) {
    case '+':
      result = number1 + number2
      break
    case '-':
      result = number1 - number2
      break
    case '*':
      result = number1 * number2
      break
    case '/':
      result = number1 / number2
      break
    default:
      console.log('não implementado')
      break
  }

  return result
}

console.log(calculate(4, '%', 8))
 * 
 */


/**
 * THROW
 * 
 * 
function sayMyName(name = '') {
  if(name === '') {
    throw 'Nome é obrigatório'
  }

  // console.log('depois do erro')
  console.log(name)
}

// TRY ... CATCH 

try {
  sayMyName('Furkan')
}catch(e) {
  console.log(e)
}

console.log('após o try/catch')
 * 
 */


/**
 *  ESTRUTURA DE REPETIÇÃO
 * 
 *  for
 *  break - para a execução do loop
 *  continue - pula a execução do momento
 *  while
 * 
 * 
// for(let i = 1; i <= 10; i++) {
//   console.log(i)
// }

// for(let i = 100; i > 0; i--) {
//   console.log(i)
// }

// for(let i = 100; i > 0; i--) {
//   if(i === 50) {
//     break;
//   }

//   console.log(i)
// }

for(let i = 10; i > 0; i--) {
  if(i === 5) {
    continue;
  }

  console.log(i)
}
 * 

let i = 0

while(i < 10) {
  console.log(i)

  i++;
}


//  FOR OF

let name = 'Furkan'

// for(let char of name) {
//   console.log(char)
// }

let names = ['João', 'Paulo', 'Pedro']

for(let name of names) {
  console.log(name)
}

 */

/**
 * FOR IN
 * 
 * 
 * 
 */


let person = {
  name: 'John',
  age: 30,
  weight: 88.6
}

for(let property in person) {
  console.log(property)
  // console.log(person["name"]) 
  // console.log(person.name)
  console.log(person[property])
}