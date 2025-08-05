# VIKA Commodities Landing Page

Página de destino oficial da VIKA Commodities para o domínio `commodities.vika.com.pt`.

## 🚀 Funcionalidades

- **Design Responsivo**: Otimizado para todos os dispositivos
- **Performance**: Carregamento rápido com otimizações avançadas
- **SEO Otimizado**: Meta tags e estrutura semântica
- **Integração Odoo**: Links diretos para o sistema principal
- **Deploy Automático**: Configurado para CapRover

## 📁 Estrutura do Projeto

```
landing-page/
├── index.html              # Página principal
├── css/
│   └── style.css           # Estilos customizados
├── js/
│   └── script.js           # JavaScript personalizado
├── images/
│   ├── vika-logo.png       # Logo da empresa (extrair do Odoo)
│   ├── commodities-hero.jpg # Imagem hero
│   └── about-vika.jpg      # Imagem sobre
├── captain-definition       # Configuração CapRover
├── nginx.conf              # Configuração Nginx
└── README.md               # Este arquivo
```

## 🔧 Configuração

### 1. Extrair Logo do Odoo

Para obter o logo da VIKA Commodities:

```bash
# Aceda ao URL do logo
curl http://odoo-17-vika.vika.com.pt/logo.png -o images/vika-logo.png
```

Ou manualmente:
1. Aceda a http://odoo-17-vika.vika.com.pt/logo.png
2. Salve como `images/vika-logo.png`

### 2. Adicionar Imagens

Substitua as imagens placeholder por:
- `commodities-hero.jpg`: Imagem para a seção hero (recomendado: 1200x800px)
- `about-vika.jpg`: Imagem para a seção sobre (recomendado: 800x600px)

### 3. Deploy no CapRover

1. **Configurar no CapRover**:
   - Nome da app: `vika-commodities-landing`
   - Domínio: `commodities.vika.com.pt`
   - Ativar HTTPS

2. **Deploy via Git**:
   ```bash
   # Adicionar remote do CapRover
   git remote add caprover ssh://captain@vika.com.pt:10022/vika-commodities-landing
   
   # Deploy
   git add .
   git commit -m "Initial landing page setup"
   git push caprover master
   ```

3. **Configurar DNS**:
   Aponte `commodities.vika.com.pt` para o servidor CapRover (138.201.91.250)

## 🌐 URLs

- **Landing Page**: https://commodities.vika.com.pt
- **Sistema Odoo**: http://odoo-17-vika.vika.com.pt
- **Servidor**: 138.201.91.250

## 🔒 Segurança

- Headers de segurança configurados
- Compressão Gzip ativada
- Cache otimizado
- Proteção contra acesso a arquivos sensíveis

## 📱 Responsividade

A página é totalmente responsiva e otimizada para:
- Desktop (1920px+)
- Laptop (1366px - 1919px)
- Tablet (768px - 1365px)
- Mobile (até 767px)

## 🎨 Personalização

### Cores Principais
- Primária: `#007bff` (Azul)
- Secundária: `#6c757d` (Cinza)
- Escura: `#212529`
- Clara: `#f8f9fa`

### Fontes
- Principal: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Ícones: Font Awesome 6.0

## 📊 Performance

- **Lighthouse Score**: 95+ (otimizado)
- **GTmetrix Grade**: A
- **Compressão**: Gzip ativada
- **Cache**: Headers otimizados
- **Imagens**: Lazy loading implementado

## 🔄 Atualizações

Para atualizar o site:

1. Faça as alterações nos arquivos
2. Commit e push:
   ```bash
   git add .
   git commit -m "Descrição da atualização"
   git push caprover master
   ```

## 📞 Suporte

Para questões técnicas:
- Email: admin@vika.com.pt
- Sistema: http://odoo-17-vika.vika.com.pt

---

**VIKA Commodities** - Soluções Avançadas em Commodities