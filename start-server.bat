@echo off
REM Script para iniciar servidor local da VIKA Commodities Landing Page
REM Executa: start-server.bat

echo ========================================
echo  VIKA Commodities Landing Page Server
echo ========================================
echo.

REM Verificar se estamos no diretorio correto
if not exist "index.html" (
    echo ERRO: Execute este script na pasta landing-page
    pause
    exit /b 1
)

echo [1/3] Verificando Node.js...
node --version >nul 2>&1
if errorlevel 1 (
    echo ERRO: Node.js nao encontrado!
    echo Por favor instale Node.js de: https://nodejs.org/
    echo.
    echo Como alternativa, abra index.html diretamente no browser.
    pause
    exit /b 1
)

echo [2/3] Iniciando servidor local...
echo.
echo Servidor iniciando em: http://localhost:8000
echo.
echo Para parar o servidor: Pressione Ctrl+C
echo Para abrir no browser: Acesse http://localhost:8000
echo.

REM Iniciar servidor
npx --yes serve . -p 8000

echo.
echo Servidor parado.
pause