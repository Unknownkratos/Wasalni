<script>
    import {
        Page,
        Navbar,
        Block,
        BlockTitle,
        Button,
        ListInput,
        List,
    } from "framework7-svelte";

    import { onMount } from "svelte";

    let timeRemaining = 180; // 3 minutes in seconds
    let timerInterval;

    function startTimer() {
        timerInterval = setInterval(() => {
            timeRemaining--;

            if (timeRemaining <= 0) {
                clearInterval(timerInterval);
            }
        }, 1000);
    }

    let phoneNumber;

    onMount(() => {
        // Retrieve the phone number from local storage
        phoneNumber = localStorage.getItem("phoneNumber");
        startTimer();
    });

    let generatedCode = generateRandomCode();
    let userCode = "";
    let valid = "";

    function generateRandomCode() {
        // Generate a random number between 1000 and 9999 (four-digit code)
        return Math.floor(1000 + Math.random() * 9000);
    }
    function checkCode() {
        isCodeCorrect = generatedCode.toString() === userCode;
    }
</script>

<Page>
    <Navbar title="Signup" backLink="Back" />

    <Block>
        <p>
            Please Enter the 4-digit code that sent to you at <strong
                >+216 {phoneNumber}</strong
            >
        </p>

        <div class="timer">
            {#if timeRemaining > 0}
                {#if timeRemaining >= 60}
                    {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60)
                        .toString()
                        .padStart(2, "0")}
                {:else}
                    00:{timeRemaining.toString().padStart(2, "0")}
                {/if}
            {:else}
                Time's up!
            {/if}
        </div>

        {generatedCode}
        <List strongIos dividersIos insetIos>
            <ListInput
                outline
                floatingLabel
                validate
                type="tel"
                bind:value={userCode}
                clearButton
                maxlength="4"
                
            >
                <i class="icon demo-list-icon" slot="media" />
            </ListInput>
        </List>

        {#if userCode == generatedCode}
            <Button
                large
                outline
                raised
                bgColor="blue"
                color="white"
                href="/enter/"
                >Continue</Button
            >
        {:else}
            <Button
                disabled
                large
                outline
                raised
                bgColor="blue"
                color="white"
                href="/enter/"
              >Continue</Button
            >
        {/if}
    </Block>
</Page>
