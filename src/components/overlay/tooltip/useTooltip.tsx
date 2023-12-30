import { useState, useEffect } from 'react';

export function useTooltip() {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const showTooltip = () => {
    setTooltipVisible(true);
  };

  const hideTooltip = () => {
    setTooltipVisible(false);
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined;
    if (isTooltipVisible) {
      timeoutId = setTimeout(() => {
        setTooltipVisible(false);
      }, 1000); // delay in milliseconds
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isTooltipVisible]);

  return { isTooltipVisible, showTooltip, hideTooltip };
}
