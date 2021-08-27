export type Descriptor<T> = {
  [P in keyof T]: (v: any) => T[P]
}

export const pick = <T>(v: any, d: Descriptor<T>): T | Error => {
  const ret: any = {}
  for (let key in d) {
    try {
      const val = d[key](v[key])
      if (typeof val !== 'undefined') {
        ret[key] = val
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      return new Error(`could not decode ${key}: ${msg}`)
    }
  }
  return ret
}

export const serialize = (params: { [index: string]: any }): string | null => {
  return Object.keys(params)
    .map((key) => {
      if (params[key] === null || params[key] === undefined) {
        return null
      }
      if (params[key] instanceof Array) {
        return params[key].map((v: string, i: number) => `${key}[${i}]=${encodeURIComponent(v)}`).join('&')
      }
      return `${key}=${encodeURIComponent(params[key])}`
    })
    .filter((key) => key !== null)
    .join('&')
}
