This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# To-Do List

## Descrição
Este projeto é uma aplicação de lista de tarefas (To-Do List) desenvolvida com **Next.js**, **TypeScript** e **SCSS**. A aplicação permite que os usuários adicionem, visualizem e removam tarefas, além de armazená-las localmente no navegador usando **LocalStorage**.

## Funcionalidades
- **Adicionar Tarefas**: Permite ao usuário adicionar novas tarefas à lista.
- **Remover Tarefas**: Usuários podem remover tarefas já concluídas ou que não desejam mais.
- **Armazenamento Local**: As tarefas são armazenadas no **LocalStorage**, garantindo que as informações sejam persistentes mesmo após o fechamento do navegador.
- **Gerenciamento de Estado**: Utiliza a **Context API** do React para gerenciar o estado das tarefas de forma global.

## Tecnologias Utilizadas
- **Next.js**: Framework para React que permite renderização do lado do servidor e geração de sites estáticos.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **SCSS**: Pré-processador CSS que facilita a escrita de estilos de forma modular e organizada.
- **Context API**: Método do React para gerenciar o estado global da aplicação.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
