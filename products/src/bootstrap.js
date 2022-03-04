import faker from 'faker';



const mount = (el) => {
    //goal is take in a reference to an html element
    //el is the argument(html element)
    //then we will do everything required to start our app

    let products = '';

    for(let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
    products += `<div>${name}</div`;
    
    }

    el.innerHTML = products;

    //with react it would be something like 
    //ReactDOM.render(<App />, el);

}

// Context/Situation #1 
// We are running this file in development in isolation
// We are using our local index.html file
// Which DEFINITELY has an element with an id of 'dev-products
// We want to immediately render our app into that element
if (process.env.NODE_ENV === 'development') {
    //^^ this gets set by webpack and then replaces it with development
    const el = document.querySelector('#dev-products');

    //Assuming our container doesn't have an element
    //with id 'dev-products'...
    if (el) {
        //We are probably running in isolation
        mount(el);
    }

}

//Context/Situation #2
//We are running this file in development or production
//through the CONTAINER app
//No GUARANTEE that an element with an id of 'dev-products' exists
//WE DO NOT WANT to try to immediately render the app 

export { mount };
//this way, container can import mount function and use whenever