CREATE TABLE posts (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  body VARCHAR(255) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
