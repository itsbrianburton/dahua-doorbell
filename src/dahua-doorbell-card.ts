import { html, LitElement, TemplateResult, nothing } from 'lit';
import { state } from 'lit/decorators/state';

import { HassEntity } from 'home-assistant-js-websocket';
import { HomeAssistant, LovelaceCardConfig } from 'custom-card-helpers';

interface Config extends LovelaceCardConfig {
    header: string;
    entity: string;
}

export class DahuaDoorbellCard extends LitElement {
    @state() private _header: string | typeof nothing;
    @state() private _state: HassEntity;

    private _hass;

    setConfig(config: Config) {
        this._header = config.header === "" ? nothing : config.header;

        if (this._hass) {
            this.hass = this._hass;
        }
    }

    set hass(hass: HomeAssistant) {
        this._hass = hass;
    }

    private _callAction(e: CustomEvent) {
        const action = e.detail;

        if (action.action === "call-service") {
            this._hass.callService(
                action.service.split('.')[0],
                action.service.split('.')[1], {
                    entity_id: action.target.entity_id
                });
        }
    }

    render() {
        let webRTCConfig = {
            entity: "camera.cancello_strada_sub_4"
        };

        let content: TemplateResult = html`
            <webrtc-camera @call-action=${this._callAction} config="${webRTCConfig}" />
        `;

        return html`
			<ha-card header="${this._header}">
				<div class="card-content">${content}</div>
			</ha-card>
		`;
    }

    static getConfigElement() {
        return document.createElement("dahua-doorbell-editor");
    }

    static getStubConfig() {
        return {
            entity: "input_boolean.dahua-doorbell",
            header: ""
        }
    }
}
