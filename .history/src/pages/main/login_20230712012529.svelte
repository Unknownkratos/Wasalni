<script >
  import { isConnected } from './connected.svelte';
  // Login screen demo data
  let username = '';
  let password = '';
  
  function alertLoginData() {
    isConnected.update((n) => true)
    f7.dialog.alert('Username: ' + username + '<br>Password: ' + password + '<br>Connected: ' + $isConnected, () => {
      f7.loginScreen.close();
    });
    f7.store.state.users.push({id: '45'});
    countUsers = 2;
    
  }
  
  import {
    f7,
    View,
    Page,
    LoginScreen,
    LoginScreenTitle,
    List,
    ListInput,
    ListButton,
    BlockFooter
  } from 'framework7-svelte';

</script>

<LoginScreen id="my-login-screen">
    <View>
      <Page loginScreen>
        <LoginScreenTitle>Login</LoginScreenTitle>
        <List form>
          <ListInput
            type="text"
            name="username"
            placeholder="Your username"
            bind:value={username}
          />
          <ListInput
            type="password"
            name="password"
            placeholder="Your password"
            bind:value={password}
          />
        </List>
        <List>
          <ListButton title="Sign In" onClick={() => alertLoginData()} />
        </List>
        <BlockFooter>
          Some text about login information.<br />Click "Sign In" to close Login Screen
        </BlockFooter>
      </Page>
    </View>
</LoginScreen>