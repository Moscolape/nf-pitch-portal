import ReactPlayer from "react-player";


const PitchVideo = () => {
  return (
    <div>
      <div className="p-5 border border-main-4 rounded-xl">
        <ReactPlayer
          url="../../assets/FFR.mp4"
          controls
          width="100%"
          height="auto"
        />
      </div>
    </div>
  );
};

export default PitchVideo;
