import { existsSync } from "fs";
import Path from "path";
import { PackageJson } from "type-fest";
import { Package } from "./Package";

export class YarnPackage extends Package {
  public static async detect(data: PackageJson, path: string, filename: string) {
    if (existsSync(Path.join(path, "yarn.lock"))) {
      return true;
    }
    return false;
  }

  protected execPackageManager(cmd: string): Promise<number> {
    return this.execCmd(`yarn ${cmd}`);
  }
}
