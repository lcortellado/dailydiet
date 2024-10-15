export const getColor = (theme: any, type?: string) => {
    switch (type) {
      case 'PRIMARY':
        return theme.COLORS.GRAY_700;
      case 'SECONDARY':
        return theme.COLORS.RED_MID;
      case 'SUCCESS':
        case 'CANCEL':
        return theme.COLORS.GRAY_200;
      default:
        return theme.COLORS.WHITE;
    }
  };

  export const getBackgroundColorSelected = (theme: any, type?: string) => {
    switch (type) {
      case 'PRIMARY':
        return theme.COLORS.GREEN_MID;
      case 'SECONDARY':
        return theme.COLORS.RED_MID;
      case 'SUCCESS':
        return theme.COLORS.GREEN_LIGHT;
      case 'CANCEL':
        return theme.COLORS.RED_LIGHT;
      default:
        return theme.COLORS.WHITE;
    }
  };

  export const  formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date);
  };

  export const formatTime = (time: Date): string => {
    return `${time.getHours().toString().padStart(2, "0")}:${time
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  };