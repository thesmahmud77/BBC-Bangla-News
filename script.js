const loadCategory = () => {
  fetch("https://news-api-fs.vercel.app/api/categories") //promise
    .then((res) => res.json()) //response recived
    .then((data) => {
      //convert to the promise
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

loadCategory();
