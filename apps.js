function encrypt() {
    const originalMessage = document.getElementById('originalMessage').value;
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let encryptedMessage = '';
  
    for (let i = 0; i < originalMessage.length; i++) {
      const currentLetter = originalMessage[i];
      const currentLetterIndex = alphabet.indexOf(currentLetter);
  
      if (currentLetterIndex !== -1) {
        const encryptedLetterIndex = (currentLetterIndex + 5) % alphabet.length;
        encryptedMessage += alphabet[encryptedLetterIndex];
      } else {
        encryptedMessage += currentLetter;
      }
    }
  
    document.getElementById('encryptedMessage').value = encryptedMessage;
  }
  
  function decrypt() {
    const originalMessage = document.getElementById('originalMessage').value;
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let decryptedMessage = '';
  
    for (let i = 0; i < originalMessage.length; i++) {
      const currentLetter = originalMessage[i];
      const currentLetterIndex = alphabet.indexOf(currentLetter);
  
      if (currentLetterIndex !== -1) {
        const decryptedLetterIndex = (currentLetterIndex - 5 + alphabet.length) % alphabet.length;
        decryptedMessage += alphabet[decryptedLetterIndex];
      } else {
        decryptedMessage += currentLetter;
      }
    }
  
    document.getElementById('decryptedMessage').value = decryptedMessage;
  }