import { defaultData, MedicalHistory } from "./interfaces";
import { actualData } from "./data";

function balanceObject(template, actual): MedicalHistory {
  const out = {};
  for (let key in template) {
    //code block to check if the key is a numeric index.
    //If it is, it should save the object as an array

    if (typeof template[key] === "object") {
      if (JSON.stringify(template[key]) === "[]") {
        out[key] = [];
      } else {
        out[key] = actual[key]
          ? balanceObject(template[key], actual[key])
          : template[key];
      }
    } else {
      out[key] = actual[key] || template[key];
    }
  }

  return out;
}
const a = balanceObject(defaultData, actualData);

const output = JSON.stringify(a);
// console.log(a.consultation_history);
document.getElementById("app").innerHTML = output;
