// Hook para acessar cores do tema
export const useThemeColors = () => {
  const getComputedStyleValue = (property: string): string => {
    if (typeof window !== 'undefined') {
      return window.getComputedStyle(document.documentElement).getPropertyValue(property).trim();
    }
    return '';
  };

  return {
    text: () => getComputedStyleValue('--color-text'),
    primary: () => getComputedStyleValue('--color-primary'),
    accent: () => getComputedStyleValue('--color-accent'),
    background: () => getComputedStyleValue('--color-background'),
    // Adicione mais cores conforme necessário
  };
}; 