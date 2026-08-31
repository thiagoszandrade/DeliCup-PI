# Como o grupo vai trabalhar nesse repositório

Cada pessoa é responsável por **uma seção** do `index.html`. Pra evitar
bagunça (todo mundo mexendo no mesmo arquivo ao mesmo tempo), cada um vai
trabalhar na sua própria **branch** e só depois juntar tudo na `main`.

## Passo a passo (pra quem nunca fez isso)

1. **Peça pro líder te adicionar como colaborador** do repositório
   (Settings > Collaborators, lá no GitHub).
2. **Clone o repositório** (só precisa fazer isso uma vez):
   - Pelo GitHub Desktop: `File > Clone Repository`, escolha o `DeliCup-PI`.
3. **Crie sua branch**, com o nome da sua seção:
   - Pelo GitHub Desktop: `Branch > New Branch`. Sugestão de nome:
     `secao-banner`, `secao-produtos`, `secao-contato`, etc.
4. **Edite só a sua parte**:
   - No `index.html`: preencha só dentro da sua `<section id="...">`.
   - No `css/style.css`: escreva só dentro do bloco comentado com o nome
     da sua seção.
   - No `js/script.js`: mesma coisa, só no bloco da sua seção (se precisar
     de JavaScript).
5. **Salve, comite e suba**:
   - No GitHub Desktop: escreva uma mensagem de commit, clique em
     "Commit to [sua-branch]", depois em "Publish branch" / "Push".
6. **Abra um Pull Request** da sua branch pra `main`, na aba "Pull requests" do GitHub, "New pull request".
7. O líder revisa e clica em **Merge**.

## Regras pra evitar conflito

- **Nunca edite a `<section>` de outra pessoa.** Se precisar de algo lá,
  fala com quem é responsável.
- No CSS, **prefixe suas classes** com o nome da sua seção — por exemplo,
  se você faz a seção de Produtos, use `.produtos-card`, `.produtos-titulo`,
  em vez de nomes genéricos tipo `.card` ou `.titulo` (que outra pessoa
  também pode usar sem querer).
- Sempre **puxe as atualizações da `main`** antes de começar a trabalhar
  de novo (`Fetch origin` / `Pull` no GitHub Desktop), pra pegar o que os
  outros já mandaram.

## Se der conflito

Se duas pessoas mexeram bem perto uma da outra sem querer, o Git avisa
que tem um "conflito de merge". Não tem problema — geralmente é só abrir
o arquivo, ver os dois trechos marcados (tem uns `<<<<<<<`, `=======`,
`>>>>>>>` no meio do código) e decidir junto com a pessoa qual parte fica.
Como cada seção é bem separada, isso deve ser raro.

## Testando localmente

É só abrir o `index.html` direto no navegador (duplo clique) — não precisa
de servidor nem instalar nada.