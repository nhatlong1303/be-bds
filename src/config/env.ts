import * as dotenv from "dotenv";
dotenv.config();

const env: { [key: string]: any } = {};

define("NODE_ENV", process.env.NODE_ENV);
define("MONGO_URL", process.env.MONGO_URL);
define("PORT", process.env.PORT);
define("PRIVATE_KEY", process.env.PRIVATE_KEY);
define("JWT_SECRET_KEY", process.env.JWT_SECRET_KEY);

function define(key: string, value: any) {
  Object.defineProperty(env, key, {
    value,
    enumerable: true,
  });
}

export default env;
