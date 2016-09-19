const visible = {
  opacity: 1,
};

const invisible = {
  opacity: 0,
};

const flash = {
  from: visible,
  '25%': invisible,
  '50%': visible,
  '75%': invisible,
  to: visible,
}

export default flash;
