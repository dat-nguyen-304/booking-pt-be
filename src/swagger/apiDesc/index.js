import centers from "./centers";
import packages from "./packages";
import accounts from "./accounts";
import auth from "./auth";
import PTs from "./PTs";
import trainees from "./trainees";
import traineePackages from "./traineePackages";
import sessions from "./sessions";
import images from "./images";
import payments from "./payments";
import slots from "./slots";
import indexCategories from "./indexCategories";
import indexes from "./indexes";

const paths = Object.assign({}, centers, packages, accounts, auth, PTs, trainees, traineePackages, sessions, images, payments,
    slots, indexCategories, indexes);

export default paths;
