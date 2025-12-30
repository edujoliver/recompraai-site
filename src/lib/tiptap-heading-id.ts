// TipTap Extension para adicionar IDs automaticamente aos headings
import Heading from '@tiptap/extension-heading';
import { generateSlug } from '@/lib/slug';

export const HeadingWithId = Heading.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      id: {
        default: null,
        parseHTML: element => element.getAttribute('id'),
        renderHTML: attributes => {
          if (!attributes.id) {
            return {};
          }
          return { id: attributes.id };
        },
      },
    };
  },

  addKeyboardShortcuts() {
    return {
      Enter: () => {
        // Quando pressionar Enter, adiciona ID ao heading atual
        const { state, view } = this.editor;
        const { $from } = state.selection;
        
        if ($from.parent.type.name === 'heading') {
          const text = $from.parent.textContent;
          const id = generateSlug(text);
          
          if (id && $from.parent.attrs.id !== id) {
            const pos = $from.before();
            view.dispatch(
              state.tr.setNodeMarkup(pos, undefined, {
                ...$from.parent.attrs,
                id,
              })
            );
          }
        }
        
        return false;
      },
    };
  },

  onUpdate() {
    // Adiciona IDs a todos os headings quando o editor atualiza
    const { state, view } = this.editor;
    const { tr } = state;
    let modified = false;

    state.doc.descendants((node, pos) => {
      if (node.type.name === 'heading') {
        const text = node.textContent;
        const id = generateSlug(text);
        
        if (id && node.attrs.id !== id) {
          tr.setNodeMarkup(pos, undefined, {
            ...node.attrs,
            id,
          });
          modified = true;
        }
      }
    });

    if (modified) {
      view.dispatch(tr);
    }
  },
});
