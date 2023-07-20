<script>
  
  import Image from '../../../public/img/test.jpg';
  import { Page, Navbar, Block, BlockTitle } from 'framework7-svelte';
  /*    {`${user.firstName} ${user.lastName}`}  */
  let rate = 4.7;
  let Tours = 3250 ; 
  let years = 2.5 ; 
  let f_name = "Ahmed"; 
  let s_name = "Mohsen";
  let number = "99 123 456";
</script>

<Page>
  <Navbar title="My Account" backLink="Back" />
  
  <Block>
    
    <div class="container">
      <div class="con_element">
        <img src={Image} alt="username_image"   class="image"/>
      </div>
      <div  class="midle">
      <div id="con_btn">
        <div class="con_rating">
          <img src='https://cdn-icons-png.flaticon.com/512/2107/2107928.png' id="star" alt="star_icon">
          <p style="padding-left: 3%;">{rate}</p>
          </div>
      </div>
    </div>
      <div class="con_element">
        <h1>{f_name+" "+s_name}</h1> 
      </div>
      
      
    </div>
  </Block>
  <Block>
    <div class="container2">

      <div class="text">
        <h2>{Tours}</h2>
        <div class="text">Totals rides</div>
      </div>

      <div class="vertical-hr"></div>
      
      <div class="text">
        <h2>{years}</h2>
        <div class="text">User since </div>
      </div>

    </div>
  </Block>

  <Block>
    <div class="container3">
      <h2>Personal Information</h2>
    
      <p>{f_name}</p>
      <p>{s_name}</p>
      <p>{number}</p>
          
      </div>
    
  </Block>


</Page>




<style>
.image {
    margin-top: 10px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
}

 .container {
    background-color: rgb(237, 189, 56);
    
    
  }
  .con_element{
    display: flex;
    justify-content:center;
    align-items: center;
  }
  .con_rating{
    font-size: large;
    display: flex;
    justify-content:center;
    align-items: center;
    margin: 3%; 
    
  }
  #con_btn{
    display: inline-block;
    justify-content:center;
    align-items: center;
    width: 15%;
    border-radius: 5px;
    background-color: #f1f1f1;
    color: #333;
    font-weight: bold;
  }
  #star{
    width: 15px;
  }
  .midle{
    margin: 15px;
    display: flex;
    justify-content:center;
    align-items: center;

  }

  /* ************ */


  .container2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .text {
    margin-right: 50px;
  }


  /***********/
  .vertical-hr {
    width: 2px;
    height: 100px;
    background-color: black;
    margin: 0 auto;

    
  }

  /* ************ */


  .container3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  
  }
</style>

