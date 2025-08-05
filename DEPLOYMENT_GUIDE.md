# Guia de Deployment - VIKA Commodities Landing Page

## 📋 Pré-requisitos

- [x] CapRover instalado em vika.com.pt (138.201.91.250)
- [x] Domínio vika.com.pt configurado
- [x] Logo extraído do Odoo
- [x] Repositório Git inicializado

## 🚀 Passos para Deploy

### 1. Configurar Aplicação no CapRover

Aceda ao painel CapRover em https://captain.vika.com.pt e:

1. **Criar Nova App**:
   - Nome: `vika-commodities-landing`
   - Ativar "Has Persistent Data": **NÃO**

2. **Configurar Domínio**:
   - Aceda à aba "HTTP Settings"
   - Adicione domínio: `commodities.vika.com.pt`
   - Ative "HTTPS" e "Force HTTPS"
   - Ative "WWW Redirect"

### 2. Configurar DNS

No seu provedor DNS, adicione:

```
CNAME commodities.vika.com.pt -> vika.com.pt
```

OU

```
A commodities.vika.com.pt -> 138.201.91.250
```

### 3. Deploy da Aplicação

**Opção A: Deploy via Git (Recomendado)**

```bash
# Adicionar remote do CapRover
git remote add caprover ssh://captain@vika.com.pt:10022/vika-commodities-landing

# Fazer deploy
git push caprover master
```

**Opção B: Deploy via Upload**

1. Crie um arquivo ZIP com todos os ficheiros
2. No CapRover, vá para "Deployment" > "Deploy via Tarball"
3. Faça upload do ZIP

### 4. Verificar Deployment

1. **URLs para testar**:
   - http://commodities.vika.com.pt (deve redirecionar para HTTPS)
   - https://commodities.vika.com.pt
   - https://www.commodities.vika.com.pt (deve redirecionar)

2. **Health Check**:
   - https://commodities.vika.com.pt/health (deve retornar "healthy")

3. **Links para Odoo**:
   - Botões devem apontar para http://odoo-17-vika.vika.com.pt

## 🔧 Configurações de Portas

### Portas Utilizadas:
- **Odoo**: 8069 (mapeado para http://odoo-17-vika.vika.com.pt)
- **Landing Page**: 80/443 (mapeado para https://commodities.vika.com.pt)
- **CapRover**: 3000, 80, 443

### Evitar Conflitos:
- Landing page usa Nginx na porta 80 (container)
- Odoo usa porta 8069 (container)
- Domínios diferentes: `commodities.vika.com.pt` vs `odoo-17-vika.vika.com.pt`
- ✅ **Sem conflitos de portas/domínios**

## 📱 Funcionalidades Implementadas

### ✅ Concluído:
- [x] Design responsivo (Bootstrap 5)
- [x] Logo da VIKA extraído do Odoo
- [x] Navegação suave
- [x] Animações CSS
- [x] Links para sistema Odoo
- [x] Configuração Nginx otimizada
- [x] Headers de segurança
- [x] Compressão Gzip
- [x] Cache otimizado
- [x] Meta tags SEO

### 🔄 Atualizações Futuras:
- [ ] Imagens hero personalizadas
- [ ] Formulário de contato
- [ ] Google Analytics
- [ ] PWA (Progressive Web App)
- [ ] Multilíngue (PT/EN)

## 🛡️ Segurança

### Headers Implementados:
```
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

### SSL/TLS:
- HTTPS forçado
- Redirecionamento HTTP → HTTPS
- Certificado Let's Encrypt (automático via CapRover)

## 📊 Monitorização

### Logs:
```bash
# Ver logs da aplicação
caprover logs vika-commodities-landing

# Logs em tempo real
caprover logs vika-commodities-landing -f
```

### Métricas:
- Acesso: `/var/log/nginx/access.log`
- Erros: `/var/log/nginx/error.log`
- Health: `/health`

## 🔄 Atualizações

Para atualizar o site:

1. **Editar ficheiros localmente**
2. **Commit e push**:
   ```bash
   git add .
   git commit -m "Descrição da atualização"
   git push caprover master
   ```

## 🆘 Troubleshooting

### Problemas Comuns:

1. **Erro 502/503**:
   - Verificar logs: `caprover logs vika-commodities-landing`
   - Restart app no CapRover

2. **Domínio não resolve**:
   - Verificar configuração DNS
   - Aguardar propagação (até 24h)

3. **HTTPS não funciona**:
   - Verificar domínio no CapRover
   - Regenerar certificado SSL

4. **Logo não aparece**:
   - Verificar se `images/vika-logo.png` existe
   - Re-extrair: `Invoke-WebRequest -Uri "http://odoo-17-vika.vika.com.pt/logo.png" -OutFile "images/vika-logo.png"`

## 📞 Suporte

Para questões técnicas:
- **Sistema Odoo**: http://odoo-17-vika.vika.com.pt
- **CapRover**: https://captain.vika.com.pt
- **Landing Page**: https://commodities.vika.com.pt

---

**Status**: ✅ Pronto para deploy
**Última atualização**: $(Get-Date -Format "dd/MM/yyyy HH:mm")