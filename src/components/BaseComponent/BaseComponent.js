function BaseComponent( url ) {
  let base = document.createElement('base')
  base.href = url;
  return base;
}

export default BaseComponent;
