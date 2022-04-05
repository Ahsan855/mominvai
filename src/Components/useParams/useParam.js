const { useState, useEffect } = require("react");

const useParams = () => {
  const [reviwe, setReviwe] = useState([]);
  useEffect(() => {
    fetch("user.json")
      .then((res) => res.json())
      .then((data) => setReviwe(data));
  }, []);
  return [reviwe, setReviwe];
};
export default useParams;
