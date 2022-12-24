type ErrorRes = { mode: 'error'; data: null; error: string };

type SuccessRes<T> = { mode: 'success'; data: T; error: null };

/** Operational response scaffolding type */
export type OpRes<T> = ErrorRes | SuccessRes<T>;

export type FormModes = 'edit' | 'create';

export type BaseResponseModel = {
  id: string;
  created_at?: string;
  updated_at?: string;
};
