# PorchPlus Assessment

---

## Project Setup

### 1. Clone the Repository
Clone this repository to your local machine:
```sh
git clone https://github.com/Abdulgithub0/porchplus_assessment.git
```

### 2. Navigate to the Project Directory
Change to the gym membership service directory:
```sh
cd porchplus_assessment/gym-membership-service
```

## Configuration

### Database and Mail Service Configuration
1. Create a `.env` file in the `gym-membership-service` directory:
    ```sh
    touch .env
    ```

2. Open the `.env` file and copy-paste the following environment variables:
    ```sh
    DB_NAME="fitness_plus"
    DB_USERNAME="your_database_username"
    DB_PASSWORD="your_database_password"
    DB_HOST="localhost"
    EMAIL_SERVICE="gmail"
    EMAIL_USER="your_gmail_address"
    EMAIL_PASS="your_gmail_app_password"
    ```

**Note:** Your Gmail app password is a 16-character password that can be set up using Google. Follow [Google's instructions](https://support.google.com/accounts/answer/185833?hl=en) to generate an app password.

## Running the Application
1. Install the necessary dependencies:
    ```sh
    npm install
    ```

2. Start the application:
    ```sh
    npm start
    ```

The program should start running, and a cron job will automatically schedule to run at midnight (00:00) every day.

## Additional Information
- Ensure your database is set up and accessible using the credentials provided in the `.env` file.
- The application uses a cron job to process due memberships and send reminders every day at midnight.

## Testing the Service
The service ris unning on http://localhost:3000 and it has the following endpoints for membership management:
- POST /memberships to create a new membership
- PUT /memberships/:id to update an existing membership
- GET /memberships to get all memberships
- GET /memberships/:id to get a specific membership
- DELETE /memberships/:id to delete a specific membership

## Sample data for testing:

**For post request:**
 ```sh

curl -X POST http://localhost:3000/memberships \
     -H "Content-Type: application/json" \
     -d '{
           "first_name": "Muhammad",
           "last_name": "Buhari",
           "membership_type": "Annual Basic",
           "start_date": "2024-06-16",
           "due_date": "2025-06-16",
           "total_amount": 600,
           "member_email_address": "muhammedbuhari@example.com",
           "is_first_month": true
         }'

```
The above member will recieve due member notification on 2024-07-09

The response body of the post request contain your detail and membership_id (an integer ) which you can used for personal subsequent request.
i.e 
 
 ```
     curl -X GET http://localhost:3000/memberships/membership_id

    curl -X DELETE http://localhost:3000/memberships/membership_id
 ```
And Finally a put request too.


---
