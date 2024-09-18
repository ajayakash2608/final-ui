import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [stats, setStats] = useState({ todayCount: 0, monthCount: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/dashboard`, {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      setStats(response.data);
    };
    fetchStats();
  }, []);

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <p>URL Shortened Today: {stats.todayCount}</p>
      <p>URL Shortened This Month: {stats.monthCount}</p>
      <a href="/view-all">View All URLs</a>
    </div>
  );
};

export default Dashboard;
