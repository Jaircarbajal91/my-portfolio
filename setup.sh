#!/bin/bash

echo "🚀 Setting up your modern portfolio..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js (version 16 or higher) first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    echo "❌ Node.js version 16 or higher is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "🎉 Setup complete! Your portfolio is ready to go."
echo ""
echo "Next steps:"
echo "1. Customize your personal information in src/data/content.ts"
echo "2. Add your projects and skills"
echo "3. Replace placeholder images with your actual photos"
echo "4. Run 'npm run dev' to start the development server"
echo "5. Run 'npm run build' to build for production"
echo ""
echo "Happy coding! 🚀"
