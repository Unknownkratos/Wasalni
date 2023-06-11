<script>
	import * as allIonicIcons from 'ionicons/icons' 
	import { setupIonicBase } from 'ionic-svelte';
</script>

<ion-menu content-id="main-content">
	<ion-header>
	  <ion-toolbar color="primary">
		<ion-title>Menu Content</ion-title>
	  </ion-toolbar>
	</ion-header>
	<ion-content class="ion-padding">This is the menu content.</ion-content>
</ion-menu>
<div class="ion-page" id="main-content">
	<ion-header>
		<ion-toolbar color="warning">
			<ion-buttons slot="start">
				<ion-menu-button color='primary'></ion-menu-button>
			</ion-buttons>
			<ion-title color='primary'>Wasselni</ion-title>
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
				<ion-button href="/metro" target="_new" fill="outline" slot="end">
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
	<ion-footer>
	</ion-footer>

	<!--
		'secondary',
		'primary',
		'danger',
		'warning',
		'dark',
		'medium',
		'success',
		'tertiary'
	-->

	<ion-tabs>
		<ion-tab-bar slot="bottom">
			<ion-tab-button tab="home">
				<ion-icon icon={allIonicIcons["home"]} color='warning'></ion-icon>
			</ion-tab-button>
			<ion-tab-button tab="radio">
				<ion-icon icon={allIonicIcons["calendar"]} color='warning'></ion-icon>
			</ion-tab-button>
			<ion-tab-button tab="library">
				<ion-icon icon={allIonicIcons["chatbubbles"]} color='warning'></ion-icon>
			</ion-tab-button>
			<ion-tab-button tab="search">
				<ion-icon icon={allIonicIcons["person"]} color='warning'></ion-icon>
		  	</ion-tab-button>
		</ion-tab-bar>
	</ion-tabs>
</div>

<style>
	ion-menu::part(backdrop) {
		background-color: rgba(255, 221, 0, 0.24); 
	}

	ion-menu::part(container) {
		border-radius: 0 10px 10px 0;
		background-color: 4px 0px 16px rgba(255, 221, 0, 0.74);
	}
	
</style>
