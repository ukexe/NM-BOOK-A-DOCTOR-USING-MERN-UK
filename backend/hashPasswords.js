const bcrypt = require("bcryptjs");

const passwords = [
  "password123", // Example password for user 1
  "securePassword456", // Example password for user 2
  "mySecretPass789" // Example password for user 3
];

const hashPasswords = async () => {
  for (const password of passwords) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(`Plain: ${password} => Hashed: ${hashedPassword}`);
  }
};

hashPasswords();
