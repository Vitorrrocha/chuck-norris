const express = require('express');
const axios = require('axios').default;

const app = express();
const port = 3333

app.get('/', (req, res) => {
  return res.json()

})

const chuckApi = `https://api.chucknorris.io/jokes/random`;

app.get("/jokes", (req, res) => {
  axios.get(chuckApi)
  .then((response) => {
    const data = response.data;
    res.json(data);
    return data;
  })
  .catch((error) => {
    console.log(error);
  })
  .then(() => {
  }); 
})


app.get('/search', (req, res) => {
  const category = req.query.category;
  axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`, {
    params: {
      category: `${category}`
    }
  })
  .then((response) => {
    const data = response.data;
    res.json(data);
    return data;
  })
  .catch((error) => {
    console.log(error);
  })
  .then(() => {
  }); 
})

app.get('/text', (req, res) => {
  const text = req.query.text;
  axios.get(`https://api.chucknorris.io/jokes/search?query=${text }`)
  .then((response) => {
    const data = response.data.result;
    res.json(data);
    return data;
  })
  .catch((error) => {
    console.log(error);
  })
  .then(() => {
  }); 
})


app.get('/categories', (req, res) => {
  axios.get(`https://api.chucknorris.io/jokes/categories`)
  .then((response) => {
    const data = response.data;
    res.json(data);
    return data;
  })
  .catch((error) => {
    console.log(error);
  })
  .then(() => {
  }); 
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})