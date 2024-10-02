import { useEffect, useState } from "react";

function SharedContentReceiver() {
  const [sharedData, setSharedData] = useState({
    title: "",
    text: "",
    url: "",
    file: null,
  });

  useEffect(() => {
    // Get the shared data from the URL params or POST data
    const handleSharedData = async () => {
      // const formData = new FormData();

      if (navigator.canShare && window.location.pathname === "/shared-files") {
        // Handle the shared POST data here
        const data = window.location.href.split("?")[1];
        const urlParams = new URLSearchParams(data);

        const title = urlParams.get("name");
        const text = urlParams.get("description");
        const url = urlParams.get("link");
        const file = urlParams.get("image");

        setSharedData({ title, text, url, file });
      }
    };

    handleSharedData();
  }, []);

  return (
    <div>
      <h1>Shared Files</h1>
      <p>Title: {sharedData.title}</p>
      <p>Description: {sharedData.text}</p>
      <p>
        URL: <a href={sharedData.url}>{sharedData.url}</a>
      </p>
      {sharedData.file && (
        <div>
          <p>Image: {sharedData.file}</p>
          <img src={URL.createObjectURL(sharedData.file)} alt="shared" />
        </div>
      )}
    </div>
  );
}
export default SharedContentReceiver;
