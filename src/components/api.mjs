export const fetchPosts = async (limit = 3) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
  
  const data = fetchPosts();
  setTimeout(() =>{
    console.log(data);
  },2000)