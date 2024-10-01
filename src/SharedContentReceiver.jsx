import { useLocation } from "react-router-dom";

function SharedContentReceiver() {
  const location = useLocation();

  // Parse the query parameters
  const params = new URLSearchParams(location.search);
  const title = params.get('name');
  const text = params.get('description');
  const url = params.get('link');

  return (
    <div>
      <h1>Shared Content</h1>
      <p><strong>Title:</strong> {title}</p>
      <p><strong>Description:</strong> {text}</p>
      <p><strong>URL:</strong> <a href={url}>{url}</a></p>
    </div>
  );
}

export default SharedContentReceiver;
