import React, { useState } from "react";

function App() {
  const [selected, setSelected] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = () => {
    if (selected === "Item") {
      alert(`Item: ${itemName}, Price: ${itemPrice}`);
    } else {
      alert(`Category: ${categoryName}`);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to AD Jewell</h1>

      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => setSelected("Item")}>
          Item
        </button>
        <button style={styles.button} onClick={() => setSelected("Category")}>
          Category
        </button>
      </div>

      {selected && (
        <div style={styles.box}>
          <h2>{selected} Details</h2>

          {/* Item Inputs */}
          {selected === "Item" && (
            <>
              <input
                type="text"
                placeholder="Item Name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                style={styles.input}
              />

              <input
                type="number"
                placeholder="Item Price"
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
                style={styles.input}
              />
            </>
          )}

          {/* Category Inputs */}
          {selected === "Category" && (
            <input
              type="text"
              placeholder="Category Name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              style={styles.input}
            />
          )}

          <button style={styles.saveButton} onClick={handleSubmit}>
            Save
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    paddingTop: "40px",
  },
  heading: {
    marginBottom: "30px",
  },
  buttonContainer: {
    display: "flex",
    gap: "20px",
  },
  button: {
    padding: "12px 30px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#d4af37",
    color: "#fff",
  },
  box: {
    marginTop: "30px",
    width: "320px",
    padding: "25px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginBottom: "15px",
    padding: "10px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  saveButton: {
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#333",
    color: "#fff",
  },
};

export default App;
