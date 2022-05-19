import "./AppBar.css";


const AppBar = () => {
  return (
    <div
      className="glass"
      style={{
        height: "8vh",
        borderBottom: "0.1rem solid #EDEDED",
        marginBottom: "0.5rem",
        fontFamily: "Oleo Script",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2.8rem",
        position: "fixed",
        width: "100vw",
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
        boxSizing: "border-box",
        color: "#A43DA1",
        zIndex:'300'
      }}
    >
      <div>PhotoBook<sup style={{fontSize:'0.5rem'}}>TM</sup></div>
    </div>
  );
};

export default AppBar;
