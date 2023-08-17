import React, { useEffect, useState } from "react";
import { gethistory } from "../services/allApi";
import { Link } from "react-router-dom";


function Watchhistory() {
  const [history, sethistory] = useState([]);
  const getwatchhistory = async () => {
    const { data } = await gethistory();
    sethistory(data);
  };
  useEffect(() => {
    getwatchhistory();
  }, []);

  return (
    <>
    
    <div className="d-flex justify-content-between align-items-center">
        <h1>Watch History</h1>
        <Link to={'/home'}  style={{ textDecoration: 'none', fontSize: '25px', color: 'white' }}>
           <span className="fw-bolder fs-4"> back to home  </span>             
            </Link>
    </div>
      <table className="table shadow m-3 rounded border">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>URL</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {history?.map((item, index) => (
            <tr>
              <th>{index+1}</th>
              <th>{item?.cardname}</th>
              <th>{item.url}</th>
              <th>{item.date}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Watchhistory;
