export default function health(obj) {
  const markers = ['healthy', 'wounded', 'critical'];
  const heal = obj && obj.health;
  if (heal) {
    return heal > 50 ? markers[0] : heal <= 50 && heal >= 15 ? markers[1] : markers[2];
  }
  return false;
}
