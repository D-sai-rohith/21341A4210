import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
function App() {
  const [data,setData] = useState([]);
  const [companyname,setCompanyname] = useState('AMZ');
  const [category,setCategory] = useState("Phone");
  const [no_prodcuts,setProducts] = useState("10");
  const [min,setMin] = useState(2000);
  const [max,setMax] = useState(10000);


  const Products = async () => {
      const url = 'http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=12000';
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIzNzAzNTQ2LCJpYXQiOjE3MjM3MDMyNDYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjBlY2U5NTVjLWRhYjItNDVhOC1iMzZjLTM3YmY0OTU4YWM2ZCIsInN1YiI6ImRoYW51a29uZGFzYWlyb2hpdGhAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiQWZmZm9yZG1lZCIsImNsaWVudElEIjoiMGVjZTk1NWMtZGFiMi00NWE4LWIzNmMtMzdiZjQ5NThhYzZkIiwiY2xpZW50U2VjcmV0IjoiYlJoSmJRdXJtUER1eE5oViIsIm93bmVyTmFtZSI6IlNhaVJvaGl0aCIsIm93bmVyRW1haWwiOiJkaGFudWtvbmRhc2Fpcm9oaXRoQGdtYWlsLmNvbSIsInJvbGxObyI6IjIxMzQxQTQyMTAifQ.xVPY8SunRnbIDhWzaDlq-pb2dyjJ6Rm7Sv8g9zGtaWw';
  
      
      try {
          const res = await axios.get(url, {
              headers: {
                  'Authorization': `Bearer ${token}`
              }
          });
  
          return res.data;
      } catch (error) {
          console.error('Error fetching products:', error);
          throw error;
      }
  };
  
//   //Route for top 10 Laptops sold on AMZ for a price range 1 to 10,000.

// http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=1 2000
  useEffect(()=>{
    Products()
  },[companyname,category,no_prodcuts,max,min]);
  return (
    <div className="App">
      <p>Products</p>
    </div>
  );
}

export default App;
