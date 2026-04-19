import React, { useState } from "react";

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            setIsLoading(true);
            // Simulation du délai de connexion
            setTimeout(() => {
                setIsLoading(false);
                onLogin();
            }, 1500);
        }
    };

    return (
        <div style={containerStyle}>
            {/* Importation des polices et icônes directement */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

            <div style={cardStyle}>
                {/* Header avec l'icône Horloge bleue */}
                <div style={{ textAlign: "center", marginBottom: "32px" }}>
                    <div style={logoBoxStyle}>
                        <i className="fa-solid fa-clock" style={{ color: "white", fontSize: "20px" }}></i>
                    </div>
                    <h1 style={{ fontSize: "24px", fontWeight: "700", color: "#111827", margin: "8px 0 4px 0" }}>POINTA</h1>
                    <p style={{ color: "#4b5563", fontSize: "14px" }}>Connexion à votre espace</p>
                </div>

                <form onSubmit={handleSubmit}>
                    {/* Champ Email */}
                    <div style={{ marginBottom: "20px" }}>
                        <label style={labelStyle}>Email</label>
                        <input
                            type="email"
                            placeholder="votre@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={inputStyle}
                            required
                        />
                    </div>

                    {/* Champ Mot de passe */}
                    <div style={{ marginBottom: "20px" }}>
                        <label style={labelStyle}>Mot de passe</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={inputStyle}
                            required
                        />
                    </div>

                    {/* Options: Remember me & Forgot password */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", fontSize: "14px" }}>
                        <label style={{ display: "flex", alignItems: "center", color: "#4b5563", cursor: "pointer" }}>
                            <input type="checkbox" style={{ marginRight: "8px" }} />
                            Se souvenir de moi
                        </label>
                        <a href="#" style={{ color: "#2563eb", textDecoration: "none", fontWeight: "500" }}>Mot de passe oublié?</a>
                    </div>

                    {/* Bouton Se connecter */}
                    <button type="submit" style={buttonStyle} disabled={isLoading}>
                        {isLoading ? "Connexion..." : "Se connecter"}
                    </button>
                </form>
            </div>
        </div>
    );
};

// --- STYLES CSS (Inspirés de votre fichier HTML) ---

const containerStyle = {
    backgroundColor: "#f9fafb", // bg-gray-50
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Inter', sans-serif",
    padding: "0 16px"
};

const cardStyle = {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "12px", // rounded-xl
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)", // shadow-lg
    width: "100%",
    maxWidth: "400px",
    border: "1px solid #f3f4f6"
};

const logoBoxStyle = {
    backgroundColor: "#2563eb", // primary color
    width: "48px",
    height: "48px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto"
};

const labelStyle = {
    display: "block",
    fontSize: "14px",
    fontWeight: "500",
    color: "#374151",
    marginBottom: "8px"
};

const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    fontSize: "16px",
    boxSizing: "border-box",
    outline: "none",
    transition: "all 0.2s"
};

const buttonStyle = {
    width: "100%",
    backgroundColor: "#2563eb", // primary
    color: "white",
    padding: "12px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "500",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.2s"
};

export default Login;