import centerDef from "./center";
import packageDef from "./package";
import accountDef from "./account";
import PTDef from "./PT";
import traineeDef from "./trainee";
import traineePackageDef from "./traineePackage";
import sessionDef from "./session";
import imageDef from "./image";
import indexCategoryDef from "./indexCategory";
import indexDef from "./indexModel";
import measure from "./measure";
import payment from "./payment";
import slot from "./slot";

const definitions = {
    ...centerDef,
    ...packageDef,
    ...accountDef,
    ...PTDef,
    ...traineeDef,
    ...traineePackageDef,
    ...sessionDef,
    ...imageDef,
    ...indexCategoryDef,
    ...indexDef,
    ...measure,
    ...payment,
    ...slot
};
export default definitions;