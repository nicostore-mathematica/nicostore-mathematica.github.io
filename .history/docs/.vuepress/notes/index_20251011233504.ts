import { defineCollections } from "vuepress-theme-plume";
import circuit from "./circuit.ts";
import integral from "./integral.ts";
import statistics from "./statistics.ts";
import physics from "./physics.ts";
import numerical from "./numerical.ts";
import algebra from "./algebra.ts";
import CS from "./CS.ts";
import complex from "./complex.ts";
import RoboMaster from "./RoboMaster.ts";
import cybernetics from "./cybernetics.ts";

export const notes = defineCollections([
		circuit,
		integral,
		algebra,
		statistics,
		physics,
		numerical,
		CS,
		complex,
		RoboMaster,
		cybernetics,

]);