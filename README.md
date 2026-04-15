# 🧪 Playwright E-commerce Automation (POM Framework)

This project demonstrates an end-to-end automation framework built using **Playwright with TypeScript**, following the **Page Object Model (POM)** design pattern.

---

## 🚀 Project Overview

This automation covers a complete user journey on the demo e-commerce website:

1. Open homepage
2. Navigate to login page
3. Perform user login
4. Select a product (14.1-inch Laptop)
5. Add product to cart
6. Capture screenshots at each step

---

## 🛠️ Tech Stack

* Playwright (Test Automation Framework)
* TypeScript
* Node.js

---

## 📂 Project Structure

```bash
project/
│
├── pages/
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   ├── ProductPage.ts
│
├── tests/
│   └── ecommerce.spec.ts
│
├── utils/
│   └── helper.ts
│
├── screenshots/        # Auto-generated screenshots
│
├── playwright.config.ts
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Install Playwright Browsers

```bash
npx playwright install
```

---

## ▶️ Run Tests

### Run specific test

```bash
npx playwright test tests/ecommerce.spec.ts --headed
```

### Run all tests

```bash
npx playwright test
```

### Debug mode

```bash
npx playwright test tests/ecommerce.spec.ts --debug
```

---

## 📸 Screenshots

* Screenshots are captured at each major step
* Stored in the `screenshots/` folder
* Filenames include timestamps for uniqueness

---

## 🧩 Framework Design (POM)

### 🔹 HomePage

* Navigate to website
* Click Login
* Select product

### 🔹 LoginPage

* Validate login page
* Perform login action

### 🔹 ProductPage

* Add product to cart

### 🔹 Helper Utility

* `highlightBlue()` → highlights elements for better visibility during execution

---

## ✨ Key Features

* ✅ Page Object Model (POM) implementation
* ✅ Reusable and maintainable code structure
* ✅ UI element highlighting
* ✅ Screenshot capture at each step
* ✅ Role-based locators (best practice)

---

## ⚠️ Notes

* Ensure valid login credentials are used
* Internet connection is required
* Avoid using `waitForTimeout` in production (use smart waits like `expect()`)

---

## 📌 Best Practices & Improvements

* Replace static waits with:

```ts
await expect(locator).toBeVisible();
```

* Store credentials in environment variables (`.env`)
* Implement Playwright fixtures for better scalability
* Add assertions after each step for validation
* Enable retries for flaky tests:

```bash
npx playwright test --retries=2
```

---

## 🚀 Future Enhancements

* CI/CD integration (GitHub Actions / Jenkins)
* Cross-browser execution
* Parallel test execution
* HTML reporting

---

## 👨‍💻 Author

Mehul

---

## 📄 License

This project is for learning and demonstration purposes.
