const data = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Login Page</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: rgb(224, 210, 210);
              margin: 0;
              padding: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100vh;
          }
  
          .login-container {
              background-color: #bfada3;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(24, 2, 2, 0.1);
              width: 300px;
          }
  
          .login-container h2 {
              text-align: center;
              color: #333;
          }
  
          .form-group {
              margin-bottom: 15px;
          }
  
          .form-group label {
              display: block;
              font-size: 14px;
              margin-bottom: 5px;
              color: #555;
          }
  
          .form-group input {
              width: 100%;
              padding: 8px;
              box-sizing: border-box;
              border: 1px solid #ccc;
              border-radius: 4px;
              font-size: 14px;
          }
  
          .login-btn {
              width: 100%;
              padding: 10px;
              background-color: #c6c0b8;
              color: #fff;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              font-size: 16px;
          }
  
          .save-for-later {
              margin-top: 15px;
              font-size: 14px;
          }
      </style>
  </head>
  <body>
  
  <div class="login-container">
      <h2>Login</h2>
      <form>
          <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required>
          </div>
          <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" id="password" name="password" required>
          </div>
          <button type="submit" class="login-btn">Login</button>
          <div class="save-for-later">
              <input type="checkbox" id="saveForLater" name="saveForLater">
              <label for="saveForLater">Save for later</label>
          </div>
      </form>
  </div>
  
  </body>
  </html>
  `;
const Login = () => {
  return <div dangerouslySetInnerHTML={{ __html: data }}></div>;
};

export default Login;
