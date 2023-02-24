import centerDef from "./center";
import packageDef from "./package";
import accountDef from "./account";
import PTDef from "./PT";
import traineeDef from "./trainee";
import traineePackageDef from "./traineePackage";

const definitions = {
    ...centerDef,
    ...packageDef,
    ...accountDef,
    ...PTDef,
    ...traineeDef,
    ...traineePackageDef
};
export default definitions;