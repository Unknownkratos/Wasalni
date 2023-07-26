<script>
    let picture1 = null;
    let picture2 = null;
    let picture3 = null;
  
    const handleSubmit = () => {
      // You can handle the form submission here
      // Access the selected files using `picture1`, `picture2`, and `picture3`
      console.log(picture1, picture2, picture3);
    };
  </script>
  
  <style>
    /* Add your CSS styles here */
  
    h1 {
      color: #333;
    }
  
    /* Target the submit button */
    button[type="submit"] {
      background-color: blue; /* Change the background color to blue */
      color: white; /* Set the text color to white */
      padding: 10px 20px; /* Add some padding to make the button more visible */
      border: none; /* Remove the default border */
      cursor: pointer; /* Change the cursor to a pointer on hover */
      margin-top: 20px; /* Add some margin at the top */
    }
  
    /* Style the button on hover */
    button[type="submit"]:hover {
      background-color: darkblue; /* Change the background color on hover */
    }
  </style>
  
  <h1>Driver's License</h1>
  
  
  <form on:submit|preventDefault={handleSubmit}>
    <div>
      <label for="picture1">Front page of the Driving License </label>
      <input type="file" id="picture1" bind:this={picture1} accept="image/*" />
    </div>
  
    <div>
      <label for="picture2">the back of the Driving license</label>
      <input type="file" id="picture2" bind:this={picture2} accept="image/*" />
    </div>
  
    <div>
      <label for="picture3">Driving license expiration date</label>
      <input type="file" id="picture3" bind:this={picture3} accept="image/*" />
    </div>

  
    <button type="submit">Submit</button>
  </form>
  