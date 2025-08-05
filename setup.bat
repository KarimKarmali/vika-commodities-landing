@echo off
REM Script de configuracao inicial para VIKA Commodities Landing Page
REM Executa: setup.bat

echo ==========================================
echo  VIKA Commodities Landing Page Setup
echo ==========================================
echo.

REM Verificar se Git esta instalado
git --version >nul 2>&1
if errorlevel 1 (
    echo ERRO: Git nao esta instalado ou nao esta no PATH
    echo Instale o Git e tente novamente
    pause
    exit /b 1
)

echo [1/5] Inicializando repositorio Git...
if not exist ".git" (
    git init
    echo Repositorio Git inicializado
) else (
    echo Repositorio Git ja existe
)

echo [2/5] Extraindo logo do Odoo...
if not exist "images" mkdir images
curl -L "http://odoo-17-vika.vika.com.pt/logo.png" -o "images/vika-logo.png" --connect-timeout 10
if errorlevel 1 (
    echo AVISO: Nao foi possivel extrair o logo automaticamente
    echo Extraia manualmente de: http://odoo-17-vika.vika.com.pt/logo.png
    echo Salve como: images/vika-logo.png
    echo.
)

echo [3/5] Configurando Git...
echo.
echo Configure suas credenciais Git (se ainda nao configurou):
echo   git config --global user.name "Seu Nome"
echo   git config --global user.email "seu@email.com"
echo.

echo [4/5] Adicionando arquivos ao Git...
git add .
git status

echo.
echo [5/5] Setup concluido!
echo.
echo Proximos passos:
echo 1. Configure o CapRover para a app 'vika-commodities-landing'
echo 2. Configure o dominio 'commodities.vika.com.pt'
echo 3. Adicione o remote do CapRover:
echo    git remote add caprover ssh://captain@vika.com.pt:10022/vika-commodities-landing
echo 4. Execute: deploy.bat
echo.
echo URLs finais:
echo   Landing Page: https://commodities.vika.com.pt
echo   Sistema Odoo: http://odoo-17-vika.vika.com.pt
echo.
pause