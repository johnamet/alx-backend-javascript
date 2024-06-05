export default function hasValueFromArray(set, array) {
  return set.isSupersetOf(new Set(array));
}
