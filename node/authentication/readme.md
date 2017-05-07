# Authentication

## Middleware

- morgan
```javascript
app.use(morgan('combined'));
```
- body-parser
```javascript
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
```
