import "./App.css";
import image from "./image.png";

function App() {
  return (
    <div className="card div-card mx-auto my-auto">
      <div className="card-body">
        <div>
          <img width="100%" className="img" alt="qr-code" src={image}></img>
        </div>
        <div className="mt-4">
          <h4>Improve your front-end skills by building projects</h4>
        </div>
        <div className="mt-1">
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
