import { create } from "zustand";

export const useUsuariosStore = create((set, get) => ({
  insertarUsuarioAdmin: async (p) => {
    await supabase.auth.signUp({
      email: p.correo,
      password: p.pass,
    });
  },
}));
