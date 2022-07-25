import logo from "./logo.svg";
import "./App.css";

function App() {
  const titleStyle = {
    color: "green",
    margin: "15px",
  };

  return (
    <div className="App">
      <div
        style={{
          border: "2px solid gray",
          width: "300px",
          height: "200px",
          margin: "100px auto",
          padding: "0 15px",
        }}
      >
        <h1 style={titleStyle}>안녕하세요!</h1>
        <hr style={{ width: "100%" }} />
        <div style={{ textAlign: "left" }}>
          <p>이름을 입력해주세요.</p>
          <input type="text" style={{ textAlign: "left" }} />
        </div>
      </div>
    </div>
  );
}

export default App;
