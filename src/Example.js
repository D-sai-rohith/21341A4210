import axios from 'axios'
import ENDPOINT from '../data/ENDPOINT'
import SecurityHeaders from '../data/SecurityHeaders'

const Example = async ({payload})=>{

const data = new FormData()

data.append("mode",payload.mode)
if(payload.limit){
     data.append("limit",payload.limit)
}
const res = await 
axios.get('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=1 2000',data,
    {
        "clientID": "0ece955c-dab2-45a8-b36c-37bf4958ac6d",
        "clientSecret": "bRhJbQurmPDuxNhV",
        "token_type": "Bearer",
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIzNzAyODIyLCJpYXQiOjE3MjM3MDI1MjIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjBlY2U5NTVjLWRhYjItNDVhOC1iMzZjLTM3YmY0OTU4YWM2ZCIsInN1YiI6ImRoYW51a29uZGFzYWlyb2hpdGhAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiQWZmZm9yZG1lZCIsImNsaWVudElEIjoiMGVjZTk1NWMtZGFiMi00NWE4LWIzNmMtMzdiZjQ5NThhYzZkIiwiY2xpZW50U2VjcmV0IjoiYlJoSmJRdXJtUER1eE5oViIsIm93bmVyTmFtZSI6IlNhaVJvaGl0aCIsIm93bmVyRW1haWwiOiJkaGFudWtvbmRhc2Fpcm9oaXRoQGdtYWlsLmNvbSIsInJvbGxObyI6IjIxMzQxQTQyMTAifQ.4UUYiHS2TJIZfv1GjrZcKejKJXnZ_q6w04voeqFiCOw",
         "expires_in": 1723700413
    })
if(res){
    
     return res.data
}

}
export default Example