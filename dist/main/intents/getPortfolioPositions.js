"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
exports.default = () => {
    fs_1.default.readFile("./portfolio.json", "utf-8", (error, data) => {
        if (error) {
            console.log("Tried getting portfolio positions and encountered an error:", error);
        }
        const positions = JSON.parse(data);
        let ledger = [];
        positions.forEach((position) => __awaiter(void 0, void 0, void 0, function* () {
            // hit finance API and get the value of this position at the timestamp
            // then get current value
            /**
             * const requestPosition = await fetch(api, {})
             * const { value: valueAtPositionOpen } = JSON.parse(positionOpenRequest)
             * const requestPositionNow = await fetch(api, {})
             * TODO: save portfolio position values to positions.json to reduce next fetch
             * TODO:
             * return [][]
             */
        }));
    });
    return [];
};
//# sourceMappingURL=getPortfolioPositions.js.map