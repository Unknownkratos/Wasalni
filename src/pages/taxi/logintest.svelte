<!-- src/App.svelte -->
<script>
    let username = '';
    let password = '';
    let message = '';
  
    const handleLogin = async () => {
      try {
        const response = await fetch('https://wasalni.apidb.ovh/api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        });
  
        if (response.ok) {
          const data = await response.json();
  
          if (data.success) {
            message = `Logged in as ${data.username}. API Key: ${data.api_key}`;
          } else {
            message = 'Login failed. Please check your username and password.';
          }
        } else {
          message = `Login failed. Status: ${response.status} ${response.statusText}`;
        }
      } catch (error) {
        // Handle fetch errors
        message = 'An error occurred while processing your request.';
      }
    };
  </script>
  
  <main>
    <h1>Login</h1>
    <form on:submit|preventDefault={handleLogin}>
      <label>
        Username:
        <input type="text" bind:value={username} />
      </label>
      <label>
        Password:
        <input type="password" bind:value={password} />
      </label>
      <button type="submit">Login</button>
    </form>
  
    {#if message}
      <p>{message}</p>
    {/if}
  </main>
  
  <style>
    main {
      text-align: center;
      padding: 1em;
      max-width: 240px;
      margin: 0 auto;
    }
    h1 {
      font-size: 1.5em;
      margin-bottom: 1em;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 1em;
    }
    input {
      padding: 0.5em;
    }
    button {
      padding: 0.5em 1em;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  </style>
  