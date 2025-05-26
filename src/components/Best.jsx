import  Button  from "./Button";
import Heading from "./Heading";
import HeadSubject from "./HeadSubject";
import image from "./images/image22.png";
const Best = ({name,image,discription,imageMain}) => {
  return (
    <>
      

      <div className="card mb-3 d-flex justify-content-center align-items-center">
        <div className="row g-0">
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <img src={imageMain} className="card-img rounded-start p-3 h-100 w-100" alt="Spot" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              
              <img className="mt-3 mb-3" style={{height:"4rem"}} src={image} alt="" />
              <p className="card-text pb-2">
               {discription}
              </p>
              <Button className={"btn-primary"} text={"Book Now"}/>
              <p className="card-text pt-3">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Best;
