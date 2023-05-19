import Realm from "realm";
import { cadSchema } from "./schemas/cadSchema";

export const getRealm = async () => await Realm.open({ 
    path: "cad-dados",
    schema: [ cadSchema ],
});