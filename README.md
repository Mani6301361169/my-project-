# College Fees Management System

A React + Vite project that combines a fee dashboard with a fully functional student registration module.

## Features

- Dashboard view for fee collection insights and recent payments
- Registration page with controlled form inputs and state management
- Event handling for submit, reset, and password visibility toggles
- Client-side validation for required fields, email format, mobile number, password strength, confirm password, and terms acceptance
- Success state that shows submitted details and clears the form after a valid registration

## Concepts Covered

- React state with useState
- Event handling with onChange, onClick, and onSubmit
- Controlled components and two-way data binding
- Form validation and user feedback

## Getting Started

1. Install dependencies
   ```bash
   npm install
   ```
2. Start the development server
   ```bash
   npm run dev
   ```
3. Open the local Vite URL shown in the terminal

## Verification

The project includes a validation test suite for the registration rules.

```bash
npx vitest run
```

## Screenshot Ideas

- Dashboard overview with fee summary cards
- Registration form with validation messages
- Success state after a valid registration
