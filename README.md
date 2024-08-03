
![Logo](https://s3.amazonaws.com/aws-mobile-hub-images/aws-amplify-logo.png)


# Contact | mdsite

This document is all about the Contact page for [**mdsite**](https://xanderbilla.com/contact).

## Environment Variables

| KEY | VALUE                    |
| :-------- | :------- |
| `TABLE_NAME` | DynamoDB Table name   | 
| `TOPIC_ARN` | SNS Topic ARN   | 

## API Reference

#### Get all items

```http
  GET /contact
```

| Parameter | Type     | Description                    |
| :-------- | :------- | :----------------------------- |
| `api_key` | `none`   | **Not Required**. Your API key |

#### Get item

```http
  GET /contact?ticket_id=${ticket_id}
```

| Parameter | Type     | Description                    |
| :-------- | :------- | :----------------------------- |
| `query_parameter` | `string`   | **Required**. Valid `ticket_id` |


#### Post item

```http
  POST /contact
```

| Parameter | Type     | Description                    |
| :-------- | :------- | :----------------------------- |
| `api_key` | `none`   | **Not Required**. Your API key |
| `body` | `json`   | **Required**. `name`, `email`,`subject`,`message`,`queryType`, `githubUsername` are the required fields                |

#### Delete item

```http
  DELETE /contact?ticket_id=${ticket_id}
```

| Parameter | Type     | Description                    |
| :-------- | :------- | :----------------------------- |
| `query_parameter` | `string`   | **Required**. Valid `ticket_id` |
## Run Locally

Clone the project

```bash
  git clone https://github.com/xanderbilla/mdsite
```

Go to the project directory and switch to `mdsite-contact`

```bash
  cd my-project
  git switch mdsite-contact
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Authors

- [@xanderbilla](https://www.github.com/xanderbilla)

