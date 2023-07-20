<Page>
  <Navbar title="About" backLink="Back" />
  <div class="inline-container">
    <Icon f7="tray_fill" style="margin-top: 15px;"></Icon> 
    <BlockTitle>Messages</BlockTitle>
  </div>
  
  <!--person_fill  phone   person_crop_circle  gear_alt_fill   -->

  <div class="mailbox">
    {#each messages as message}
      <div class="message" key={message.id}>
        <img class="profile-pic" src={message.profilePic} alt="Profile Pic" />
        <div>
          <p style="font-size:larger;">{message.sender}</p>
          <p style="font-size:small ;color:grey">{message.message}&nbsp;&nbsp;&nbsp;{message.send_time} </p>
        </div>
      </div>
    {/each}
  </div>
 
  
  
</Page>
<script>
  import {BlockTitle,Navbar,Page,List,ListItem,} from 'framework7-svelte';
  import Image from '../../../public/img/test.jpg';
  import { Icon } from 'framework7-svelte';

  let messages = [
    {
      id: 1,
      sender: "John Doe",
      message: "Hello there!",
      profilePic: Image,
      send_time : "15:16"
    },
    {
      id: 2,
      sender: "Jane Smith",
      message: "Hi, how are you?",
      profilePic: Image,
      send_time : "09:55"
    }
  ];

</script>

<style>
    .inline-container {
    display: flex;
    align-items: center;
    gap: 1px;
    margin-left: 10px;
    
    }



  .mailbox {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .message {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .profile-pic {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    border: 10px;
    margin: 10px;
  }
</style>