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
import measureDef from "./measure";
import paymentDef from "./payment";
import slotDef from "./slot";
import notifyDef from "./notify";

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
    ...measureDef,
    ...paymentDef,
    ...slotDef,
    ...notifyDef
};
export default definitions;