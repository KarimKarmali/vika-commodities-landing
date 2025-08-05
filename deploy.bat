@echo off
REM Script de deploy para VIKA Commodities Landing Page
REM Executa: deploy.bat

echo ========================================
echo  VIKA Commodities Landing Page Deploy
echo ========================================
echo.

REM Verificar se estamos no diretorio correto
if not exist "index.html" (
    echo ERRO: Execute este script na pasta landing-page
    pause
    exit /b 1
)

echo [1/4] Extraindo logo do Odoo...
curl -L "http://odoo-17-vika.vika.com.pt/logo.png" -o "images/vika-logo.png" --connect-timeout 10
if errorlevel 1 (
    echo AVISO: Nao foi possivel extrair o logo automaticamente
    echo Extraia manualmente de: http://odoo-17-vika.vika.com.pt/logo.png
    echo Salve como: images/vika-logo.png
    echo.
)

echo [2/4] Verificando arquivos...
if not exist "images/vika-logo.png" (
    echo AVISO: Logo nao encontrado em images/vika-logo.png
    echo Por favor, extraia o logo manualmente
)

echo [3/4] Preparando para deploy...
git add .
git status

echo.
echo [4/4] Pronto para deploy!
echo.
echo Para fazer deploy no CapRover, execute:
echo   git commit -m "Deploy landing page"
echo   git push caprover master
echo.
echo URLs apos deploy:
echo   Landing Page: https://commodities.vika.com.pt
echo   Sistema Odoo: http://odoo-17-vika.vika.com.pt
echo.
pause