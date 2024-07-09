function encrypt() {
    
  const originalMessage = document.getElementById('originalMessage').value;
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789({[:;"<,>.?/!@#$%^&*_-=+\|`~]}) ';
    let encryptedMessage = '';

    const key =parseInt(document.querySelector('#key').value);
    if((key===0) || (key>92)){
      alert("Invalid key !!");
    return;
  }
    console.log('key',key);
  
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
  
    document.getElementById('encryptedMessage').value = encryptedMessage;
  }
  
  function decrypt() {
    const originalMessage = document.getElementById('originalMessage').value;
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789({[:;"<,>.?/!@#$%^&*_-=+\|`~]}) ';

    let decryptedMessage = '';

    const key =parseInt(document.querySelector('#key').value);
    console.log('key',key);
  
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
  
    document.getElementById('decryptedMessage').value = decryptedMessage;
  }
