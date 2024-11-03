tailwind.config = {
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(8deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      backgroundImage: {
        eunice: "url('./assets/eunice.png')",
        paint: "url('./assets/painting.svg')",
        project: "url('./assets/project.svg')",
        travel: "url('./assets/travel.svg')",
        memo: "url('./assets/memo.svg')",
        avatar: "url('./assets/eunice_avatar.png')",
      },
      fontFamily: {
        'pixel': ['pixel', 'sans-serif'],
      }
    }
  }
}