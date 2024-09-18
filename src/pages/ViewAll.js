import { useEffect, useState } from 'react';
import axios from 'axios';

const ViewAll = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/urls`, {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      setUrls(response.data);
    };
    fetchUrls();
  }, []);

  return (
    <div className="container">
      <h1>All URLs</h1>
      <ul>
        {urls.map((url) => (
          <li key={url._id}>
            <a href={url.originalUrl} target="_blank" rel="noopener noreferrer">{url.originalUrl}</a> - {url.shortenedUrl}
          </li>
        ))}
      </ul>
      <a href="/dashboard">Back to Dashboard</a>
    </div>
  );
};

export default ViewAll;
