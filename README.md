# Dois em Um

Código-fonte da página de vendas do devocional **Dois em Um**, preparado para GitHub e Vercel.

## Publicar pela Vercel

1. Crie um repositório vazio no GitHub.
2. Envie todos os arquivos desta pasta para ele.
3. Na Vercel, clique em **Add New → Project** e importe o repositório.
4. Mantenha o framework detectado como **Next.js** e clique em **Deploy**.

Não é necessário configurar variáveis de ambiente para esta página.

As fontes **Hedvig Letters Serif** e **Nunito Sans** já estão incluídas no
projeto e são servidas localmente pela própria Vercel.

## Desenvolvimento local

Requer Node.js 22.13 ou superior.

```bash
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```
