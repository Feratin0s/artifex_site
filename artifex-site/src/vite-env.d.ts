/// <reference types="vite/client" />

// Declaração de tipos para importação de assets do Figma
declare module 'figma:asset/*' {
  const content: string;
  export default content;
}

// Declaração de tipos para importação de imagens
declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}
