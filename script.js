const categoryContainer = document.getElementById("category-Container");

const loadCategory = () => {
  fetch("https://news-api-fs.vercel.app/api/categories") //promise
    .then((res) => res.json()) //response recived
    .then((data) => {
      //convert to the promise
      console.log(data.categories);
      const categoris = data.categories;
      const categories = data.categories;
      categories.forEach(categories.tittle => {
        
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

loadCategory();
