import {useNavigate ,useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate()
  const handleBackButton =() =>{
    navigate(-1)
  }

  if (error.status === 404) {
    return (
      <div>
        <video src="/404.mp4" autoPlay loop muted  className="error" />
        <button className="Button" onClick={handleBackButton}>Go Back</button >
        
      </div>
    );
  } 

  return <h1>Something went wrong!</h1>;
};