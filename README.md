# FleteRos Frontend

fleteRos-frontend is a web application where customers can post their transportation needs (freight) and receive offers from drivers. Additionally, it allows tracking the status of the order.

## 🚀 Features

- 📌 **Post freight requests**
- 🚚 **Receive offers from drivers**
- 📍 **Track order status**
- 🔄 **Real-time updates**

## 📁 Project Structure

```
fleteRos-frontend/
│-- src/
│   ├── actions/        # Redux actions
│   ├── components/     # Reusable components
│   ├── images/         # Application images
│   ├── pages/          # Main pages
│   ├── reducers/       # Redux reducers
│   ├── routers/        # Route configuration
│   ├── store/          # Redux store configuration
│   ├── styles/         # Styles and themes
│   ├── types/          # Type definitions for Redux
│   ├── utils/          # Utility functions
```

## 🛠 Technologies Used

- **React 17**
- **React Router DOM 6.2.1** (Navigation routes)
- **Redux & Redux Thunk** (State management)
- **Axios** (HTTP requests)
- **Vite** (Bundler and development server)
- **Workbox** (Service Worker utilities)
- **Testing Library** (Unit and integration testing)

## ▶️ Installation & Usage

1. Clone the repository:
   ```sh
   git clone https://github.com/DamianBarzola/fleteRos-frontend.git
   cd fleteRos-frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the development environment:
   ```sh
   npm run dev
   ```
4. Build the application for production:
   ```sh
   npm run build
   ```
5. Preview the production version:
   ```sh
   npm run serve
   ```

## 📌 Configuration

- The application supports real-time updates using Workbox and service workers.
- Axios is used for API communication; endpoints should be configured in a `.env` file if needed.
- The backend repository is available at: [fleteRos Backend](https://github.com/aguseche/fleteRos-backend)

## 🧪 Testing

Run tests:

```sh
npm test
```

---

Enjoy developing with fleteRos-frontend! 🚛📦
