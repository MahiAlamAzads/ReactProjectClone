import styles from './Card.module.css'
const Card = () => {
  return (
    <>
      <div className={`card text-center mb-3 ${styles.roundShape}`} style={{ width: "20rem"}}>
        <div className="card-body mt-5 mb-5">
          <img
            src="https://cdn-icons-png.flaticon.com/128/16754/16754867.png"
            alt="Profile"
            className={`rounded-circle ${styles.img}`}
            style={{ width: "40px", height: "40px", marginBottom:"40px" }}
          />
          <h5 className="card-title m-3" style={{color: "rgb(28, 28, 28)",fontSize: "1.5rem"}}>Special title treatment</h5>
          <p className="card-text m-4" style={{color:"rgb(173, 173, 173)"}}>
            With supporting text below as a natural lead-in to additional.
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
