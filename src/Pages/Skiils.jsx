import React, { useState, useEffect } from 'react';
import axios from 'axios';

const key = 'AIzaSyBF0F3qlN1UvqP2SZTDbrUw8JzXgDBogjs'; // Doğru API anahtarını buraya ekleyin

function Skills() {
  const [likedVideos, setLikedVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchLikedVideos() {
      try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos`, {
          params: {
            key: key,
            part: 'snippet',
            maxResults: 10,
            myRating: 'like',
          }
        });

        setLikedVideos(response.data.items);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching liked videos:', error);
        setError('Error fetching liked videos');
        setLoading(false);
      }
    }

    fetchLikedVideos();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Liked Videos</h1>
      <ul>
        {likedVideos.map(video => (
          <li key={video.id}>{video.snippet.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
