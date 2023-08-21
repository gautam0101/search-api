const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001; 

app.use(cors());

const books = [
  { id: 1, title: "english student" },
  { id: 2, title: "maths student" },
  { id: 3, title: "hindi stuents"},
  { id: 4, title: "science student" },
  { id: 5, title: "maths2 student" },
  { id: 6, title: "hindi1 stuents"},
];

app.get('/search', (req, res) => {
  const query = req.query.q.toLowerCase();
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(query)
  );
  res.json(filteredBooks);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
