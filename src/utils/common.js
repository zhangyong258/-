// 判断是否为空
function isEmpty(val) {
  const empty_arr = ['', undefined, null]
  return empty_arr.indexOf(val) > -1 || val.toString().trim() === ''
}
// 过滤空对象
export function filterFormParams(obj) {
  let _newObj = {}
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (isEmpty(obj[key])) continue
      _newObj[key] =
        typeof obj[key] === 'object'
          ? obj[key] instanceof Array
          ? ArrayFilterParams(obj[key])
          : filterFormParams(obj[key])
          : obj[key]
    }
  }
  return _newObj
}
// 过滤空数组
export function ArrayFilterParams(arr) {
  let err = []
  arr.forEach((item) => {
    if (isEmpty(item)) return
    err.push(
      typeof item === 'object'
        ? item instanceof Array
        ? ArrayFilterParams(item)
        : filterFormParams(item)
        : item
    )
  })
  return err
}