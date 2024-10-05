import { DahuaDoorbellCard } from "./dahua-doorbell-card";

declare global {
	interface Window {
		customCards: Array<Object>;
	}
}

customElements.define("dahua-doorbell-card", DahuaDoorbellCard);

window.customCards = window.customCards || [];
window.customCards.push({
	type: "dahua-doorbell-card",
	name: "Dahua Doorbell Card",
	description: "Card designed to integrate with Dahua video doorbells through an Asterisk server."
});
