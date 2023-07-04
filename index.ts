// Nummber

const n: number = 2;

// String

const text: string = "Hello world";

// Boolean

const isTS: boolean = true;

//
function calculateArea(radius: number): number {
  const area = Math.PI * radius ** 2;
  return area;
}
const radius = 5;
const area = calculateArea(radius);
console.log(`Площадь круга с радиусом ${radius} равна ${area}.`);
//
type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  colors: string[];
};

const products: Product[] = [
  {
    id: 1,
    title: "Product 1",
    description: "Description of Product 1",
    price: 10,
    colors: ["Red", "Blue", "Green"],
  },
  {
    id: 2,
    title: "Product 2",
    description: "Description of Product 2",
    price: 20,
    colors: ["Black", "White"],
  },
  {
    id: 3,
    title: "Product 3",
    description: "Description of Product 3",
    price: 15,
    colors: ["Yellow"],
  },
];

console.log(products);
