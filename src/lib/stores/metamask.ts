import type { MetaMaskInpageProvider } from "@metamask/providers";

import { writable } from "svelte/store";
import { loadTodos } from "$lib/stores";

export const extension = writable<MetaMaskInpageProvider>();

export const metaMaskAccount = writable<string>();

export const connectWallet = async (extension: MetaMaskInpageProvider) => {
	if (!extension) return;

	const accounts = (await extension.request({
		method: "eth_requestAccounts",
	})) as string[];

	metaMaskAccount.set(accounts[0]);
};

export const onAccountsChanged = (accounts: unknown) => {
	const account = (accounts as string[])[0];
	metaMaskAccount.set(account);
	loadTodos(account);
};
