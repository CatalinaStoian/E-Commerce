const createProduct = async () => {
    const searchParams = new URLSearchParams(window.location.search);
    const productId = searchParams.get('id');

    const serverResponse = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const data = await serverResponse.json();

    //creare titlu
    const productTitle = document.querySelector('.product-title');
    productTitle.innerText = data.title;

    //creare descriere
    const productDescription = document.querySelector('.product-description');
    productDescription.innerText = data.description;

    //creare pret
    const productPrice = document.querySelector('.product-price');
    productPrice.innerText = `$ ${data.price}`;

    console.log(data)

    //creare imagine
        const productImage = document.querySelector('.product-image');
        productImage.innerHTML = `
        <img class='product-page-image'src='${data.image}' alt='product-image'>
        `;

}
createProduct();
