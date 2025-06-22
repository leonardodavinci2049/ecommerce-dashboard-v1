# 🛒 E-commerce Dashboard

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 15" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white" alt="Zod" />
</div>

<div align="center">
  <h3>Dashboard administrativo moderno para e-commerce com Next.js 15</h3>
  <p>Sistema completo de gerenciamento com foco em performance, conversão e experiência do usuário</p>
</div>

---

## 📋 Índice

- [📖 Sobre o Projeto](#-sobre-o-projeto)
- [✨ Funcionalidades](#-funcionalidades)
- [🚀 Tecnologias](#-tecnologias)
- [🏗️ Arquitetura](#️-arquitetura)
- [⚡ Performance](#-performance)
- [📱 Responsividade](#-responsividade)
- [🛠️ Instalação](#️-instalação)
- [💻 Como Usar](#-como-usar)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🔧 Scripts Disponíveis](#-scripts-disponíveis)
- [🤝 Contribuindo](#-contribuindo)
- [📄 Licença](#-licença)
- [🎯 Créditos](#-créditos)

## 📖 Sobre o Projeto

Este é um **dashboard administrativo para e-commerce** desenvolvido com **Next.js 15** e **TypeScript**, criado para fins didáticos e demonstração de boas práticas de desenvolvimento web moderno.

O projeto implementa um sistema completo de gerenciamento de produtos, pedidos, clientes e métricas, focando em:

- 🎯 **Conversão e Performance**
- 🔒 **Segurança e Compliance**
- 📱 **Mobile-First Design**
- ⚡ **Otimização de Core Web Vitals**
- 🧩 **Arquitetura Modular**

## ✨ Funcionalidades

### 📊 Dashboard Principal

- Overview de vendas e métricas em tempo real
- Gráficos interativos de performance
- KPIs principais (conversão, ticket médio, etc.)
- Alertas e notificações importantes

### 🛍️ Gestão de Produtos

- Catálogo completo com filtros avançados
- Criação e edição de produtos
- Gerenciamento de categorias e tags
- Upload de imagens otimizado
- Controle de estoque

### 📦 Gestão de Pedidos

- Lista de pedidos com status em tempo real
- Detalhamento completo de pedidos
- Rastreamento de entregas
- Histórico de transações
- Relatórios de vendas

### 👥 Gestão de Clientes

- Base de clientes completa
- Histórico de compras
- Segmentação de clientes
- Análise de comportamento

### 📈 Analytics e Relatórios

- Métricas de conversão
- Análise de funil de vendas
- Relatórios personalizáveis
- Exportação de dados

## 🚀 Tecnologias

### Core Technologies

- **[Next.js 15](https://nextjs.org/)** - Framework React com App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[React 18](https://reactjs.org/)** - Biblioteca UI com Server Components
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Framework CSS utilitário

### Estado e Validação

- **[Zod](https://zod.dev/)** - Validação de schemas TypeScript-first
- **[React Hook Form](https://react-hook-form.com/)** - Formulários performáticos
- **[nuqs](https://nuqs.47ng.com/)** - Gerenciamento de estado via URL

### Performance e Otimização

- **[React Cache](https://react.dev/reference/react/cache)** - Cache de server functions
- **[Suspense](https://react.dev/reference/react/Suspense)** - Loading states nativos
- **[Next/Image](https://nextjs.org/docs/api-reference/next/image)** - Otimização de imagens

### Desenvolvimento

- **[ESLint](https://eslint.org/)** - Linting de código
- **[Prettier](https://prettier.io/)** - Formatação de código
- **[Husky](https://typicode.github.io/husky/)** - Git hooks

## 🏗️ Arquitetura

### Design Patterns Implementados

```typescript
// Server Components por padrão
export default async function ProductsPage() {
  const products = await getProducts()
  return <ProductList products={products} />
}

// Client Components apenas quando necessário
'use client'
export const ProductFilter = () => {
  const [filters, setFilters] = useQueryState('filters')
  // ...
}
```

### Estrutura de Features

```
src/
├── features/
│   ├── products/     # Gestão de produtos
│   ├── orders/       # Gestão de pedidos
│   ├── customers/    # Gestão de clientes
│   ├── analytics/    # Métricas e relatórios
│   └── dashboard/    # Dashboard principal
├── components/       # Componentes reutilizáveis
├── lib/             # Utilitários e configurações
└── types/           # Definições TypeScript
```

## ⚡ Performance

### Otimizações Implementadas

- **🔄 ISR (Incremental Static Regeneration)** para páginas de produtos
- **⚡ Edge Runtime** para APIs de busca e filtros
- **🖼️ Lazy Loading** de imagens com placeholders
- **📊 Streaming** para listas longas
- **🔗 Prefetching** inteligente de rotas

### Core Web Vitals

- **LCP**: < 2.5s através de otimização de imagens
- **FID**: < 100ms com Server Components
- **CLS**: < 0.1 com placeholders adequados

## 📱 Responsividade

### Mobile-First Approach

- **Touch-friendly**: Alvos de toque mínimo de 44px
- **Gestos**: Swipe para navegação em listas
- **Bottom Sheets**: Para filtros e ações rápidas
- **PWA Ready**: Manifest e Service Worker configurados

### Breakpoints

- **Mobile**: 0px - 767px (padrão)
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## 🛠️ Instalação

### Pré-requisitos

- Node.js 18+
- npm, yarn ou pnpm

### Clone o repositório

```bash
git clone https://github.com/seu-usuario/ecommerce-dashboard-v1.git
cd ecommerce-dashboard-v1
```

### Instale as dependências

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### Configure as variáveis de ambiente

```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local` com suas configurações:

```env
# Database
DATABASE_URL="sua-url-do-banco"

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="seu-secret-aqui"

# APIs
STRIPE_SECRET_KEY="sua-chave-stripe"
```

## 💻 Como Usar

### Desenvolvimento

```bash
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

### Build para Produção

```bash
npm run build
npm start
```

### Análise de Bundle

```bash
npm run analyze
```

## 📁 Estrutura do Projeto

```
ecommerce-dashboard-v1/
├── 📁 src/
│   ├── 📁 app/                    # App Router (Next.js 15)
│   │   ├── 📁 (dashboard)/        # Grupo de rotas do dashboard
│   │   ├── 📁 api/                # API Routes
│   │   ├── layout.tsx             # Layout raiz
│   │   └── page.tsx               # Página inicial
│   ├── 📁 components/             # Componentes reutilizáveis
│   │   ├── 📁 ui/                 # Componentes base (Button, Input, etc.)
│   │   └── 📁 features/           # Componentes específicos
│   ├── 📁 features/               # Módulos de funcionalidade
│   │   ├── 📁 products/
│   │   ├── 📁 orders/
│   │   └── 📁 customers/
│   ├── 📁 lib/                    # Utilitários e configurações
│   ├── 📁 hooks/                  # Custom hooks
│   └── 📁 types/                  # Definições TypeScript
├── 📁 public/                     # Assets estáticos
├── 📄 tailwind.config.ts          # Configuração Tailwind
├── 📄 next.config.js              # Configuração Next.js
└── 📄 tsconfig.json               # Configuração TypeScript
```

## 🔧 Scripts Disponíveis

| Script       | Descrição                          |
| ------------ | ---------------------------------- |
| `dev`        | Inicia servidor de desenvolvimento |
| `build`      | Gera build de produção             |
| `start`      | Inicia servidor de produção        |
| `lint`       | Executa linting do código          |
| `lint:fix`   | Corrige problemas de linting       |
| `type-check` | Verifica tipos TypeScript          |
| `analyze`    | Analisa tamanho do bundle          |

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Siga os passos:

1. **Fork** o projeto
2. **Crie** uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. **Commit** suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. **Push** para a branch (`git push origin feature/nova-feature`)
5. **Abra** um Pull Request

### Padrões de Commit

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação
- `refactor:` Refatoração
- `test:` Testes

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

## 🎯 Créditos

Este projeto foi desenvolvido com base no conteúdo educacional do canal:

**🎥 [Assista ao tutorial completo no YouTube](https://youtu.be/2t8VKD0jEeA)**

Agradecimentos especiais ao canal pela qualidade do conteúdo e por compartilhar conhecimento sobre desenvolvimento web moderno.

---

<div align="center">
  <p>Desenvolvido com ❤️ para fins educacionais</p>
  <p>⭐ Se este projeto te ajudou, considere dar uma estrela!</p>
</div>
