import { twofish } from "twofish";

export default function Twofish(key, message) {
  var IV = [
      0xb4, 0x6a, 0x02, 0x60, 0xb0, 0xbc, 0x49, 0x22, 0xb5, 0xeb, 0x07, 0x85,
      0xa4, 0xb7, 0xcc, 0x9e,
    ],
    twF = twofish(IV);

  return twF.decryptCBC(key, message);
}
