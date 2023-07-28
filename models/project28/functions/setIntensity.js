module.exports = (data) => {
  let intensity = 0;
  
  if (data.pushup > 15 && data.pushup <= 50) {
    intensity = 1;
    return intensity;
  }
  if (data.pushup > 50) {
    intensity = 2;
    return intensity;
  }
  return intensity;
  
}