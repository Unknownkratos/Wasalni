<Page>
  <Navbar title="Messages" backLink="Back" />
  <div class="inline-container">
    <Icon f7="tray_fill" style="margin-top: 15px;"></Icon>
    <BlockTitle>Messages</BlockTitle>
  </div>

  <!-- person_fill  phone   person_crop_circle  gear_alt_fill   -->

  <div class="mailbox">
    {#each messages as message}
      <div class="message" key={message.id}>
        <img class="profile-pic" src={message.profilePic} alt="Profile Pic" />
        <div class="message-content">
          <p style="font-size: larger; font-weight: bold;">{message.sender}</p>
          <p style="font-size: smaller; color: grey;">
            {message.message}
            <span style="margin-left: 10px;">{message.send_time}</span>
          </p>
        </div>
      </div>
    {/each}
  </div>
</Page>

<script>
  import { BlockTitle, Navbar, Page } from 'framework7-svelte';
  import Image from '../../../public/img/test.jpg';
  import { Icon } from 'framework7-svelte';

  let messages = [
    {
      id: 1,
      sender: 'John Doe',
      message: 'Hello there!',
      profilePic: Image,
      send_time: '15:16',
    },
    {
      id: 2,
      sender: 'Jane Smith',
      message: 'Hi, how are you?',
      profilePic: Image,
      send_time: '09:55',
    },
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
    padding: 10px;
  }

  .message {
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 10px;
    background-color: #f5f5f5;
    border-radius: 10px;
  }

  .profile-pic {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .message-content {
    flex: 1;
  }
</style>
