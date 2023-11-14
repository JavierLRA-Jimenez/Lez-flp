import axios from 'axios';

const getVideoUrl = async () => {
  const response = await axios.get(
    'https://api.netlify.com/api/v1/sites/107cbfd1-87ae-4fed-87c3-228932d12519/functions/upload/assets/FearVideo.mp4',
  );

  return response.data.url;
};

const Fear = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const videoUrl = getVideoUrl();

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
};

export default Fear;
