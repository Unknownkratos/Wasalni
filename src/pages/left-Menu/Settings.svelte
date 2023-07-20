<script>
  import { Page, Navbar, Block, BlockTitle,ListItem ,Icon,  List , Toggle ,f7  } from 'framework7-svelte';
  

  let globalTheme = 'light';
  let globalThemeColor = document.documentElement.style
    .getPropertyValue('--f7-color-primary')
    .trim();
  let number ="95 123 456"; 
  let  lang = "english"; 
  let dark_mode = false;


  function setScheme(newTheme) {
    console.log(newTheme);
    f7.setDarkMode(newTheme === 'dark');
    globalTheme = newTheme;
    theme = newTheme;
  }

  function handleChange(e) {   
    lang = e.target.value;
  }

  function handleToggle(event) {
    toggleValue = event.target.checked;

  }

  
</script>

<Page>
  <Navbar title="Settings" backLink="Back" />
  <div class="inline-container-header">
    <Icon f7="gear_alt_fill" style="margin-top: 15px;"></Icon> 
    <BlockTitle>Settings</BlockTitle>
  </div>
  <Block>
    <table width=50%>
      <tr>
        <td>
          <a class="button button-round button-tonal" href>
            <img class="icon" src='https://cdn-icons-png.flaticon.com/512/597/597177.png' alt="icon"> 
            Number
          </a> 
        </td>
        <td>
          <div class="input-container">
            <input type="tel" class="phone-input" bind:value={number}  />
          </div>
          


          
        </td>
      </tr>

      <tr>
        <td>
          <a class="button button-round button-tonal" href>
            <img class="icon" src='https://cdn-icons-png.flaticon.com/512/2115/2115307.png' alt="icon"> 
            Language
            </a> 
        </td>
      
        <td>
        
          <List strongIos outlineIos dividersIos>
            <ListItem title={lang}   smartSelect>
              <select name="Languages" bind:value={lang} > <!--on:change={handleChange} -->
                <option value="english">English</option>
                <option value="french">French</option>
                <option value="arabic">Arabic</option>
              </select>
            </ListItem>
          </List>



      
        </td>
      </tr>

      <tr>
        <td>
          <a class="button button-round button-tonal" href>
            <img class="icon" src='https://cdn-icons-png.flaticon.com/512/8338/8338708.png' alt="icon"> 
            Dark Mode
            </a> 
        </td>
        
        <td>
          <div style="margin-left: 10px;" >
            <Toggle bind:checked={dark_mode} on:change={handleToggle} color="black"  />
          </div>
      </td>
      </tr>



    </table>
  </Block>



    <h1>{number}</h1>
    <h1>{lang}</h1>
    <h1>{dark_mode}</h1>

  
</Page>




<style>
   .icon{
    width: 25px;
  }


  .input-container {
    display: flex;
    align-items: center;
  }


  .inline-container-header {
    display: flex;
    align-items: center;
    gap: 1px;
    margin-left: 10px;
    
    }




  .phone-input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 200px;
    outline: none;
  }
</style>