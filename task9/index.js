// ## Task 9

// Використовуючи функцію з Task 8 generateCrad, необхідно створити функцію generateCrads яка буде приймати масив об'єктів і на їх основі створювати елементи в body. Якщо Індекс елемента є парне число, потріно додати на початок його значення поля title індекс його позиції у форматі: `[index]`

// ```
// const cards = [
//  { title: 'title A', imageUrl: 'url', description: 'description - 1' },
//  { title: 'title B', imageUrl: 'url', description: 'description - 2' },
//  { title: 'title C', imageUrl: 'url', description: 'description - 3' },
//  { title: 'title D', imageUrl: 'url', description: 'description - 4' },
// ];
// ```

// > generateCrads(cards);

// ```
// <body>
//  <div class="card">
//    <h4>[0]title A</h4>
//    <br>
//    <img src="url" alt="alternative text was not provided">
//    <p>description - 1</p>
//  </div>
//  <div class="card">
//    <h4>title B</h4>
//    <br>
//    <img src="url" alt="alternative text was not provided">
//    <p>description - 2</p>
//  </div>
//  <div class="card">
//    <h4>[2]title C</h4>
//    <br>
//    <img src="url" alt="alternative text was not provided">
//    <p>description - 3</p>
//  </div>
//  <div class="card">
//    <h4>title D</h4>
//    <br>
//    <img src="url" alt="alternative text was not provided">
//    <p>description - 4</p>
//  </div>
// </body>
// ```
const cards = [{
        title: 'title A',
        imageUrl: 'https://www.seekpng.com/png/detail/968-9681864_apple-png-background-stock-photo-apple-fruit.png',
        description: 'description - 1'
    },
    {
        title: 'title B',
        imageUrl: 'https://media.istockphoto.com/id/1365376571/vector/sakura-flower-cherry-vector.jpg?s=612x612&w=0&k=20&c=eZI_m0pseKXm0AmFrvkO1hfxw-TIywTPUuXgjzMshaY=',
        description: 'description - 2'
    },
    {
        title: 'title C',
        imageUrl: 'https://images.unsplash.com/photo-1614288532696-203f89dc0db4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwcG5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        description: 'description - 3'
    },
    {
        title: 'title D',
        imageUrl: 'https://i.etsystatic.com/24685201/r/il/f9258d/3190518847/il_570xN.3190518847_1smc.jpg',
        description: 'description - 4'
    },
];


function generateCard(mytitle, imageUrl, description) {
    let h4 = document.createElement('h4');
    h4.innerHTML = mytitle;
    document.getElementById('result').appendChild(h4);
    let img = document.createElement('img');
    img.src = imageUrl;
    document.getElementById('result').appendChild(img);
    let p = document.createElement('p');
    p.innerHTML = description;
    document.getElementById('result').appendChild(p);
}


//alert(cards[0].title)
// generateCard(cards[0].title, cards[0].imageUrl, cards[0].description)
// generateCard(cards[1].title, cards[1].imageUrl, cards[1].description)
// generateCard(cards[2].title, cards[2].imageUrl, cards[2].description)
// generateCard(cards[3].title, cards[3].imageUrl, cards[3].description)

for (let i = 0; i < cards.length; i++) {
    generateCard(cards[i].title, cards[i].imageUrl, cards[i].description);
}

// for(let i = cards.length-1; i >= 0; i--){
//   generateCard(cards[i].title, cards[i].imageUrl, cards[i].description);
// }