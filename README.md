# 📰 NewsMag - React News Application

A modern, responsive news magazine application built with React that fetches and displays the latest news articles from various categories. Features a clean, mobile-first design with Bootstrap styling.

## ✨ Features

- **Real-time News Fetching**: Displays latest news articles using News API
- **Category Filtering**: Browse news by different categories (General, Business, Technology, Sports, etc.)
- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional interface with Bootstrap styling
- **Fast Performance**: Optimized React components for quick loading
- **Mobile-First**: Designed with mobile users in mind

## 🚀 Live Demo

[View Live Demo](https://your-demo-link.com)

## 🛠️ Technologies Used

- **Frontend Framework**: React.js
- **Styling**: Bootstrap 5
- **HTTP Client**: Fetch API
- **Build Tool**: Vite
- **API**: News API (newsapi.org)
- **Development**: VS Code, Git

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/amuqtadir99/news-mag.git
   cd news-mag
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get your News API key**
   - Visit [newsapi.org](https://newsapi.org/)
   - Sign up for a free account
   - Get your API key

4. **Configure environment variables**
   - Create a `.env` file in the root directory (copy from `.env.example`)
   - Add your API key:
   ```
   VITE_API_KEY=your_news_api_key_here
   ```
   - **Important**: Never commit your `.env` file to Git - it's already in `.gitignore`

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Navigate to `http://localhost:5173`

## 📁 Project Structure

```
news-mag/
├── public/
├── src/
│   ├── Components/
│   │   ├── Navbar.jsx
│   │   ├── NewsBoard.jsx
│   │   ├── NewsItem.jsx
│   │   └── Footer.jsx
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
└── README.md
```

## 🎯 Usage

1. **Browse Categories**: Use the navigation bar to filter news by category
2. **Read Articles**: Click "Read more" on any article to view the full story
3. **Responsive Design**: The app automatically adapts to your screen size

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Key Components

- **Navbar**: Category navigation and branding
- **NewsBoard**: Main container for news articles
- **NewsItem**: Individual news article card
- **Footer**: Developer information and social links


## 🔗 API Reference

This project uses the [News API](https://newsapi.org/) to fetch news articles:

- **Endpoint**: `https://newsapi.org/v2/top-headlines`
- **Parameters**: 
  - `country`: us
  - `category`: general, business, technology, sports, etc.
  - `apiKey`: Your API key

## 🚀 Deployment

The app can be deployed to various platforms:

- **Vercel**: `npm run build` then deploy dist folder
- **Netlify**: Connect GitHub repo for automatic deployment
- **GitHub Pages**: Use GitHub Actions for deployment

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 About the Developer

**Abdul Muqtadir**  
Full Stack Developer @ WitWeb Solutions

- 🌐 Website: [www.witweb.com.au](https://www.witweb.com.au)
- 💼 LinkedIn: [amuqtadir1](https://www.linkedin.com/in/amuqtadir1/)
- 📧 GitHub: [amuqtadir99](https://github.com/amuqtadir99)

## 🙏 Acknowledgments

- [News API](https://newsapi.org/) for providing the news data
- [Bootstrap](https://getbootstrap.com/) for the UI framework
- [React](https://reactjs.org/) for the amazing JavaScript library

---

⭐ **Star this repo if you found it helpful!**