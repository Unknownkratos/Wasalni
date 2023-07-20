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
</script>

<Page>
    <Navbar title="Enter" backLink="Back" />
    
    <Block>
        <h1>Wasalni logo</h1>

        <div class="grid grid-cols-2 grid-gap">
            <div>
                <div class="center">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1946/1946780.png"
                        alt="Taxi"
                        width="150"
                        height="150"
                    />
                </div>
                <br />
                <Button
                    large
                    outline
                    raised
                    bgColor="blue"
                    color="white"
                    href="/taxiform/">Taxi Drivers</Button
                >
            </div>
            <div>
                <div class="center">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/8587/8587903.png"
                        alt="User"
                        width="150"
                        height="150"
                    />
                </div>
                <br />
                <Button
                    large
                    outline
                    raised
                    bgColor="blue"
                    color="white"
                    href="/userform/">User </Button
                >
            </div>
        </div>
    </Block>
</Page>

<style>
    .center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
