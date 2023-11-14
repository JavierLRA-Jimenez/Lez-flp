import axios from 'axios';

const getVideoUrl = async () => {
  const response = await axios.get(
    'https://api.github.com/repos/JavierLRA-Jimenez/Lez-flp.github.io/contents/FearVideo.mp4',
  );

  if (response.status === 200) {
    return response.data.url;
  } else {
    return null;
  }
};

const Fear = () => {
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoUrl(getVideoUrl());
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {videoUrl && <video
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
      </video>}
    </div>
  );
};

export default Fear;