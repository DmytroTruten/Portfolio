import "../styles/Tag/Tag.css";

function Tag({ children }) {
  return (
    <div className="tag d-flex justify-content-center align-items-center">
      {children}
    </div>
  );
}

export default Tag;
