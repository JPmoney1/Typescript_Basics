// const pizza = {
//     name: 'Pepperoni',
//     price: 15, 
//     getName: function() {
//         return this.name;
//     },
// };
// console.log(pizza.getName());

// const toppings= ['pepperoni'];

// const order = { pizza, toppings };

// function createOrder (pizza, toppings) {
//     return { pizza, toppings};
// }
// console.log(pizza);


// const mappedPizzas = pizzas.map((pizza, index) => {
//     return pizza.name.toUpperCase();
// });

// console.log(mappedPizzas);

// const pizza = {
//     name: 'Blazing Inferno', 
//     getName:  function() { 
//         console.log(this.name);
//     },
// };

// // function multiply(a: number , b = 25) {
// //     return a * b;
// // }
// // console.log(multiply(5));
// // console.log(multiply(5,25));

// //Reset Parameter
// // function sumAll(...arr: any[]) {
// //     return arr.reduce((prev : number, next : number) => prev + next);
// // }

// // sumAll([1,2,3,4,5,6,7,8,9,10]);

// // console.log(sum);

// //Spread Operator
// // const toppings = ['bacon', 'chili'];
// // const newToppings = ['cheese', 'peperoni'];
// // const allToppings = [...toppings, ...newToppings];
// // console.log(allToppings);

// //obj spread operator
// // const pizza = { name: 'peperoni' };
// // const toppings = ['peperoni'];
// // const order = {
// //     ...pizza,
// //     toppings
// // };
// // const finalOrder = {
// //     ...order,
// // };
// // console.log(finalOrder);

// //destructing array obj
// // const pizza = {
// //     name: 'cheese',
// //     toppings: ['cheese']
// // };
// // function order({name: pizzaName, toppings: pizzaToppings}) {
// //     console.log(pizzaName, pizzaToppings); 
// // }
// // const {pizzaName} = order(pizza);
// // const toppings= ['cheese', 'bacons','veggie'];
// // const [a, b, c] = toppings;
// // console.log(a,b,c);

// // function logTopping([a,b,c]) {
// //     console.log(a,b,c,);
// // }
// // logTopping(toppings);


// //type alias
// type Size = 'small' | 'medium' | 'large';
// type callback = (size : Size) => void;

// let pizzaSize: Size = 'small';

// const selectSize: callback = x => {
//     pizzaSize = x;
// }
// selectSize('medium');

// console.log(selectSize);

// //type assertions 
// // type Pizza = { name: string, toppings: number };

// // const pizza: Pizza = { name: 'Blazing Inferno', toppings: 5};
// // const serialized = JSON.stringify(pizza);

// // function getNameJSON(obj: string) {
// //     return (JSON.parse(obj) as Pizza).name;
// // }
// // getNameJSON(serialized);

// //interfaces - defines shape of an object

// interface Sizes {
//     sizes: string[];
// }
// interface Pizza  extends Sizes {
//     name: string;
//     toppings?: number;
//     getAvailableSizes(): void;
//     [key: number]: string;
// }

// interface Pizzas {
//     data: Pizza[];
// }; 

// let pizza: Pizza;

// function createPizza(name: string, sizes: string[], toppings?: number): Pizza {
//     return {
//         name, 
//         sizes,
//         toppings,
//         getAvailableSizes() {
//             return this.sizes;
//         }
//     };
// };
// pizza = createPizza('pepperoni', ['small', 'medium']);
// pizza.toppings= 1;
// pizza[1]= 'xyz';
