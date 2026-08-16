@echo off
title Personal Portfolio - Frontend

echo ========================================
echo   Personal Portfolio Frontend
echo ========================================
echo.

cd /d "%~dp0"

set PORT=5176

echo Checking port %PORT%...
echo.

netstat -ano | findstr /R /C:":%PORT% .*LISTENING" >nul

if %ERRORLEVEL% EQU 0 (
    echo Port %PORT% is already in use.
    echo.
    echo The frontend may already be running.
    echo.
    echo Website:
    echo http://localhost:%PORT%
    echo.
    echo No new server will be started.
    echo.
    pause
    exit /b 0
)

echo Port %PORT% is available.
echo.
echo Starting Personal Portfolio Frontend...
echo.
echo Website:
echo http://localhost:%PORT%
echo.

call npm run dev -- --host localhost --port %PORT%

echo.
echo ========================================
echo   Frontend stopped
echo ========================================
pause