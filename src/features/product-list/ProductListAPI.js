// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) =>{
    //fetching all products
    // const response = await fetch(' http://localhost:3004/products')
    const response = await fetch('https://products-c485b-default-rtdb.firebaseio.com/products.json');
    const data = response.json();
    resolve({data});
});
}

export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    //TODO:we will not hard-coded server URL here
    const response = await fetch(`httpid}`);
    const data = await response.json();
    resolve({ data });
  });
}
