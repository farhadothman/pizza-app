 import { useState } from "react";
import backgroundImage from "./assets/background.webp";

export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useState([]);

  const pizzas = [
    { id: 1, name: "Margherita", price: 80, ingredients: "Tomatsås, mozzarella, basilika" },
    { id: 2, name: "Capricciosa", price: 95, ingredients: "Tomatsås, ost, skinka, champinjoner" },
    { id: 3, name: "Vesuvio", price: 90, ingredients: "Tomatsås, ost, skinka" },
    { id: 4, name: "Hawaii", price: 100, ingredients: "Tomatsås, ost, skinka, ananas" },
    { id: 5, name: "Quattro Stagioni", price: 110, ingredients: "Tomatsås, ost, skinka, oliver, champinjoner, kronärtskocka" },
    { id: 6, name: "Kebabpizza", price: 120, ingredients: "Tomatsås, ost, kebabkött, lök, sås" },
    { id: 7, name: "Vegetariana", price: 95, ingredients: "Tomatsås, ost, paprika, oliver, lök, champinjoner" },
    { id: 8, name: "Diavola", price: 115, ingredients: "Tomatsås, ost, stark salami, chili" },
    { id: 9, name: "Napolitana", price: 100, ingredients: "Tomatsås, ost, sardeller, kapris, oliver" },
    { id: 10, name: "Tonno", price: 105, ingredients: "Tomatsås, ost, tonfisk, lök" },
  ];

  const hamburgers = [
    { id: 101, name: "Klassisk Hamburgare", price: 90, ingredients: "Nötkött, sallad, tomat, lök, dressing" },
    { id: 102, name: "Cheeseburgare", price: 95, ingredients: "Nötkött, ost, sallad, tomat, dressing" },
    { id: 103, name: "Baconburgare", price: 105, ingredients: "Nötkött, bacon, ost, sallad, dressing" },
    { id: 104, name: "Double Smash", price: 115, ingredients: "Dubbel nötkött, ost, dressing, gurka" },
    { id: 105, name: "Vegetarisk Burgare", price: 100, ingredients: "Vegetarisk biff, sallad, tomat, dressing" },
    { id: 106, name: "BBQ Burgare", price: 110, ingredients: "Nötkött, BBQ-sås, ost, bacon, lök" },
  ];

  const drinks = [
    { id: 201, name: "Coca-Cola", price: 25, ingredients: "Kolsyrat vatten, socker, färgämne, koffein" },
    { id: 202, name: "Fanta", price: 25, ingredients: "Kolsyrat vatten, socker, apelsinarom" },
    { id: 203, name: "Sprite", price: 25, ingredients: "Kolsyrat vatten, socker, citron- och limearom" },
    { id: 204, name: "Pepsi", price: 25, ingredients: "Kolsyrat vatten, socker, koffein, färgämne" },
    { id: 205, name: "Loka Citron", price: 20, ingredients: "Kolsyrat vatten, citronarom" },
    { id: 206, name: "Ramlösa", price: 20, ingredients: "Kolsyrat mineralvatten" },
    { id: 207, name: "Apelsinjuice", price: 30, ingredients: "100% apelsinjuice" },
    { id: 208, name: "Äppeljuice", price: 30, ingredients: "100% äppeljuice" },
    { id: 209, name: "Kaffe", price: 20, ingredients: "Bryggkaffe, vatten" },
  ];

  const addToCart = (item, type) => {
    setCart([...cart, { ...item, type }]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const renderItems = (items, type, color) =>
    items.map((item) => (
      <div
        key={item.id}
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#fff3e0",
          padding: "6px 10px",
          borderRadius: "4px",
          marginBottom: 6,
        }}
        title={item.ingredients}
      >
        <span>
          <strong style={{ color }}>{item.name}</strong> - {item.price} kr
        </span>
        <button onClick={() => addToCart(item, type)} style={addButtonStyle}>
          Lägg till
        </button>
      </div>
    ));

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "40px 5%",
        fontFamily: "Arial, sans-serif",
        color: "#222",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.9)",
          borderRadius: "10px",
          padding: "20px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#d84315" }}>
          🍕 Pizzarestaurang Serbest
        </h1>

        {!showMenu && (
          <button onClick={() => setShowMenu(true)} style={mainButtonStyle}>
            📋 Meny
          </button>
        )}

        {showMenu && (
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <button onClick={() => setSelectedCategory("pizza")} style={subButtonStyle}>
              🍕 Pizzor
            </button>
            <button onClick={() => setSelectedCategory("burger")} style={subButtonStyle}>
              🍔 Hamburgare
            </button>
            <button onClick={() => setSelectedCategory("drink")} style={subButtonStyle}>
              🥤 Drycker
            </button>
          </div>
        )}

        {selectedCategory === "pizza" && (
          <>
            <h2 style={sectionHeaderStyle}>🍕 Pizzor</h2>
            {renderItems(pizzas, "pizza", "green")}
          </>
        )}

        {selectedCategory === "burger" && (
          <>
            <h2 style={sectionHeaderStyle}>🍔 Hamburgare</h2>
            {renderItems(hamburgers, "burger", "blue")}
          </>
        )}

        {selectedCategory === "drink" && (
          <>
            <h2 style={sectionHeaderStyle}>🥤 Drycker</h2>
            {renderItems(drinks, "drink", "purple")}
          </>
        )}

        <h2 style={{ marginTop: 30 }}>🛒 Din beställning</h2>
        {cart.length === 0 ? (
          <p>Ingen beställning ännu.</p>
        ) : (
          <>
            {cart.map((item, i) => (
              <div key={i}>
                <strong>{item.name}</strong> - {item.price} kr
              </div>
            ))}
            <p style={{ marginTop: 10 }}>
              <strong>Totalt: {total} kr</strong>
            </p>
            <button
              onClick={() => alert("Beställning skickad!")}
              style={actionButton("#4caf50")}
            >
              ✅ Skicka beställning
            </button>
            <button
              onClick={() => {
                setCart([]);
                setShowMenu(false);
                setSelectedCategory(null);
              }}
              style={actionButton("#f44336")}
            >
              🧺 Ny beställning
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// 🔘 Stilar
const mainButtonStyle = {
  backgroundColor: "#d84315",
  color: "white",
  padding: "12px 24px",
  border: "none",
  borderRadius: "5px",
  fontSize: "16px",
  cursor: "pointer",
  display: "block",
  margin: "20px auto",
};

const subButtonStyle = {
  backgroundColor: "#ffa726",
  color: "white",
  padding: "10px 16px",
  margin: "0 6px",
  border: "none",
  borderRadius: "5px",
  fontSize: "14px",
  cursor: "pointer",
};

const sectionHeaderStyle = {
  borderBottom: "2px solid #d84315",
  paddingBottom: "6px",
  marginTop: "20px",
  marginBottom: "10px",
  color: "#d84315",
};

const addButtonStyle = {
  backgroundColor: "#d84315",
  color: "white",
  padding: "6px 12px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const actionButton = (bg) => ({
  backgroundColor: bg,
  color: "white",
  padding: "10px 16px",
  border: "none",
  borderRadius: "5px",
  marginRight: "10px",
  marginTop: "10px",
  cursor: "pointer",
});
 