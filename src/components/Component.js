import logo from "../assets/logo.svg";


function Component() {
  let m = document.createElement('main');
  let p = document.createElement('p');
  let img = document.createElement('img');
  m.append(p);
  p.append(img);
  img.src = logo;  // url
  img.alt = 'sample logo';
  return m;
}

export default Component;


