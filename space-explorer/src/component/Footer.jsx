import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 Space Explorer. All rights reserved.</p>
      <div>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {" | "}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    padding: "1em 0",
    backgroundColor: "#282c34",
    color: "white",
  },
};

export default Footer;
