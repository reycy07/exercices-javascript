/*
 * Crea un generador de números pseudoaleatorios entre 0 y 100.
 * - No puedes usar ninguna función "random" (o semejante) del lenguaje de programación seleccionado.
 *
 * Es más complicado de lo que parece...
 */
;

class LinearRadGen{
    constructor(seed) {
      this.a = 1103515245;
      this.c = 12345;
      this.m = Math.pow(2,32);
      this.seed = seed;
    }
  
    next() {
      this.seed = (this.a * this.seed + this.c) % this.m;
      return this.seed / this.m;
    }
  }
  
  const seed = Date.now();
  const rng = new LinearRadGen(seed);
  
  console.log(rng.next());
  console.log(rng.next());

// const random = () => parseInt(new Date().getMilliseconds() * (performance.now() + performance.timeOrigin) % 101);

// console.log(random());