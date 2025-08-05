# Configuração CapRover - VIKA Commodities Landing Page

## 🎯 Objetivo
Configurar a landing page em `commodities.vika.com.pt` sem conflitos com o Odoo existente.

## 🔧 Configuração no CapRover

### 1. Aceder ao CapRover
- URL: https://captain.vika.com.pt
- Login com credenciais administrativas

### 2. Criar Nova Aplicação

1. **Apps** → **Create New App**
2. **App Name**: `vika-commodities-landing`
3. **Has Persistent Data**: ❌ (Desmarcar)
4. Clicar **Create New App**

### 3. Configurar HTTP Settings

Na aplicação criada:

1. **HTTP Settings**:
   - **Container HTTP Port**: `80`
   - **Enable HTTPS**: ✅
   - **Force HTTPS**: ✅
   - **Websocket Support**: ❌

2. **Custom Domain**:
   - Adicionar: `commodities.vika.com.pt`
   - **Enable HTTPS**: ✅

### 4. Configurar Git Deployment

1. **Deployment** → **Method: Deploy from Github/Bitbucket/Gitlab**
2. **Repository**: Configurar após criar repositório remoto
3. **Branch**: `master`
4. **Username/Token**: Configurar conforme necessário

### 5. Variáveis de Ambiente (Opcional)

Se necessário, adicionar em **App Configs**:
```
NODE_ENV=production
DOMAIN=commodities.vika.com.pt
```

## 🌐 Configuração DNS

### Opção A: CNAME (Recomendado)
```
CNAME commodities.vika.com.pt → vika.com.pt
```

### Opção B: A Record
```
A commodities.vika.com.pt → 138.201.91.250
```

## 🚀 Deploy

### Método 1: Git Push
```bash
# Na pasta landing-page
git remote add caprover ssh://captain@vika.com.pt:10022/vika-commodities-landing
git push caprover master
```

### Método 2: Upload ZIP
1. Comprimir pasta `landing-page`
2. **Deployment** → **Deploy via Tarball**
3. Upload do arquivo ZIP

## 🔍 Verificação de Conflitos

### Portas e Domínios:
- ✅ **Odoo**: `odoo-17-vika.vika.com.pt:8069`
- ✅ **Landing**: `commodities.vika.com.pt:80/443`
- ✅ **Sem conflitos**: Domínios e portas diferentes

### Teste de Conectividade:
```bash
# Testar Odoo (deve funcionar)
curl -I http://odoo-17-vika.vika.com.pt

# Testar Landing (após deploy)
curl -I https://commodities.vika.com.pt
```

## 📊 Monitorização

### Logs da Aplicação:
```bash
# Via CapRover CLI (se instalado)
caprover logs vika-commodities-landing -f

# Via Interface Web
Apps → vika-commodities-landing → App Logs
```

### Health Check:
- URL: `https://commodities.vika.com.pt/health`
- Resposta esperada: `healthy`

## 🛡️ Segurança Implementada

### Nginx Security Headers:
```nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
```

### SSL/TLS:
- Certificado automático Let's Encrypt
- HTTPS forçado
- HSTS headers

## 🔄 Atualizações Automáticas

### Git Webhooks (Opcional):
1. **Deployment** → **Enable App Building**
2. **Webhook URL**: Copiar para repositório Git
3. **Auto-deploy**: Ativado em push para master

### Atualizações Manuais:
```bash
git add .
git commit -m "Update landing page"
git push caprover master
```

## 🆘 Troubleshooting

### Problemas Comuns:

1. **App não inicia**:
   - Verificar `captain-definition`
   - Verificar porta 80 no nginx.conf
   - Ver logs: Apps → vika-commodities-landing → App Logs

2. **Domínio não resolve**:
   - Verificar DNS (pode demorar até 24h)
   - Testar: `nslookup commodities.vika.com.pt`

3. **SSL não funciona**:
   - Verificar domínio adicionado
   - Força regeneração: HTTP Settings → Force SSL

4. **Conflito com Odoo**:
   - Verificar se ambos funcionam:
     - http://odoo-17-vika.vika.com.pt ✅
     - https://commodities.vika.com.pt ✅

## 📋 Checklist Final

- [ ] App criada no CapRover
- [ ] Domínio `commodities.vika.com.pt` configurado
- [ ] HTTPS ativado e funcionando
- [ ] DNS configurado e propagado
- [ ] Deploy realizado com sucesso
- [ ] Landing page acessível
- [ ] Links para Odoo funcionando
- [ ] Sem conflitos com sistema existente
- [ ] Health check respondendo
- [ ] Logs sem erros

## 📱 URLs Finais

Após configuração completa:

- **Landing Page**: https://commodities.vika.com.pt
- **Sistema Odoo**: http://odoo-17-vika.vika.com.pt
- **CapRover Admin**: https://captain.vika.com.pt
- **Health Check**: https://commodities.vika.com.pt/health

---

**Status**: 🟡 Pendente configuração CapRover  
**Próximo passo**: Configurar aplicação no painel CapRover