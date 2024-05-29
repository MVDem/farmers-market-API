# Database Schema

## Tables

### Auth

- **id:** INTEGER (Primary Key, Auto Increment)
  - Example: '1'
  - Description: Unique ID of the user.
- **email:** STRING (Not Null, Unique)
  - Example: 'user@gmail.com'
  - Description: Email of the user.
- **password:** STRING (Not Null)
  - Example: '123456789'
  - Description: User password.
- **role:** STRING
  - Example: 'customer' or 'farmer'
  - Description: User role. Defaults to 'customer'.

### Farmer

- **id:** INTEGER (Primary Key, Auto Increment)
  - Example: '1'
  - Description: Unique ID of the farmer.
- **userId:** INTEGER (Foreign Key referencing Auth)
  - Example: '1'
  - Description: Unique ID from the user table.
- **name:** STRING
  - Example: 'John Doe'
  - Description: Name of the farmer.
- **description:** STRING
  - Example: 'Farmer in the city'
  - Description: Description of the farmer.
- **city:** STRING
  - Example: 'Qiryat Shemona'
  - Description: City name of the farmer.
- **address:** STRING
  - Example: 'lorem ipsum dolor sit amet, consectetur adipiscing'
  - Description: Address of the farmer.
- **email:** STRING (Not Null)
  - Example: 'farmer@gmail.com'
  - Description: Email of the farmer.
- **phone:** STRING
  - Example: '0555555555'
  - Description: Phone number of the farmer.
- **coordinateLat:** FLOAT
  - Example: '739745.6585827'
  - Description: Coordinate latitude of the farmer.
- **coordinateLong:** FLOAT
  - Example: '739745.6585827'
  - Description: Coordinate longitude of the farmer.
- **imageURL:** STRING (Not Null)
  - Example: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
  - Description: Image URL of the farmer.

### Offers

- **id:** INTEGER (Primary Key, Auto Increment)
  - Example: '1'
  - Description: Unique ID of the offer. Must be a string.
- **unit:** STRING (Not Null)
  - Example: 'kg'
  - Description: Unit of the offer.
- **price:** INTEGER (Not Null)
  - Example: '100'
  - Description: Price in NIS of the offer.
- **image:** STRING
  - Example: 'http://'
  - Description: Custom product image URL of the offer.
- **isActive:** BOOLEAN (Not Null)
  - Example: 'true'
  - Description: Indicates whether the deal is active or not.
- **description_EN:** STRING
  - Example: 'Lorem'
  - Description: English description for the product.
- **description_HEB:** STRING
  - Example: 'Lorem'
  - Description: Hebrew description for the product.
- **farmerId:** INTEGER (Foreign Key referencing Farmer)
  - Example: '1'
  - Description: Foreign key referencing the farmer associated with the offer.

### Products

- **id:** INTEGER (Primary Key, Auto Increment)
  - Example: '1'
  - Description: Unique ID of the product.
- **category:** STRING (Not Null)
  - Example: 'Coffe-black'
  - Description: Category of the product.
- **nameENG:** STRING (Not Null)
  - Example: 'Coffe'
  - Description: Name of the product in English.
- **nameHEB:** STRING
  - Example: 'קפה'
  - Description: Name of the product in Hebrew.
- **descriptionENG:** STRING (Not Null)
  - Example: 'Coffe'
  - Description: Description of the product in English.
- **descriptionHEB:** STRING
  - Example: 'קפה'
  - Description: Description of the product in Hebrew.
- **photo:** STRING (Not Null)
  - Example: 'http://Photo.com/photo.jpg'
  - Description: Photo of the product.

## Relationships

- One Auth can have One Farmer (One-to-One relationship)
- One Farmer can have Many Offers (One-to-Many relationship)
- One Offer belongs to One Farmer (Many-to-One relationship)
- One Offer belongs to One Product (Many-to-One relationship)
