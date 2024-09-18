import { useState } from 'react';
import axios from 'axios';

const ShortenUrl = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/shorten-url`, { token, originalUrl });
      setShortenedUrl(response.data.shortenedUrl);
    } catch (error) {
      alert('Error shortening URL');
    }
  };

  return (
    <div className="container">
      <h1>Shorten URL</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Original URL" value={originalUrl} onChange={(e) => setOriginalUrl(e.target.value)} required />
        <button type="submit">Shorten</button>
      </form>
      {shortenedUrl && (
        <div>
          <p>Shortened URL: <a href={`/${shortenedUrl}`} target="_blank" rel="noopener noreferrer">{`${process.env.REACT_APP_API_URL}/${shortenedUrl}`}</a></p>
        </div>
      )}
    </div>
  );
};

export default ShortenUrl;
