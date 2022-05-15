export interface LogIn {
  email: FormDataEntryValue | null;
  username: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}

export interface Token {
  refresh: "";
  access: "";
}
