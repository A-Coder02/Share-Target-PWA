import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router";

const NotFound = () => {
  const location = useLocation();
  const [state, setState] = useState("");
  useEffect(() => {
    setState(JSON.stringify(location));
  }, [location]);
  return (
    <div>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <h1>Not Found</h1>
      <p>Location</p>
      <p>{state}</p>
    </div>
  );
};

export default NotFound;
