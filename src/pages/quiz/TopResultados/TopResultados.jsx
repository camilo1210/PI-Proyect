import { useEffect, useState } from "react";


const TopResultados = () => {
  const [top, setTop] = useState([]);

  useEffect(() => {
    const fetchTop = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/quiz/top`);
        console.log("📡 Fetching from:", import.meta.env.VITE_API_BASE_URL);

        const data = await res.json();
        setTop(data);
      } catch (error) {
        console.error("Error al obtener el medallero:", error);
      }
    };

    fetchTop();
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>🏆 Medallero</h3>
      <ol>
        {top.map((user, index) => (
          <li key={user._id}>
            {index + 1}. {user.displayName || "Anónimo"} – {user.score} puntos
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TopResultados;
