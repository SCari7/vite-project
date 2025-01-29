const fruits: string[] = ['apple','orange']

interface IHero {
id:number
name:string
age:number
isDark:boolean
weapons:string[]
image:string
}

export const fellowship: IHero[] = [
  {
    id: 1,
    name: "Gendalf",
    age: 2000,
    isDark: false,
    weapons: ["magic sword", "magic staff"],
    image:
      "https://s2.glbimg.com/AKJMO2jZnhi4JTwmlbwwQDOp7bI=/e.glbimg.com/og/ed/f/original/2017/01/09/gandalf_in_the_hobbit_2-2880x1800.jpg",
  },
  {
    id: 2,
    name: "Gimli",
    age: 50,
    isDark: false,
    weapons: ["axe"],
    image:
      "https://figround.com/assets/img/2019-12-28-the-lord-of-the-rings-gimli/002.jpg",
  },
  {
    id: 3,
    name: "Frodo",
    age: 35,
    isDark: false,
    weapons: ["ring"],
    image:
      "https://www.wallpaperflare.com/static/504/19/713/the-lord-of-the-rings-the-fellowship-of-the-ring-frodo-baggins-elijah-wood-lord-wallpaper-preview.jpg",
  },

  {
    id: 4,
    name: "Saruman",
    age: 1800,
    isDark: true,
    weapons: ["palantir"],
    image: "https://cinema-quotes.com/wp-content/uploads/2024/05/Saruman.jpg",
  },
  {
    id: 5,
    name: "Arwen",
    age: 1000,
    isDark: false,
    weapons: [],
    image: "https://images7.alphacoders.com/907/907970.jpg",
  },
  {
    id: 6,
    name: "Gorlum",
    age: 200,
    isDark: true,
    weapons: ["teeth", "hands", "rocks"],
    image:
      "https://gamesartist.co.uk/wp-content/uploads/2023/03/srdjan-orelj-gollum-00.jpg",
  },
];
