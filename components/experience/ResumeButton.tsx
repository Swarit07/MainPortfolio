import { Download } from "lucide-react";

export function ResumeButton() {
  return (
    <a
      href="/resume.pdf"
      download
      className="inline-flex h-12 items-center gap-2 rounded-sm border border-accent px-6 font-mono text-sm text-accent transition-colors duration-150 hover:bg-accent hover:text-bg-primary focus-visible:outline-offset-4"
    >
      <Download size={16} aria-hidden="true" />
      Download resume
    </a>
  );
}
