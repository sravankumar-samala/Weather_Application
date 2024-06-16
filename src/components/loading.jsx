import ReactLoading from "react-loading";

export default function LoadingView() {
  return (
    <div className="loading-container">
      <ReactLoading type="bubbles" color="#fff" />
    </div>
  );
}
