# Person

[![](https://img.shields.io/github/v/release/gerardag/person-entity-card.svg?style=flat-square)](https://github.com/gerardag/person-entity-card/releases/latest)
![](https://github.com/gerardag/person-entity-card/actions/workflows/create-release.yml/badge.svg)

![Preview Image](https://user-images.githubusercontent.com/2340397/137452501-f67632b4-69e2-4367-a183-34ae11cdacf6.png)

Person is a plugin which allows users to add "Person" entity in order to show the location with a beutiful integration.

## Install

*This card is available in [HACS](https://github.com/custom-components/hacs) (Home Assistant Community Store)*

### Manual install
1. Download and copy `person-entity-card.js` from the [latest release](https://github.com/gerardag/person-entity-card/releases/latest) into your `config/www` directory.
2. Add a reference to `person-entity-card.js` inside your `ui-lovelace.yaml` or through the raw config editor interface.
  ```yaml
  resources:
    - url: /hacsfiles/person-entity-card/person-entity-card-bundle.js
      type: module
  ```

### CLI install
1. Move into your `config/www` directory
2. Download `person-entity-card.js`
  ```console
  $ wget https://github.com/gerardag/person-entity-card/releases/download/v0.8.2/person-entity-card-bundle.js
  ```
3. Add a reference to `person-entity-card.js` inside your `ui-lovelace.yaml` or through the raw config editor gui.
  ```yaml
  resources:
    - url: /hacsfiles/person-entity-card/person-entity-card-bundle.js
      type: module
  ```

## Using the card

Card options

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | string | **required** | custom:person-entity-card
| entities | object | **required** | The entity_id from an entity or entities you want to track. |
| title | string | optional | Small title above the entities. |

## Example usage

You need to add the card into your view `.yaml` file. The code below shows how to use within multiple persons:

```yaml
- type: "custom:person-entity-card"
  entities:
    - person.gerard
    - person.bar
    - person.foo
```

## Problems

If you are getting "Custom element doesn't exist: person-entity-card", or are running an older browser try replacing type: module with type: js in the resource reference in your ui-lovelace.yaml or in the raw config editor.

## License

This project is under the MIT license.