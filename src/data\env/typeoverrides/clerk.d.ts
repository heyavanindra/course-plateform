import { Role } from "../../data/env/roles";
export {};
declare global {
  interface CustomJwtSessionclaims {
    dbId?: string;
    role?: Role;
  }
  
  interface UserPublicMetadata {
    dbId?: string;
    role?: Role;
  }
}
