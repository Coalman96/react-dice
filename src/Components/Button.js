//던지기 버튼과 초기화 버튼 생성
const Button = ({ onClick, children,color}) => {
  return (
    <div>
      <button
        onClick={onClick}
        style={{
          backgroundColor: `${color}`,
          border: "0px",
          borderRadius: "9999px",
          padding: "20px",
          width: "150px",
          fontSize: "1.3rem",
          color: "#fff",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
