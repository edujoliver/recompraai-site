# 🧪 Como Testar as Âncoras Automáticas

## Teste Rápido

1. **Abra o editor de posts:**
   ```
   http://localhost:3000/admin/dashboard/posts/new
   ```

2. **Crie títulos H2:**
   - Clique no botão **H2**
   - Digite: `"O desafio dos restaurantes hoje"`
   - Pressione **Enter** para sair do título
   - Clique no botão **</>** (modo HTML)
   - Verifique se aparece:
   ```html
   <h2 id="o-desafio-dos-restaurantes-hoje" class="scroll-mt-20">O desafio dos restaurantes hoje</h2>
   ```

3. **Teste com vários títulos:**
   - Adicione mais 3-4 títulos H2 diferentes
   - Mude para modo HTML
   - Todos devem ter `id="..."` automaticamente

## ✅ O que Mudou

A extensão agora:
- ✅ Adiciona o atributo `id` ao Heading
- ✅ Atualiza IDs automaticamente ao digitar
- ✅ Funciona ao pressionar Enter
- ✅ Atualiza em tempo real no `onUpdate`

## 🎯 Como Funciona

**Quando você digita um título:**
```
Digite: "Como Funciona o Sistema"
        ↓
ID gerado: "como-funciona-o-sistema"
        ↓
HTML: <h2 id="como-funciona-o-sistema">Como Funciona o Sistema</h2>
```

## 🔥 Dica Pro

Se o ID não aparecer imediatamente:
1. Digite o título
2. Pressione **Enter** (sai do heading)
3. Clique em qualquer lugar do texto
4. O ID será gerado automaticamente

Ou simplesmente salve o post - os IDs serão aplicados ao salvar!
