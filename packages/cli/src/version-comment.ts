export function createVersionComment({
  tag,
  commit,
}: {
  tag?: string;
  commit?: string;
} = {}) {
  if (!tag || !commit) {
    return "// Generated from Custom Source Directory\n";
  }

  return `// Generated from digital-go-design-system-with-panda@${tag} (commit: ${commit})\n`;
}

export function parseVersionComment(
  content: string,
): { tag: string; commit: string } | null {
  const match = content.match(
    /\/\/ Generated from digital-go-design-system-with-panda@([^\s]+) \(commit: ([a-f0-9]+)\)/,
  );
  if (match) {
    return { tag: match[1], commit: match[2] } as {
      tag: string;
      commit: string;
    };
  }
  return null;
}
