import { defineCollections } from "vuepress-theme-plume";
import circuit from "./circuit.ts";
import integral from "./integral.ts";
import physics from "./physics.ts";
import appliedMath from "./applied-math.ts";
import algebra from "./algebra.ts";
import CS from "./CS.ts";
import complex from "./complex.ts";
import RoboMaster from "./RoboMaster.ts";
import cybernetics from "./cybernetics.ts";
import optics from "./optics.ts";
import electrodynamics from "./electrodynamics.ts";
import appliedMechanics from "./applied-mechanics.ts";

export const notes = defineCollections([
		circuit,
		integral,
		algebra,
		appliedMath,
		physics,
		CS,
		complex,
		RoboMaster,
		cybernetics,
		optics,
		electrodynamics,
		appliedMechanics,


]);