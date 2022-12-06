function solveFirstOrder(f, x0, y0, x1) {
    let dx = 0.01;
    let x = x0;
    let y = y0;
    while (x < x1) {
      y += dx * f(x, y);
      x += dx;
    }
    return y;
  }