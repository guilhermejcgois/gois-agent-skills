import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";
import Ajv from "ajv";
import addFormats from "ajv-formats";

const repoRoot = process.cwd();
const skillsDir = path.join(repoRoot, "skills");
const schemaPath = path.join(repoRoot, "scripts", "schema.skill.json");
const schema = JSON.parse(fs.readFileSync(schemaPath, "utf-8"));

const ajv = new Ajv({ allErrors: true, allowUnionTypes: true });
addFormats(ajv);
const validate = ajv.compile(schema);

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...walk(p));
    else files.push(p);
  }
  return files;
}

const yamlFiles = walk(skillsDir).filter((f) => f.endsWith("skill.yaml"));

let ok = true;
for (const file of yamlFiles) {
  const raw = fs.readFileSync(file, "utf-8");
  const data = YAML.parse(raw);

  const valid = validate(data);
  if (!valid) {
    ok = false;
    console.error(`\n❌ Invalid: ${path.relative(repoRoot, file)}`);
    console.error(validate.errors);
  }
}

if (!ok) process.exit(1);
console.log(`✅ Skills validated: ${yamlFiles.length}`);
