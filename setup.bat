@echo off
echo 🚀 Setting up your modern portfolio...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js (version 16 or higher) first.
    echo    Visit: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js detected
echo.

REM Install dependencies
echo 📦 Installing dependencies...
npm install

if %errorlevel% equ 0 (
    echo ✅ Dependencies installed successfully
) else (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo 🎉 Setup complete! Your portfolio is ready to go.
echo.
echo Next steps:
echo 1. Customize your personal information in src/data/content.ts
echo 2. Add your projects and skills
echo 3. Replace placeholder images with your actual photos
echo 4. Run 'npm run dev' to start the development server
echo 5. Run 'npm run build' to build for production
echo.
echo Happy coding! 🚀
pause
