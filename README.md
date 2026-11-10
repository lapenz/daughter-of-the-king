# Filha do Rei · Daughter of the King

Página da mentoria **Filha do Rei**, de Monique Della, em português (`/pt`) e inglês (`/en`).

## Rodar no computador

```bash
npm install
npm run dev
```

Depois abra http://localhost:3000.

## Onde mudar os textos

Todos os textos ficam em dois arquivos, um por língua:

- `src/content/pt.ts`: português
- `src/content/en.ts`: inglês

Mude o texto entre aspas e salve. A página atualiza sozinha.

## Publicar um depoimento

Os depoimentos ficam na seção "Primeiras mentoradas". Enquanto não houver nenhum, a página mostra uma frase dizendo que os relatos aparecerão em breve.

Para publicar, abra `src/content/pt.ts`, procure `testimonials` e acrescente o depoimento dentro de `items: [ ]`:

```ts
items: [
  {
    quote: "O texto do depoimento, do jeito que ela escreveu.",
    name: "Ana",
    detail: "Mentorada da 1ª turma",
  },
],
```

- `quote`: o depoimento
- `name`: o nome (ou só o primeiro nome, se ela preferir)
- `detail`: opcional, por exemplo "Mentorada da 1ª turma"

Faça o mesmo em `src/content/en.ts`, com o depoimento traduzido, para ele aparecer também na versão em inglês.

Publique só depoimentos reais, com a autorização de quem escreveu.

## Link de pagamento

Os botões "Quero escrever uma nova história" usam o endereço `CHECKOUT_URL`, em `src/content/index.ts`. Coloque ali o link do Kiwify, Hotmart ou outro.

## Imagens

As imagens ficam em `public/images`. Para trocar uma, substitua o arquivo por outro com o mesmo nome. Os créditos estão em `public/images/CREDITS.md`.
