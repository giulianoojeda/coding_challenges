/*
¡Hay demasiados regalos 🎁! Y envolverlos es una locura...

Vamos a crear una función que pasándole un array de regalos, nos devuelva otro array pero donde todos los regalos han sido envueltos con asteriscos tanto por arriba como por los lados.

Sólo tienes que tener en cuenta unas cosillas ✌️:

Si el array está vacío, devuelve un array vacío
Los regalos son emojis 🎁... por lo que tenlo en cuenta a la hora de contar su longitud...
Por suerte, cada posición del array siempre tiene la misma longitud...
wrapGifts(["📷", "⚽️"])

Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]

wrapGifts(["🏈🎸", "🎮🧸"])
 Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]


wrapGifts(["📷"])
 Resultado:
[ '****',
  '*📷*',
  '****'
]

*/

function wrapGifts(gifts) {
  return ["*".repeat(gifts[0].length + 2 ),...gifts.map(gift => `*${gift}*`), "*".repeat(gifts[0].length + 2 )] 
}

console.log(wrapGifts(["📷", "⚽️"]));
console.log(wrapGifts(["🏈🎸", "🎮🧸"]));
console.log(wrapGifts(["📷"]));