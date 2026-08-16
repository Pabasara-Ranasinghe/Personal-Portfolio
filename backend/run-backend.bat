@echo off
title Personal Portfolio - Backend

echo ========================================
echo   Personal Portfolio Backend
echo ========================================
echo.

cd /d "%~dp0"

set PORT=8082

echo Checking port %PORT%...
echo.

netstat -ano | findstr /R /C:":%PORT% .*LISTENING" >nul

if %ERRORLEVEL% EQU 0 (
    echo Port %PORT% is already in use.
    echo.
    echo The backend may already be running.
    echo.
    echo Backend URL:
    echo http://localhost:%PORT%
    echo.
    echo No new server will be started.
    echo.
    pause
    exit /b 0
)

echo Port %PORT% is available.
echo.
echo Starting Spring Boot on port %PORT%...
echo.

call .\mvnw.cmd spring-boot:run -Dspring-boot.run.arguments="--server.port=%PORT%"

echo.
echo ========================================
echo   Backend stopped
echo ========================================
pause