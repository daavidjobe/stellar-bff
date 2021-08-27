export interface CreateParams {
  key?: string // Name of the key
  namespace?: string // Namespace to store the key
  value?: number // Initial value
  enable_reset?: number // Allows the key to be resetted with /set
  update_lowerbound?: number // Restrict update to not subtract more than this number. This number must be negative or zero.
  update_upperbound?: number // Restrict update to not add more than this number. This number must be positive or zero.
}

export interface HitParams {
  key: string
  namespace?: string
}

export type InfoParams = HitParams
