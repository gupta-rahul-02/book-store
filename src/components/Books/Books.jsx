import React, { useEffect , useState} from 'react'
import './Book.css'
import axios from 'axios'
import Book from '../Books/Book'
const URL = "http://localhost:5000/books"
const fetchHandler = async () =>{
  return await axios.get(URL).then((res)=>res.data)

} 

function Books() {
  
  const [books, setBooks] = useState()
  useEffect(()=>{
    fetchHandler().then((data) => setBooks(data.books))
  },[])
  console.log(books)
  return (
    <>
    <ul>
      {books && books.map((book,i) => (
        <li key={i}>
          <Book book={book}/>
        </li>
      ))}
    </ul>
    </>
  )
}

export default Books