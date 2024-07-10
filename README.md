# Encrypt-It
Encrypt It is a simple web application for encrypting and decrypting messages using a custom encryption algorithm based on a specified key.

## Technologies Used

- HTML: Contains the structure and user interface elements.
- CSS : Provides styling for the HTML elements.
- JavaScript : Implements the encryption and decryption logic.

## Functionality

The application allows users to encrypt and decrypt messages based on key provided by user.

## Usage

1. Open the `index.html` file in a web browser.
2. Enter your message in the "Original Message" input field.
3. Provide a numeric key in the "Key" input field.(between 0 and 93)
4. Click on the "Encrypt" button to encrypt the message.
5. Click on the "Decrypt" button to decrypt the message using the same key

## JavaScript Functions

### encrypt()

This function takes user-inputted data, specifically an original message and a numeric key, to perform a basic encryption process. It utilizes a predefined alphabet that includes uppercase and lowercase letters, numbers, and special characters. For each character in the original message, the function computes its index in the alphabet and shifts it forward by the key amount, wrapping around using modulus arithmetic to handle overflow.This function ensures that the encryption operation is straightforward and allows users to protect their messages using a simple substitution cipher technique.

### decrypt()

This function reverses the encryption process by taking an encrypted message and the same numeric key used for encryption. It also operates on the same alphabet and uses modulus arithmetic to reverse the shift applied during encryption.

## CSS

The provided CSS file styles the web page with a specific font, font size, and color scheme.

## Structure

The project consists of the following files:

- `index.html`: The main HTML file containing the structure and content of the web page.
- `styles.css`: The CSS file responsible for styling the web page.
- `apps.js`: The JavaScript file containing the `encrypt()` and `decrypt()` functions.

## How to Run Locally

1. Clone the repository: `git clone https://github.com/Saranshsharma29/Encrypt-It`
2. Open the `index.html` file in a web browser.


## Contact

If you have any questions or concerns, feel free to reach out to Saransh Sharma at saranshsharma000729@gmail.com.
