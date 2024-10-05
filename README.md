# Dahua Doorbell

This is a custom card for [Home Assistant](https://www.home-assistant.io) to integrate with Dahua video doorbells, specifically the VTO2202 model.

This card requires an Asterisks server and your doorbell configured to use it.

## Screenshot
![Screenshot](https://github.com/itsbrianburton/dahua-doorbell/raw/main/img/screenshot.png)

## Requirements
* Asterisks Addon
* WebRTC Card
* go2rtc recommended

## Usage
After installation, edit your dashboard and click the "Add Card" button.  Choose the "Manual" box at the very bottom.  The card must be configured manually as shown here:

```yaml
# REQUIRED: Specify the card
type: custom:dahua-doorbell-card
camera_entity: camera.front_door
```
