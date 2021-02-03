// store/menu.js

// state
export const state = () => ({
  bottomBar: [
    {link:'/', icon:'fa-home', text:'Home'},
    {link:'/article', icon:'fa-file-alt', text:'Article'},
    {link:'/about', icon:'fa-shopping-cart', text:'Cart'}
  ],
  kategori: [
    {link:'/#', icon:'fa-carrot', text:'All'},
    {link:'/#', icon:'fa-carrot', text:'Sayur'},
    {link:'/#', icon:'fa-carrot', text:'Buah'},
    {link:'/#', icon:'fa-carrot', text:'Live Stock'},
    {link:'/#', icon:'fa-carrot', text:'Kategori 1'},
    {link:'/#', icon:'fa-carrot', text:'Kategori 2'},
    {link:'/#', icon:'fa-carrot', text:'Kategori 3'},
    {link:'/#', icon:'fa-carrot', text:'Lainnya'},
  ],
  topBar:[],
  navbar:[]
})