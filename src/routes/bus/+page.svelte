<script>
	import { setupIonicBase } from 'ionic-svelte';
</script>

<ion-menu content-id="main-content">
	<ion-header>
	  <ion-toolbar>
		<ion-title>Menu Content</ion-title>
	  </ion-toolbar>
	</ion-header>
	<ion-content class="ion-padding">This is the menu content.</ion-content>
</ion-menu>
<div class="ion-page" id="main-content">
	<ion-header>
		<ion-toolbar>
		<ion-buttons slot="start">
			<ion-menu-button></ion-menu-button>
		</ion-buttons>
		<ion-title>Menu</ion-title>
		</ion-toolbar>
	</ion-header>
	<ion-content class="ion-padding">
		<ion-card>
			<ion-card-header>
				<ion-card-subtitle>Great success!!</ion-card-subtitle>
				<ion-card-title>Welcome to your app!</ion-card-title>
			</ion-card-header>

			<ion-card-content>
				Thank you for using this starter. Click buttons below to open these guides (will
				open in new window). Don't forget to open DevTools to see this app in mobile mode. Happy coding!!!
			</ion-card-content>

			<ion-item>
				<ion-label>Visit Ionic Showcase app with sourceviewer</ion-label>
				<ion-button href='/metro' target="_new" fill="outline" slot="end">
					View
				</ion-button>
			</ion-item>

			<ion-item>
				<ion-label>Visit Ionic component docs</ion-label>
				<ion-button
					href="https://ionicframework.com/docs/components"
					target="_new"
					fill="outline"
					slot="end">View</ion-button
				>
			</ion-item>
			<ion-item>
				<ion-label>Visit Svelte Kit docs</ion-label>
				<ion-button
					href="https://kit.svelte.dev/docs/introduction"
					target="_new"
					fill="outline"
					slot="end">View</ion-button
				>
			</ion-item>
			<ion-item>
				<ion-label>Visit Svelte docs</ion-label>
				<ion-button href="https://svelte.dev/docs" target="_new" fill="outline" slot="end">
					View
				</ion-button>
			</ion-item>
		</ion-card>
	</ion-content>
</div>

<style>
	ion-menu::part(backdrop) {
		background-color: rgba(0, 195, 255, 0.536);
	}

	ion-menu::part(container) {
		border-radius: 0 20px 20px 0;
		box-shadow: 4px 0px 16px rgba(0, 153, 255, 0.311);
	}
	
</style>
