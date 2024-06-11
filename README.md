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

---
