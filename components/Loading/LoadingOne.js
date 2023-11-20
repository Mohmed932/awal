import '@/app/styles/LoadingOne.css'

const LoadingOne = () => {
  return (
    <div className="LoadingOne">
      <div className="skeleton-item">
        <div className="skeleton-img"/>
        <span></span>
        <p></p>
        <p></p>
      </div>
      <div className="skeleton-item">
        <div className="skeleton-img"/>
        <span></span>
        <p></p>
        <p></p>
      </div>
      <div className="skeleton-item">
        <div className="skeleton-img"/>
        <span></span>
        <p></p>
        <p></p>
      </div>
    </div>
  );
};

export default LoadingOne;