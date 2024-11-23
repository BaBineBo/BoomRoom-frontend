/** @jsxImportSource @emotion/react */
import { css, Global, useTheme } from "@emotion/react";

const GlobalScrollbarStyles = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        /* Scrollbar track */
        ::-webkit-scrollbar {
          width: 12px; /* Width of the scrollbar */
        }

        /* Scrollbar track background */
        ::-webkit-scrollbar-track {
          background: ${theme.palette.background}; /* Theme-based color */
        }

        /* Scrollbar handle */
        ::-webkit-scrollbar-thumb {
          background-color: ${theme.palette.primary}; /* Theme-based color */
          border-radius: 6px; /* Rounded corners */
          padding: 10px;
          border: 2px solid ${theme.palette.background}; /* Space around the handle */
        }

        /* Scrollbar handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background-color: ${theme.palette
            .primary}; /* Darker color for hover */
        }

        /* Firefox (Fallback, limited support) */
        scrollbar-color: ${theme.palette.primary} ${theme.palette.background};
        scrollbar-width: thin;
      `}
    />
  );
};

export default GlobalScrollbarStyles;
