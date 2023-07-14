<script >
  import { isConnected } from './connected.svelte';
  // Login screen demo data
  let username = '';
  let password = '';
  
  function alertLoginData() {
    f7.dialog.alert('Username: ' + username + '<br>Password: ' + password, () => {
      f7.loginScreen.close();
    });
    isConnected.update((n) => true)
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