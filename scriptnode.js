const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789({[:;"<,>.?/!@#$%^&*_-=+\|`~]}) ';

function encrypt(originalMessage, key) {
  let encryptedMessage = '';

  for (let i = 0; i < originalMessage.length; i++) {
    const currentLetter = originalMessage[i];
    const currentLetterIndex = alphabet.indexOf(currentLetter);

    if (currentLetterIndex !== -1) {
      const encryptedLetterIndex = (currentLetterIndex + key) % alphabet.length;
      encryptedMessage += alphabet[encryptedLetterIndex];
    } else {
      encryptedMessage += currentLetter;
    }
  }

  return encryptedMessage;
}

function decrypt(originalMessage, key) {
  let decryptedMessage = '';

  for (let i = 0; i < originalMessage.length; i++) {
    const currentLetter = originalMessage[i];
    const currentLetterIndex = alphabet.indexOf(currentLetter);

    if (currentLetterIndex !== -1) {
      const decryptedLetterIndex = (currentLetterIndex - key + alphabet.length) % alphabet.length;
      decryptedMessage += alphabet[decryptedLetterIndex];
    } else {
      decryptedMessage += currentLetter;
    }
  }

  return decryptedMessage;
}

function promptUser() {
  rl.question('Enter the message: ', (message) => {
    rl.question('Enter the key (1-92): ', (keyInput) => {
      const key = parseInt(keyInput);
      
      if (isNaN(key) || key <= 0 || key > 92) {
        console.log('Invalid key!');
        rl.close();
        return;
      }

      console.log('Encrypted Message:');
      console.log(encrypt(message, key));

      console.log('Decrypted Message:');
      console.log(decrypt(message, key));

      rl.close();
    });
  });
}

promptUser();
