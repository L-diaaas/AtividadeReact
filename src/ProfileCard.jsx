import React from "react";
import "./ProfileCard.css";

function ProfileCard({ name, age, isStudent }) {
  // Função para mostrar alert com o nome
  const showName = () => {
    alert(`O nome da pessoa é ${name}`);
  };

  return (
    <div className="profile-card">
      <p>👤 {name} – {age} anos</p>
      <p>{isStudent ? "É estudante" : "Não é estudante"}</p>
      <button onClick={showName}>Ver nome</button>
    </div>
  );
}

export default ProfileCard;