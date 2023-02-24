import centerDef from "./center";
import packageDef from "./package";
import accountDef from "./account";
import PTDef from "./PT";
import traineeDef from "./trainee";
import traineePackageDef from "./traineePackage";
import sessionDef from "./session";

const definitions = {
    ...centerDef,
    ...packageDef,
    ...accountDef,
    ...PTDef,
    ...traineeDef,
    ...traineePackageDef,
    ...sessionDef
};
export default definitions;