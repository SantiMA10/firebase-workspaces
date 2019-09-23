import * as functions from "firebase-functions";
import { sayMyName as sayMyNameFn } from "@santima10/say-my-name";

export const sayMyName = functions.https.onRequest((_, response) => {
  return response.send(sayMyNameFn());
});
