document.addEventListener('DOMContentLoaded', function() {
   
    console.log('DOM has loaded');
  });


  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      showProducts(data);
    } catch (error) {
      console.error(error);
    }
  };


  const showProducts = (data) => {
    const container = document.getElementById('container1');
    container.innerHTML = '';
  
    data.forEach(item => {
      const productElement = createProductElement(item);
      container.appendChild(productElement);
    });
  };
  
  const createProductElement = (item) => {
    const productContainer = document.createElement('div');
    productContainer.classList.add('product-container');
  
    const titleElement = document.createElement('h3');
    titleElement.textContent = item.title;
    titleElement.style.color = 'blue';

    productContainer.appendChild(titleElement);
  
    const priceElement = document.createElement('p');
    priceElement.textContent = `Price : $ ${item.price}`;
    productContainer.appendChild(priceElement);
  
    const categoryElement = document.createElement('p');
    categoryElement.textContent = `Category : ${item.category}`;
    productContainer.appendChild(categoryElement);
  
    const imageElement = document.createElement('img');
    imageElement.src = item.image;
    imageElement.style.maxWidth = '100px';
    imageElement.style.height = 'auto';
    productContainer.appendChild(imageElement);

    return productContainer;
  };
  
  // 
  fetchProducts();



  const container4 = document.getElementById('container4');

  // Create the submit button
  const submitButton = document.createElement('button');
  submitButton.textContent = 'Submit';
  submitButton.style.padding = '6px';
  submitButton.style.height = '1.8rem';
  submitButton.style.width = '20%';
  
 
  submitButton.addEventListener('click', function() {
    alert('We have received your comment. Thank you!');
  });

  container4.appendChild(submitButton);


let btn1 = document.querySelector('#green');
let btn2 = document.querySelector('#red');

btn1.addEventListener('click', function() {
  
    if (btn2.classList.contains('red')) {
      btn2.classList.remove('red');
    } 
  this.classList.toggle('green');
  
});

btn2.addEventListener('click', function() {
  
    if (btn1.classList.contains('green')) {
      btn1.classList.remove('green');
    } 
  this.classList.toggle('red');
  
});