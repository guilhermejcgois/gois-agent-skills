import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";

const repoRoot = process.cwd();
const skillsDir = path.join(repoRoot, "skills");
const indexDir = path.join(repoRoot, "index");
fs.mkdirSync(indexDir, { recursive: true });

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

const skillFiles = walk(skillsDir).filter((f) => f.endsWith("skill.yaml"));
const skills = skillFiles.map((file) => {
  const raw = fs.readFileSync(file, "utf-8");
  const meta = YAML.parse(raw);
  const rel = path.relative(repoRoot, path.dirname(file)).replaceAll("\\", "/");
  return {
    ...meta,
    path: rel,
    files: {
      meta: `${rel}/skill.yaml`,
      doc: `${rel}/skill.md`,
    },
  };
});

skills.sort((a, b) => a.id.localeCompare(b.id));

fs.writeFileSync(
  path.join(indexDir, "skills.json"),
  JSON.stringify(skills, null, 2),
);

const byCategory = skills.reduce((acc, s) => {
  acc[s.category] ??= [];
  acc[s.category].push(s);
  return acc;
}, {});

let md = `# Skills Catalog\n\n`;
md += `Gerado automaticamente. Total: **${skills.length}**.\n\n`;

for (const cat of Object.keys(byCategory).sort()) {
  md += `## ${cat}\n\n`;
  for (const s of byCategory[cat]) {
    const tags = (s.tags ?? []).map((t) => `\`${t}\``).join(" ");
    md += `- **${s.name}** — \`${s.id}\` (v${s.version})  \n  ${s.objective}\n  ${tags}\n  📄 ${s.files.doc}\n\n`;
  }
}

fs.writeFileSync(path.join(indexDir, "SKILLS.md"), md);
console.log(`✅ Index generated: index/skills.json + index/SKILLS.md`);
