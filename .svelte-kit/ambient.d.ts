
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const allusersprofile: string;
	export const appdata: string;
	export const application_insights_no_diagnostic_channel: string;
	export const chrome_crashpad_pipe_name: string;
	export const COLOR: string;
	export const commonprogramfiles: string;
	export const commonprogramw6432: string;
	export const computername: string;
	export const comspec: string;
	export const driverdata: string;
	export const EDITOR: string;
	export const electron_run_as_node: string;
	export const force_color: string;
	export const HOME: string;
	export const homedrive: string;
	export const homepath: string;
	export const INIT_CWD: string;
	export const ionic_cli_bin: string;
	export const ionic_cli_lib: string;
	export const ionic_cli_local_error: string;
	export const localappdata: string;
	export const logonserver: string;
	export const NODE: string;
	export const NODE_ENV: string;
	export const NODE_EXE: string;
	export const NPM_CLI_JS: string;
	export const npm_command: string;
	export const npm_config_cache: string;
	export const npm_config_engine_strict: string;
	export const npm_config_globalconfig: string;
	export const npm_config_global_prefix: string;
	export const npm_config_host: string;
	export const npm_config_init_module: string;
	export const npm_config_local_prefix: string;
	export const npm_config_metrics_registry: string;
	export const npm_config_node_gyp: string;
	export const npm_config_noproxy: string;
	export const npm_config_port: string;
	export const npm_config_prefix: string;
	export const npm_config_userconfig: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const npm_lifecycle_event: string;
	export const npm_lifecycle_script: string;
	export const npm_node_execpath: string;
	export const npm_package_json: string;
	export const npm_package_name: string;
	export const npm_package_version: string;
	export const NPM_PREFIX_NPM_CLI_JS: string;
	export const number_of_processors: string;
	export const onedrive: string;
	export const onedriveconsumer: string;
	export const original_xdg_current_desktop: string;
	export const os: string;
	export const path: string;
	export const pathext: string;
	export const processor_architecture: string;
	export const processor_identifier: string;
	export const processor_level: string;
	export const processor_revision: string;
	export const programdata: string;
	export const programfiles: string;
	export const programw6432: string;
	export const prompt: string;
	export const psmodulepath: string;
	export const public: string;
	export const sessionname: string;
	export const systemdrive: string;
	export const systemroot: string;
	export const temp: string;
	export const tmp: string;
	export const userdomain: string;
	export const userdomain_roamingprofile: string;
	export const username: string;
	export const userprofile: string;
	export const vscode_amd_entrypoint: string;
	export const vscode_code_cache_path: string;
	export const vscode_crash_reporter_process_type: string;
	export const vscode_cwd: string;
	export const vscode_handles_uncaught_errors: string;
	export const vscode_ipc_hook: string;
	export const vscode_l10n_bundle_location: string;
	export const vscode_nls_config: string;
	export const vscode_pid: string;
	export const windir: string;
	export const zes_enable_sysman: string;
	export const __pslockdownpolicy: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		allusersprofile: string;
		appdata: string;
		application_insights_no_diagnostic_channel: string;
		chrome_crashpad_pipe_name: string;
		COLOR: string;
		commonprogramfiles: string;
		commonprogramw6432: string;
		computername: string;
		comspec: string;
		driverdata: string;
		EDITOR: string;
		electron_run_as_node: string;
		force_color: string;
		HOME: string;
		homedrive: string;
		homepath: string;
		INIT_CWD: string;
		ionic_cli_bin: string;
		ionic_cli_lib: string;
		ionic_cli_local_error: string;
		localappdata: string;
		logonserver: string;
		NODE: string;
		NODE_ENV: string;
		NODE_EXE: string;
		NPM_CLI_JS: string;
		npm_command: string;
		npm_config_cache: string;
		npm_config_engine_strict: string;
		npm_config_globalconfig: string;
		npm_config_global_prefix: string;
		npm_config_host: string;
		npm_config_init_module: string;
		npm_config_local_prefix: string;
		npm_config_metrics_registry: string;
		npm_config_node_gyp: string;
		npm_config_noproxy: string;
		npm_config_port: string;
		npm_config_prefix: string;
		npm_config_userconfig: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		npm_lifecycle_event: string;
		npm_lifecycle_script: string;
		npm_node_execpath: string;
		npm_package_json: string;
		npm_package_name: string;
		npm_package_version: string;
		NPM_PREFIX_NPM_CLI_JS: string;
		number_of_processors: string;
		onedrive: string;
		onedriveconsumer: string;
		original_xdg_current_desktop: string;
		os: string;
		path: string;
		pathext: string;
		processor_architecture: string;
		processor_identifier: string;
		processor_level: string;
		processor_revision: string;
		programdata: string;
		programfiles: string;
		programw6432: string;
		prompt: string;
		psmodulepath: string;
		public: string;
		sessionname: string;
		systemdrive: string;
		systemroot: string;
		temp: string;
		tmp: string;
		userdomain: string;
		userdomain_roamingprofile: string;
		username: string;
		userprofile: string;
		vscode_amd_entrypoint: string;
		vscode_code_cache_path: string;
		vscode_crash_reporter_process_type: string;
		vscode_cwd: string;
		vscode_handles_uncaught_errors: string;
		vscode_ipc_hook: string;
		vscode_l10n_bundle_location: string;
		vscode_nls_config: string;
		vscode_pid: string;
		windir: string;
		zes_enable_sysman: string;
		__pslockdownpolicy: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
