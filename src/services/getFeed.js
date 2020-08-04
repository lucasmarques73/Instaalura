const getFeed = async () => {
  const response = await fetch('http://10.0.2.2:3030/feed');
  return await response.json();
};

export default getFeed;
