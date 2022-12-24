type ErrorRes = { mode: 'error'; data: null; error: string };

type SuccessRes<T> = { mode: 'success'; data: T; error: null };

export type OpRes<T> = ErrorRes | SuccessRes<T>;

export type FormModes = 'edit' | 'create';
