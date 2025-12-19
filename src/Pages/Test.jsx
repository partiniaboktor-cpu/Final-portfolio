import React, { useEffect, useState } from 'react';
import { supabase } from '../Supabase';

const Test = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function callGetApi() {
      const { data, error } = await supabase
        .from("Projects")
        .select("*");

      if (!error) {
        setProjects(data);
      }
    }

    callGetApi();
  }, []);

  return (
    <>
      <p>123456789</p>

      {/* Safe title access */}
      <p>{projects[0]?.title}</p>

      {/* Safe category mapping */}
      {projects[0]?.category?.map((c, index) => (
        <div key={index}>
          <h1>{c}</h1>
        </div>
      ))}
    </>
  );
};

export default Test;
