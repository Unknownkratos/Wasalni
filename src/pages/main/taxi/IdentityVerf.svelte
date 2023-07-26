<script>
  let picture1 = null;

  const handleSubmit = () => {
    // You can handle the form submission here
    // Access the selected file using `picture1`
    console.log(picture1);
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

<h1>Verification ID</h1>
<img src="img/test.jpg" alt="Example ID">
<div>
  <input type="file" id="picture1" bind:this={picture1} accept="image/*" />
</div> 

<!-- Arabic instructions -->
<p>أضهر رخصة السائق أمامك التقط صورة كالمثال </p>
<p>يجب أن تظهر الصورة بوضوح الوجه والرخصة السائق</p>
<p>يجب التقاط  الصورة في أضاءة جيدة أو جودة جيدة</p>
<p>غير مسموح بالتقاط صور بإستخدام نظرات</p>

<button type="submit" on:click={handleSubmit}>Submit</button>
