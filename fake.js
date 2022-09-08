function chicken(){
  return chicken();
}

function egg(){
  return chicken();
}

console.log(chicken() + "came first");