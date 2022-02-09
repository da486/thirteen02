import "./Loader.scss";

const Loader = ({ visible }) =>
  visible ? <div className="info center-text">로딩 중...</div> : null;

export default Loader;
