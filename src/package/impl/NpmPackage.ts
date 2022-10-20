import { existsSync } from "fs";
import Path from "path";
import { PackageJson } from "type-fest";
import { Package } from "./Package";
export class NpmPackage extends Package {
  public static async detect(data: PackageJson, path: string, filename: string) {
    if (existsSync(Path.join(path, "package-lock.json"))) {
      return true;
    }
    return false;
  }

  protected execPackageManager(cmd: string): Promise<number> {
    return this.execCmd(`npm ${cmd}`);
  }
}
