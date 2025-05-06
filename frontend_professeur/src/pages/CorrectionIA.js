import { useState } from 'react';

function CorrectionIA() {
  const [texte, setTexte] = useState('');
  const [resultat, setResultat] = useState('');

  const corriger = async () => {
    const res = await fetch('http://localhost:3001/api/corriger', { // adapt if backend port is different
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ texte })
    });

    const data = await res.json();
    setResultat(data.resultat);
  };

  return (
    <div>
      <textarea
        placeholder="Coller ici la copie de l'étudiant..."
        value={texte}
        onChange={(e) => setTexte(e.target.value)}
      />
      <button onClick={corriger}>Corriger</button>
      <pre>{resultat}</pre>
    </div>
  );
}
