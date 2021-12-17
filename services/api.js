import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-sagem.herokuapp.com/',
    withCredentials: false,
    headers: {
        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTY3NDk4NTdhZTIyMDAyNzU5OGI2OSIsImlhdCI6MTYzOTE0MDcwNX0.CvL_dYIGV-4srYHQAuu3HAqW1GoEmaaE-JQIglQ4q78",
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
    }
});

export default api;