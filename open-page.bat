@echo off
REM Script alternativo para abrir a pagina diretamente no browser
REM Executa: open-page.bat

echo ========================================
echo  VIKA Commodities Landing Page
echo ========================================
echo.

REM Verificar se estamos no diretorio correto
if not exist "index.html" (
    echo ERRO: Execute este script na pasta landing-page
    pause
    exit /b 1
)

echo Abrindo pagina no browser...
echo.
echo NOTA: As funcionalidades JavaScript (mudanca de idiomas) 
echo funcionam normalmente mesmo sem servidor local.
echo.

REM Abrir no browser padrao
start "" "index.html"

echo Pagina aberta no browser padrao!
echo.
pause